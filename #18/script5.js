const secciones = document.querySelectorAll("section");
const fechas = document.querySelectorAll(".fecha");

window.addEventListener("scroll", myFunction);

function myFunction() {
  const scrollPosition = window.scrollY;

  // Reiniciar todas las clases
  fechas.forEach((fecha) => {
    fecha.classList.remove("eliminado", "anterior", "siguiente", "actual");
  });

  // Iterar sobre las secciones
  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i];
    const nextSeccion = secciones[i + 1];

    if (
      scrollPosition >= seccion.offsetTop - 100 &&
      (!nextSeccion || scrollPosition < nextSeccion.offsetTop - 100)
    ) {
      // Actual (verde)
      if (fechas[i]) fechas[i].classList.add("actual");

      // Anterior (amarillo)
      if (fechas[i - 1]) fechas[i - 1].classList.add("anterior");

      // Siguiente (amarillo)
      if (fechas[i + 1]) fechas[i + 1].classList.add("siguiente");

      break;
    }
  }

  // Resto (rojo)
  fechas.forEach((fecha) => {
    if (
      !fecha.classList.contains("actual") &&
      !fecha.classList.contains("anterior") &&
      !fecha.classList.contains("siguiente")
    ) {
      fecha.classList.add("eliminado");
    }
  });
}
