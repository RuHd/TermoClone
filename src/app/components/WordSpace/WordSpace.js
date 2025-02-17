import React, { useState, useRef, useEffect, useReducer } from 'react'
import './WordSpace.scss'

const WordSpace = ({ rowIndex, currentRow, setcurrentRow, setWrittenWord, writtenWord, styleSequence }) => {

  const rowRef = useRef(null)
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const input5Ref = useRef(null)

  const [checkedRow, setcheckedRow] = useState(false)
  const [fieldStyle, setfieldStyle] = useState([])

  const removeChar = (e, prevInputRef, index) => {

    if (e.key !== "Backspace") return

    if (e.key == "Backspace") {
      
      setWrittenWord(writtenWord.map((letter,i) => i !== index ? letter : ""))

      e.target.value = ""
      if (prevInputRef.current !== null) prevInputRef.current.focus()

      e.preventDefault()

    }
  }
  // Check if the row is the active one

  useEffect(() => {
    if (currentRow !== rowIndex) return
    if (styleSequence.length == 5) {
      setfieldStyle(styleSequence)
      if(styleSequence.filter(value => value == "rightLetterPlace").length == 5) {
        alert("You have won!")
        return
      } else if(currentRow + 1 > 6) {
        alert("you have lost")
        return
      }
      setcurrentRow(prev => prev + 1 )

    }

  }, [styleSequence])

  const handleInputRef = (e, nextInput = null, index) => {

    const { value, maxLength } = e.target
    if (e.key !== "Enter") {
      
      if (value.length === maxLength) {
        setWrittenWord(prev => prev.map((letter,i) => i == index ? value : letter))

        if (nextInput == null) {
          e.target.focus()
        } else nextInput.current.focus()
      }

    }

    e.stopPropagation()
  }

  return (
    <div className={`wordSpace ${currentRow == rowIndex ? "selectedRow" : "nonSelectedRow"}`} ref={rowRef}>
      <input 
        maxLength={1} onChange={(e) => handleInputRef(e, input2Ref, 0)} ref={input1Ref} onKeyDown={(e) => removeChar(e, null, 0)} 
        autoFocus={currentRow == rowIndex} className={`${fieldStyle.length == 5 && fieldStyle[0]}`} />

      <input 
        maxLength={1} onChange={(e) => handleInputRef(e, input3Ref, 1)} ref={input2Ref} onKeyDown={(e) => removeChar(e, input1Ref, 1)} className={`${fieldStyle.length == 5 && fieldStyle[1]}`} />

      <input 
        maxLength={1} onChange={(e) => handleInputRef(e, input4Ref, 2)} ref={input3Ref} onKeyDown={(e) => removeChar(e, input2Ref, 2)} className={`${fieldStyle.length == 5 && fieldStyle[2]}`} />

      <input 
        maxLength={1} onChange={(e) => handleInputRef(e, input5Ref, 3)} ref={input4Ref} onKeyDown={(e) => removeChar(e, input3Ref, 3)} className={`${fieldStyle.length == 5 && fieldStyle[3]}`} />

      <input 
        maxLength={1} onChange={(e) => handleInputRef(e, null, 4)} ref={input5Ref} onKeyDown={(e) => removeChar(e, input4Ref, 4)} className={`${fieldStyle.length == 5 && fieldStyle[4]}`} />
    </div>
  )
}

export default WordSpace