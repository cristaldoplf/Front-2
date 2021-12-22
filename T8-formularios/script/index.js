let submit = document.querySelector('form');
submit.addEventListener('submit', function(event) {
    let name = document.getElementById('nombre').value;
    let password = document.getElementById('pass').value;

    let hobbies = '';
    document.getElementsByName('hobbies').forEach((item, index) => {
        if (item.checked) {
            if (index == 0) {
                hobbies = hobbies.concat(item.value);
            } else {
                hobbies = hobbies.concat(', ', item.value);
            }
        }
    });

    let text = `Nombre: ${name}
Contraseña: ${password}
Hobbies: ${hobbies}`;

    console.log(hobbies.split(', '));
    event.preventDefault();
});