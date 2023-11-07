// with var the scope is either function or global

function functionScope()
{
    // function scoped
    var a = 'Apple';
}
// ReferenceError: a is not defined
// console.log(a);


// no issue as in other language variables declared as such throw error
// but using var the variable has a global scope
if (Math.random() > 0.5)
{
    var global = 1;
} else {
    var global = 2;
}
console.log(x);

// block scoped
if (Math.random() > 0.5) {
    const block = 1;
} else {
    const block = 2;
}
console.log(block); // ReferenceError: x is not defined

if (Math.random() > 0.5) {
    const blockScope = 1;
} else {
    const blockScope = 2;
}
console.log(block); // ReferenceError: x is not defined