function twoSum(numbers: number[], target: number) {
  //Input: numbers = [1,2,3,4], target = 3

  //Output: [1,2]

  //   let seenNumbers = new Map();
  //   for (let i = 0; i < numbers.length; i++) {
  //     const diff = target - numbers[i];
  //     if (seenNumbers.has(diff)) {
  //       return [seenNumbers.get(diff), i+1];
  //     }

  //     seenNumbers.set(numbers[i], i+1);
  //   }

  let leftp = 0;
  let righp = numbers.length - 1;
  while (leftp !== righp) {
    let sum = numbers[leftp] + numbers[righp];
    if (sum === target) {
      return [leftp + 1, righp + 1];
    } else if (sum < target){
        leftp++
    } else {
        righp--
    }
    
  }
}

console.log(twoSum([1, 2, 3, 1], 3));
