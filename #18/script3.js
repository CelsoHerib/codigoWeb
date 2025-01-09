const secciones = document.querySelectorAll("section");
const fechas = document.querySelectorAll(".fecha");

window.addEventListener("scroll", myFunction);

function myFunction() {
  const scrollPosition = window.scrollY; // Posición actual del scroll
  eliminarClase(); // Limpia todas las clases "seleccionado"

  // Iteramos sobre las secciones
  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i];
    const nextSeccion = secciones[i + 1];

    // Si estamos entre la sección actual y la siguiente
    if (
      scrollPosition >= seccion.offsetTop - 100 &&
      (!nextSeccion || scrollPosition < nextSeccion.offsetTop - 100)
    ) {
      if (fechas[i]) {
        fechas[i].classList.add("seleccionado"); // Agregamos "seleccionado"
      }
      break; // Detenemos el bucle una vez encontrada la sección activa
    }
  }
}

function eliminarClase() {
  fechas.forEach((fecha) => fecha.classList.remove("seleccionado"));
}
