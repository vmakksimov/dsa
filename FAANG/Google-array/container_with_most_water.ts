function findArea(heights: number[]): number {
  let maxArea = 0;
  let startIndex = 0; 
  let endIndex = heights.length - 1;

  while (startIndex < endIndex) {
    const width = endIndex - startIndex;
    const waterHeight = Math.min(heights[startIndex], heights[endIndex]);
    
    const currentArea = waterHeight * width;
    maxArea = Math.max(maxArea, currentArea);

    // Now it's clear: we are comparing the values AT the indices
    if (heights[startIndex] < heights[endIndex]) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return maxArea;
}

console.log(findArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
