import React from 'react';
import logo from './logo.svg';
import './App.css';

const CELSIUS_TO_FARENHEIGHT = 1.8;
const FARENHEIGHT_TO_CELSIUS = (f: number): number => {
  return f-32/1.8
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
