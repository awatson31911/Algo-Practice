function maxOccuringChar(inputString) {
    const charStore = {};
    let currMax = 'init';
    charStore[currMax] = 0;

    for ( const char of inputString ) {
        if ( charStore[char] > 0 ) {
            charStore[char]++;
        } else {
            charStore[char] = 1
        }

        if (charStore[char] > charStore[currMax]) { currMax = char }
    }

    return currMax;
}