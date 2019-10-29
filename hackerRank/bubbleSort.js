function countSwaps(a) {
  const n = a.length;
  let numSwaps = 0;
  let firstElement, lastElement;


  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(a[j], a[j + 1]);
        numSwaps++;
      }
    }

  }

  firstElement = a[0];
  lastElement = a[a.length - 1];

  console.log('Array is sorted in ' + numSwaps + ' swaps.');
  console.log('First Element ' + firstElement);
  console.log('Last Element ' + lastElement);

  return;

  // swap helper function
  function swap(num1, num2) {
    const idx1 = a.indexOf(num1)
    const idx2 = a.indexOf(num2)
    a[idx1] = num2;
    a[idx2] = num1;
  }
}

const input = [5, 4, 3, 2, 7, 1, 10]
countSwaps(input);