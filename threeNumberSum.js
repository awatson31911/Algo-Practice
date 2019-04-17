function threeNumberSum(array, targetSum) {
    const resultArr = [];

    array.sort((a, b) => a - b)
        .forEach((number, i) => {
            let leftPointerIdx = i + 1;
            let rightPointerIdx = array.length - 1;

            while (leftPointerIdx < rightPointerIdx) {
                const numberSum = number + array[leftPointerIdx] + array[rightPointerIdx];
                if (numberSum < targetSum) { leftPointerIdx++; }
                else if (numberSum > targetSum) { rightPointerIdx--; }
                else {
                    resultArr.push([number, array[leftPointerIdx], array[rightPointerIdx]]);
                    leftPointerIdx++;
                    rightPointerIdx--;
                }
            }
        });

    return resultArr;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

const array = [4,2,5,1,7,3,-1];
threeNumberSum(array, 8);