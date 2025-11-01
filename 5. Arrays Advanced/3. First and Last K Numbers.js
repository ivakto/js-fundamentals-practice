function solve(array) {

    let k = array[0];
    array = array.slice(1);

    let firstKNumbers = array.slice(0, k);
    let lastKNumbers = array.slice(array.length - k);

    console.log(firstKNumbers.join(" "));
    console.log(lastKNumbers.join(" "));
}