function twoLowestSum(numArr) {
  const numHash = {};
  let lowestNum = numArr[0]; let nextLowestNum = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    let num = numArr[i];
    if (numHash[num]) {
      while (numHash[num] != undefined) {
        num++;
      }
    }
    else {
      numHash[num] = true;
    }
    if (num < lowestNum) {
      lowestNum = num;
    }
    else if (num > lowestNum && lowestNum === nextLowestNum) {
      nextLowestNum = num;
    }
    else if (num > lowestNum && num < nextLowestNum) {
      nextLowestNum = num;
    }
  }
  return lowestNum + nextLowestNum;
}
twoLowestSum([1, 1, 1, 1, 1, 1]);
twoLowestSum([11, 5, 5, 6, 7, 7]);
