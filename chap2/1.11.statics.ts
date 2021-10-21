class ClassA {
  static typeName: string;
  constructor() {}
  static getFullName() {
    return "ClassA " + ClassA.typeName;
  }
}

const a = new ClassA();
// console.log(a.typeName);
ClassA.typeName = "Type Name";
console.log(ClassA.typeName);

// static properties can be used to share data across instances

class Runner {
  static lastRunTypeName: string;
  constructor(private typeName: string) {}
  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const b = new Runner("b");
const c = new Runner("c");

b.run();
c.run();

console.log(Runner.lastRunTypeName); // -> c
