// Easy: Array Practice
// Write a function called reverseArray that takes an array as input and returns a newarray
// with the elements reversed. For example, reverseArray([1, 2, 3]) should return [3, 2, 1].
function reverseArray(arr) {
    const reversedArr = [];
  
    for (i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
  
    return reversedArr;
}
const originalArray = [1, 2, 3];
console.log("Orignal Array : ",originalArray); 
const reversedArray = reverseArray(originalArray);
console.log("Reverse Array : ",reversedArray); 