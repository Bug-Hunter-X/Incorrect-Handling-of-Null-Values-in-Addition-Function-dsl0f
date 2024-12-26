function foo(a, b) {
  if (a === null && b === null) {
    return 0;
  } else if (a === null) {
    return b;
  } else if (b === null) {
    return a;
  } else {
    return a + b;
  }
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(5, 10)); // Output: 15