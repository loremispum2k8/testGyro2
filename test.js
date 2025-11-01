let Z = document.querySelector('.z')
let Y = document.querySelector('.y')
let X = document.querySelector('.x')

window.addEventListener("deviceorientation",(e)=>{
    console.log(e.alpha)
    Z.textContent = Math.round(e.alpha)
    console.log(e.gamma)
    Y.textContent = Math.round(e.gamma)
    console.log(e.beta)
    X.textContent = Math.round(e.beta)
})