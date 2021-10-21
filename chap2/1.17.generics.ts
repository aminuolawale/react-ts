function getLength<T>(arg: T): number {
  if (arg.hasOwnProperty("length")) {
    return arg["length"];
  }
  return 0;
}

console.log(getLength<number>(22));
console.log(getLength("Hello world"));

interface HasLength {
  length: number;
}

function getLength1<T extends HasLength>(arg: T): number {
  return arg.length;
}

console.log(getLength1<number>(22));
console.log(getLength1("Hello world"));
