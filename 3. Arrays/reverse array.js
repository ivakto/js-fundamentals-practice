function solve(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i];
    }

    // let reversedArr = newArr.reverse();
    // console.log(reversedArr);

    let reversedArr = [];

    for (let i = 0; i < newArr.length; i++) {
        let currentValue = newArr[i];
        reversedArr[newArr.length - 1 - i] = currentValue;
    }

    console.log(reversedArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);