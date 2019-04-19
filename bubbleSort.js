let arr = [10, 4, 2, 6, 3, 7, 2, 4];
function bubbleSort(numbersArray) {
    numbersArray.forEach( (number, currentIndex) => {
        let nextIndex = currentIndex + 1;
        while (nextIndex < numbersArray.length) {
            const nextNumber = numbersArray[nextIndex];
            if(number > nextNumber) {
                numbersArray[currentIndex] = nextNumber;
                numbersArray[nextIndex] = number;
                currentIndex++;
            }
            nextIndex++;
        }
    });
}

// Do not edit the line below.
//exports.bubbleSort = bubbleSort;

bubbleSort(arr);