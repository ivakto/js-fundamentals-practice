function solve(arrNumbers) {

    let sum = 0;

    for (let number of arrNumbers) {
        number = Number(number);
        if (number % 2 == 0) {
            sum += number;
        }
    }

    console.log(sum);
}

solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);