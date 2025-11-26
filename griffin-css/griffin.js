function setAnimations () {
    const observer = new IntersectionObserver((entries) => {
        setTimeout(() => {
            
        }, 1000);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("section-1-step2-img")) {
                    entry.target.classList.add("section-1-step2-img-animation")
                }
            }
        })
    })
    setTimeout(() => {
        observer.observe(document.querySelector(".section-1-step2-img"))
    }, 200);
}
    window.addEventListener('load',setAnimations)