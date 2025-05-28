
function findFactorialRecurise(num: number): any {
  if (num === 2) {
    return 2;
  }
  return num * findFactorialRecurise(num - 1)
}


function findFibonacciRecursive(num: number): number {
  if (num < 2) {
    return num;
  }
  return findFibonacciRecursive(num - 1) + findFibonacciRecursive(num - 2);
}

console.log(findFactorialRecurise(5));
console.log(findFibonacciRecursive(10));
