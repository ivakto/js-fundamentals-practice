function signCheck(numOne, numTwo, numThree) {

    let totalNegativeNumbers = 0;

    if (numOne < 0) {
        totalNegativeNumbers++;
    }

    if (numTwo < 0) {
        totalNegativeNumbers++;
    }

    if (numThree < 0) {
        totalNegativeNumbers++
    }

    if ( totalNegativeNumbers === 1 || totalNegativeNumbers === 3 ) {
        return 'Negative';
    } else {
        return 'Positive';
    }
}

let result = signCheck(5, -12, -5);
console.log(result);