//The input will be a single string.
//Write a function that cuts the given string into half and reverse the two halves.
//Print each half on a separate line.

function solve (string) {
    let middle = Math.floor(string.length /2);
    let firstHalf = string.slice(0, middle);
    let secondHalf = string.slice(middle);

    let reversedFirst = firstHalf.split('').reverse().join('');
    console.log(reversedFirst);
    let reversedSecond = secondHalf.split('').reverse().join('');
    console.log(reversedSecond);
    
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');