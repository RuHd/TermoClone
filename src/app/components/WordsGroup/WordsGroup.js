import React from 'react'
import WordSpace from '../WordSpace/WordSpace.js'
import './WordsGroup.scss'

const WordsGroup = ({currentRow, setWrittenWord, writtenWord, styleSequence, setcurrentRow}) => {
    
  return (
    <ul className="wordsGroup">
          <WordSpace rowIndex = {1} currentRow = {currentRow} setcurrentRow = {setcurrentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord} styleSequence= {styleSequence}/>
          <WordSpace rowIndex = {2} currentRow = {currentRow} setcurrentRow = {setcurrentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord} styleSequence= {styleSequence}/>
          <WordSpace rowIndex = {3} currentRow = {currentRow} setcurrentRow = {setcurrentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord} styleSequence= {styleSequence}/>
          <WordSpace rowIndex = {4} currentRow = {currentRow} setcurrentRow = {setcurrentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord} styleSequence= {styleSequence}/>
          <WordSpace rowIndex = {5} currentRow = {currentRow} setcurrentRow = {setcurrentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord} styleSequence= {styleSequence}/>
          <WordSpace rowIndex = {6} currentRow = {currentRow} setcurrentRow = {setcurrentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord} styleSequence= {styleSequence}/>
    </ul>
  )
}

export default WordsGroup