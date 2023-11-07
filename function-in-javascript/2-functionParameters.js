// A JavaScript function does not perform any checking on parameter values (arguments).

/**
  * JavaScript function definitions do not specify data types for parameters.

  * JavaScript functions do not perform type checking on the passed arguments

  * JavaScript functions do not check the number of arguments received (missing arguments are marked as undefined).
*/

function add(a, b) {
    console.log('value of a', a);
    console.log('value of b',b);
    return a + b;
}

console.log('sum', add(1))
console.log('sum', add(1, 2));

const sum = (a, b) => {
    console.log('value of a', a);
    console.log('value of b',b);
    return a + b;
}

console.log('sum', sum(1))
console.log('sum', sum(1, 2));

// Function Rest Parameter
function sumRest(...args) {
    let sum = 0;
    console.log(args);
    for (let arg of args) sum += arg;
    return sum;
}

let x = sumRest(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

// Just Showing that it is not required to by set as args, you can have your own naming convention in terms of naming the parametes

function sumResttets(...a) {
    let sum = 0;
    console.log(a);
    for (let arg of a) sum += arg;
    return sum;
}
let xb = sumResttets(4, 9, 16, 25, 29, 100, 66, 77);
console.log(xb);