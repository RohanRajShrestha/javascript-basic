function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
        resolve('Mail has arrived');
        } else {
        reject(new Error('Failed to arrive'));
        }
    });
}

function checkMailTwo() {
    return new Promise((resolve, reject) => {
        resolve('Mail Two has arrived');
    });
}
checkMail()
.then((mail) => {
    console.log(mail);
})
.catch((err) => {
    console.error(err);
})
.finally(() => {
    console.log('Experiment Completed');
}).then(() => {
    return checkMailTwo()
}).then((val) => {
    console.log(val);
});

checkMail()
.then((mail) => {
    console.log(mail);
})
.catch((err) => {
    console.error(err);
})
.finally(() => {
    console.log('Experiment Completed');
})
.then(() => {
    return checkMailTwo();
})
.then((val) => {
    console.log(val);
});

//. The return 'Experiment completed'; inside the finally block won't be passed as the resolved value in the subsequent .then block. 
// The finally block does not modify the promise's result, and it cannot influence the data passed down the chain.