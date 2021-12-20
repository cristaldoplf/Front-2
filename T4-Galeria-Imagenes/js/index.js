
//Creamos el atributo src con el valor que nos da el usuario para generar la imagen.
/* let urls = [] */
const anchors = document.querySelectorAll(".rutas-img")
const imagenes = document.querySelectorAll('img');
imagenes.forEach((item, index) => {
    let url = prompt(`Ingresá la URL de la imagen ${index +1}`);
    item.setAttribute('src', url);
    anchors[index].setAttribute("href",url)
    anchors[index].setAttribute("target","_blank")
    
});



// Creamos un título de manera dinámica
const contenedor = document.querySelector('.pie');
const texto = document.createTextNode("Este es un texto creado dinamicamente con JS.");
const titulo = document.createElement("h1");
titulo.appendChild(texto);
contenedor.appendChild(titulo);



/* links.forEach((anchor,index) => {
    anchor.setAttribute("src",urls[index])
    
}) */