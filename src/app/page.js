"use client"

import { Word } from '@andsfonseca/palavras-pt-br'
import { useEffect, useState } from "react";
import WordSpace from "./components/WordSpace/WordSpace";


export default function Home() {
  const [wordData, setwordData] = useState(null)
  const [currentRow, setcurrentRow] = useState(1)
  const [writtenWord, setwrittenWord] = useState("")
  const [chosenWord, setchosenWord] = useState("")

  
  useEffect(() => {

      const wordLists = Word.getAllWords({limit : 5}, {removeAccents: true})
      setwordData(wordLists)

      window.addEventListener("keydown", (e) => {
        console.log(e.key == "Enter" ? "Enter Pressed" : null)
      })

      return (
        window.removeEventListener("keydown",this)
      )
  }, [])

 
  
  return (
    <div className="page" onKeyDown={(e) => pressedEnter(e)}>
      <h1>TERMO</h1>

      <ul className="wordsGroup">
          <WordSpace rowIndex = {1} currentRow = {currentRow}/>
          <WordSpace rowIndex = {2} currentRow = {currentRow}/>
          <WordSpace rowIndex = {3} currentRow = {currentRow}/>
          <WordSpace rowIndex = {4} currentRow = {currentRow}/>
          <WordSpace rowIndex = {5} currentRow = {currentRow}/>
          <WordSpace rowIndex = {6} currentRow = {currentRow}/>
      </ul>
    </div>
  );
}
