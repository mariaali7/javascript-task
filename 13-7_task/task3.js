let buttons = document.querySelectorAll(".btn");
let texts = document.querySelectorAll(".text");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (texts[i].style.display === "none") {
      texts[i].style.display = "block";
      buttons[i].textContent="Hide";
    } else{
      buttons[i].textContent="Show";
      texts[i].style.display = "none";
    }
  });
}
