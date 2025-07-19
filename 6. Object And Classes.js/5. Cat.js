function solve(array) {

        class Cat { // Винаги класовете най-отгоре

        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
         meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }


    for (let data of array) {
        let parsedData = data.split(" ");

        let name = parsedData[0];
        let age = parsedData[1];

        let cat = new Cat(name, age);
        cat.meow();
    }



}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);