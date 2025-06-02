const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): any {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half, array.length)
  console.log('left:', left);
  console.log('right:', right);


  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left: any, right: any){
    let leftIndex = 0;
    let rightIndex = 0;
    let results: any[] = []

    while ( leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            results.push(left[leftIndex]);
            leftIndex++
        } else {
            results.push(right[rightIndex]);
            rightIndex++
        }
        console.log(`Merge: left ${left} right ${right} - results: ${results}`);
    }
    let c = 6
    return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


const answer = mergeSort(numbers);
console.log(answer);