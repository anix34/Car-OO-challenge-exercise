// PART ONE:

class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle is a ${this.make}, ${this.model} from ${this.year}.`;
    }
}

const myFirstVehicle = new Vehicle("Toyota", "Corolla", 1993)


// PART TWO:
class Car extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
        this.numWheels = 4;
    }   
}

const myFirstCar = new Car("Honda", "CRV", 2021);


// PART THREE:

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

const myFirstMotorcycle = new Motorcycle ("Harley", "Sportster", 2018);


// PART FOUR:

class Garage extends Vehicle {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!"
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }       
}