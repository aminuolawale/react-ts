const allTrucks = [2, 5, 7, 10];
const initialCapacity = 0;
const allTonnage = allTrucks.reduce(
  (totalCapacity, currentCapacity) => totalCapacity + currentCapacity,
  initialCapacity
);
console.log(allTonnage);
