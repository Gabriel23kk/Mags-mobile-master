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
const imgs = document.querySelector(".boxImage")
const imageAlter = document.querySelectorAll(".boxImage img")

let value = 0

function nextImage(){
    value++;
    if(value > imageAlter.length - 1){
        value = 0
    }
    imgs.style.transform = `translateX(${-value * 70}vw)`
}

setInterval(nextImage, 1500)
buttonRight.addEventListener("click", previousImage)
function previousImage(){
    console.log("olá")
}