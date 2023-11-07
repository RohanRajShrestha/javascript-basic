// we used to mostly rely on settimeout for asychronous purpose

setTimeout(printWelcome, 2000)

function printWelcome()
{
    console.log('welcome user');
}
console.log('Which Runs First?');

// When you pass a function as an argument, remember not to use parenthesis.

// With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.

// But, asynchronus programmes are difficult to write and difficult to debug.