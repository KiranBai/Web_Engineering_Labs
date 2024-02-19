console.log("Array Pratice");
var arr = ["K", "I", "R" , "A" , "N"];
console.log("Original" , arr);
arr.push("Bai")
console.log("After" , arr);
arr.pop();
console.log("Pop" , arr);
arr.shift();
console.log("Shift" , arr)
arr.unshift("k" , "T");
console.log("unShift" , arr)
var arr2 = ["kiran","Talreja"]
var arr3 = arr.concat(arr2) 
console.log("Concat" ,arr3)
var arr4 = arr.slice(0,3)
console.log("Slice" , arr4)
var arr5 = arr.splice(0,2)
console.log("Splice" , arr5)
console.log("indexOf" , arr3.indexOf("k"))
console.log("lastindexOf" , arr3.lastIndexOf("kiran"))
console.log("includes" , arr3.includes("Talreja"))
console.log("includes" , arr3.includes("B"))  



const myObj = {name : "Kiran" , age : "20" , city : "Daherki"};
console.log(`My name is ${myObj.name} and I am ${myObj.age} years old and I am belongs to ${myObj.city} city`);
console.log(Object.keys(myObj))
console.log(Object.values(myObj))
console.log(Object.entries(myObj))



console.log("Functions Pratice")
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log("Named Functions",greet("Kiran"))   

const greet2 = (name) => {
    return 'Hello, ' + name + '!';
}; 
console.log("Arrow Functions (ES6)",greet2("Kiran Welcome"));

const greet3 = function(name) {
    return 'Hello, ' + name + '!';
}
console.log("Anonymous Functions",greet3("Kiran Welcome"));

(function() {
    console.log('I am immediately invoked.');
})();

const numbers = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
const doubled = numbers.map(function(num) {
return num * 2;
});
console.log(doubled)


/*var no = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
function double(no) {
    return no * 2;
}
for(i=0; i<no.length ; i++) {
    arr2 = console.log(double(no[i]));
}
console.log(double)*/

var num=3;
var no = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
function double(no , num) {
    return no * num;
}
for(i=0; i<no.length ; i++) {
    arr2 = console.log(double(no[i] , num));
}
console.log(double)

console.log(no.filter(item=> item%3));
console.log(no.filter(item=> item%2==0));
var str = ["Hello" , "Kiran"]
console.log(str.filter(item => item.includes("a") )) 

console.log("The Sum of  1 to 7 is " , [1, 2, 3, 4, 5, 6, 7].reduce((total, item) => { return  total + item }, 0));

