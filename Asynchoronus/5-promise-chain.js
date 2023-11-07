let p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(100)
    }, 2000)
})

// let p2 = new Promise(function(reslove, reject){
//     setTimeout(() => {
//         resolve(5)
//     }, 2000)
// })

p1.then((value) => {
    console.log(value);
    let p2 = new Promise(function(reslove, reject){
        setTimeout(() => {
            resolve(5)
        }, 2000)
    })
    return p2; // return is necessary or else, it will execute other promise
}).then((value) =>{
    console.log('We are done.');
    return 2; // a constant will be converted into promise
}).catch((err) => {
    console.log('Error Occureed');
})