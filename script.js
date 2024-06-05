                //abrir menu lateral//
const button = document.querySelector(".btn-menu");
const menu  = document.querySelector(".hidden")

button.addEventListener("click", menuD)
function menuD(){
    menu.style.width = "190px";
}
                //fechar menu lateral//
const closeButton = document.querySelector(".x")

closeButton.addEventListener("click", closeMenu)
function closeMenu(){
    menu.style.width = "0px";
}

                //Trocar Imagens//
const buttonLeft = document.querySelector(".button-left")
const buttonRight = document.querySelector(".button-right")

buttonLeft.addEventListener("click", nextImage)
function nextImage(){
    console.log("olá")
}
buttonRight.addEventListener("click", previousImage)
function previousImage(){
    console.log("olá")
}