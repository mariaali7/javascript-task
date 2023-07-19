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
    

    let html = "<h1>" + ele.name +"</h1>" + "<h2>" + ele.age + "</h2>";
    return html;

 })
 console.log(b);