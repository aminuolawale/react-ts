const callerObj = {
  name: "jon",
  cut: 4,
};

function checkMyThis(age) {
  console.log(`What is this ${this}`);
  console.log(`Do I have a name? ${this.name}`);
  console.log(`Do i have a cut? ${this.cut}`);
  this.age = age;
  console.log(`What is my age ${this.age}`);
}

checkMyThis(25);
checkMyThis.call(callerObj, 25);
