import React, { useState, useRef, useEffect } from 'react'
import './WordSpace.scss'

const WordSpace = ({rowIndex, currentRow, setWrittenWord}) => {
    const rowRef = useRef(null)
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    const input3Ref = useRef(null)
    const input4Ref = useRef(null)
    const input5Ref = useRef(null)

    const [selectedRow, setselectedRow] = useState(false)

    const removeChar = (e, prevInputRef) => {
      if(e.key !== "Backspace") return
      
      if (e.key == "Backspace") {
        e.target.value = ""
        prevInputRef.current.focus()
      }
    }

    useEffect(() => {
      

      if (currentRow == rowIndex ) {
        setselectedRow(true)
      }
    }, [currentRow])

    const handleInputRef = (e = null, nextInput = null, keyboardEvent = null) => {

      const {value, maxLength} = e.target

      if (value.length === maxLength && nextInput !== null) {
        setWrittenWord(prev => prev + value)
        nextInput.current.focus()
      } 
    }
    
  return (
    <div className={`wordSpace ${selectedRow ? "selectedRow" : ""}` } ref={rowRef}>
        <input maxLength={1} onChange={(e) => handleInputRef(e,input2Ref, null)} ref={input1Ref} onKeyDown={(e) => removeChar(e, null)} autoFocus/>
        <input maxLength={1} onChange={(e) => handleInputRef(e,input3Ref, null)} ref={input2Ref} onKeyDown={(e) => removeChar(e, input1Ref)}/>
        <input maxLength={1} onChange={(e) => handleInputRef(e,input4Ref, null)} ref={input3Ref} onKeyDown={(e) => removeChar(e, input2Ref)}/>
        <input maxLength={1} onChange={(e) => handleInputRef(e,input5Ref, null)} ref={input4Ref} onKeyDown={(e) => removeChar(e, input3Ref)}/>
        <input maxLength={1} onChange={(e) => handleInputRef(e,null, null)} ref={input5Ref} onKeyDown={(e) => removeChar(e, input4Ref)}/>
    </div>
  )
}

export default WordSpace