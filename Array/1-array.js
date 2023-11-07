const fruits = ['apple', 'Mango', 'Orange'];

// accessing array
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

console.log(fruits);

// array methods

console.log('for length',fruits.length);
console.log('Convert To String',fruits.toString());
const pushed = fruits.pop()
console.log('remove last element of an array',pushed);
console.log('remove last element of an array', fruits.push('Grapes')); // returns the inserted index

const removeFirst = fruits.shift() // removes first element and returns removed value
console.log(fruits, removeFirst);

const addFirst = fruits.unshift('Apple') // add first element and returns length
console.log(fruits, addFirst);

console.log(fruits.join('-')); // convets array into string

const del = delete fruits[0];
console.log(del);
console.log(fruits);
// it leaves the array index empty [ <1 empty item>, 'Mango', 'Grapes' ]

// The concat() method does not change the existing arrays. It always returns a new array.
const fruits2 = ['Berry', 'Banana', 'Watermelon']
console.log(fruits.concat(fruits2));
console.log(fruits);


const myArr = [[1,2],[3, [4, 5]],[5,6]];
const newArr = myArr.flat(2);
console.log(newArr);


// adding new values without removing
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(1, 0, "Lemon", "Kiwi");

console.log(fruits3);

const deleted = fruits3.splice(2, 2, "L", "K");
console.log(deleted);
console.log(fruits3);

// to only remove element from array
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(0, 1);

console.log(fruits4);


// slice -- returns new array
const citrus1 = fruits.slice(1, 3);

const citrus2 = fruits.slice(2);

console.log(citrus1, citrus2);
console.log(fruits);
// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()