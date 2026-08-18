// 1. Inicialización de la librería EmailJS
emailjs.init("hZAoI7xClx4xxxTPc");//emailjs libreria. init inicia la conexion con el servidor
//lo que esta en el parentecis es al contraseña publica
// 2. Selección de elementos del DOM
const formulario = document.getElementById("form-contacto");// declara una variable de lectura
const botonEnviar = document.getElementById("btn-enviar");// declara una variable de lectura
// document representa todo el arbol del documento html en momoria(EL DOM)
//getElementById busca en el html el elemento que tenga el id que esta entre parentecis y lo guarda en la variable formulario

// 3. Escuchar el evento de envío (submit)
formulario.addEventListener("submit", function(evento) {
    //espera las acciones del usuario. submit se dispara si el formulario se intenta enviar
    // 4. Detener la recarga por defecto
    evento.preventDefault();
    //cancela la recarga de la pagina y procesa el envio del formulario

    // 5. Estado de carga en el botón
    botonEnviar.innerText = "Enviando...";//.innerText modifica el texto que hay en el boton una vez enviado el correo
    botonEnviar.disabled = true;//.disabled desactiva el boton para que el usuario no mande mas de una vez el mismo correo

    // 6. Identificadores de EmailJS
    const serviceID = "service_30bl28e";//claves
    const templateID = "template_ysjmcac";//claves

    // 7. Envío de los datos del formulario
    emailjs.sendForm(serviceID, templateID, this)//sendFrom sube todo lo que haya en los campos del formulario
        .then(function() {//se ejecuta si el correo se envio correctamente
            // 8. Manejo de éxito
            alert("¡Correo enviado con éxito!");//genera una alerta
            formulario.reset();//reincia el formulario
            botonEnviar.innerText = "Enviar Mensaje";//corrige el texto del boton
            botonEnviar.disabled = false;//activa el boton de nuevo
        })
        .catch(function(error) {//se ejecuta si el mensaje no se pudo enviar
            // 9. Manejo de errores
            alert("Hubo un error al enviar el mensaje.");
            console.error("Error EmailJS:", error);
            botonEnviar.innerText = "Enviar Mensaje";
            botonEnviar.disabled = false;
        });
});