var menuBTN = document.getElementById("menuBTN");
var menuBTNBack = document.getElementById("menuBTNBack");

var navContainer = document.getElementById("navContainer");
var oakleyLogo = document.getElementById("oakleyLogo");

menuBTN.addEventListener('click', toggleTheMenu);
menuBTNBack.addEventListener('click', toggleTheMenu);

function toggleTheMenu() {
  console.log('hello');
  navContainer.classList.toggle("show");
  
  oakleyLogo.classList.toggle('hide');
}