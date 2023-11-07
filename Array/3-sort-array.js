// sorting an array in javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

fruits.reverse()
console.log(fruits);

// sorting arrays with nnumbers

// read the desciption of sort to understand why are we using the function
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

console.log(points);

// reversing a numerical array
points.sort((a,b) => b - a)
console.log(points);

// accurate sorting to sort array randomly

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);

// to find max value in array using math
console.log(Math.max.apply(null, points));
console.log(Math.min.apply(null, points));

// sorting array with object
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);