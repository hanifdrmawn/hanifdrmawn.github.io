let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");

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

function project_alert() {
    alert("Mohon Maaf, Project Tidak di Deploy.");
}