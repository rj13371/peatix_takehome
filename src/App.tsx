import React, { useContext } from 'react';
import './styles/App.css';
import { ToggleDarkMode } from './components/ToggleDarkMode';
import { ThemeContext } from './context/ThemeContext';

const CELSIUS_TO_FARENHEIGHT = 1.8;
const FARENHEIGHT_TO_CELSIUS = (f: number): number => {
  return f - 32 / 1.8;
};

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? 'Dark' : 'Light'}>
      <div className="App">
        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default App;
