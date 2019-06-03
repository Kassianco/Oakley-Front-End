var menuBTN = document.getElementById("menuBTN");

var navContainer = document.getElementById("navContainer");

menuBTN.addEventListener('click', toggleTheMenu);

function toggleTheMenu() {
  console.log('hello');
  navContainer.classList.toggle("show");
}