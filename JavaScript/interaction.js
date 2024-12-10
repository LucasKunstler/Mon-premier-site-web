/* Servi du menu vu en cours */

let menu = document.querySelector("#menu");

menu.querySelector("button").onclick = function() {
    menu.classList.toggle("visible");
}