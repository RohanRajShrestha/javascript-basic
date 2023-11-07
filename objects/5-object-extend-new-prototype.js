// what to do when you do not want to change the actual object clas
// heres what not to do

let obj = {
    name : "Harry Potter"
}

// need to add a new method to the object but how 
// we studied we could use prototype for that right? to add new methods to the object
// obj.prototype.getName we cannot access prototype like this directly from the object

Object.prototype.getName = function() {
    return this.name
}

// never do this as you are creating a global method for the base Object class

// what we can opt for

function Obj1(name) {
    this.name = name
}

Obj1.prototype.getName = function() {
    return this.name
}

Obj1.prototype.setName = function(name) {
    this.name = name
}

console.log(Obj1);
let a = new Obj1('test');
console.log(a);
// what can we do
const boxPrototype = {
    getValue() {
      return this.value;
    },
  };
  
const boxes = [
{ value: 1, __proto__: boxPrototype },
{ value: 2, __proto__: boxPrototype },
{ value: 3, __proto__: boxPrototype },
];

// check browser for how the prototype is showcased
// it will have an additional layer of prototype with boxPrototype method
console.log(boxes[0]);