function solve(input) {
    
    let result = '';
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    console.log(result);
}
solve('Hello');