// simple step

function myFunction()
{
    console.log('High');
}

// invoking
myFunction();

// getting in the area with this keyword

// The Global Object
let windowObject = myFunction();            // x will be the window object

function myFunction() {
    // returns windoww object as this refers to global object in a function
    return this;
}

console.log(windowObject);


// Invoking a Function as a Method
const myObj1 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        // as this is inside an object it refers to the object
        // console.log(this);
        return this.firstName + " " + this.lastName;
    }
}
// and yes we can declare a method / function using function inside an object and invoke it as follows
console.log(myObj1.fullName());

// what happens when we return this inside the fullName

const myObj2 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        // as this is inside an object it refers to the object
        return this;
    }
}
// we already know this refers to object when inside an object so, the anser is pretty sure
console.log(myObj2.fullName());