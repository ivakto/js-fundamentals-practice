// Write a function that receives a string and two numbers. 
// The numbers will be a starting index and count of elements to substring. Print the result.

function solve(string, startIndex, count) {
    let substring = string.substring(startIndex, startIndex + count);
    console.log(substring);
}

solve('ASentence', 1, 8);