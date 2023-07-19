function removeElementsFromRight(arr, num) {
    arr.splice(arr.length - num, num);
    return arr;
  }

  let arr = [1, 2, 3, 4, 5];
  let num = 1;
  let newArr = removeElementsFromRight(arr, num);
  console.log(newArr);
