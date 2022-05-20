import React from 'react';
import '../styles/App.css';
import { ThemeProvider } from './context/ThemeContext';

const CELSIUS_TO_FARENHEIGHT = 1.8;
const FARENHEIGHT_TO_CELSIUS = (f: number): number => {
  return f-32/1.8
};

function App() {

  

  return (
    <ThemeProvider>
    <div className="App">

    </div>
    </ThemeProvider>
  );
}

export default App;
