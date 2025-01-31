"use client"

import Image from "next/image";
import styles from "./page.scss";
import { Word } from '@andsfonseca/palavras-pt-br'
import { useEffect, useState } from "react";


export default function Home() {
  const [wordData, setwordData] = useState(null)
  useEffect(() => {
      const wordLists = Word.getAllWords({limit : 5}, {removeAccents: true})
      setwordData()

      console.log(wordLists)
    
    
  }, [])
  
  return (

    <div className="page">
      <h1>Termo</h1>
    </div>
  );
}
