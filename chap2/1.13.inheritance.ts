class Vehicle {
  constructor(private wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miless`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorcycle = new Motorcycle();
const autoMobile = new Automobile();
motorcycle.showNumberOfWheels();
autoMobile.showNumberOfWheels();
