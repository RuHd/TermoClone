import React from 'react'
import WordSpace from '../WordSpace/WordSpace.js'
import './WordsGroup.scss'

const WordsGroup = ({currentRow, setWrittenWord, writtenWord}) => {
    
  return (
    <ul className="wordsGroup">
          <WordSpace rowIndex = {1} currentRow = {currentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord}/>
          <WordSpace rowIndex = {2} currentRow = {currentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord}/>
          <WordSpace rowIndex = {3} currentRow = {currentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord}/>
          <WordSpace rowIndex = {4} currentRow = {currentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord}/>
          <WordSpace rowIndex = {5} currentRow = {currentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord}/>
          <WordSpace rowIndex = {6} currentRow = {currentRow} setWrittenWord = {setWrittenWord} writtenWord = {writtenWord}/>
    </ul>
  )
}

export default WordsGroup