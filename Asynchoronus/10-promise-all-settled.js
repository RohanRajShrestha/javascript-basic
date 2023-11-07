// This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
// with an array of objects that describe the outcome of each promise.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject('foo')
  }),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
    results.forEach((result) => {
        console.log(result);
        console.log(result.value);
        console.log(result.status);
        console.log(result.reason);
    }),
).catch((err) => {
    console.log('error', err);
});

// to try sabai reject huda k hunxa