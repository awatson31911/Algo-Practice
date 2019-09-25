function twoNumberSum(array, targetSum) {
    const numStore = {};
    let resultArr = [];

    for (const num of array) {
        const targetNum = targetSum - num;
        if(numStore[targetNum]) {
            resultArr = num > targetNum ? [targetNum, num] : [num, targetNum];
        } else {
            numStore[num] = true;
        }
    }
    return resultArr;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum; 