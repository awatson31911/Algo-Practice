function bubbleSort(numbersArray) {

    for (let i = 0; i < numbersArray.length; i++) {
        for (let leftIndex = 0; leftIndex + 1 < numbersArray.length; leftIndex++) {
            const rightIndex = leftIndex + 1;
            const leftNumber = numbersArray[leftIndex];
            const rightNumber = numbersArray[rightIndex];
            if (leftNumber > rightNumber) {
                numbersArray[leftIndex] = rightNumber;
                numbersArray[rightIndex] = leftNumber;

            }
        }
    }
    return numbersArray;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

const testArr = [10, 4, 2, 6, 2, 3, 3];
bubbleSort(testArr);