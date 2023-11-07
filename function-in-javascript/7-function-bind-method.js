// using it to get method from one object to another as follows
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
let fullName = person.fullName.bind(member);
// here we bind the function fullName from person object to member object with this keyword refering to the member object
console.log(fullName());
console.log(person.fullName.bind(member)());

// the person object is intact 
console.log(person.fullName());
console.log(member);

// using it to prevent this from losing the values as you can see in callback portion
const person1 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
        return this.firstName + " " + this.lastName;
    }
}
// as of here we can display John Doe
console.log(person1.display());

function show(callBack)
{
    console.log(callBack());
}
// passing function as a callback the this property is lost, so we bind it and then pass as an argument
display = person1.display.bind(member)
show(display);