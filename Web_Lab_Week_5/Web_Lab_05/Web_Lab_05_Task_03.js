// Hard: Function Practice
// Write a higher-order function called applyFunction that takes two arguments: an array of
// numbers and a function. The function should apply the given function to each element of
// the array and return a new array with the results. For example, if the array is [1, 2, 3] andthe function is (x) => x * 2, the result should be [2, 4, 6].
function doubleFunction(numbers, double) {
    const results = [];
    for (i = 0; i < numbers.length; i++) {
      results.push(double(numbers[i]));
    }
    return results;
  }
const numbers = [1, 2, 3];
const double = (x) => x * 2;
const doubledNumbers = doubleFunction(numbers, double);
console.log(doubledNumbers);