let flag = true
let burgermenoContainerDiv = document.querySelector('.burgermenoContainerDiv')
let menoesContainer = document.querySelector('.menoes-container')
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let logoBurgermeno = document.querySelector('.logo-burgermeno')
burgermenoContainerDiv.addEventListener('click', () => {
    if (flag) {
        console.log("so");
        menoesContainer.style.right = '0px'
        line1.style.transform = "rotateZ(45deg) translateY(11px) translateX(3px)"
        line2.style.transform = "scale(0)"
        // line2.style.visibility = "hidden"
        line3.style.transform = "rotateZ(-45deg) translateY(-11px) translateX(3px)"
        line1.style.backgroundColor = "aqua"
        logoBurgermeno.classList.add('logo-burgermeno-shineAnimate')
        logoBurgermeno.classList.remove('logo-burgermeno-fallAnimate')
    } else {
        line1.style.transform = "rotateZ(0deg)"
        line2.style.transform = "scale(1)"
        line2.style.visibility = "visible"
        // line2.style.transition = "all 1s 0.1s linear"
        line3.style.transform = "rotateZ(0deg) translateY(0px)"
        menoesContainer.style.right = '-250px'
        line1.style.backgroundColor = "#0145a8"
        logoBurgermeno.classList.add('logo-burgermeno-fallAnimate')
        logoBurgermeno.classList.remove('logo-burgermeno-shineAnimate')
    }
    flag = !flag
})