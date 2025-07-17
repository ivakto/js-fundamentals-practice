function solve(nameTown, population, area) {
    let isCorrect = true;

    if (nameTown.length < 3) {
        console.log("Town name must be at least 3 characters!");
        isCorrect = false;
    }

    if (population < 0) {
        console.log("Population must be a positive number!")
        isCorrect = false;
    }
    if (area < 0) {
        console.log("Area must be a positive number!")
        isCorrect = false;
    }

    if (isCorrect) {
        console.log(`Town ${nameTown} has population of ${population} and area ${area} square km.`)
        
    }
}

solve('Sofia', 1286383, 492);
solve('LA', 1481353, 512);
solve('Plovdiv', -45000, 100);
solve('Ka', 3600, -50);