function subString(inputString, subString) {
  
  for (let i = 0; i < inputString.length; i++) {
    let wrongCount = 0;
    let startIndex = i;
    
    for (subChar of subString) {
      const char = inputString[startIndex];

      if (wrongCount > 1) break;
      if (char !== subChar) wrongCount++;
  
      startIndex++;
    }

    if (wrongCount > 1) continue;

    return i;
  }

  return -1;
}

console.log(subString('submission', 'sub'))
console.log(subString('aaanthony', 'anthony'))
console.log(subString('aaaaaaaa', 'a'))