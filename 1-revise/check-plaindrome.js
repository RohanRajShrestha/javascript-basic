function checkPalindrome(str)
{
    if (!str) { return false}

    const givenStr = str.toString();
    const reverseStr = givenStr.trim().split("").reverse().join("");
    
    return givenStr === reverseStr
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("str"));
console.log(checkPalindrome("1234321"));