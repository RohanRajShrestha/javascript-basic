// prmoise are not hard
// syntax

let p = new Promise((resolve, reject) => {
    // anything in here will run in backgorund
})

// now what is we want to get the value after execution

let p1 = new Promise((resolve, reject) => {
    console.log("Pomise is Pending");
    setTimeout(() => {
        console.log('Promise is Fulfilled');
        resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Pomise is Pending");
    setTimeout(() => {
        console.log('Promise is Rejected');
        reject(new Error('Error Occured in P2'))
    }, 5000)
})

p1.then((value) => {
    console.log(value);
    console.log("We are inside p1 then");
})

p2.catch((err) => {
    console.log(err);
    console.log("Some Error has occured in p2 proimise");
})