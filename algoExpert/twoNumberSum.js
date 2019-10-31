function twoNumberSum(array, targetSum) {
    const numStore = {};
    let resultArr = [];

    for (const num of array) {
        const targetNum = targetSum - num;
        if(numStore[targetNum]) {
            const pairArr = num > targetNum ? [targetNum, num] : [num, targetNum];
            resultArr.push(pairArr);
        } else {
            numStore[num] = true;
        }
    }
    return resultArr;
}
