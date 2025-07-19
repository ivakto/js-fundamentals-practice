function createPerson(firstName, lastName, age) {

// Първи начин
//     let person = {};
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.age = Number(age);
//     return person;


// Втори начин
//     let person = {
//         firstName: firstName,
//         lastName: lastName,
//         age: Number(age)
//     }
//     return person;

// Трети начин
    return { firstName,
            lastName,
            age
    }
}    

let person = createPerson("Peter", "Pan", "20");
console.log(person);
