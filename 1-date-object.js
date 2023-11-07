// date object
console.log(new Date());

// string to date
console.log(new Date('08-04-2023 04:54:98'));

console.log(new Date('June 13 2023'));

// mm/dd/yy -- format
console.log(new Date('02/23/2023'));

// to get certain values
let a = new Date('02/23/2023');
console.log(a);
console.log(a.getDay());

// explore other functions as well
console.log(a.getHours());
console.log(a.getFullYear());
console.log(a.getMonth());