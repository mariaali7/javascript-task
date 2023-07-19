let a = {
    name: "Angelina Jolie",
    age: 80
  };
  
  let b = Object.entries(a).map(function(entry){
    return entry;
  });
  
  console.log(b);
