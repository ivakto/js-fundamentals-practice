function solve(input) {

    let phoneBook = {};

    for (let entry of input) {
        let parsedData = entry.split(" ");

        [fullNme, phoneNumber] = parsedData;
        phoneBook[fullNme] = phoneNumber;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}

solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);