function validar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var mensaje = document.getElementById("mensaje");
  
    if (password === "shoplus") {
      mensaje.textContent = "";
      alert("¡Inicio de sesión exitoso!");
      // Redirige al usuario a otra página
      window.location.href = "inicio.html";
    } else {
      mensaje.textContent = "Contraseña incorrecta";
    }
}
