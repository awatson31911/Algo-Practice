function selectionSort(numberArray) {
    if (numberArray.length === 1 || numberArray.length === 0) return numberArray;
    
    let smallestNumIdx; 
    for (let i = 0; i < numberArray.length - 1; i++) {
        let smallestNumIdx = i;

        for (let j = i + 1; j < numberArray.length; j++) {
            if (numberArray[j] < numberArray[smallestNumIdx]) smallestNumIdx = j;
        }

        swap(smallestNumIdx, i, numberArray)
    }

    return numberArray;


    function swap(idx1, idx2, array) {
        const buffer = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = buffer;
    }
}


// Do not edit the line below.
exports.selectionSort = selectionSort;


const testArr = [10, 4, 2, 6, 1,2, 3, 3];
selectionSort(testArr);
console.log(selectionSort(testArr));
