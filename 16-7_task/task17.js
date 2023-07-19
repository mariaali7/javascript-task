function numberToArray(num) {
    let str = num.toString();
    let result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(parseInt(str.charAt(i)));
    }
    return result;
  }

  console.log(numberToArray(123456));
