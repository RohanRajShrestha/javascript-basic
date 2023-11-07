// a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.

/** Source :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures */


// the scope is called a function scope, because the variable is accessible and only accessible within the function body where it's declared.
function init() 
{
    var name = "Mozilla";
    function displayName()
    {
        console.log(name);
    }

    displayName();
}

// ReferenceError: name is not defined
// console.log(name);


init();

// Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data


// Performance considerations
// As mentioned previously, each function instance manages its own scope and closure. Therefore, it is unwise to unnecessarily create functions within other functions 
// if closures are not needed for a particular task, as it will negatively affect script performance both in terms of processing speed and memory consumption.


