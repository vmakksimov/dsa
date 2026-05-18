function findMaxWater(heights: number[]) {
  let totalWater = 0;
  for (let i = 0; i < heights.length; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    let leftI = i;
    let rightI = i;
    while (leftI >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftI]);
      leftI--;
    }

    while (rightI < heights.length) {
      maxRight = Math.max(maxRight, heights[rightI]);
      rightI++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[i];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
}

function findMaxWaterOptimized(heights: number[]) {
  let totalWater = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right){
    if (heights[left] <= heights[right]){
      if (heights[left] >= maxLeft){
        maxLeft = heights[left]
      } else {
        totalWater += maxLeft - heights[left]
      }
      left++
    } else {
      if (heights[right] >= maxRight){
        maxRight = heights[right]
      } else {
        totalWater += maxRight - heights[right]
      }
      right--
    }


  }

  return totalWater;
}

console.log(findMaxWaterOptimized([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
// expected 8
