// has different math functions(methods)
console.log(Math);

console.log(Math.PI);
console.log(Math.E);

// round will work as rounding in normal 5.4 = 4 / 5.5 = 5
console.log(Math.round(5.5));

// nearest highest integer 5.2 = 5 
console.log(Math.ceil(5.3));

// nearest lowest integer 5.2 = 5 
console.log(Math.floor(5.9));

// absolute value covert if negative into positive
console.log(Math.abs(5.5));

// to get square root
console.log(Math.sqrt(49));

// math power
console.log(Math.pow(2, 3));

// to get minimum and maximum
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));

// to generate random number
console.log(Math.random()); // returns between 0 and 1
console.log(100*Math.random); // to get upto 100
console.log(50 + (100 - 50)*Math.random()); // to get from one range to another

// to get random integer
console.log(Math.ceil(50 + (100 - 50)*Math.random()));