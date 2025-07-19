function solve(array) {
    let result = array
        .filter((num, index) => index % 2 !== 0)
        .map(num => num * 2);

    console.log(result.reverse().join(' '));    

}