import React, { Component } from 'react';
import WordCard from './WordCard';

const words = ['cat', 'dof', 'ant', 'bird'];
const random = Math.floor(Math.random() * words.length)

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="label">Random Card Game</h1>
        <WordCard value={words.slice(random, random + 1).join().toUpperCase()} />
      </div>
    );
  }

}

export default App;