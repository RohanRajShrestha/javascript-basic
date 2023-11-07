const obj = {
    name : "harry",
    channel : "youtube"
}

// what is __proto__ inside any object in javascript
console.log(obj);

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype

// we don't directly modify the actual object instead we add property or method extending the protoype

function Obj(name)
{
    this.name = name
}

const user =  new Obj('Harit');
console.log(user);

// use protype for adding properties as above and methods
Obj.prototype.getFullName = function() 
{
    return `${this.name} ${this.lastname}`
}

// adding new properties
Obj.prototype.lastname = "Always"
console.log(user.lastname);

// prototype allows us to add new properties but we should not be adding accessors as this 
// we can user definePrototype for accessors
// Obj.prototype.getlastName = function()
// {
//     return this.lastname
// }

// Obj.prototype.setlastName = function(lastName)
// {
//     this.lastname = lastName
// }

Object.defineProperty(user, "getLastName", {
    get : function () {this.lastname}
});
Object.defineProperty(user, "setLastName", {
    set : function (value) {this.lastname = value;}
});

user.setLastName = 'test-last'
console.log(user.getFullName());