function balancedBrackets(brackets) {
  const openBracks = { '(': 'round', '[': 'square', '{': squig };
  // const closeBracks = { round: ')', square: ']', squig: '}' }
  const stack = [];
  const firstBracket = brackets[0];
  const lastBracket = brackets[brackets.length - 1];

  if (closeBrackets[firstBracket]) return false;
  if (closeBrackets[lastBracket]) return false;
  
  for (let i = 0; i < brackets.length; i++) {
    const currBracket = brackets[i];
    
    if (openBrackets[currBracket]) stack.push(currBracket);
    else {
      switch (currBracket) {
        case ')':
          if (stack[stack.length - 1] === openBrackets.round) stack.pop();
          break;
        
        case ']':
          if (stack[stack.length - 1] === openBrackets.square) stack.pop();
          break;
        
        case '}':
          if (stack[stack.length - 1] === openBrackets.squig) stack.pop();
          break;
        
        default: return false;
      }
    }

  }

  if (stack.length) return false;

  return true;
}