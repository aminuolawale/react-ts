let val: unknown = 2;
val = "string value";
val = new Array();
if (val instanceof Array) {
  val.push(33);
}

console.log(val);
