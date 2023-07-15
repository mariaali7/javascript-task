let dropdown =document.createElement("select");
let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
option1.textContent ="Spain";
option1.value ="Spain";
option2.textContent ="Norway";
option2.value ="Norway";
option3.textContent = "select";
option3.value = "select";
dropdown.appendChild(option1);
dropdown.appendChild(option2);
dropdown.appendChild(option3);

dropdown.onchange = function(){
    let selectedoption =dropdown.options[dropdown.selectedIndex].value;
   let img = document.createElement("img");
   img.style.width= "15vw";
   img.style.height= "10vh";
   img.src = "./spain.jpg";
    if (selectedoption === "Spain" ){
        img.src = "./spain.jpg";
    } else if(selectedoption === "Norway"){
        img.src = "./norway.jpg";
    } else if(selectedoption === "select"){
        img.src = "./select.png";
    }

let container = document.getElementById("container");
container.innerHTML = "";
  container.appendChild(dropdown);
  container.appendChild(img);
};


let container = document.getElementById("container");
container.appendChild(dropdown);