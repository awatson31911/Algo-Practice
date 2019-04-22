function selectionSort(numberArray) {
    for (let currentIndex = 0; currentIndex < numberArray.length; currentIndex++) {
        let j = currentIndex;
        let smallestNumberIndex = j;
        while (j < numberArray.length) {
            if (numberArray[j] < numberArray[smallestNumberIndex]) {
                smallestNumberIndex = j;
            }
            j++;
        }

        if(numberArray[smallestNumberIndex] !== numberArray[currentIndex]) {
            const newSmallestNumber = numberArray[smallestNumberIndex];
            numberArray[smallestNumberIndex] = numberArray[currentIndex];
            numberArray[currentIndex] = newSmallestNumber;
        }
    }
    return numberArray;
}


// Do not edit the line below.
exports.selectionSort = selectionSort;


const testArr = [10, 4, 2, 6, 2, 3, 3];
selectionSort(testArr);
console.log(selectionSort(testArr));
