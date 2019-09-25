/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

class Solution { public int solution(int[] A); }

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/


const array = [9,3,5,3,9,9,9]
/*hash = {
  '9': 4,
  3: 2,
  '7': 1
}*/


function solution(A){
   result = 0
   for (let number of A){
     result ^= number
     console.log(result, number.toString(2), result.toString(2))
   }
   return result
}

console.log(solution(array))

//5 ^ 6  // gives 3

// At the bit level:
//     0101  (5)
//   ^ 0110  (6)
//   = 0011  (3)    
0000 + 1001 =        0000 0
1001 = 1001          1001 +9

                     1001 -9
                     0000 0
0011 = 1010           
1001 = 0011
0011 = 0000 = 0 
https://en.wikipedia.org/wiki/Exclusive_or