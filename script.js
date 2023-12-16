let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");
var shouldRunTime = true;

window.onscroll = function () { 
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
      navbar.classList.add("nav-shadow");
  } 
  else {
      navbar.classList.remove("nav-shadow");
  }
};

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  shouldRunTime = false;
}
function autoPlusSlides() {
  showSlides(slideIndex += 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-box");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  const mediaQuery = window.matchMedia('(max-width: 1024px)')
  if (mediaQuery.matches) {
    slides[slideIndex-1].style.display = "block"; 
  }
  else{
  slides[slideIndex-1].style.display = "flex";  
  }
}
time();
function time() {
  if(shouldRunTime){
    setTimeout(time, 5000);
    autoPlusSlides();
  }
}

function cv_alert() {
  alert("Mohon maaf, CV belum tersedia");
}
function project_alert() {
  alert("Mohon Maaf, Project Tidak di Deploy.");
}

// Type Writer

var i = 0;
var txt = "HI, I'M HANIF";

typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("main-text-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
  else if (i==txt.length){
    setTimeout(typeClean, 2000);
    i=0;
  }
}
function typeClean() {
  document.getElementById("main-text-name").innerHTML = "";
  loop();
}
function loop(){
  typeWriter();
}