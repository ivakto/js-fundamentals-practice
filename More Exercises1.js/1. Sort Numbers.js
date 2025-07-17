function solve(number1, number2, number3) {

    let numbers = [number1, number2, number3];
    numbers.sort((a, b) => b-a);
    numbers.forEach(num => console.log(num));
}

solve(1, -5, 6);

