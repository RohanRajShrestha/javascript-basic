// iterating over array

const fruits = ['Apple', 'Mango', "Orange", "Grapes"];

// for loop
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// foreach
fruits.forEach((value, index, array) => {
    console.log(value);
})

// map creates a new array
// The map() method does not change the original array.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((val, index, array) => {
    return val - 5
});

console.log(numbers1);
console.log(numbers2);

// filter() -- The filter() method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);

// reduce -- The reduce() method does not reduce the original array.
const num = [45, 4, 9, 16, 25];
let sum = num.reduce(myFunction);
console.log(sum);
function myFunction(total, value, index, array) {
  return total + value;
}

const num1 = [4, 9, 16, 25, 29];
let first = num1.find(myFunction);
console.log(first);
function myFunction(value, index, array) {
  return value > 18;
}