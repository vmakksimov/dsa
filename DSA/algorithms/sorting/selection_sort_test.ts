function selectionSort(numbers: number[]): number[] {
  const sorted: number[] = [];
  const originalLength = numbers.length;
  
  while (sorted.length < originalLength) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    let smallestIndex = -1;
    

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
        smallestIndex = i;
      }
    }
    
    // Remove it from original array and add to sorted
    numbers.splice(smallestIndex, 1);
    sorted.push(smallestNumber);
  }
  
  return sorted;
}

console.log(...selectionSort([55, 105, 1, 78, 359, 1111, 524, 13, 8]));
