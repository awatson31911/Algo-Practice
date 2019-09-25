function insertionSort(numberArray) {
    if (numberArray.length === 0 || numberArray.length === 1) return numberArray;
    
    for (let i = 1; i < numberArray.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (numberArray[j] < numberArray[j - 1]) swap(j, j - 1, numberArray);
             else break;
        }
    }

    return numberArray;

    function swap(idx1, idx2, array) {
        let buffer = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = buffer;
    }
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

const testArr = [10, 4, 2, 6, 2, 3, 1, 3];
console.log(insertionSort(testArr));
