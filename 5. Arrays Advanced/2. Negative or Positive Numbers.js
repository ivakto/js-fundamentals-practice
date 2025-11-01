function findNegativeOrPositive(array) {

    array = array.map(Number);

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArray.unshift(array[i]);
        } else {
            newArray.push(array[i]);
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);
    }

}

findNegativeOrPositive(['7', '-2', '8', '9']);