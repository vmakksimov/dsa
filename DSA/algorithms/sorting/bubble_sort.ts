function bubbleSort(array: number[]){
    let counter = 1;
    while (counter !== 0){
        counter = 0;
        for (let i = 0; i < array.length -1; i++){
          if (array[i] > array[i +1]){
            let currentIndex = i;
            let nextIndex = i + 1;
            let currentElement = array[currentIndex];
            array[currentIndex] = array[nextIndex];
            array[nextIndex] = currentElement;
            counter++;
          }
        }
    }
    return array
}




console.log(...bubbleSort([55,105,1,78,359,1111,524,13,8]))