// to watch local storage window.localStorage

/**
 * Storage {length: 0}
length
: 
0
[[Prototype]]
: 
Storage
clear
: 
ƒ clear()
getItem
: 
ƒ getItem()
key
: 
ƒ key()
length
: 
(...)
removeItem
: 
ƒ removeItem()
setItem
: 
ƒ setItem()
constructor
: 
ƒ Storage()
Symbol(Symbol.toStringTag)
: 
"Storage"
get length
: 
ƒ length()
[[Prototype]]
: 
Object
*/

// every website has a different local storage
// it doesn't end on end of session

//  window.localStorage is also an object
localStorage.setItem('Name', "Harry")

let username = localStorage.getItem('Name');
console.log(username);


// to remove only one particular key
localStorage.removeItem('Name')
console.log(localStorage.getItem('Name'));

// you cannot add arrow
localStorage.setItem('array-key', ['arr', 'arr', 'arr'])
console.log(localStorage.getItem('array-key')); // this will be string so instead we can convert it into json

// we will get to know about json in later projects

// using JSON to store array or dictionary
localStorage.setItem('array-key', JSON.stringify(['arr', 'arr', 'arr']))
console.log(JSON.parse(localStorage.getItem('array-key')));

// same as to storing objects
let objNames = {
    nameOne :"Harry",
    nameTwo : 'Garry' 
}
localStorage.setItem('dict-key', JSON.stringify(objNames))

console.log(JSON.parse(localStorage.getItem('dict-key'))); 


// to clear local storage
localStorage.clear()