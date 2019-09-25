function handleKeyValues(inputDict, resultDict, passedKey = '') {
    
    Object.keys(inputDict).forEach(currKey => {
      let newKey = `${passedKey}${currKey === '' ? '' : `.${currKey}`}`;
      
      if (typeof dict[currKey] === 'object') {
        handleKeyValues(dict[currKey], resultDict, newKey);
      } else {
        resultDict[newKey] = inputDict[currKey];
      }
    })ß
  }
  
  handleKeyValues(dict, resultDict);
  
  return resultDict;