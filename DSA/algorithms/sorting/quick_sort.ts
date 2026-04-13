function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
    if (left < right) {
        // Partition the array and get pivot index
        const pivotIndex = partitionHoare(arr, left, right);
        
        // Recursively sort elements before and after pivot
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partitionLomuto(arr: number[], left: number, right: number): number {
    // Choose rightmost element as pivot
    const pivot = arr[right];
    let i = left - 1;  // Index of smaller element
    
    for (let j = left; j < right; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    // Place pivot in correct position
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;  // Return pivot index
}

function partitionHoare(arr: number[], left: number, right: number): number {
    // Choose middle element as pivot (avoids worst-case on sorted arrays)
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left - 1;
    let j = right + 1;
    
    while (true) {
        // Find element on left that should be on right
        do {
            i++;
        } while (arr[i] < pivot);
        
        // Find element on right that should be on left
        do {
            j--;
        } while (arr[j] > pivot);
        
        // If pointers cross, partition is complete
        if (i >= j) return j;
        
        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

console.log(quickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))