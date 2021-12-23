const usuario = {
    name: "",
    password: "",
    tel: "",
    hobbies: [],
    country: "",
};

let submit = document.querySelector('form');
let checkbox = document.getElementsByName('hobbies')


submit.addEventListener('submit', function (event) {

    let name = document.getElementById('nombre').value;
    let password = document.getElementById('pass').value;
    let tel = document.getElementById('tel').value;

    usuario.name = name;
    usuario.password = password;
    usuario.tel = tel;

    checkbox.forEach((item) => {

        if (item.checked) {
            usuario.hobbies.push(item.value);
        };
    });

    document.querySelectorAll('input[type="radio"]').forEach(item => {
        if (item.checked) {
            usuario.country = item.value;
        }
    });

    console.log(usuario);
    event.preventDefault();
});



let errores = [];
let contador = 0
checkbox.forEach(elemento => {
    
    
    elemento.addEventListener("click", function (event) {
        if (!elemento.checked) {
            contador--
        } else if (contador >= 4) {
            limpiarDivErrores()
            event.preventDefault()
            console.log("No puede tildar mas de 4")
            errores.push("No se puede seleccionar mas de 4 hobbies.")
            mostrarErrores()
        } else {
            contador++
        }
        console.log(contador)

    })
})

let divErrores = document.createElement("div")
submit.appendChild(divErrores)
divErrores.classList.add("divErrores")

function mostrarErrores() {
    
    errores.forEach((error) => {

        let parrafoError = document.createElement("p")
        let textoError = document.createTextNode(error)
        parrafoError.style.color = "red"
        parrafoError.appendChild(textoError)
        divErrores.appendChild(parrafoError)
    })
}

function limpiarDivErrores(){
    divErrores.innerHTML = ""
    errores = []
}