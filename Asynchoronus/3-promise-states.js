// different states in promise

// pending 
let pending =  new Promise(function(resolve, reject) {

})

console.log(pending);

// fulfilled
let fulfilled = new Promise(function(resolve, reject) {
    resolve(56)
})

console.log(fulfilled);

// reject
let reject = new Promise(function(resolve, reject) {
    reject(56) //  resolving with the value of 36
})

console.log(reject);

// why we use promise?
// promise is used for parellel execution

// example
// fetch data from A api ==> all 3 fetching data can be executed parallely without hindering the rest of the script run
// fetch image from B api ==> all 3 fetching data can be executed parallely without hindering the rest of the script run
// fetch image from C api ==> all 3 fetching data can be executed parallely without hindering the rest of the script run
// Rest of the script

// parallel execution 
let p1 = new Promise((resolve, reject)=> {
    console.log('Promise Is Pending');
    setTimeout(()=> {
        console.log('Promise is Fulfilled.');
        resolve(true);
    }, 5000)
})

let p2 = new Promise((resolve, reject)=> {
    console.log('Promise Is Pending');
    setTimeout(()=> {
        console.log('Promise is Rejected');
        reject(new Error('Promise Rejected.'));
    }, 5000)
})

// see in browser these are executed parallely
console.log(p1, p2);
