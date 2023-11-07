// creating a Map// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// creates an key value pair 
//  { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
console.log(fruits);

// more way of creating Map
const newFruits = new Map();
newFruits.set('mango', 300)
newFruits.set('litchi', 200)
newFruits.set('papaya', 500)

console.log(newFruits);

// to check if exits
fruits.has("apples");

// to fetch one data use key
fruits.get("apples"); 

// for size
fruits.get("apples"); 

// to get only keys
fruits.keys()

// to get only values
fruits.values()

// to get only entries -- to get iterators
fruits.entries()

// to loop over
let text = "";
fruits.forEach (function(value, key) {
    text += key + ' = ' + value;
})

// to delete
fruits.delete('apples')

// to clear
fruits.clear()

fruits.size