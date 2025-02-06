"use client"

import { Word } from '@andsfonseca/palavras-pt-br'
import { useEffect, useState } from "react";
import WordsGroup from './components/WordsGroup/WordsGroup';
import checkLetterPosition from '@/utils/functions';


const wordLists = Word.getAllWords({ limit: 5 }, { removeAccents: true })
const chosenWord = wordLists[Math.floor(Math.random() * wordLists.length)]


export default function Home() {

  const [currentRow, setcurrentRow] = useState(1)
  const [writtenWord, setwrittenWord] = useState("")
  const [styleSequence, setstyleSequence] = useState([])

  const checkWrittenWord = (e) => {
    if (e.key == "Enter") {
      debugger
      if (writtenWord.length < 5 || !wordLists.includes(writtenWord.toLowerCase())) {
        console.log("Palavra Inválida: " + writtenWord)
      } else {
       setstyleSequence([...checkLetterPosition(writtenWord.toLowerCase(), chosenWord)])
      }
    }
  }

  useEffect(() => {

   

  }, [])

  console.log("chosen word: " + chosenWord, styleSequence)

  return (

    <div className="page" onKeyDown={(e) => checkWrittenWord(e)}>
      <h1>TERMO</h1>

      <WordsGroup currentRow={currentRow} setWrittenWord={setwrittenWord} writtenWord={writtenWord} styleSequence = {styleSequence}/>
    </div>
  );
}
