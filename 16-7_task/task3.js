let a = ["mAriA" , "ALi" , "hala"];
let b = a.map(function (name) {
  const firstelement = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return firstelement;
});
console.log(b);