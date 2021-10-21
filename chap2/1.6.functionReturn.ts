function runMore(distance: number): number {
  return distance + 10;
}

// void function not declared to return void
function eat(calories: number) {
  console.log("I ate " + calories + " calories");
}

// void function declared to return void
function sleepIn(hours: number): void {
  console.log("I slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
