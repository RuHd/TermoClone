import React from 'react'
import WordSpace from '../WordSpace/WordSpace.js'
import './WordsGroup.scss'

const WordsGroup = ({currentRow, setWrittenWord}) => {
    
  return (
    <ul className="wordsGroup">
          <WordSpace rowIndex = {1} currentRow = {currentRow} setWrittenWord = {setWrittenWord}/>
          <WordSpace rowIndex = {2} currentRow = {currentRow} setWrittenWord = {setWrittenWord}/>
          <WordSpace rowIndex = {3} currentRow = {currentRow} setWrittenWord = {setWrittenWord}/>
          <WordSpace rowIndex = {4} currentRow = {currentRow} setWrittenWord = {setWrittenWord}/>
          <WordSpace rowIndex = {5} currentRow = {currentRow} setWrittenWord = {setWrittenWord}/>
          <WordSpace rowIndex = {6} currentRow = {currentRow} setWrittenWord = {setWrittenWord}/>
    </ul>
  )
}

export default WordsGroup