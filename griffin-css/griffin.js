window.addEventListener('load',setAnimations)
function setAnimations () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("section-1-step2-img")) {
                    entry.target.classList.add("section-1-step2-img-animation")
                }
            }
        })
    })
    observer.observe(document.querySelector(".section-1-step2-img"))
}