function replaceKeys(obj, keyMap) {
    let newObj = {};
    for (let key in obj) {
      if (key in keyMap) {
        newObj[keyMap[key]] = obj[key];
      }
      else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }

  let obj = { name: 'John', age: 30, city: 'New York' };
let keyMap = { name: 'firstName', city: 'location' };
let newObj = replaceKeys(obj, keyMap);
console.log(newObj);