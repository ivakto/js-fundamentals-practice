function solve(array, magicNumber) {

    for (let i = 0; i < array.length; i++) {
        
        for (let j = i+1; j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum === magicNumber) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}


solve([14, 20, 60, 13, 7, 19, 8], 27)