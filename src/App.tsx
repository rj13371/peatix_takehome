import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

import { ThemeContext } from './context/ThemeContext';

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <Router>
      <div className={dark ? 'Dark' : 'Light'}>
        <div className="App">
          <Routes>
            <Route path="/peatix_takehome" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
