"use client"

import { Word } from '@andsfonseca/palavras-pt-br'
import { useCallback, useState } from "react";
import WordsGroup from './components/WordsGroup/WordsGroup';
import checkLetterPosition from '@/utils/functions';
import { flushSync } from 'react-dom';

const wordLists = Word.getAllWords({ limit: 5 }, { removeAccents: true })
const chosenWord = wordLists[Math.floor(Math.random() * wordLists.length)]

export default function Home() {
  
  const [currentRow, setcurrentRow] = useState(1)
  const [writtenWord, setwrittenWord] = useState(["","","","",""])
  const [styleSequence, setstyleSequence] = useState([])


  const checkWrittenWord = useCallback(
    (e) => {
      if (e.key == "Enter") {
        debugger
        if (writtenWord.length < 5 || !wordLists.includes(writtenWord.join("").toLowerCase())) {
          alert("Palavra Inválida!")
        } else {
         flushSync(() => {
          setstyleSequence([...checkLetterPosition(writtenWord.join("").toLowerCase(), chosenWord)])
          setwrittenWord(["","","","",""])
         })
         
        }
      }
    },
    [writtenWord, styleSequence],
  )
  
  console.log(chosenWord)

  return (

    <div className="page" onKeyDown={(e) => checkWrittenWord(e)}>
      <h1>TERMO</h1>

      <WordsGroup currentRow={currentRow} setWrittenWord={setwrittenWord} writtenWord={writtenWord} styleSequence = {styleSequence} setcurrentRow = {setcurrentRow}/>
    </div>
  );
}
