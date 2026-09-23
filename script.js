var hero = document.getElementById("home");
var audio = document.getElementById("bg-music");
var earBtn = document.querySelector(".secret-ear-btn");

var popup = document.getElementById("startup-popup");
var btnYes = document.getElementById("btn-yes");
var btnNo = document.getElementById("btn-no");

btnYes.addEventListener("click", function() {
    audio.play(); 
    hero.classList.add("ear-active"); 
    popup.classList.add("hidden"); 
});

btnNo.addEventListener("click", function() {
    popup.classList.add("hidden"); 
});

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        hero.classList.add("ear-active");
    } else {
        audio.pause();
        hero.classList.remove("ear-active");
    }
}

earBtn.addEventListener("mouseenter", function() {
    hero.classList.add("ear-active");
});

earBtn.addEventListener("mouseleave", function() {
    if (audio.paused) {
        hero.classList.remove("ear-active");
    }
});