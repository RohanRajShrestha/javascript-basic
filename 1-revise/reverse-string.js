// for solutions 
// https://stackoverflow.com/questions/45691069/reverse-a-string-in-javascript-without-using-any-inbuilt-function

function reverse(str = '')
{
    let revStr = '';
    const givenStr = str.trim();
    for (let i = givenStr.length - 1; i >=0; i--)
    {
        revStr += givenStr[i]
    }

    return revStr
}

// need to define before using methods of object
let str = "test";

console.log(reverse("test"));

// using array and in built methods
function reverseAnyValue(str)
{
    if (!str) { return ""; }
    const givenStr = str.toString();
    return givenStr.trim().split("").reverse().join("");
}
 
console.log(reverseAnyValue(undefined)); //denifednu
console.log(reverseAnyValue(null)); // llun

// console.log(str.split("")); // changes the string to array
// console.log(str.split("").reverse()); // reverses the array
// console.log(str.split("").reverse().join("")); // converts array to string