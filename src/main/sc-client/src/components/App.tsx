import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
 
import { Link } from 'react-router-dom';
import { api, METHOD, RESOURCE } from '../services/api';


function App() {
  const [count, setCount] = useState(0);

  const testRequest = api(METHOD.GET, RESOURCE.TEST, null);
  console.log(testRequest)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h1>Vite + React</h1>
 
      <Link to='/cake'>Visit /cake</Link>
    </>
  )
}

export default App