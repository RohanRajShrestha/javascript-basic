// it ends with end of browser or session
// other are same as local storage as follows

//  window.localStorage is also an object
sessionStorage.setItem('Name', "Harry")

let username = sessionStorage.getItem('Name');
console.log(username);


// to remove only one particular key
sessionStorage.removeItem('Name')
console.log(sessionStorage.getItem('Name'));

// you cannot add arrow
sessionStorage.setItem('array-key', ['arr', 'arr', 'arr'])
console.log(sessionStorage.getItem('array-key')); // this will be string so instead we can convert it into json

// we will get to know about json in later projects

// using JSON to store array or dictionary
sessionStorage.setItem('array-key', JSON.stringify(['arr', 'arr', 'arr']))
console.log(JSON.parse(sessionStorage.getItem('array-key')));

// same as to storing objects
let objNames = {
    nameOne :"Harry",
    nameTwo : 'Garry' 
}
sessionStorage.setItem('dict-key', JSON.stringify(objNames))

console.log(JSON.parse(sessionStorage.getItem('dict-key'))); 


// to clear local storage
// sessionStorage.clear()