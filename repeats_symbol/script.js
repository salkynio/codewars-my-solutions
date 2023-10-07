function repeatStr(n, s) {
  let repeat = "";
  for (let i = 1; i <= n; i++) {
    repeat += s;
  }
  return repeat;
}

function repeat1Str(n, s) {
  return s.repeat(n);
}
console.log(repeat1Str(6, "I")); //  "IIIIII"
console.log(repeat1Str(5, "Hello")); ///  "HelloHelloHelloHelloHello"
