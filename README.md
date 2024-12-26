# JavaScript Bug: Incorrect Null Handling in Addition Function

This repository demonstrates a common JavaScript bug involving the incorrect handling of null values in an addition function.

## Bug Description

The `foo` function is designed to add two numbers. However, it contains a bug where it always returns 0 if either input is null, regardless of whether the other input is a number. The correct behavior is to return the sum of the numbers if both are valid numbers, and only return 0 if both inputs are null.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code using a JavaScript runtime environment (Node.js, browser's console, etc.).
3. Observe that the output is incorrect when one of the inputs is null.

## Solution

The solution is provided in `bugSolution.js`.  It correctly checks if both inputs are null before returning 0. If one is null and the other is a number, it correctly returns the number. If both are numbers, it correctly returns their sum.

## Lessons Learned

- Always consider edge cases and special values, such as null, undefined, and NaN when writing functions.
- Use strict equality (`===`) for reliable comparisons.
- Carefully consider the expected behavior of your function and thoroughly test it.
