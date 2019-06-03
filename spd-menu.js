var menuBTN = document.getElementById("menuBTN");
var navContainer = document.getElementById("navContainer");
var oakleyLogo = document.getElementById("oakleyLogo");

menuBTN.addEventListener('click', toggleTheMenu);

function toggleTheMenu() {
  console.log('hello');
  navContainer.classList.toggle("show");
  
  oakleyLogo.classList.toggle('hide');

  
}