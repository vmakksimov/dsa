
function reverseStringRecursivly(string: string): any{
    if (string.length < 2) {
        return string;
    }

    return reverseStringRecursivly(string.slice(1)) + string[0];
    
}

function findFibonacciRecursiveIterative(num: number): number {
    let result = [0, 1];
    for (let i = 2; i < num + 1; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result[num];

 
}

function findFibonacciRecursive(num: number): number {
  if (num < 2) {
    return num;
  }
  return findFibonacciRecursive(num - 1) + findFibonacciRecursive(num - 2);
}

console.log(reverseStringRecursivly("god"));
