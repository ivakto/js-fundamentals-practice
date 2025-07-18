function solve(array) {
    let longestSeq = [];
    let currentSeq = [array[0]];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            currentSeq.push(array[i]); // добавяме към текущата поредица
        } else {
            // ако текущата поредица е по-дълга от най-дългата, я запазваме
            if (currentSeq.length > longestSeq.length) {
                longestSeq = currentSeq;
            }
            // започваме нова поредица с текущия елемент
            currentSeq = [array[i]];
        }
    }
    // накрая проверяваме последната поредица
    if (currentSeq.length > longestSeq.length) {
        longestSeq = currentSeq;
    }

    console.log(longestSeq.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);