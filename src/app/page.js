"use client"

import { Word } from '@andsfonseca/palavras-pt-br'
import { useEffect, useState } from "react";
import WordsGroup from './components/WordsGroup/WordsGroup';


export default function Home() {
  const [currentRow, setcurrentRow] = useState(1)
  const [writtenWord, setwrittenWord] = useState("")
  const [chosenWord, setchosenWord] = useState("")
 
  useEffect(() => {
      const wordLists = Word.getAllWords({limit : 5}, {removeAccents: true})
      setchosenWord(wordLists[Math.floor(Math.random() * wordLists.length)])

      window.addEventListener("keydown", (e) => {
        
        if(e.key !== "Enter") return
        if(e.key == "Enter") {
          debugger
          console.log(writtenWord, wordLists[0] == writtenWord)
          
        } 
      })

      return (
        window.removeEventListener("keydown",this)
      )
  }, [])

  console.log(writtenWord)

  return (
    <div className="page">
      <h1>TERMO</h1>

      <WordsGroup currentRow={currentRow} setWrittenWord = {setwrittenWord} writtenWord = {writtenWord}/>
    </div>
  );
}
