function bubbleSort(numbersArray) {
    for (let index = 0; index < numbersArray.length; index++) {
        let hasNoSwaps = false;
        while (hasNoSwaps === false) {
            hasNoSwaps = true;
            let currentIndex = index;
            const number = numbersArray[currentIndex];
            let nextIndex = currentIndex + 1;

            while (nextIndex < numbersArray.length) {
                const nextNumber = numbersArray[nextIndex];
                if (number > nextNumber) {
                    numbersArray[currentIndex] = nextNumber;
                    numbersArray[nextIndex] = number;
                    currentIndex++;
                    hasNoSwaps = true;
                }
                nextIndex++;
            }
        }
    }
    return numbersArray;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

let testArr = [10, 4, 2, 6,2, 3, 3];
bubbleSort(testArr);
console.log(bubbleSort(testArr));