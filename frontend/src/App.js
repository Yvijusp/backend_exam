import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #082032
}
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  color: #fdfdfd;

  h1 {
    text-align: center;
  }

  .container {
    max-width: 600px;
    background-color: #2c394b;

    margin: 20px auto;
    padding: 15px 10px;

    box-shadow: 0 0 5px -1px rgba(255, 255, 255, 0.8);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin: 0 0 15px 0;
      text-align: center;
    }

    a {
      font-size: 1.1em;
      color: #ff4c29;
      border: #ddd solid 1px;
      padding: 8px 15px;
      border-radius: 5px;
      display: block;
      width: fit-content;
    }

    p {
      margin: 5px 0;
    }

    ul {
      margin-top: 5px;
      list-style: none;
      column-count: 3;
      column-gap: 25px;
    }
  }
`;

function App() {
  const categories = [
    'animal',
    'career',
    'celebrity',
    'dev',
    'explicit',
    'fashion',
    'food',
    'history',
    'money',
    'movie',
    'music',
    'political',
    'religion',
    'science',
    'sport',
    'travel',
  ];

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const randomNumber = Math.floor(Math.random() * 20 + 1);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Random Chuck Norris jokes API</h1>

        <div className='container'>
          <h2>10 random Chuck Norris jokes route</h2>
          <a href='https://chucknorris-api.herokuapp.com/api/jokes'>
            https://chucknorris-api.herokuapp.com/api/jokes
          </a>
          <p>Gets 10 random jokes from api</p>
        </div>

        <div className='container'>
          <h2>Random Chuck Norris jokes by amount route</h2>
          <a
            href={`https://chucknorris-api.herokuapp.com/api/jokes/${randomNumber}`}
          >
            https://chucknorris-api.herokuapp.com/api/jokes/:amount
          </a>
          <p>Gets random amount of jokes by specified amount</p>
          <p>This example will always get an array between 1 to 20 jokes</p>
        </div>

        <div className='container'>
          <h2>10 random Chuck Norris jokes by category</h2>
          <a
            href={`https://chucknorris-api.herokuapp.com/api/jokes/${randomCategory}`}
          >
            https://chucknorris-api.herokuapp.com/api/jokes/:category
          </a>
          <p>Gets 10 random jokes from a specified category</p>
          <p>Clicking on link here will send you to a random category</p>
          <h4>Available categories:</h4>
          <ul>
            {categories.map((category) => (
              <li key={Math.random()}>{category}</li>
            ))}
          </ul>
        </div>

        <div className='container'>
          <h2>Random Chuck Norris jokes by category with specified amount</h2>
          <a
            href={`https://chucknorris-api.herokuapp.com/api/jokes/${randomCategory}/${randomNumber}`}
          >
            https://chucknorris-api.herokuapp.com/api/jokes/:category/:amount
          </a>
          <p>Gets jokes from specified category and specified amount</p>
          <p>
            Clicking on link will select a random category and a random amount
            between 1 and 20
          </p>
          <h4>Available categories</h4>
          <ul>
            {categories.map((category) => (
              <li key={Math.random()}>{category}</li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
