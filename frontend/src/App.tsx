import React from 'react';

import './App.sass';
import Header from './components/Header/Header';
import AboutCard from './components/About/About';

import robot from './images/lp/robot.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutCard />
      </main>
    </div>
  );
}

export default App;
