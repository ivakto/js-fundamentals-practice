//You will be given an array of integer numbers on the first line of the input.
//Remove all repeating elements from the array.
//Print the result elements separated by a single space.

function solve(arr) {
    let result = [];
    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    console.log(result.join(' '));
}