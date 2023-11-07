// so here we have two functions
// do not worry about syntx we will go over it in other script
async function fetchPrices()
{
    const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    return await response.json();
}

function promptForDishChoice()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Pizza', 'Burger', 'Fries'])
        })
    })
}
console.log(promptForDishChoice());
console.log(fetchPrices());
// this returned an pending promise, why? Async returns Promises
// and as we know promises are asynchronous

// as it works asynchronously we have to await for the response
async function getPriceWithAsync() {
    const choice = await promptForDishChoice();
    const prices = await fetchPrices();
    console.log(choice, prices);
    return prices[choice];
}
// however in above code first choice will be fetched then only the prices will be fetched
// what if we could achieve this concurrently

// we can use async with Promise as follows
async function getPriceWithPromise() {
    const [choice, prices] = await Promise.all([
        promptForDishChoice(),
        fetchPrices()
    ])
    return { choice, prices };
    // console.log('Using Promise Async',choice, prices);
}

// const p1 = await getPriceWithAsync();
// console.log('p1',p1);
let data = {};
const p2 = getPriceWithPromise().then((values) => {
    data = values
})

// look how asynchronusly javascript works
console.log(p2);
console.log(data);
// we are still getting pending and empty value logs here