import React, { Component } from 'react';
import WordCard from './WordCard';

const words = ['asdfg', 'zxcvb', 'asdf', 'qwert'];
const random = Math.floor(Math.random() * words.length)

class App extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
      pause: true
    }
    this.url = "http://www.partyviberadio.com:8000/;listen.pls?sid=1";
    this.audio = new Audio(this.url);
  }

  play = () => {
    this.setState({
      play: true,
      pause: false
    });
    console.log("play music");
    this.audio.play();
  }

  pause = () => {
    this.setState({ play: false, pause: true });
    this.audio.pause();
    console.log("pause music");
  }
  newGame = () => {
    window.location.reload(false);
  }
  render() {
    return (
      <div className="App">
        <h1 id="label">Random Card Game</h1>
        <WordCard value={words.slice(random, random + 1).join().toUpperCase()} />
        <p className="Text" id="showUserInput"></p>
        <p className="Text2" id="showResult"></p>
        <p id="showAttempt"></p>
        <p id="showHint"></p>
        <p className="Text3" id="showAnswer"></p>
        <button id="newgame" className="button" onClick={this.newGame}>New Game</button>
        <br></br>
        <button className="button" onClick={this.play} > Play </button>
        <button className="button" onClick={this.pause} > Pause </button>
      </div>
    );
  }

}

export default App;