
class Engine {
    constructor(type) {
        this.type = type;
    }

    start(){
        console.log("starting the engine");
    }
}

class Car {
    constructor(brand, color, engine) {
        this.brand = brand;
        this.color = color;
        this.engine = engine;
    }

    startCar() {
        this.engine.start();
        console.log("starting car...");
    }
}

let engine = new Engine('V1');
let car = new Car('Benz', 'Red', engine);
car.startCar();

