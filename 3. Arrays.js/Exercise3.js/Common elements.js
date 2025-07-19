function solve(arr1, arr2) {

    for (let el of arr1) {
        for (let el2 of arr2) {
            if (el === el2) {
                console.log(el);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2']);