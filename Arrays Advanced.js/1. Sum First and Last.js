function findSum(array) {
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop())

    let sum = firstElement + lastElement;
    console.log(sum);
}

findSum(['20', '30', '40']);