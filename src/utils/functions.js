function checkLetterPosition (writtenWord, chosenWord) {
    debugger
    let styleSequence = []
    // Check if the letter is part of the chosen word

    // 1- Get the current letter
    // 2- Check if there's the letter inside the chosen Word
    // 3- If not, choose style for the wrong letter
    // 4- Check if the index of letter is the same inside of chosenWord
    // 5- If true, style with the right letter right place style
    // 6- If the letter is inside but in the wrong place, style with the respective style
    

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