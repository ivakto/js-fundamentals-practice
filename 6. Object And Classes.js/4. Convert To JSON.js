function solve(firstName, lastName, hairColor) {

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    
    let stringJSON = JSON.stringify(person);
    console.log(stringJSON);
}
solve('George', 'Jones', 'Brown');