function bubbleSort(number: number[]): number[] {
  let counter = 1;
  while (counter !== 0) {
    counter = 0
    for (let i = 0; i < number.length -1; i++) {
      let currentNumber = number[i];
      let nextNumber = number[i + 1];
      if (currentNumber > nextNumber) {
        number[i] = nextNumber;
        number[i + 1] = currentNumber;
        counter++;
      }
    }
  }

  return number;

}

console.log(...bubbleSort([55, 105, 1, 78, 359, 1111, 524, 13, 8]));
