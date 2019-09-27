import React, { Component } from 'react';
import WordCard from './WordCard';

const words = ['cat', 'dof', 'ant', 'bird'];
const random = Math.floor(Math.random() * words.length)


class App extends Component {
  newGame = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <h1 id="label">Random Card Game</h1>
        <WordCard value={words.slice(random, random + 1).join().toUpperCase()} />
        <br></br>
        <p id="showResult"></p>
        <p id="showAttemp"></p>
        <button id="newgame" className="button" onClick={this.newGame}>New Game</button>
      </div>
    );
  }

}

export default App;