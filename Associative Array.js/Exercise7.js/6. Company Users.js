function solve(array) {

    let map = new Map();

    for (let line of array) {
        let parsedData = line.split(' -> ');
        let companyName = parsedData[0];
        let employeeId = parsedData[1];
        
        if (!map.has(companyName)) {
            map.set(companyName, new Set());
        }
        map.get(companyName).add(employeeId); // добавяме служителя към въпросната компания
        
    }
    let sortedCompany = Array.from(map.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));

        for(let [key, value] of sortedCompany) {
            console.log(key);
            for (let id of value) {
                console.log(`-- ${id}`);
            }
        }
}

solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);