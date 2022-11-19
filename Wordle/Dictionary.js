import React, { useState } from 'react'

import Rules from './Rules'
import Wordle from './Wordle';
import WordList from './Data';
function Dictionary() {
  const [m,setm]=useState(0);
  const [w,setw]=useState('');
  const [word,setword]=useState('');
  const start=(e)=>{
    console.log("run");
  const alphabetIndex = Math.floor(Math.random() * 26);
  const wordIndex = Math.floor(Math.random() * WordList[String.fromCharCode(97 + alphabetIndex)].length);
  setword(WordList[String.fromCharCode(97 + alphabetIndex)][wordIndex]);
  if(m==0)
  setm(1);
  else 
  setm(0);
  setw("New");
  }
  return (
    <div>
      <button onClick={() => start("e") }>Start {w} Game</button>
   {m==0?(<Rules></Rules>):(
   <Wordle word={word}></Wordle>
   )
   }
    </div>
  )
}

export default Dictionary