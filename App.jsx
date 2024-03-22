// App.js

import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css'; // Import your global CSS file here

const App = () => {
  return (
    <div className="app-container">
      <div className="background-image"></div>
      <CountdownTimer />
    </div>
  );
};

export default App;
