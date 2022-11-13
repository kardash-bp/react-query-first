import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import QueryUsers from './components/QueryUsers'
import styled from 'styled-components'
import Person from './components/Person'
import UsersInfinite from './components/UsersInfinite'
import Dependent from './components/Dependent'
import { AppGlobalStyle } from './AppGlobalStyle'
const Wrapper = styled.section`
  .m-1 {
    margin: 1rem;
  }
  .big-margin-center {
    margin: 3rem auto;
  }
  .sm-font {
    font-size: 0.9rem;
    color: var(--palette-green);
  }
  .container {
    width: 80%;
    background-color: var(--palette-dirt);
    padding: 1rem;
    color: var(--palette-brown);
    border-radius: 2px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  button {
    margin-top: 1rem;
    border: none;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    font-family: var(--fonts-body);
    cursor: pointer;
    background: var(--palette-brown);
    color: white;
    box-shadow: var(--shadows-floating);
    transition: all 0.2s ease-in;
    &:hover {
      background: var(--palette-green);
      color: var(--palette-brown);
      box-shadow: var(--shadows-floating-hover);
    }
  }
  nav {
    height: 2.8rem;
    display: flex;
    background: var(--palette-blue);
    padding: 0.3rem 1rem;
    box-shadow: var(--shadows-floating);
  }

  nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--palette-brown);
    border-radius: 0;
    margin-right: 16px;
    padding: 0 1rem;

    &:after {
      content: ''; /* This is necessary for the pseudo element to work. */

      width: 5px; /* Change this to whatever width you want to have before hover. */
      padding-top: 5px; /* This creates some space between the element and the border. */
      border-bottom: 2px solid var(--palette-brown); /* This creates the border. Replace black with whatever color you want. */
      transform: rotate(-90deg);
      transition: 0.3s; /* This establishes the amount of time in seconds the animation should take from start to finish */
    }
    &:hover {
      /* background: var(--palette-yellow); */
      color: var(--palette-brown);
      border: none;
      border-radius: 2px;
      transform: rotate(360deg);
      &:after {
        transform: rotate(0deg);
        width: 100%; /* This will be the new width of your border when on hover */
      }
    }
  }
  nav:has(a:hover) > a:not(:hover) {
    opacity: 0.5;
  }
  form {
    margin: 1rem auto;
    background-color: var(--palette-blue);
    display: flex;
    flex-wrap: wrap;
    & > input {
      flex: 1 1 10ch;
      margin: 0.5rem;
      &[type='email'] {
        flex: 3 1 30ch;
      }
    }
  }
  input {
    border: none;
    background: hsl(0 0% 93%);
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    font-family: var(--fonts-body);
    transition: all 0.2s ease-in;
    &:focus {
      outline: none;
      background-color: var(--palette-dirt);
      border-radius: 0;
      border-bottom: 1px solid var(--palette-brown);
    }
    &[type='submit'] {
      cursor: pointer;
      background: var(--palette-brown);
      color: white;
      box-shadow: var(--shadows-floating);

      &:hover {
        background: var(--palette-yellow);
        color: var(--palette-brown);
        box-shadow: var(--shadows-floating-hover);
      }
    }
  }
`

function App() {
  // const arr = ['3', '5', '7'] as string[]
  return (
    <>
      <AppGlobalStyle />
      <Wrapper>
        <BrowserRouter>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/query-users'>Query Users</Link>
            <Link to='/infinite'>Query Infinite</Link>
          </nav>

          <Routes>
            <Route index element={<Home />} />
            <Route path='/dependent' element={<Dependent email='5' />} />
            <Route path='/infinite' element={<UsersInfinite />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<Person />} />
            <Route path='/query-users' element={<QueryUsers />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  )
}

export default App
