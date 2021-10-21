function getLength(arg) {
    if (arg.hasOwnProperty("length")) {
        return arg["length"];
    }
    return 0;
}
console.log(getLength(22));
console.log(getLength("Hello world"));
function getLength1(arg) {
    return arg.length;
}
console.log(getLength1(22));
console.log(getLength1("Hello world"));
