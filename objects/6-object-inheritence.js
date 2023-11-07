// using ES6 syntax

class Employee {
    constructor(name, exp, div) {
        this.name = name
        this.experience = exp
        this.division = div
    }
    // getter setters
    get getName() {
        return this.name;
    }
    set setName(x) {
    this.name = x;
    }

    slogan()
    {
        return `I am ${this.name}. `;
    }

    // static method where we dont use properties and methods of the class
    static add(a,b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(name, exp, div, language, github) {
        super(name, exp, div)
        this.language = language
        this.github = github
    }

    favouriteLanguage()
    {
        return this.language;
    }

    // just an exmple for static methods
    static multiply(a, b)
    {
        return a * b;
    }
}

const rohan = new Programmer("test", 2, "Lays", "Go", "Rohan244")
console.log(rohan);


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