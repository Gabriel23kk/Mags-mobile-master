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
const buttonLeft = document.querySelector(".nextb")
const buttonRight = document.querySelector(".provb")
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


buttonRight.addEventListener("click", next)
let box = document.querySelector(".galery")
let box2 = document.querySelector("video")
function next(){
    
    box.classList.add("active")
    

    box2.classList.add("ativacion")
    box2.style.visibility = "visible"
}
buttonLeft.addEventListener("click", prov)
function prov(){
    box.classList.remove("active")
    box.classList.add("back")

    box2.classList.remove("ativacion")
    box2.classList.add("sair")
    box2.style.visibility = "hidden"
}