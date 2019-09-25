// input = [3, -4, 8, 7, -10, 19, -3] 
// output = 24 -> [8, 7, -10, 19]

function maxContiguousSum(arr) {
    let maxCount = 0, currCount = 0, currArray = [], maxArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        currCount = num;
        if (currCount > maxCount) {
            maxCount = currCount;
        }

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];

            if (currCount > maxCount) {
                maxCount = currCount;
            }
            currCount += nextNum;
        }
    }

    return maxCount;
}

function maxContiguousSum(arr) {
    let maxSum = 0, currSum = 0, currArray = [], maxArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(currSum + num > currSum) {
            currSum += num
            currArray.push(num)
        } else { 
            currSum = 0;
            currArray = [];
        }
        if (currSum > maxSum) { 
            maxSum = currSum;
            maxArr = currArray;
        };
    }

    return [maxArr, maxSum];
}

maxContiguousSum([3, -4, 8, 7, -10, 19, -3])
maxContiguousSum([2, -3, 2, 9, -29, 8, -9])