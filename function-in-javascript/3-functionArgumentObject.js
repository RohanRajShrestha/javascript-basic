/**
 * JavaScript functions have a built-in object called the arguments object.
 * The argument object contains an array of the arguments used when the function was called (invoked).
 * This way you can simply use a function to find (for instance) the highest value in a list of numbers:
*/

// arguments are javascript objects
let total = sum(1, 2, 4, 5, 54, 545, 454);
function sum()
{
    console.log(arguments);
}

let calulateTotal = someBusinessLogic(100, 300, 23, 454)

function someBusinessLogic()
{
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// arguments are passed by value
let a = 2;
let obj = { "key" : 'value'};
passByValue(1, a, 3, obj)

// remember objects are passed by reference
console.log(obj);

// remember primitive values are passed by value
console.log(a);
function passByValue()
{
    console.log(arguments);
    // changing the actual object
    arguments[3].key = 'test'
    console.log(arguments[3]);

    // changing the primitive value
    arguments[1] = 3
    console.log(arguments[1]);
}

// arrow functions do not have arguments
// alternative and better prefernce will be to use ... rest operator
// using (...)rest operator
const arrowFunction = (...rest) => rest;