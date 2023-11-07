// apply and call are same
// only difference being, how we pass the argument after the object

// as call and apply both have first argument as an object

// myObj1.fullName.call(object1, arg1, arg2);

// in apply we do not require to list down args 
// instead pass an array of arguments
// myObj1.fullName.apply(object1, [arg1, arg2]);

const person = {
    fullName: function(city, country) {
        // it destructures the city and country from the array according to the order they are passed in
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
  
person.fullName.apply(person1, ["Oslo", "Norway"]);


// just a reminder how array destructuring works in javascript
function test([a, b] = c)
{
    console.log(a);
    console.log(b);
}

test([1, 2]);

const [a, b, ...otherVal] = [1, 2, 3];
console.log(otherVal);