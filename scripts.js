document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formContacto").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
  
    var nombre = document.getElementById('nombreApellido').value;
   
    if(nombre.length == 0) {
      alert('No has escrito tu nombre o apellido'); 
      document.getElementById("nombreApellido").focus()
      return;
    }

    var numerotel = document.getElementById('telefono').value;
    
    if (numerotel.length != 0){
        
        expr1 = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
    
        if ( !expr1.test(numerotel) ){
            alert("Error: El teléfono " + numerotel + " no está bien cargado.");
            document.getElementById("telefono").focus()
            return;
         }
    }

    var mail = document.getElementById('email').value;
  
    if (mail.length == 0) {
      alert('No has ingresado tu email');
      document.getElementById("email").focus()
      return;
    }

    expr2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if ( !expr2.test(mail) ){
        alert("Error: La dirección de correo " + mail + " no esta bien cargada.");
        document.getElementById("email").focus()
    return;
    }

    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
        alert('Por favor escribe algun comentario o sugerencia');
        document.getElementById("mensaje").focus()
        return;
    }

    
      this.submit();


  }