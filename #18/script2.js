// Inicializamos las referencias
const secciones = document.querySelectorAll("section"); // Más moderno y flexible
const fechas = document.querySelectorAll(".fecha");

// Escuchamos el evento scroll
window.addEventListener("scroll", myFunction);

function myFunction() {
  const scrollPosition = window.scrollY; // Posición del scroll
  eliminarClase(); // Eliminamos todas las clases "seleccionado"

  // Iteramos sobre las secciones
  secciones.forEach((seccion, index) => {
    if (scrollPosition >= seccion.offsetTop - 100) {
      if (fechas[index]) { // Aseguramos que la fecha correspondiente exista
        fechas[index].classList.add("seleccionado");
      }
    }
  });
}

function eliminarClase() {
  fechas.forEach(fecha => fecha.classList.remove("seleccionado")); // Más limpio con forEach
}
