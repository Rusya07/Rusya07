// Машина!


class Transport {
   constructor(type, name, model) {
    this.type = type;
    this.name = name;
    this.model = model;
   }
}


class Car extends Transport {
    constructor(type, name, model, engine) {
        super(type, name, model);

        this.engine = engine;
    }

    brake(){
        console.log(`Engine ON! ${this.name}`)
    }
}

const lexus = new Car("Car", "Lexus", "LX570", "v8 5.7");
console.log(lexus)
lexus.brake()




// Яхта!


class transport {
   constructor(type, name, model) {
    this.type = type;
    this.name = name;
    this.model = model;
   }
}


class Yacht extends Transport {
    constructor(type, name, model, engine) {
        super(type, name, model);

        this.engine = engine;
    }

    brake(){
        console.log(`Engine ON! ${this.name}`)
    }
}

const bavaria = new Car("Yacht", "Bavaria", "S30 Open", "V6");
console.log(bavaria)
bavaria.brake()
