// Add Sound To Background
let audio = new Audio("sound.mp4");
window.onmousedown = function () {
    audio.play();
    console.log("play");
}
window.addEventListener("onkeydown", function () {
    audio.play();
    console.log("play");
});