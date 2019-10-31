// function twoStringMerge (str1, str2) {
//     //3 Base Cases
//     if (str1.length === 1 && str2.length === 0) {
//         return str1[0];
//     } else if (str1.length === 0 && str2.length === 1) {
//         return str2[0];
//     } else if (str1.length === 1 && str2.length === 1) {
//         return str1[0] + str2[0];
//     } 

//     //Only add first element of either string if the string has elements
//     return `${str1.length >=1 ? str1[0] : ''}${str2.length >=1 ? str2[0] : ''}${twoStringMerge(str1.slice(1), str2.slice(1))}`
// }

function combineStrings(a, b) {
    let newStr = '';
    let longestLen = a.length > b.length ? a.length : b.length;
    let i = 0;

    while (i < longestLen) {
        if (a[i]) newStr += a[i];
        if (b[i]) newStr += b[i];
        
        i++;
    }

    return newStr;
}


console.log(combineStrings('Hello', 'Worlduh'));
console.log(combineStrings('Hello', 'World'));