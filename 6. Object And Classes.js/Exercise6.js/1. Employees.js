function solve(array) {
    
    let result = [];

    for (let employee of array) {
        let employeeObj = {
            "name" : employee,
            "personalNumber" : employee.length
        };
        result.push(employeeObj);
    }
    result.forEach((em) => {
        console.log(`Name: ${em.name} -- Personal Number: ${em.personalNumber}`);
    })    
}

solve([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

]);

solve([

'Samuel Jackson',

'Will Smith',

'Bruce Willis',

'Tom Holland'

]);