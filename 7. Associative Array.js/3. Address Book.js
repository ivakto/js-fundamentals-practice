function solve(input) {

    let adressBook = {};

    for (let line of input) {
        let parsedData = line.split(":");
        let [name, adress] = parsedData;

        adressBook[name] = adress;
    }

    let adressEntries = Object.entries(adressBook);

    adressEntries.sort((first, second) => {
        let firstKey = first[0];
        let secondKey = second[0];

        return firstKey.localeCompare(secondKey);
    })

    for (let [key, value] of adressEntries) {
        console.log(`${key} -> ${value}`);
    }


}

solve(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);