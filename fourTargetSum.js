function findArrayQuadruplet(inputArr, targetSum) {
    if (inputArr.length < 4) { return []; }

    inputArr.sort((a, b) => a - b);

    for (let i = 0; i < inputArr.length - 3; i++) {

        for (let j = i + 1; j < inputArr.length - 2; j++) {
            let leftPointerIdx = j + 1;
            let rightPointerIdx = inputArr.length - 1;

            while (leftPointerIdx < rightPointerIdx) {
                const currSum = inputArr[i] + inputArr[j] + inputArr[leftPointerIdx] + inputArr[rightPointerIdx];

                if (currSum === targetSum) {
                    return [inputArr[i], inputArr[j], inputArr[leftPointerIdx], inputArr[rightPointerIdx]];
                } else if (currSum < targetSum) {
                    leftPointerIdx++;
                } else {
                    rightPointerIdx--;
                }
            }
        }
    }

    return [];
}