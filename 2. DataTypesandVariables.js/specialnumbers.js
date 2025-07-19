function solve(number) {

    for (let i = 1; i <= number; i++) {
        let currentNumber = i;
        let sum = 0;

        while (currentNumber > 0) {
            let lastDigit = currentNumber % 10;
            sum += lastDigit;
            currentNumber = parseInt(currentNumber / 10);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
           console.log(`${i} -> True`); 
        } else {
            console.log(`${i} -> False`);
        }
        
    }
}

solve(15);

