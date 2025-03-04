import React, { useEffect, useState } from 'react'
import './LettersLog.scss'

const LettersLog = ({chosenWord,typedWord}) => {
  
  return (
    <section className='lettersLog'>
      <h3>Letras Usadas</h3>
      <ul className='letters--list'>
          {typedWord.sort().map((letter,i) => {
              return (
                  <li key={i}>
                      <span>{letter}</span>
                  </li>
              )
          })}
      </ul>
    </section>
  )
}

export default LettersLog