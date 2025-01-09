const secciones = document.querySelectorAll("section");
const fechas = document.querySelectorAll(".fecha");

window.addEventListener("scroll", myFunction);

function myFunction() {
  const scrollPosition = window.scrollY;

  // Reiniciar todas las clases
  fechas.forEach((fecha) => {
    fecha.classList.remove("eliminado", "siguiente", "actual", "anterior");
  });

  // Iterar sobre las secciones
  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i];
    const nextSeccion = secciones[i + 1];

    if (
      scrollPosition >= seccion.offsetTop - 100 &&
      (!nextSeccion || scrollPosition < nextSeccion.offsetTop - 100)
    ) {
        if (fechas[i + 1]) fechas[i - 1].classList.add("anterior");
      // Actual (verde)
      if (fechas[i]) fechas[i].classList.add("actual");
      // Siguiente (amarillo)
      if (fechas[i + 1]) fechas[i + 1].classList.add("siguiente");
      break;
    }
  }

  // Eliminados (rojo)
  fechas.forEach((fecha, index) => {
    if (
      scrollPosition < secciones[index].offsetTop - 100 &&
      index < fechas.length
    ) {
      fecha.classList.add("eliminado");
    }
  });
}
