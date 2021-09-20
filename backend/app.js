import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

// middlwares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send({ message: 'Api is running' });
});

// Returning 10 jokes
app.get('/api/jokes', async (req, res) => {
  try {
    let jokes = [];

    for (let i = 0; i < 10; i++) {
      const result = await fetch(
        'https://api.chucknorris.io/jokes/random'
      ).then((response) => response.json());

      jokes.push(result.value);
    }

    res.send(jokes);
  } catch (error) {
    console.log(error);
  }
});

// Returning jokes by assigned amount value
app.get('/api/jokes/:amount', async (req, res, next) => {
  if (!Number(req.params.amount)) return next();
  try {
    let jokes = [];

    for (let i = 0; i < req.params.amount; i++) {
      const result = await fetch(
        'https://api.chucknorris.io/jokes/random'
      ).then((response) => response.json());

      jokes.push(result.value);
    }
    res.send(jokes);
  } catch (error) {
    console.log(error);
  }
});

// Returning 10 jokes by assigning category
app.get('/api/jokes/:category', async (req, res) => {
  try {
    let jokes = [];
    for (let i = 0; i < 10; i++) {
      const result = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${req.params.category}`
      ).then((response) => response.json());
      if (result.status === 404)
        return res.status(404).send({
          error: 'Not found',
          message: `No jokes for category ${req.params.category} found`,
        });
      jokes.push(result.value);
    }
    res.send(jokes);
  } catch (error) {
    console.log(error);
  }
});

// Returning jokes by category using a specified amount
app.get('/api/jokes/:category/:amount', async (req, res) => {
  try {
    let jokes = [];

    for (let i = 0; i < req.params.amount; i++) {
      const result = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${req.params.category}`
      ).then((response) => response.json());

      if (result.status === 404)
        return res.status(404).send({
          error: 'Not found',
          message: `No jokes for category ${req.params.category} found`,
        });

      jokes.push(result.value);
    }

    res.send(jokes);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => console.log('Api is running'));
