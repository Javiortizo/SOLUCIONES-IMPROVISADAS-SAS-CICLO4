// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }else{
                    registrarUsuario();
                    event.preventDefault()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
function registrarUsuario(){
    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let cedula = document.querySelector("#txtCedula").value;
    let email = document.querySelector("#txtEmail").value;
    let telefono = document.querySelector("#txtTelefono").value;

    let url = `http://localhost:3000/usuarios`;
    let datos =  {
        nombres: nombres,
        apellidos: apellidos,
        cedula: cedula,
        email: email,
        telefono: telefono
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })


}