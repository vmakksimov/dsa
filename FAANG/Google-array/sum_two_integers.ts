function returnIndexesOfIntegers(listOfIntegers: number[], target: number) {
  if (listOfIntegers.length <= 1) null;

  const seenNumbers = new Map<number, number>();

  for (let i = 0; i < listOfIntegers.length; i++) {
    const complement = target - listOfIntegers[i];

    if (seenNumbers.has(complement)) {
      return [seenNumbers.get(complement), i];
    }
    seenNumbers.set(listOfIntegers[i], i);
  }

  return null;
}

console.log(returnIndexesOfIntegers([7,3,9,1,2], 11));
