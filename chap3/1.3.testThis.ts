function MyFunction() {
  console.log(this);
}

MyFunction(); // -> this here is the global scope
let test = new MyFunction(); //-> this here is
