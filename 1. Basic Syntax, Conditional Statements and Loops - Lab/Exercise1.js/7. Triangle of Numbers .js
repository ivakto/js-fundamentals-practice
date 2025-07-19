function solve(n) {
    let result = '';

    for (let i = 1; i<= n; i ++) {
        result = '';
        for (let j = 0; j<i; j++) {
            result += i + ' ';
        }
    console.log(result);
    }
}

solve(3);