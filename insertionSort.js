function insertionSort(numberArray) {
    for (let i = 1; i < numberArray.length; i++) {
        let rightIndex = i;
        while (rightIndex > 0 && numberArray[rightIndex - 1] > numberArray[rightIndex]) {
            const leftNumHolder = numberArray[rightIndex - 1];
            numberArray[rightIndex - 1] = numberArray[rightIndex];
            numberArray[rightIndex] = leftNumHolder;
            rightIndex--;
        }
    }
    return numberArray;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

const testArr = [10, 4, 2, 6, 2, 3, 3];
insertionSort(testArr);
