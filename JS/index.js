const video = document.getElementById("welcome-vid");
const div = document.querySelector(".welcome-div");
const h1s = document.querySelectorAll("h1");
document.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
    video.play();
   }, 2000);
});

div.addEventListener("animationend", (e) => {
    if(e.animationName === "show-welcome"){
        setTimeout(() => {
            window.location.replace("HTML/landing.html")
        }, 250);
    }
})