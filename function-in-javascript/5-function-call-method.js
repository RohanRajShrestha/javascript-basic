// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
}

let a = person.fullName(); 
console.log('a',a );
// in the above example, we are stuck with John Doe being the full name
// what if we require to have dynamic names

// we can use call to send in object as an argument to the function
const person1 = {
    firstName:"Mary",
    lastName: "Doe"
}
// instead off altering the default values of the person
// we just pass on new arguments to be used by the fullName Method
let b = person.fullName.call(person1)
console.log('a', a);
console.log('b', b);
console.log(person);

const personDetails = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const person3 = {
    firstName:"John",
    lastName: "Doe"
}
  
console.log(personDetails.fullName.call(person3, "Oslo", "Norway"));