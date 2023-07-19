a = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

b = a.map(function (ele){
    return ele.name;
})
console.log(b);