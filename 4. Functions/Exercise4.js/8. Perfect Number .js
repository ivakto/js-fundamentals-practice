function perfectNumber(number) {
    
    function findPositiveDivisors(num) {
        let result = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                result.push(i);
            }
        }
        return result;
    }

    function sumArray(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }

    let resultArray = findPositiveDivisors(number);
    let sumResult = sumArray(resultArray);

    if (sumResult === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
    
}