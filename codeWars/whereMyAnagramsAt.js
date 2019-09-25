function anagrams(str, arr) {
    const resultArr = []
    const strLength = str.length

    for (let i = 0; i < arr.length; i++) {   
        let element = arr[i];
        let elementLength = element.length
        let notMatched 
        let incrementer = 0
        let currSourceChar = str[incrementer]
        
        if (element.length != strLength) {
            continue
        } else {
            let j = 0

            while (j < element.length) {
                const currTargetChar = element[j]
                currSourceChar = str[incrementer]
                
                if (currSourceChar === currTargetChar) {
                    notMatched = 0
                    element = element.slice(0, j) + element.slice(j + 1, element.length)
                    incrementer++
                    j = 0
                    continue
                } else {
                    notMatched = 1
                    j++
                }
            }
            if (notMatched != 1) {
                resultArr.push(arr[i])
            }
        }
    }
    return resultArr
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //=> ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //=> []