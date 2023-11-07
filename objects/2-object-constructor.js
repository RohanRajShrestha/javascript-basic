// constuctors in javascript

// creating a constuctor for cars
// if we call function with new it acts as an  consturctor
function GeneralCar(name, topSpeed)
{
    this.name = name;
    this.topspeed = topSpeed;
    this.run = function() {
        return `${this.name} is running`;
    }
}

car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('Alto', 200);

console.log(car1.run());

// other way witout using constructor
const generalCar = {
    run : function() {
        return `${this.name} is running`;
    },
    compare : function() 
    {
        return `${this.name} is runs as ${this.topspeed} while average is 280`;
    }
}

const nissan = {
    name : "Nissa n",
    topspeed : 180
}
let getRun = generalCar.run.call(nissan);
console.log('test',getRun);


// we can achieve same using class in JS
class car
{
    constructor(name, topSpeed)
    {
        this.name = name;
        this.topspeed = topSpeed;
    }

    run() {
        return `${this.name} is running`;
    }

    compare() 
    {
        return `${this.name} is runs as ${this.topspeed} while average is 280`;
    }
    // cant create properties like this
    // function name(params) {
        
    // }
}

car3 = new car('Nissan Class', 180);
car4 = new car('Alto Class', 200);

console.log(car3.run());
console.log(car4.compare());
