//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjeta = document.querySelector("#tarjeta")
tarjeta.setAttribute("class","card")

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let img = document.querySelector("#logo")
img.setAttribute("src","https://www.youtube.com/img/desktop/yt_1200.png")

//3- Quitarle al titulo la clase que le está dando un formato feo
let titulo = document.querySelector("h1")
titulo.removeAttribute("class")


//4- Chequear si el link a youtube posee o no el atributo href
let linkYoutube = document.querySelector("#link_youtube")
let tieneHref = linkYoutube.hasAttribute("href")
console.log("¿El link a Youtube tiene el atributo Href?")
console.log(tieneHref)

//5- Obtener el href del link a wikipedia y mostrarlo por consola
let linkWiki = document.querySelector("#link_wikipedia")
let hrefWiki = linkWiki.getAttribute("href")
console.log(`El href del link a wikipedia tiene como valor: ${hrefWiki}`)
