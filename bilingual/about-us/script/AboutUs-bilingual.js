window.addEventListener('load', () => {

    let savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
        console.log("load local");
        loadLanguage(savedLanguage)
    } else {
        console.log("load default");
        loadLanguage("en")
    }
})

function loadLanguage(lang) {
    localStorage.setItem("language", `${lang}`)
    console.log(lang);
    fetch(`../bilingual/about-us/json/AboutUs-${lang}.Json`)
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
function editForLTR() {
    AU_section3_info_li_h3 = document.querySelectorAll('.AU-section3-info-li-h3')

    AU_section3_info_li_h3.forEach(el => {
        el.classList.add('AU-section3-info-li-h3-ltr')
    })
}
function editForRTL() {
    AU_section3_info_li_h3 = document.querySelectorAll('.AU-section3-info-li-h3')

    AU_section3_info_li_h3.forEach(el => {
        el.classList.remove('AU-section3-info-li-h3-ltr')
    })
}
function setDirection(lang) {
    if (lang == "en") {
        console.log("en srt ltr");
        document.documentElement.dir = "ltr"
        editForLTR()
    } else {
        console.log("fa srt rtl");
        document.documentElement.dir = "rtl"
        editForRTL()
    }

}