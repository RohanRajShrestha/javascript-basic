// getter and setter in javascript

const car = {
    model : 'x',
    year : 2002,
    speed : 300,
    get getSpeed() {
        return this.speed;
    },
    set setSpeed(speed) {
        this.speed = speed
    }
}

console.log(car.getSpeed);

// we cannot use it as an funtion
car.setSpeed = 340;
console.log(car.getSpeed);

// why not use function(method)
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
Object.pro
// as we need to call it as a function
// reduces syntax
// getter setter helps to maintain security
console.log(person.fullName());


// just copied from w3
// how we can use Object. to define getter setter
// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
});


// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

// Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
}
  
const myCar = new Car("Ford");