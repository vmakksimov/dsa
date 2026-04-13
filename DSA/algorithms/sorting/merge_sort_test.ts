function mergeSort(array: number[]): any {
  if (array.length === 1) {
    return array
  }
    const half = Math.floor(array.length / 2)
    const right = array.slice(half, array.length)
    const left = array.slice(0, half)

    return merge(
    mergeSort(left),
    mergeSort(right)
  )
}



function merge(left: number[], right: number[]){

    let leftIndex = 0
    let rightIndex = 0
    const results = []

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            results.push(left[leftIndex])
            leftIndex++
        }else {
            results.push(right[rightIndex])
            rightIndex++
        }
        console.log(`Merge: left ${left} right ${right} - results: ${results}`);
    }

    const a =5;
    const result = results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    return result;
}


console.log(mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))