// object 
// classes
// encapsulation
// inheritence

// Associative arrays in PHP
// Dictionaries in Python
// Hash tables in C
// Hash maps in Java
// Hashes in Ruby and Perl

// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

// What is Mutability in JavaScript? If a data type is mutable, that means that you can change it. 
// Mutability allows you to modify existing values without creating new ones. 
// For every object , a pointer is added to the stack , and this pointer points to the object on the heap .

// If person is an object, the following statement will not create a copy of person:
// default objects
// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object
// object has properties and methods
const person = {
    firstName : 'Ram',
    lastName : 'Bahadur',
    fullName : function() {
        console.log('here');
        console.log(this.firstName + this.lastName);
        return this.firstName + this.lastName;
    }
}

console.log(person);
console.log(person.fullName());

// accessing properties
person.firstName;
console.log(person.firstName);

for (let p in  person) {
    console.log('loop');
    console.log(p);
}

// adding new properties
person.nationality = 'English'
person.age = 50;

delete person.age;

// nested
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}

// conerting objects to array

console.log(Object.values(myObj));