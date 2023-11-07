// defining set
// set are objects too
// Set object inherit the top most Object and all the other sets are created with inheriting Set Object
const lettersInAlphabet = new Set(['a', 'b','c', 'd']);
// Set(4) { 'a', 'b', 'c', 'd' }
// check the layer of prototype inherictence for this
console.log(lettersInAlphabet);

// methods of an Set Object

// adding to set - .add()
lettersInAlphabet.add('e');
lettersInAlphabet.add('f');
lettersInAlphabet.add('g');

console.log(lettersInAlphabet);

// deleting to set - delete()
lettersInAlphabet.delete('g')
console.log(lettersInAlphabet);

// to check if value exists
console.log(lettersInAlphabet.has('g')); // false

// to get values or keys that is values in set as no key
console.log(lettersInAlphabet.keys());
console.log(lettersInAlphabet.values());

// to get value and value
console.log(lettersInAlphabet.entries());

lettersInAlphabet.forEach((val) => {
    console.log(val);
})

console.log(lettersInAlphabet.size);
lettersInAlphabet.clear()
console.log(lettersInAlphabet.size);
