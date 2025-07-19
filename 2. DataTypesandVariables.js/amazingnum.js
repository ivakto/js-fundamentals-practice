function solve(number) {

    numberString = String(number);
    let sum = 0;

    for (let i = 0; i < numberString.length; i++) {
        let currentSymbol = numberString[i];
        sum+= Number(currentSymbol);
    }

    let sumString = String(sum);

    let isAmazing = false;

    for (let i = 0; i < sumString.length; i++) {
        if (sumString[i] === '9') {
            isAmazing = true;
        } 
    }

    if (isAmazing) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

solve(1233);
solve(999);