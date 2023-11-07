// using catch 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
.then((values) => {
    console.log(values);
})
.catch((error) => {
    console.error(error.message);
});

// Logs:
// "reject"
  

// handling poosible rejection one-by-one in all
const p6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p7 = new Promise((resolve, reject) => {
    reject(new Error("p2_immediate_rejection"));
});


// this will execute all even if one promise gets rejected
Promise.all([p6.catch((error) => error), p7.catch((error) => error)])
.then(
(values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
    console.log('end');
},
);