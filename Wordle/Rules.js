import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dictionary.css';
function Rules() {
 
    return (
        <div className="dictionary">
            <div className="dictionary1">
            <span>WORDLE</span>
            <div className="rules">
    <p>Guess the WORDLE in six tries.</p>
    <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
    <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
    <hr></hr>
    <p className="heading">Examples</p>
    <div className="box2">
    <div className="box1">
        <div className="word green" >H</div>
        <div className="word">O</div>
        <div className="word">R</div>
        <div className="word">S</div>
        <div className="word">E</div>
        </div>
        </div>
    <p>The letter H is in the word and in the correct spot.</p>
    <div className="box2">
    <div className="box1">
        <div className="word">M</div>
        <div className="word">O</div>
        <div className="word yellow">N</div>
        <div className="word">E</div>
        <div className="word">Y</div>
        </div>
        </div>
    <p>The letter N is in the word but in the wrong spot.</p>
    <div className="box2">
    <div className="box1">
        <div className="word">P</div>
        <div className="word">U</div>
        <div className="word">L</div>
        <div className="word voilet">S</div>
        <div className="word">E</div>
        </div>
        </div>
    <p>The letter S is not in the word in any spot.</p>
    </div>
    <hr></hr>
    <p>A new WORDLE will be available each day!</p>
        </div>
        </div>
      )
}

export default Rules