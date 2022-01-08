window.onload = function () {
    const urlTask = "https://ctd-todo-api.herokuapp.com/v1/tasks"
    let token

    if (sessionStorage.getItem("jwt") === null) {
        location.href = "index.html"
    }else{
        token =JSON.stringify(sessionStorage.getItem("jwt"))
    }

    /* ********************************************** Cerra sesion ********************************************** */
    const closeBtn = document.querySelector("#closeApp")
    closeBtn.addEventListener("click", function () {
        sessionStorage.removeItem("jwt")
        location.href = "index.html"
    })


    /* ********************************************** Agregar nueva tarea ********************************************** */
    document.querySelector(".nueva-tarea").addEventListener("submit", function (event) {
        event.preventDefault()

        let newTaskText = document.querySelector("#nuevaTarea").value
        createNewTask(newTaskText)

    })

    function createNewTask(newTaskText) {
        let data = {
            description: newTaskText,
            completed: false
        }
        console.log(data);
        fetch(urlTask, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    authorization: token,
                    "Content-Type": "application/json; chartset=UTF-8"
                }
            })
            .then(response => {
                console.log("respuesta api :",response.status)
                
                response.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log("Ocurrio un error al llamar a la API", error)
            })
    }













}