function freqQuery(queries) {
  const numMap = {};
  const freqMap = {}
  const queryResults = [];
  let numCount;

  for (let i = 0; i < queries.length; i++) {
      const queryType = queries[i][0];
      const queryVal = queries[i][1];

      switch (queryType) {
          case 1:
              numMap[queryVal] ? numMap[queryVal]++ : numMap[queryVal] = 1;
              numCount = numMap[queryVal];

              freqMap[numCount] ? freqMap[numCount]++ : freqMap[numCount] = 1;
              freqMap[numCount - 1]--;
              break;
          case 2:
              numCount = numMap[queryVal];
              freqMap[numCount]--;
              if (numCount - 1) freqMap[numCount - 1]++;
              if (numMap[queryVal] > 0) numMap[queryVal]--;
              break;
          case 3:
              if (freqMap[queryVal]) {
                  queryResults.push(1);
              } else {
                  queryResults.push(0);
              }
              break;
      }

      console.log(numMap, freqMap, queryResults)
  }

  return queryResults;

}