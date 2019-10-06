function freqQuery(queries) {
  const numMap = {};
  const freqMap = {}
  const queryResults = [];
  let currCount;

  for (let i = 0; i < queries.length; i++) {
    const queryType = queries[i][0];
    const queryVal = queries[i][1];
    currCount = numMap[queryVal] ? numMap[queryVal] : 0;

    switch (queryType) {
      case 1:
        freqMap[currCount + 1] = freqMap[currCount + 1] ? freqMap[currCount + 1] + 1 : 1;
        if (freqMap[currCount]) freqMap[currCount]--;
        numMap[queryVal] = numMap[queryVal] ? numMap[queryVal] + 1 : 1;
        break;
      case 2:
        if (freqMap[currCount - 1]) freqMap[currCount - 1]++;
        if (freqMap[currCount]) freqMap[currCount]--;
        if (numMap[queryVal]) numMap[queryVal] = Math.max(currCount - 1, 0)
        break;
      case 3:
        if (freqMap[queryVal]) {
          queryResults.push(1);
        } else {
          queryResults.push(0);
        }
        break;
    }

  }

  return queryResults;

}