function countTriplets(arr, r) {
  const rightNums = {};
  const leftNums = {};
  let numTriplets = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (rightNums[num]) {
      rightNums[num]++;
    } else {
      rightNums[num] = 1;
    }
  }

  arr.forEach(num => {
    const leftNum = num / r;
    const rightNum = num * r;

    if (rightNums[rightNum] && leftNums[leftNum]) {
      numTriplets += rightNums[rightNum] * leftNums[leftNum];
      rightNums[num]--;
      leftNums[num]++;
    }

  })

  return numTriplets;
}