a = [
       {
          name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
       age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
    ]
    b = a.map(function (ele){
        let result = "";
        if (ele.age >= 18) {
          result = ele.name + " can go to the matrix.";
        } else {
          result = ele.name + " is under age.";
        }
        return result;
      });
      
      console.log(b);


   