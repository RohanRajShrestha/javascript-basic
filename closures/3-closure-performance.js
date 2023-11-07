// this is wrong as every method are appended inside contructor

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function () {
      return this.name;
    };
  
    this.getMessage = function () {
      return this.message;
    };
}
console.log(new MyObject('test', 'To see how object will be created'));

// instead use
function MyObject2(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
MyObject2.prototype.getName = function () {
    return this.name;
};
MyObject2.prototype.getMessage = function () {
    return this.message;
};

console.log(new MyObject2('test2', 'To see how object will be created'));

// In the two previous examples, the inherited prototype can be shared by all objects and the method definitions need not occur at every object creation.