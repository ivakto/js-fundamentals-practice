class Vehicle {

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts =  parts;
        this.parts.quality = parts.engine * parts.power;
        this.fuel =  fuel;
    }

    drive(fuel) {
        this.fuel -= fuel;
    }

    showFuel() {
        console.log(`The current fuel is ${this.fuel}`);
    }
}

