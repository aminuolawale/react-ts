class Vehicle {
  constructor(protected wheelCount: number) {}
  // protected so children can read
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miless`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
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
motorcycle.updateWheelCount(1);

motorcycle.showNumberOfWheels();
