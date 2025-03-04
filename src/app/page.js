"use client"

import { Word } from '@andsfonseca/palavras-pt-br'
import { useCallback, useState } from "react";
import WordsGroup from './components/WordsGroup/WordsGroup';
import checkLetterPosition from '@/utils/functions';
import { flushSync } from 'react-dom';
import LettersLog from './components/LettersLog/LettersLog';

const wordLists = Word.getAllWords({ limit: 5 }, { removeAccents: true })
const chosenWord = wordLists[Math.floor(Math.random() * wordLists.length)]

export default function Home() {
  
  const [currentRow, setcurrentRow] = useState(1)
  const [writtenWord, setwrittenWord] = useState(["","","","",""])
  const [historyLetters, sethistoryLetters] = useState(undefined)
  const [styleSequence, setstyleSequence] = useState([])
  const [renderLettersLog, setrenderLettersLog] = useState(false)


  const checkWrittenWord = useCallback(
    (e) => {
      if (e.key == "Enter") {
        
        if (writtenWord.length < 5 || !wordLists.includes(writtenWord.join("").toLowerCase())) {
          alert("Palavra Inválida!")
        } else {
         flushSync(() => {
          setstyleSequence([...checkLetterPosition(writtenWord.join("").toLowerCase(), chosenWord)])
          debugger

          let set = new Set(writtenWord) // Remove Duplicates
          let arr = Array.from(set)

          if(historyLetters == undefined) {
                
            sethistoryLetters(arr)
          } else {

            set = new Set(historyLetters.concat(arr))
            sethistoryLetters(Array.from(set))
          }
          setwrittenWord(["","","","",""])
         })
         if(currentRow == 1) setrenderLettersLog(true)      
        }
      }
    },
    [writtenWord, styleSequence],
  )

  return (

    <div className="page" onKeyDown={(e) => checkWrittenWord(e)}>
      <h1>TERMO</h1>
      {renderLettersLog && <LettersLog
        chosenWord={chosenWord}
        typedWord={historyLetters}
      />}
      <WordsGroup currentRow={currentRow} setWrittenWord={setwrittenWord} writtenWord={writtenWord} styleSequence = {styleSequence} setcurrentRow = {setcurrentRow}/>
    </div>
  );
}
