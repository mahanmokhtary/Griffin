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
    fetch(`./bilingual/griffin-page/json/griffin-${lang}.Json`)
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
        editForLTR()
    } else {
        console.log("fa srt rtl");
        document.documentElement.dir = "rtl"
        editForRTL()
    }

}


function editForLTR() {
    console.log("edit ltr");
    let section1Info = document.querySelector('.section1-info')
    section1Info.classList.add('section1-info-ltr')
    section1Info.classList.remove('section1-info-rtl')



    // for section3 work fields
    // after line
    let productFieldColumn1
    if (document.querySelectorAll('.product-field-column1-ltr').length > 0) {
        productFieldColumn1 = document.querySelectorAll('.product-field-column1-ltr')
    }
    else {
        productFieldColumn1 = document.querySelectorAll('.product-field-column1-rtl')
    }
    console.log(productFieldColumn1);
    productFieldColumn1.forEach(el => {
        el.classList.add('product-field-column1-ltr')
        el.classList.remove('product-field-column1-rtl')
    })
    // after see abou 
    let productField
    if (document.querySelectorAll('.product-field-ltr').length > 0) {
        productField = document.querySelectorAll('.product-field-ltr')
    }
    else {
        productField = document.querySelectorAll('.product-field-rtl')
    }
    console.log(productField);
    productField.forEach(el => {
        el.classList.add('product-field-ltr')
        el.classList.remove('product-field-rtl')
    })
}

function editForRTL() {
    console.log("edit rtl");

    let section1Info = document.querySelector('.section1-info')
    section1Info.classList.remove('section1-info-ltr')
    section1Info.classList.add('section1-info-rtl')
    // for section3 work fields
    // after line
    let productFieldColumn1
    if (document.querySelectorAll('.product-field-column1-ltr').length > 0) {
        productFieldColumn1 = document.querySelectorAll('.product-field-column1-ltr')
    }
    else {
        productFieldColumn1 = document.querySelectorAll('.product-field-column1-rtl')
    }
    console.log(productFieldColumn1);
    productFieldColumn1.forEach(el => {
        el.classList.add('product-field-column1-rtl')
        el.classList.remove('product-field-column1-ltr')
    })
    // after see abou 
    let productField
    if (document.querySelectorAll('.product-field-ltr').length > 0) {
        productField = document.querySelectorAll('.product-field-ltr')
    }
    else {
        productField = document.querySelectorAll('.product-field-rtl')
    }
    console.log(productField);
    productField.forEach(el => {
        el.classList.add('product-field-rtl')
        el.classList.remove('product-field-ltr')
    })
}