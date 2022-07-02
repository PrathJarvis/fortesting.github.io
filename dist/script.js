document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
 modeSwitch.classList.toggle('active');
});

function navOpen() {
  document.getElementById("nav-side").style.display = "block";
  document.getElementById("nav-bar-btn").style.display = "none";
}
function navClose() {
  document.getElementById("nav-side").style.display = "none";
  document.getElementById("nav-bar-btn").style.display = "block";
}
// function dark_nav_color() {
//   var element = document.getElementById("nav-bar-btn");
//   element.classList.toggle("dark-mode-nav");
// }