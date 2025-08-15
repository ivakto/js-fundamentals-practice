// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, 
// the third is the second biggest one, and the fourth is the second smallest one, and so on.
//Print the elements on one row, separated by a single space.

function solve (arr) {
    let sortedArray = arr.sort((a, b) => b-a);
    let middle = Number(sortedArray.length / 2);
    let result = [];

    for (let i = 0; i < middle; i++) {
        let biggest = sortedArray.shift();
        let smallest = sortedArray.pop();
        result.push(biggest);
        result.push(smallest);
    }
    console.log(result.join(' '));
}