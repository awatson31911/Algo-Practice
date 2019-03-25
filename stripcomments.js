function solution(input, markers) {
    const possibleMarkers = markers.join('|\\');
    const regExPattern = new RegExp(`(\\s|\\t)*(\\${possibleMarkers}).*`, 'g');
    
    return input.replace(regExPattern, '');
};


let str1 = "apples, pears # and bananas\ngrapes\nbananas !apples"
 str1.split(["#", "!"])
 solution(str1, ["#", "!"])
 solution("Q @b\nu\ne -e f g", ["@", "-"])