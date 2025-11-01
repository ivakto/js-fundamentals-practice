// Създаваме обект, който не е фиксиран
let person = {
    name: 'Ivan',
    age: 24
};

// Можем да вадим стойности
let myPersonAge = person.age;
console.log(myPersonAge);
let myPersonAgeSecond = person['age'];
console.log(myPersonAgeSecond);


// Можем да манипулираме данни
person.age = 26;
console.log(person);

// Изтриване на ключ със стойнсот - случва се рядко
delete person.age; 
console.log(person);
// След като сме изтрили, можем да ги добавим отново
person.age = undefined;
console.log(person);


// Добавяне на нови свойства
person.password = 'ivan@vankata.com';
console.log(person);

// Добавяне на методи
let person2 = {
    name: 'Ivan',
    age: 24,
    sayHello() {
        console.log("Hello!");
    }
};

person2.sayHello();
console.log(person2);

// Добавяне на функция по всяко едно време
// person2.tellAge = function() {
//     console.log(person2.age);
// }
person2.tellAge = () => console.log(person2.age);
person2.tellAge();

// Помощни методи върху обектите - по-рядко се използва, полезно само в специфични ситуации
let person3 = {
    name: 'Iva',
    age: 23
};
person3.tellAge = () => console.log(person3.age);

let allKeys = Object.keys(person3);
console.log(allKeys);

let allValues = Object.values(person3);
console.log(allValues);

let valuesAndKeys = Object.entries(person3);
console.log(valuesAndKeys);
console.log(valuesAndKeys[0]);
console.log(valuesAndKeys[1]);

// Иретация обект
let person4 = {
    name: 'Miki',
    age: 23,
    password: 'mimiviki'
};

// Различни синтаксиси
for (let key of Object.keys(person4)) {
    console.log(`${key} : ${person4[key]}`);
}

for (let entry of Object.entries(person4)) {
    let key = entry[0];
    let value = entry[1];
    console.log(key + ": " + value);
}

for (let [key, value] of Object.entries(person4)) {
        console.log(`${key}: ${value}`);
    }





// Референтни и примитивни стойности

// Първи пример с обект - референтен тип
let myObj = { // Имаме създаден обект
    name: "Ivan"
}
someFunc(myObj); // Подаваме го на функция
function someFunc(myObj) { // Променяме му името
    myObj.name = "Radoslav"
}
console.log(myObj.name); // Вече е Радослав

// Втори пример с число - стойностен тип
let someValue = 100;
someValueFunction(someValue);
function someValueFunction(value) {
    value = 200;
}
console.log(someValue); // Остава 100

// Трети пример
let firstNumber = 1000;
let secondNumber = firstNumber;
secondNumber = 5000;
console.log(firstNumber); // Не се е променил

let firstArray = [1, 2, 3];
let secondArray = firstArray;
secondArray[0] = 100;
console.log(firstArray); // Променил се е




// JSON 
// Важно е да се отбележи, че не можем да имем функция, прехвърлят се само данни 
let someData = [
    {
        firstName: "Ivan",
        lastName: "Ivanov",
        age: 19
    },
    {
        firstName: "Iva",
        lastName: "Todorova",
        age: 27
    }
];

let dataJson = JSON.stringify(someData);
console.log(dataJson);

let parseData = JSON.parse(dataJson);
console.log(parseData[0]);





// Създване на клас

class Employee { // Винаги името е с главна буква, на практика е структура на обект, шаблон за създаване на обект
    // firstNameEmployee; // property 
    // lastNameEmployee;
    // ageEmployee;
    // hireDate;
    // Като направим конструктора, не е нужно да изпизваме тука propertytata

    constructor(firstNameEmployee, lastNameEmployee, ageEmployee, hireDate) {
        this.firstNameEmployee = firstNameEmployee;
        this.lastNameEmployee = lastNameEmployee; 
        this.ageEmployee = ageEmployee; 
        this.hireDate = hireDate;  // this сочи към property в обекта
    }

    // Можем да създаваме и фукции
    speak() {
        console.log(`Hello from ${this.firstNameEmployee}!`);
    }
}

let myEmployee = new Employee("Iva", "Todorova", 23, "08.2023"); // Създаване на обект
let mySecondEmployee = new Employee("Viktor", "Valev", 25, "09.2022");
// Вече и двама обекта имат една и съща структура

// След като създдем функцията constructor не е нужно да ги заоисваме по този начин
// myEmployee.firstNameEmployee = "Iva"; 
// myEmployee.lastNameEmployee = "Todorova";
// myEmployee.ageEmployee = 20;
// myEmployee.hireDate = "03.2026";

let myEmployeeArray = [myEmployee, mySecondEmployee];

for (let employee of myEmployeeArray) {
    console.log(employee.firstNameEmployee);
    employee.speak();
}
