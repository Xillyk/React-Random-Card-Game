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
        hints: [],
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
        document.getElementById('showUserInput').innerHTML = `You select : ${guess.join("").toString()}`
        if (guess.length === this.state.chars.length) {
            console.log(`${guess.join('').toString()} ${this.state.chars.join('').toString()}`)
            if (guess.join('').toString() === this.state.chars.join('').toString()) {
                this.setState({ guess: [], completed: true, attempt: this.state.attempt + 1 })
                console.log("You Win")
                document.getElementById('showResult').innerHTML = `You win`
                document.getElementById('showAnswer').innerHTML = `Answer : ${this.state.chars.join("")}`
                setTimeout(() => window.location.reload(false), 3000)
            } else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
                console.log("Attemp = " + this.state.attempt)


                if (this.state.attempt !== 3) {
                    document.getElementById('showAttempt').innerHTML = `${2 - this.state.attempt} times left !!!`
                    this.state.hints.push(this.state.chars[this.state.attempt - 1])
                    document.getElementById('showHint').innerHTML = `Hint : ${this.state.hints.join("")} `
                    document.getElementById('showResult').innerHTML = `Try Again  `
                }
                else {
                    document.getElementById('showHint').innerHTML = ` `
                    setTimeout(() => window.location.reload(false), 3000)
                    document.getElementById('showAnswer').innerHTML = `Answer : ${this.state.chars.join("")}`
                    document.getElementById('showAttempt').innerHTML = ``
                    document.getElementById('showResult').innerHTML = `You Fail !!!  `
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