import React, { Component } from 'react';
import WordCard from './WordCard';

const words = ['asdfg', 'zxcvb', 'asdf', 'qwert'];
const random = Math.floor(Math.random() * words.length)

class App extends Component {
  newGame = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <h1 id="label">Random Card Game</h1>
      {/* </div>
      <div className="Text"> */}
        <WordCard value={words.slice(random, random + 1).join().toUpperCase()} />
        <p id="showUserInput"></p>
        <p id="showResult"></p>
        <p id="showAttempt"></p>
        <p id="showHint"></p>
        <p id="showAnswer"></p>
        <button id="newgame" className="button" onClick={this.newGame}>New Game</button>
      </div>
    );
  }

}

export default App;