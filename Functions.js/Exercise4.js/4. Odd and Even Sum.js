function findSum(number) {

    function extractEven(num) {
        let result = [];
        do {
            let lastNumber = num % 10; // Взима последното цифра от числото
            if (lastNumber % 2 === 0) {
                result.push(lastNumber);
            }
            num = parseInt(num / 10); // Маха последната цигра, като parseInt маха всчко след запетаята
        } while (num > 0);
        return result;
    }

    function extractOdd(num) {
        let result = [];
        do {
            let lastNumber = num % 10;
            if (lastNumber % 2 !== 0) {
                result.push(lastNumber);
            }
            num = parseInt(num / 10);
        } while (num > 0);
        return result;
    }

    function sumArray(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }

    let odd = extractOdd(number);
    let even = extractEven(number);

    let oddSum = sumArray(odd);
    let evenSum = sumArray(even);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}