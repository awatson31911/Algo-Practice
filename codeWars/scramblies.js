// var scramble = (scrambled, word) => {
//     let isScramblie
//     let i = 0

//     if (scrambled.length < word.lenth) {
//         return isScramblie = false
//     }

//     while (i < word.length) {
//         if (isScramblie === false) {
//             return isScramblie
//         } else { //NEED TO to: 1) test and see if the char in scrambled THEN 2) check the count of the char
//             scrambled.includes([word[i]]) ? isScramblie = true : isScramblie = false
//         } //IF isScramblie get the indexOf the char within scrambled word and remove it. This is to make sure the scrambled has the
//             // same amount of any given char as the word
//         i++
//     }

//     return isScramblie
// }

function scramble (scrambled, word) {
    const wordDictionary = {};
    const scrambledDictionary = {};

    if (scrambled.length < word.length) {
        return false;
    }

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        wordDictionary[char] >= 1 ? wordDictionary[char]++ : wordDictionary[char] = 1;
    }

    for (let i = 0; i < scrambled.length; i++) {
        const char = scrambled[i];
        scrambledDictionary[char] >= 1 ? scrambledDictionary[char]++ : scrambledDictionary[char] = 1;
    }

    const wordUniqueChars = Object.keys(wordDictionary);

    for (let i = 0; i < wordUniqueChars.length; i++) {
        let char = wordUniqueChars[i];

        if (wordDictionary[char] > scrambledDictionary[char] || scrambledDictionary[char] === undefined) {
            return false;
        }
    }

    return true
}




console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
console.log(scramble('scriptjava', 'javascript'))
console.log(scramble('scriptingjava', 'javascript'))
console.log(scramble('scriptsjava', 'javascripts'))
console.log(scramble('jscripts', 'javascript'))
console.log(scramble('aabbcamaomsccdd', 'commas'))


//'aabbcamaomsccdd'
//'xxxxxx' 'commas'