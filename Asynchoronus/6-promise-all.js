// sytanx

// Promise.all(iterable);

// what is want to run different unrelated promises or huge task at once
// it will work if we kept on calling then what to do for all
// but we can also perform 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First Promise FulFilled');
        resolve(true)
    })
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Second Promise FulFilled');
        resolve(true)
    })
})

const p3 = Promise.resolve(true)

const p4 = Promise.reject('Error Occured')
const p5 = Promise.reject('Error Occured')
const p6 = Promise.reject('Error Occured')

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
})

Promise.all([p4, p5, p6]).then((values) => {
    console.log(values);
}).catch((err) => {
    console.log(err);
})