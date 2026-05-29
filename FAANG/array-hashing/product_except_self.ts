function productExceptSelf1(nums: number[]) {
  let finalArray = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        prod *= nums[j];
      }
    }
    finalArray[i] = prod;
  }
  return finalArray;
}

function productExceptSelf(nums: number[]) {
  const finalProducts = new Array(nums.length);
  // There are no elements to the left of the first element,
  // so we initialize it to 1.
  finalProducts[0] = 1;
  let rightPassProduct = 1

  // We start looping from index 1 because index 0 is already done
  for (let i = 1; i < nums.length; i++) {
    // The product (multiplication) of everything to the left of the current element (i)
    // is simply the previous element multiplied by whatever was to the left of it.
    finalProducts[i] = nums[i - 1] * finalProducts[i - 1];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    finalProducts[j] =  rightPassProduct * finalProducts[j]
     rightPassProduct *= nums[j]
  }
  return finalProducts
}

console.log(productExceptSelf([1, 2, 4, 6]));
// expected [48,24,12,8]
