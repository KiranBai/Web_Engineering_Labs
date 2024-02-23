// Medium: Object Practice
// Create an object named car with properties brand, model, and year. Write a function calledcarInfo that takes the car object as input and returns a string with the car's information. For
// example, if car has the values { brand: 'Toyota', model: 'Camry', year: 2022 }, the functionshould return 'The Toyota Camry was manufactured in 2022.'.

// Create a car object 
const carProp = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
  }; 
  function carInfo(car) {
    return `The ${car.brand} ${car.model} was manufactured in ${car.year}.`;
  }
  console.log(carInfo(carProp)); 