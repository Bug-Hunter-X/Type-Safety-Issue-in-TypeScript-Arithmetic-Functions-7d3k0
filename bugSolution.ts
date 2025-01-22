function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b;
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

//Demonstrating error handling:
try {
  let errorResult = add('5', 3);
} catch (error) {
  console.error(error);
} 