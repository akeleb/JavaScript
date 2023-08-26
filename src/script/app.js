
function togglemenu() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " nav--open";
  } else {
    x.className = "nav";
  }
  var element = document.getElementById("menu-toggle");
  element.classList.toggle("menu-toggle--open");
}

window.onload = function(){
  setTimeout(function(){
    document.getElementById("fadein").remove();
  },1000);
};

const hight = 1.70
const weight = 61

const bmi = weight / hight ** 2

let mybmi = document.getElementById("bmi")
mybmi.innerHTML = "The Body-Mass Index of Akele Is " + bmi
