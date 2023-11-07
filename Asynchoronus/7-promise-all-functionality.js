// Promise.all waits for all fulfillments (or the first rejection).

// all these run concurrently
const p1 = Promise.resolve(3)
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Third Promise');
    }, 4000)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Third Promise');
    }, 2000)
})
const promises = [p1, p2, p3, p4];

Promise.all(promises).then((values) => {
    console.log(values)
})

// If the iterable contains non-promise values, they will be ignored, but still counted in the returned promise array value (if the promise is fulfilled):

// let's look how ASynchronous is Promise.all

// This following example demonstrates the asynchronicity of Promise.all when a non-empty iterable is passed:
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
    console.log("the queue is now empty");
    console.log(p);
})

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }

// with above we can see the Promise don't get executed in sync, it goes through it's states pending, fulfilled or reject

// what happens when rejects

const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const reject = Promise.all(mixedPromisesArray);
console.log(reject);
setTimeout(() => {
    console.log("the queue is now empty in terms of reject");
    console.log(p);
});

reject.catch((err) => {
    console.log(err);
})

// Logs:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: 44 }

// same output with pending and rejected state

// so when does it run synchronously?
// when the iterable passed are empty

const empty = Promise.all([]);
console.log('empty' ,empty);

// Logs : empty Promise { [] }
// returns fulfilled as soon as it runs