const mergeSort = (array) => {
  if (array.length < 2) return array;

  //split array
  const mid = Math.round(array.length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid, array.length);

  //sort split
  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  const newArr = [];

  // sort two sorted arrays
  while (0 < sortedLeft.length && 0 < sortedRight.length) {
    if (sortedLeft[0] < sortedRight[0]) {
      newArr.push(sortedLeft.shift());
    } else if (sortedLeft[0] > sortedRight[0]) {
      newArr.push(sortedRight.shift());
    }
  }

  //add remaining if other array is empty
  if (0 < sortedLeft.length) {
    newArr.push(sortedLeft.shift());
  }
  if (0 < sortedRight.length) {
    newArr.push(sortedRight.shift());
  }

  return newArr;
};

const test = [9, 3, 5, 7, 4, 8, 6, 2];
console.log(mergeSort(test));
