// testing intersections
let obj: { name: string } & { age: number } = {
  name: "tom",
  age: 25,
};

console.log(obj);

// testing unions

let unionObj: null | { name: string } = null;
unionObj = { name: "jon" };
console.log(unionObj);

let unionObj1: { name: string } | { age: number } = null;
unionObj1 = { name: "jon", age: 55 };
console.log(unionObj1);
