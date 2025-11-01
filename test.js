let Z = document.querySelector('.z')
let Y = document.querySelector('.y')
let X = document.querySelector('.x')
let plane = document.querySelector('.plane')
console.log(plane)

window.addEventListener("deviceorientation",(e)=>{
    console.log(e.alpha)
    Z.textContent = Math.round(e.alpha)
    console.log(e.gamma)
    Y.textContent = Math.round(e.gamma)
    console.log(e.beta)
    X.textContent = Math.round(e.beta)

    console.log(`rotateZ(${Math.round(e.alpha)}deg) rotateY(${Math.round(e.gamma)}deg) rotateX(${Math.round(e.beta)}deg)`)
    plane.style.transform = `rotateZ(${Math.round(-e.alpha)}deg) rotateY(${Math.round(e.gamma)}deg) rotateX(${Math.round(e.beta)}deg)`;
})