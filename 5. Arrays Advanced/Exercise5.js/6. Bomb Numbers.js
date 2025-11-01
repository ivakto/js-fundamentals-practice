// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.
//Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right.
// Detonations are performed from left to right and all detonated numbers disappear.
//The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.
//The output is the sum of the remaining elements in the sequence.

function solve(sequence, bombData) {
    let [bombNum, power] = bombData;
    while (sequence.includes(bombNum)) {
        let index = sequence.indexOf(bombNum);
        let start = index - power;
        if (start < 0) {start = 0};
        let end = index + power;
        if (end > sequence.length - 1) {end = sequence.length - 1};
        sequence.splice(start, end - start + 1);
    }
    function sumArr (arr) {
        let result = 0;
        for (el of arr) {
            result += el;
        }
        return result;
    }
    console.log(sumArr(sequence));
}