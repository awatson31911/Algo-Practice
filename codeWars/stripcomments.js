function solution(input, markers) {
    // Join markers by regEx OR operator ("|") and escape character
        const possibleMarkers = markers.join('|\\'); 
    // Create new regEx pattern to allow for plugging in marker value dynamically. Also need to add escape character for first marker as it doesn't get escaped in the join function above
        const regExPattern = new RegExp(`(\\s|\\t)*(\\${possibleMarkers}).*`, 'g');
        
        return input.replace(regExPattern, '');
    };

let str1 = "apples, pears # and bananas\ngrapes\nbananas !apples"
 str1.split(["#", "!"])
 solution(str1, ["#", "!"])
 solution("Q @b\nu\ne -e f g", ["@", "-"])