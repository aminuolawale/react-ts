class Person {
  constructor() {}
  msg: string;
  speak() {
    console.log(this.msg);
  }
}

const tom = new Person();
tom.msg = "hello";

tom.speak();

// now a more standard class with access modifiers
class Person1 {
  constructor(private msg: string) {}
  speak() {
    console.log(this.msg);
  }
}

const jim = new Person1("hello");
jim.speak();

// forcing an error

// jim.msg = "this causes an error";

// a class with a readonly property

class Person2 {
  constructor(private readonly msg: string) {}
  speak() {
    this.msg = "speak " + this.msg;
    console.log(this.msg);
  }
}

const naomi = new Person2("hello");
naomi.speak();
