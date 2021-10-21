namespace OptionalChainingNamespace {
  interface Wheels {
    count?: number;
  }
  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }
  const car: Automobile | null = new Automobile();
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);
}
