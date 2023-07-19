function removeElementsFromLeft(arr, num) {
    arr.splice(0, num);
    return arr;
  }

  let arr = [1, 2, 3, 4, 5];
let num = 1;
let newArr = removeElementsFromLeft(arr, num);
console.log(newArr)