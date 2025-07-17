function solve(array) {
    let result = [];

    for (let i = 0; i <array.length; i++) {

        let isBigger = true;
        let left = array[i];

        for(let j = i + 1; j < array.length; j++){

            let right = array[j];

            if (right >= left) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result.push(left);
        }
    }
    console.log(result.join(" "));
}
solve([1, 4, 3, 2]);