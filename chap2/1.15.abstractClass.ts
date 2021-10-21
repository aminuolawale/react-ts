namespace AbstractNamespace {
  // to keep this Vehicle class out of the global scope so it does not conflict with classes
  // with same names in other files.
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }
  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
  }
  const motorcycle = new Motorcycle();
  motorcycle.updateWheelCount(1);
  const autoMobile = new Automobile();
  autoMobile.updateWheelCount(3);
}
