function solve (countNumbers) {

   let printedNumbers = 0;
   let currentNumber = 1;
   let sum = 0;

   while (printedNumbers < countNumbers) {

        console.log(currentNumber);

        sum += currentNumber;
        currentNumber += 2
        printedNumbers ++;
   }

   console.log(`Sum: ${sum}`);
}

solve(12, 5);