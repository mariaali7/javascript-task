function makeBold(){
    let textBold=document.getElementById("bld");
    if(textBold.checked==true){
        document.getElementById("text").style.fontWeight="bold";
    }else{
        document.getElementById("text").style.fontWeight="normal";
    }
}
function sizeTxt(textSize){
  let size =document.getElementById(textSize).value;
  console.log("size",size);
  document.getElementById("text").style.fontSize=size;  
}
function load(){
    let data=document.getElementById("option").value;
    document.getElementById("imgToChange").src=data;
}

function textFamily(textfam) {
    let font = document.getElementById(text-fam).value;
    console.log("font",fontfamily);
    document.getElementById("arial-fam").style.fontFamily = font;
    document.getElementById("font-fam").style.fontfamily = font;

    
    
}