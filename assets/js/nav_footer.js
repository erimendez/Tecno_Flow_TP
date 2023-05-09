
function traerhtml(selector, pagina){
    
    const nav = document.querySelector(selector)
    fetch(pagina)
    .then(res=>res.text())
    .then(data=>{
        nav.innerHTML=data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    })
}

traerhtml('.header','./assets/pages/header.html');
traerhtml('.footer','./assets/pages/footer.html');