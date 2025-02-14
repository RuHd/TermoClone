"use client"

import { Word } from '@andsfonseca/palavras-pt-br'
import { useCallback, useEffect, useState } from "react";
import WordsGroup from './components/WordsGroup/WordsGroup';
import checkLetterPosition from '@/utils/functions';
import { flushSync } from 'react-dom';

const wordLists = Word.getAllWords({ limit: 5 }, { removeAccents: true })
const chosenWord = wordLists[Math.floor(Math.random() * wordLists.length)]

export default function Home() {
  
  const [currentRow, setcurrentRow] = useState(1)
  const [writtenWord, setwrittenWord] = useState("")
  const [styleSequence, setstyleSequence] = useState([])


  const checkWrittenWord = useCallback(
    (e) => {
      if (e.key == "Enter") {
        if (writtenWord.length < 5 || !wordLists.includes(writtenWord.toLowerCase())) {
          console.log("Palavra Inválida: " + writtenWord)
        } else {
         flushSync(() => {
          setstyleSequence([...checkLetterPosition(writtenWord.toLowerCase(), chosenWord)])
          setwrittenWord("")
         })
         
        }
      }
    },
    [writtenWord, styleSequence],
  )
  

  // const checkWrittenWord = (e) => {
  //   if (e.key == "Enter") {
      
  //     if (writtenWord.length < 5 || !wordLists.includes(writtenWord.toLowerCase())) {
  //       console.log("Palavra Inválida: " + writtenWord)
  //     } else {
  //      flushSync(() => {
  //       setstyleSequence([...checkLetterPosition(writtenWord.toLowerCase(), chosenWord)])
  //      })
       
  //     }
  //   }
  // }



  console.log("chosen word: " + chosenWord)

  return (

    <div className="page" onKeyDown={(e) => checkWrittenWord(e)}>
      <h1>TERMO</h1>

      <WordsGroup currentRow={currentRow} setWrittenWord={setwrittenWord} writtenWord={writtenWord} styleSequence = {styleSequence} setcurrentRow = {setcurrentRow}/>
    </div>
  );
}
