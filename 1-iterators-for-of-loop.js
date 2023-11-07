// can only be used to iterate over iterables

for (const x of "W3Schools")
{
    // code block to be executed]
    console.log(x);
}

for (const x of [1,2,3,4,5])
{
    // code block to be executed
    console.log(x);
}

const obj = {
    name : 'val',
    age: 50
}
// obj is not iterable
for (const x of obj) {
    // code block to be executed]
    console.log(x);
}