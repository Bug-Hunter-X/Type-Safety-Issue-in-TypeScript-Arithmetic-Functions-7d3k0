# TypeScript Type Safety Example

This repository demonstrates a simple TypeScript program with a potential type safety issue. The `add` and `subtract` functions lack robust type handling, making them vulnerable to runtime errors if non-number inputs are provided.

## Bug Description
The current implementation of `add` and `subtract` functions assumes that the input parameters will always be numbers. However, if non-number values are passed as arguments, the program will throw an error during runtime. 

## Solution
The improved solution involves adding type guards to check the input types before performing arithmetic operations. This prevents runtime errors and improves the overall robustness of the code.  Additionally, error handling (e.g., throwing an error with a helpful message) is included for situations where the input types are invalid.