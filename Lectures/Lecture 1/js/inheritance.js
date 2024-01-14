// base class
class Vehicle {
    // this is called the moment an instance of this class is created
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    startVehicle() {
        console.log("starting vehicle...");
    }
}

// child class
class Car extends Vehicle {
    constructor(brand, color, engine) {
        // call parent instructor
        super(brand, color);
        this.engine = engine;
    }

    carDetails() {
        // the ` allows us to access variable values
        console.log(`This car is a ${this.brand} car of color: ${this.color} and engine: ${this.engine}`);
    }
}

let car = new Car('Benz', 'red', 'V1');
car.startVehicle();
car.carDetails();


