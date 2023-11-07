// simple clouser exmple

function printMemberInfo()
{
    const greeting = "Hello";
    function getName(name)
    {
        console.log(greeting + name);
    }

    return getName
}

let x = printMemberInfo()
x('Shrhan');
x('Rosti');

// make a program that adds 5 or 10 to input

// function makeAdder(x)
// {
//     const add = x;
//     return (y) => x + y; 
// }

// example using compact arrow key function 
const makeAdder = (x) => (y) => x + y

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

