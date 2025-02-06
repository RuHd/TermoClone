import React, { useState, useRef, useEffect, useReducer } from 'react'
import './WordSpace.scss'

const WordSpace = ({ rowIndex, currentRow, setWrittenWord, writtenWord, styleSequence }) => {

  const rowRef = useRef(null)
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const input5Ref = useRef(null)

  const [selectedRow, setselectedRow] = useState(false)

  const removeChar = (e, prevInputRef, currentInput) => {

    if (e.key !== "Backspace") return

    if (e.key == "Backspace") {
      let newW = writtenWord.split("")

      e.stopPropagation()

      newW.pop()
      newW = newW.join("")

      setWrittenWord(newW)
      e.target.value = ""
      if (prevInputRef.current !== null) prevInputRef.current.focus()

      e.preventDefault()

    }
  }
  // Check if the row is the active one

  useEffect(() => {

    if (currentRow == rowIndex) {
      setselectedRow(true)
    }
  }, [currentRow])

  const handleInputRef = (e, nextInput = null, keyboardEvent = null) => {
    
    const { value, maxLength } = e.target
    if(e.key !== "Enter") {
      
          if (value.length === maxLength) {
            setWrittenWord(prev => prev + value)
      
            if (nextInput == null) {
              e.target.focus()
            } else nextInput.current.focus()
          }

    }

    e.stopPropagation()
  }

  return (
    <div className={`wordSpace ${selectedRow ? "selectedRow" : "nonSelectedRow"}`} ref={rowRef}>
      <input maxLength={1} onChange={(e) => handleInputRef(e, input2Ref, null)} ref={input1Ref} onKeyDown={(e) => removeChar(e, null)} autoFocus={true} className={`${currentRow == rowIndex ? styleSequence[0] : ""}`}/>
      <input maxLength={1} onChange={(e) => handleInputRef(e, input3Ref, null)} ref={input2Ref} onKeyDown={(e) => removeChar(e, input1Ref)} className={`${currentRow == rowIndex ? styleSequence[1] : ""}`}/>
      <input maxLength={1} onChange={(e) => handleInputRef(e, input4Ref, null)} ref={input3Ref} onKeyDown={(e) => removeChar(e, input2Ref)} className={`${currentRow == rowIndex ? styleSequence[2] : ""}`}/>
      <input maxLength={1} onChange={(e) => handleInputRef(e, input5Ref, null)} ref={input4Ref} onKeyDown={(e) => removeChar(e, input3Ref)} className={`${currentRow == rowIndex ? styleSequence[3] : ""}`}/>
      <input maxLength={1} onChange={(e) => handleInputRef(e, null, null)} ref={input5Ref} onKeyDown={(e) => removeChar(e, input4Ref, input5Ref)} className={`${currentRow == rowIndex ? styleSequence[4] : ""}`}/>
    </div>
  )
}

export default WordSpace