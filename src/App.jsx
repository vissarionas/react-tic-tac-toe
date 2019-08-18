import React from 'react';
import Game from './game/game';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>Tic Tac Toe</p>
      <Game />
    </header>
  </div>
);

export default App;
