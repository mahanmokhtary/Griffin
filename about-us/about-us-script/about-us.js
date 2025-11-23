const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("AU-section3-title")) {
                entry.target.classList.add("AU-section3-title-animation")
            }
            if (entry.target.classList.contains("AU-section3-info")) {
                entry.target.classList.add("AU-section3-info-animation")
            }
            if (entry.target.classList.contains("AU-section3-img")) {
                entry.target.classList.add("AU-section3-img-animation")
            }

        }
    })
})
observer.observe(document.querySelector(".AU-section3-title"))
observer.observe(document.querySelector(".AU-section3-info"))
observer.observe(document.querySelector(".AU-section3-img"))