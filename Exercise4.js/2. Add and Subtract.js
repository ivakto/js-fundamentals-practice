function addAndSubstract(number1, number2, number3) {

    function sum(x, y) {
        return x+y;
    }

    function substract(x, y) {
        return x-y;
    }

    let sumResult = sum(number1, number2);
    let finalResult = substract(sumResult, number3);

    console.log(finalResult);
}

addAndSubstract(23, 6, 10);