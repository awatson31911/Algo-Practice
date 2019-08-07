function subString(inputString, subString) {
  
  for (let i = 0; i < inputString.length; i++) {
    let wrongCount = 0;
    let startIndex = i;
    
    for (let j = 0; j < subString.length; j++) {
      const char = inputString[startIndex];
      const subChar = subString[j];
      if (char !== subChar) {
        wrongCount++;
      }
      startIndex++;
    }
    if (wrongCount < 2) {
      return i;
    }
  }

  return -1;
}

subString('submission', 'sub')
subString('aaanthony', 'anthony')
subString('aaaaaaaa', 'a')