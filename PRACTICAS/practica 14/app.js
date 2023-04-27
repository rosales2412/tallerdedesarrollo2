function verificarEdad() {
    var edad = parseInt(document.getElementById("edad").value);
    var resultado = document.getElementById("resultado");
    
    if (edad >= 18) {
      resultado.innerHTML = "Eres mayor de edad";
    } else {
      resultado.innerHTML = "Eres menor de edad";
    }
  }