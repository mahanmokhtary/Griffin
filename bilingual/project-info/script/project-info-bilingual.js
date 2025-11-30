window.addEventListener('load', () => {

    let savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
        console.log("load local");

        loadLanguage(savedLanguage)
        // setDirection(savedLanguage)
    } else {
        console.log("load default");
        loadLanguage("en")
        // setDirection("en")
    }

})

function loadLanguage(lang) {
    localStorage.setItem("language", `${lang}`)
    console.log(lang);
    fetch(`../../bilingual/projects/json/projects-${lang}.Json`)
        .then(res => {
            // console.log(res);
            return res.json()
        })
        .then(data => {

            // console.log(data);
            document.querySelectorAll("[data-translate]").forEach(el => {
                const key = el.getAttribute("data-translate")
                el.innerText = data[key]
            })
        })
    // setDirection(lang)
}