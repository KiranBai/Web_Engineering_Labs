function customFilterFunction(numbers, filterFunc) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
      if (filterFunc(numbers[i])) {
        results.push(numbers[i]);
      }
    }
    return results;
  }
  
  const numbers = [1, 2, 3];
  const double = (x) => x * 2;
  
  // Custom filter function that doubles the numbers
  const doubledNumbers = customFilterFunction(numbers, (number) => double(number));
  console.log(doubledNumbers);