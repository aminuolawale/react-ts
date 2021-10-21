let literal: "tom" | "linda" | "jeff" | "sue" = "linda";

literal = "sue";

console.log(literal);

// now testing with an invalid object

literal = "this is an invalid string";

console.log(literal);
