function balancedBrackets(brackets) {
  const openBracks = '([{';
  const closeBracks = ')]}';
  const matchingBracks = { ')': '(', ']':'[', '}': '{' }
  const stack = [];
  const firstBrack = brackets[0];
  const lastBrack = brackets[brackets.length - 1];

  if ( closeBracks.indexOf(firstBrack) !== -1 ) return false;
  if ( openBracks.indexOf(lastBrack) !== -1 ) return false;

  for (const bracket of brackets) {
    if (openBracks.indexOf(bracket) !== -1) {
      stack.push(bracket);
    }
    else if ( closeBracks.indexOf(bracket) !== -1 ){
      if ( stack.length === 0 ) return false;
      if ( stack[stack.length - 1] === matchingBracks[bracket] ) stack.pop();
      else return false;
    } 
  }

  return stack.length === 0;
}

console.log(balancedBrackets('(()())((()()()))'))