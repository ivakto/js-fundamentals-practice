// Първи начин

// function solve(number) {

//     numberString = String(number);
//     let sum = 0;

//     for (let i = 0; i < numberString.length; i++) {
//         numberDigit = Number(numberString[i]);
//         sum += numberDigit;
//     }

//     console.log(sum);
    

// }

// solve(245678);
// solve(97561);
// solve(543);

// Втори начун

function solve(number) {

    let n = number;
    let result = 0;

    do {
        let last = n % 10;
        result += last;
        n = parseInt(n / 10);
    } while (n > 0);
    console.log(result);
}

 solve(245678);
 solve(97561);
 solve(543);
