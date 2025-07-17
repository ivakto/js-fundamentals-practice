function solve(array, number) {
    
    let result = [];
    let len = array.length;
    let r = number % len;

    for (let i = r; i < len; i++) {
        result.push(array[i]);
    }
    
    for (let i = 0; i < r; i++) {
        result.push(array[i]);
    }

    console.log(result.join(" "));
}

solve([51, 47, 32, 61, 21], 2);