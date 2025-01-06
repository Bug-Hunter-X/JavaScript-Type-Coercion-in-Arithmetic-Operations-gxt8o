function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error
  }
  return a + b;
}

console.log(foo(1, "1")); //Output: NaN
console.log(foo(1, 1)); //Output: 2

//Alternative using parseInt or parseFloat:
function foo2(a,b) {
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}

console.log(foo2(1, "1")); //Output: 2
console.log(foo2(1, 1)); //Output: 2