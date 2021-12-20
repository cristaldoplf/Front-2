
//Creamos el atributo src con el valor que nos da el usuario para generar la imagen.
const imagenes = document.querySelectorAll('img');
imagenes.forEach((item, index) => {
    let url = prompt(`Ingresá la URL de la imagen ${index +1}`);
    item.setAttribute('src', url);
});



// Creamos un título de manera dinámica
var contenedor = document.querySelector('.pie');
var texto = document.createTextNode("Este es un texto creado dinamicamente con JS.");
var titulo = document.createElement("h1");
titulo.appendChild(texto);
contenedor.appendChild(titulo);