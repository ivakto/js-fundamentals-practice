function solve(arrNumbers) {

    let sum = 0;
    let sum2 = 0;
    let newNumbers = [];

    for (let i = 0; i < arrNumbers.length; i++) {

        sum += arrNumbers[i];

        if (arrNumbers[i] % 2 === 0) {
            newNumbers.push(arrNumbers[i] += i);
        } else {
            newNumbers.push(arrNumbers[i] -= i);
        }

        sum2 += arrNumbers[i];
    }
    console.log(newNumbers);
    console.log(sum);
    console.log(sum2);
    

}

solve([5, 15, 23, 56, 35]); 