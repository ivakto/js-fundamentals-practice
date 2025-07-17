function solve(array) {
    let map = new Map();

    for (let line of array) {
        [fullName, ...grades] = line.split(' ');
        grades = grades.map(Number);

        if (map.has(fullName)) {
            let existingGrades = map.get(fullName);
            existingGrades.push(...grades);
            map.set(fullName, existingGrades);
        } else {
            map.set(fullName, grades);
        }
    }

    // Сортиране по азбучен ред
    let sorted = Array.from(map.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));

    // Печатане на средната оценка
    for (let [name, grades] of sorted) {
        let sum = 0;
        for (let grade of grades) {
            sum += grade;
        }
        let average = (sum / grades.length).toFixed(2);
        console.log(`${name}: ${average}`);
    }
}

solve([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);