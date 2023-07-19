a = [{first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"}, 
  {first: 'Colt', last:"Steele"}]

  b = a.map(function (ele){
    return `${ele.first} ${ele.last}`;
  })

  console.log(b);