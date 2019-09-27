import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard'
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    console.log("word = " + word)
    console.log("chars = " + chars.join('').toString())
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false,
    }
}

export default class WordCard extends

    Component {
    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({ guess })
        console.log("Guess : " + guess)
        if (guess.length === this.state.chars.length) {
            console.log(`${guess.join('').toString()} ${this.state.chars.join('').toString()}`)
            if (guess.join('').toString() === this.state.chars.join('').toString()) {
                this.setState({ guess: [], completed: true })
                console.log("You Win")
                document.getElementById('showResult').innerHTML = `You win`
            } else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
                console.log("Attemp = " + this.state.attempt)
                document.getElementById('showResult').innerHTML = `You Fail  `

                if (this.state.attempt === 1) {
                    document.getElementById('showAttemp').innerHTML = `You have tried : ${this.state.attempt} time`
                }
                else if (this.state.attempt === 2) {
                    document.getElementById('showAttemp').innerHTML = `You have tried : ${this.state.attempt} times`
                }
                else if (this.state.attempt === 3) {
                    document.getElementById('showAttemp').innerHTML = `You have tried : ${this.state.attempt} times`
                    window.location.reload(false)
                }
            }


        }
    }
    render() {
        return (
            <div>
                {Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}{...this.state} />)}
            </div>

        );
    }
}