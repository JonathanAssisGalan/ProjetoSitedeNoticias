const botaoabrir = document.querySelector("header > button")
const botaofechar = document.querySelector("header nav button") 

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

botaoabrir.addEventListener("click", abrirmenu)
function abrirmenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

botaofechar.addEventListener("click", fecharmenu)

function fecharmenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")

}
