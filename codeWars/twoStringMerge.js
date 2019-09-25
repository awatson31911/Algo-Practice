function twoStringMerge (str1, str2) {
    //3 Base Cases
    if (str1.length === 1 && str2.length === 0) {
        return str1[0];
    } else if (str1.length === 0 && str2.length === 1) {
        return str2[0];
    } else if (str1.length === 1 && str2.length === 1) {
        return str1[0] + str2[0];
    } 

    //Only add first element of either string if the string has elements
    return `${str1.length >=1 ? str1[0] : ''}${str2.length >=1 ? str2[0] : ''}${twoStringMerge(str1.slice(1), str2.slice(1))}`
}

console.log(twoStringMerge('Hello', 'Worlduh'));
console.log(twoStringMerge('Hello', 'World'));