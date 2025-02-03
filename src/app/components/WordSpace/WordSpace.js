import React, { useState } from 'react'
import './WordSpace.scss'

const WordSpace = ({rowIndex, currentRow}) => {
    const [writtenWord, setwrittenWord] = useState("")
    const [selectedRow, setselectedRow] = useState(currentRow == rowIndex ? true : false)
    
  return (
    <div className={`wordSpace ${selectedRow ? "selectedRow" : ""}`}>
        <input maxLength={1} onChange={(e) => setwrittenWord(prev => prev + e.target.value)}/>
        <input maxLength={1} onChange={(e) => setwrittenWord(prev => prev + e.target.value)}/>
        <input maxLength={1} onChange={(e) => setwrittenWord(prev => prev + e.target.value)}/>
        <input maxLength={1} onChange={(e) => setwrittenWord(prev => prev + e.target.value)}/>
        <input maxLength={1} onChange={(e) => setwrittenWord(prev => prev + e.target.value)}/>
    </div>
  )
}

export default WordSpace