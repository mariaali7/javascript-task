let arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
let key = 'title';
let value = 'instructor';

function addKeyAndValue(arr, key, value) {
  arr.forEach(function(obj) {
    obj[key] = value;
  });
  return arr;
}

console.log(addKeyAndValue(arr, key, value));
