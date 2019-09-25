function findNodesWithZeroAndOneParents(array){
  let hash = {}
  let uniqueValues = []
  let results = [[],[]]

  for(let pair of array){
    uniqueValues.push(pair[1])
    uniqueValues.push(pair[0])

    if(hash[pair[1]]){
      hash[pair[1]].push(pair[0])
    } else {
      hash[pair[1]] = [pair[0]]
    }
  }

 uniqueValues = new Set(uniqueValues)

  for(let num of uniqueValues){
    if(hash[num] && hash[num].length === 1){
      results[1].push(num)
    } else if(!hash[num]){
      results[0].push(num)
    }
  }

  return results
}


function hasCommonAncestor(array, childA, childB){
  let hash = {}

  for(let pair of array){
    if(hash[pair[1]]){
      hash[pair[1]].push(pair[0])
    } else {
      hash[pair[1]] = [pair[0]]
    }
  }

  let arrayA = hash[childA]
  let arrayB = hash[childB]

  if(arrayA && arrayB){
    for(let parent of arrayA){
      if(arrayB.includes(parent)){
        return true
      }

      if(hash[parent]){
        for(let ancestor of hash[parent]){
          arrayA.push(ancestor)
        }
      }
    }

    for(let parent of arrayB){
        if(arrayA.includes(parent)){
          return true
        }

        if(hash[parent]){
          for(let ancestor of hash[parent]){
          arrayB.push(ancestor)
        }
      }
    }
  }

  return false
}

hasCommonAncestor(parentChildPairs, 6, 8)
findNodesWithZeroAndOneParents(familyPairs)