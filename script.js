const icon = document.querySelector(".icone")
const div = document.querySelector(".balao")

icon.addEventListener("mouseover", aparecerDiv)
function aparecerDiv(){
    div.style.visibility = "visible"
}

icon.addEventListener("mouseleave", sumirDiv)
function sumirDiv(){
    div.style.visibility = "hidden"
}