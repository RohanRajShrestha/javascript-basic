// all combination
const getAllCombination = (str) => 
{
    const combination = [];
    if (!str) { return combination }
    for (const c in str) {
        combination.push(str[c])
        for (const d in str) {
            if (c === d) {continue;}
            combination.push(str[c] + str[d])
        }
    }
    return combination
}
console.log(getAllCombination('dog'));

// after combination
const getCombination = (str = "") => 
{
    const combination = [];
    if (!str) { return combination }

    for (const c in str) {
        let temp = str[c]
        combination.push(temp)

        for (let index = parseInt(c) + 1; index < str.length; index++) {
            temp += str[index]
            if (temp !== str[c] + str[index]) {
                combination.push(str[c] + str[index])
            }
            combination.push(temp)
        }
    }
    return combination
}

console.log(getCombination('dog'));
