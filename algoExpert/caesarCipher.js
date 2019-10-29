/* 
  Given a non-empty string of lowercase letters and a non-negative integer value representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1 returns the letter "a".
*/

function caesarCipherEncryptor(string, key) {
  const result = [];
  key = key % 26;

  for (const char of string) {
    let charCode = char.charCodeAt();
    let newCharCode;

    if (charCode + key > 122) {
      newCharCode = 96 + ((charCode + key) % 122);
    } else {
      newCharCode = charCode + key
    }

    result.push(String.fromCharCode(newCharCode))
  }

  return result.join('');
}

const input = 'abcd';
const key = 3;

console.log(caesarCipherEncryptor(input, key))