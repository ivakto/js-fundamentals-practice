function solve(array) {

    let totalSum = 0;

    for (let i = 0; i < array.length; i++) {
        totalSum += array[i];
    }

    let leftSum = 0;

    for (let i = 0; i < array.length; i++) {

        let rightSum = totalSum - leftSum - array[i];

        if (leftSum === rightSum) {
            console.log(i);
            return;
        }

        leftSum += array[i];

    }

    console.log('no');

}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);