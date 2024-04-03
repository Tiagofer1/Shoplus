function validar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var mensaje = document.getElementById("mensaje");
  
    if (password === "shoplus") {
      mensaje.textContent = "";
      alert("¡Inicio de sesión exitoso!");
      // Aquí podrías redirigir al usuario a otra página
    } else {
      mensaje.textContent = "Contraseña incorrecta";
    }
  }
  