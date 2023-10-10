const { endianness } = require("os");

function bubbleSort(arr) {
  var n = arr.length;

  for (var i = 0; i < n-1; i++) {
    for (var j = 0; j < n-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}


return arrayBuffer;

if (require.main === module) {
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));

  // Add your own test cases here
}
//The time complexity of Bubble Sort is O(n^2), where n is the number of elements in the array. This is because we have two nested loops, and we iterate through the array multiple times.

// breaking down the problem into smaller steps, using loops for repetition, and swapping values. These techniques can be applied to solve other sorting problems or any problem that requires iteration and comparison.
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
///To implement Bubble Sort in JavaScript, we can follow these steps:
//beginning with the first element of the array and compare it with the next element.
////If the next element is smaller, swap the two elements.
//Move to the next pair of elements and repeat the comparison and swapping process.
//Continuing this process until the end of the array is reached.
//Repeat steps 1-4 for a total of n-1 passes, where n is the length of the array.
//After each pass, the largest element will "bubble" to the end of the array.
//Finally, the array will be sorted in ascending order.
// pseudocode:

//function bubbleSort(arr):
    //n = length of arr

    //for i from 0 to n-1:
        //for j from 0 to n-1-i:
            //if arr[j] > arr[j+1]:
                //swap arr[j] and arr[j+1]

    //return arr

    