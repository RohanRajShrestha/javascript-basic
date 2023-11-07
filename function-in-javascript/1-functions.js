// declarations of normal function
// the normal function has a this
 
function functionName()
{
    // statements
}
// The arguments object is a local variable that contains the arguments passed to the function when called. Let's try it out:
// function print()
// {
//     console.log(arguments)
// }

// arrow function do not have arguments
const print = () => {
    console.log(arguments)
    console.log(arguments[0]);
}

print("hello", 400, false)
// Uncaught ReferenceError: arguments is not defined

print("hello", 400, false)

// it can be stored as a variable
const x = function (a, b) { return a * b}

// function calls 
console.log(x());
functionName();

// function in js can be created with constructors 

const myFunction = new Function("a", "b", "return a * b");

let constucator = myFunction(4, 3);

// functions can be self invoking
// using () as such
(function () {
    // it is block scoped
    let introduce = "Hello!!";
    console.log(introduce);
})();

// function hoisting

console.log(hoisted());
function hoisted() {
    return 1;
}
