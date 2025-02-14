function checkLetterPosition (writtenWord, chosenWord) {
    
   let styleSequence = []
    
   for (let i = 0; i<writtenWord.length; i++) {

        let letter = writtenWord[i]

        if (!chosenWord.includes(letter)) {
            styleSequence.push("wrongLetter")
        } else {
            styleSequence.push(chosenWord.indexOf(letter) == i ? "rightLetterPlace" : "wrongLetterPlace")
        }
   }

   return styleSequence
}

export default checkLetterPosition