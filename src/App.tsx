import React, { useContext } from 'react';
import './styles/App.css';
import { ToggleDarkMode } from './components/ToggleDarkModeButton';
import { ThemeContext } from './context/ThemeContext';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? 'Dark' : 'Light'}>
      <div className="App">
        <TemperatureConverter />
        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default App;
