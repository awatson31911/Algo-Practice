function seven (m, steps = 0) {
    if (m < 100) { // m is down to two digits, this is our base case
        if (m % 7 === 0) {
            return [m, steps]; 
        } else {
            return false;
        }
    }

     return seven( Math.floor(m/10) - (2 * (m % 10)), ++steps )
}

console.log(seven(371)) //should return [35, 1]
console.log(seven(1603)) //should return [7, 2]
console.log(seven(477557101)) //should return [28, 7]