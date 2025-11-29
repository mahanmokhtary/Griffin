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
    fetch(`../bilingual/contact-us/json/contactUs-${lang}.Json`)
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
    setDirection(lang)
}


function setDirection(lang) {
    if (lang == "en") {
        console.log("en srt ltr");
        document.documentElement.dir = "ltr"
        // editForLTR()
    } else {
        console.log("fa srt rtl");
        document.documentElement.dir = "rtl"
        // editForRTL()
    }

}