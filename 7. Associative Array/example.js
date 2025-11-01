// Declaration

let myArr = {};
let fullNme = 'Anna Marieva';

myArr["Iva Todorova"] = "0885351156";
myArr["Iva Rusinova"] = '099887766555';
myArr["Iva Mihaylova"] = "08853533344";
myArr[fullNme] = '088977654445';

//console.log(myArr["Iva Todorova"]); Отпечатване на стойност
//console.log(myArr[fullNme]);


let grades = { // If we want to have space, the key have to be put in quotes!!!
    'Ivan' : 4,
    'Maria': 5.50,
    'Ivaylo': 3
}

grades['Anna'] = 5.00;


//console.log(grades["Anna"]);


// Using for-in

for (let key in grades) {
    //console.log(key); // prints all keys
    //console.log(grades[key]); // prints all grades (values)
    //console.log(`${key}: ${grades[key]}`); // Both
}




// Manipulating Associative arrys

//console.log(grades.hasOwnProperty('Ivaylo'));

delete grades['Maria'];
//console.log(grades.hasOwnProperty('Maria'));

for (let key in grades) {
    //console.log(`${key}: ${grades[key]}`); // Both
}

for (let [key, value] of Object.entries(grades)) {
    //console.log(`${key}: ${value}`);
}



// Sorting Associative Arrays - Винаги трябва първо да го превърнем в обикновен масив

let gradesEntires = Object.entries(grades);
//console.log(gradesEntires);

gradesEntires.sort((first, second) => {
    let firstKey = first[1];
    let secondKey = second[1];

    return firstKey - secondKey;
});

//console.log(gradesEntires);

for (let [key, value] of gradesEntires) {
    //console.log(`${key} -> ${value}`);
}


// Array and Object Destructuing

let arrayNumbers = [1, 2, 33, 4, 55];

[first, second, ...rest] = arrayNumbers;

//console.log(first);
//console.log(second);
//console.log(rest);


let obj = {
    fullName: "Ivan",
    age:5
}

let {fullName, age} = obj;

//console.log(fullName);
// console.log(age);



// Creating a Map

let objMap = {}; // Тука не е много ясно
objMap['Ivaylo'] = '0885351156';
let value = objMap['Ivaylo'];
let keyExists = objMap.hasOwnProperty('Ivaylo');

// Разликата - показва ни само стриг, при map не е така
objMap[123] = true;
for (let key of Object.keys(objMap)) {
    //console.log(key + ' - type: ' + typeof(key)); // Връща ми че типа на променливата е string
}


// Map
let map = new Map(); // Автоматично знаем, че искаме да ползваме асоцитивен масив
let mapValue = map.get('Ivaylo');
let mapValueExists = map.has('Ivaylo');

// Разликата 
map.set(1234, true);


for (let key of map.keys()) {
    //console.log(key + ' - type: ' + typeof(key)); // Въща че типа на променливата е number
}

// NB

//let keys = map
    //.keys()
    //.values()
    //.entries() // Не връща масив

// If we want to wark with array

let keys = Array.from(map.keys()); // Връщаме масив

// Sorting map - first we have to transform it into an array 

let newMap = new Map();

newMap.set('Sania', '0887675543');
newMap.set('Maria', '0887622543');
newMap.set('Vasilena', '0844445543');
newMap.set('Martin', '0885555543');
newMap.set('Filipa', '0883333543');

let sorted = Array.from(newMap.entries())
    .sort((a, b) => b[0]. localeCompare(a[0]));

for (let [key, value] of sorted) {
    //console.log(`${key} -> ${value}`);
}



// Set

let set = new Set();

set.add(1);
set.add(2);
set.add(1);
set.add(4);
set.add(5);
set.add(5);
set.add(3);

console.log(set.size); // Видимо сме въвели повече стойности, но в set не се записват повтарящи се стойности

for(let number of set) {
    console.log(number);
}

