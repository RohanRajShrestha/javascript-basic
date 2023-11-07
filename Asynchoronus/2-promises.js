// A JavaScript Promise object contains both the producing code and calls to the consuming code:

// we use promise to run two different task concurrently

// syntax
let myPromise = new Promise( (myResolve, myReject) => {
    myResolve(); // when successful
    myReject();  // when error
});

let myPromise2 = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
    myResolve(value); // when successful
    myReject(err);  // when error
});

myPromise.then({
    function (val) {
        /* code if successful */
    },

    function(err) {
        /* code if some error */
    }
})

// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.