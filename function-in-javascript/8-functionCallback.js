// callback is nothing but us passing function to another function 
function fetch() {
    // statement to fetch data
}

// it is not required to be names as callBack, it can be anything
function create(data, callBack)
{
    // statment to create data
    callBack();
}

// we passing function as an argument
create({name : 'Hello'}, fetch);

const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
        return this.firstName + " " + this.lastName;
    }
}
// as of here we can display John Doe
console.log(person.display());

function show(callBack)
{
    console.log(callBack());
}
// passing function as a callback the this property is lost
// but here it is undefined
show(person.display);