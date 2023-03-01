//Mostrare edad
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento de fecha de nacimiento del DOM
    var fechaNacimiento = document.getElementById("fecha-nacimiento");
    
    if (fechaNacimiento) {
      // Obtener la fecha de nacimiento y calcular la edad
      var fecha = new Date(fechaNacimiento.textContent);
      var hoy = new Date();
      var edad = hoy.getFullYear() - fecha.getFullYear();
      var meses = hoy.getMonth() - fecha.getMonth();
      if (meses < 0 || (meses === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
      }
    
      // Mostrar la edad en el elemento correspondiente del DOM
      fechaNacimiento.textContent = fechaNacimiento.textContent + " (" + edad + " años)";
    }
  });
  