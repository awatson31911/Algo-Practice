function balancedBrackets(brackets) {
  const openBracks = '([{';
  const closeBracks = ')]}';
  const matchingBracks = { ')': '(', ']':'[', '}': '{' }
  const stack = [];
  const firstBrack = brackets[0];
  const lastBrack = brackets[brackets.length - 1];

  if ( closeBracks.includes(firstBrack)) return false;
  if ( openBracks.includes(lastBrack)) return false;

  for (const bracket of brackets) {
    if (openBracks.includes(bracket)) {
      stack.push(bracket);
    }
    else if ( closeBracks.includes(bracket) ){
      if ( stack.length === 0 ) return false;
      if ( stack[stack.length - 1] === matchingBracks[bracket] ) stack.pop();
      else return false;
    } 
  }

  return stack.length === 0;
}

console.log(balancedBrackets('(()())((()()()))'))