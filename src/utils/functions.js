// Identificar palavras escritas dentro da palavra escolhida

// 1- Percorrer writtenWord
// 2- Armazenar o caractere selecionado
// 3- Verificar se a letra consta na chosenWord
//      3.1 - Se constar, verficar se a letra repete.
//      3.2 - Se repetir, guarde a posição da primeira ocorrência
//      3.3 - Verificar se a posição da letra escrita é a mesma da na            palavra escolhida
//      3.4 - Adicionar o estilo de acordo com a verificação acima
// 4- Caso não tenha, insira o estilo de palavra errada 


function checkLetterPosition (writtenWord, chosenWord) {
    // Tratar letras iguais como diferentes
    // 1 - Identificar se a letra digitada consta na palavra escolhida
    // 2- armazenar a posição caso haja letra repetida
    // 3 - 
   chosenWord = [...chosenWord]
   let styleSequence = []

   for (let i = 0; i<writtenWord.length; i++) {
        let letter = writtenWord[i]

        if(chosenWord.includes(letter)) {
            if(letter == chosenWord[i]) {
                styleSequence.push("rightLetterPlace")
                chosenWord[i] = null
            } else styleSequence.push("wrongLetterPlace")
            
        } else {
            styleSequence.push("wrongLetter")
        }
   }

   return styleSequence
}

export default checkLetterPosition