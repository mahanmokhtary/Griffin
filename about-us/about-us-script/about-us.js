window.addEventListener('load', setAnimations)
function setAnimations() {
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("AU-section3-title")) {
                    entry.target.classList.add("AU-section3-title-animation")
                }
                if (entry.target.classList.contains("AU-section3-info")) {
                    if(document.documentElement.dir == "ltr") {
                        entry.target.classList.remove("AU-section3-info-ltr-animation")
                        entry.target.classList.add("AU-section3-info-rtl-animation")
                    } else {
                        entry.target.classList.remove("AU-section3-info-rtl-animation")
                        entry.target.classList.add("AU-section3-info-ltr-animation")
                    }
                }
                if (entry.target.classList.contains("AU-section3-img")) {
                    entry.target.classList.add("AU-section3-img-animation")
                }

            }
        })
    })
    setTimeout(() => {
        observer.observe(document.querySelector(".AU-section3-title"))
        observer.observe(document.querySelector(".AU-section3-info"))
        observer.observe(document.querySelector(".AU-section3-img"))
    }, 200);

}