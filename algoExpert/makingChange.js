function changePossibilities(amountLeft, denominations) {
    let numOfWays = 0
    // Calculate the number of ways to make change
    for (let i = denominations.length -1; i >= 0; i--) {
      let currDenom = denominations[i];
      let currSum = 0;
      let j = i
      
      while(j >= 0) {
        let currNextDenom = denominations[j]
        currSum+= currNextDenom;
        
        if (currSum === amountLeft) {
          numOfWays++;
          currSum-= currNextDenom;
          j--;
          continue;
        } else if (currSum > amountLeft) {
          currSum-= currNextDenom;
          j--;
        }
        
      }
      
    }
  
    return numOfWays;
  }
  