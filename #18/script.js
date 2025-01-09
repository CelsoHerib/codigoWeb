
window.addEventListener('scroll', myFunction);


const secciones = document.getElementsByTagName("section");
const fechas = document.getElementsByClassName("fecha");

function myFunction(){
    const scrollPosition = window.scrollY;
    eliminarClase();

  if (scrollPosition >= secciones[0].offsetTop) {
  }
  if (scrollPosition >= secciones[1].offsetTop - 100) {
    fechas[0].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[2].offsetTop - 100) {
    fechas[1].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[3].offsetTop - 100) {
    fechas[2].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[4].offsetTop - 100) {
    fechas[3].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[5].offsetTop - 100) {
    fechas[4].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[6].offsetTop - 100) {
    fechas[5].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[7].offsetTop -100) {
    fechas[6].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[8].offsetTop -100) {
    fechas[7].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[9].offsetTop -100) {
    fechas[8].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[10].offsetTop -100) {
    fechas[9].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[11].offsetTop -100) {
    fechas[10].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[12].offsetTop -100) {
    fechas[11].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[13].offsetTop -100) {
    fechas[12].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[14].offsetTop -100) {
    fechas[13].classList.add("seleccionado");
  }
  if (window.scrollY >= secciones[15].offsetTop -100) {
    fechas[14].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[16].offsetTop -100) {
    fechas[15].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[17].offsetTop -100) {
    fechas[16].classList.add("seleccionado");
  }
  if (window.scrollY >= secciones[18].offsetTop -100) {
    fechas[17].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[19].offsetTop -100) {
    fechas[18].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[20].offsetTop -100) {
    fechas[19].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[21].offsetTop -100) {
    fechas[20].classList.add("seleccionado");
  }
  if (scrollPosition>= secciones[22].offsetTop -100) {
    fechas[21].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[23].offsetTop -100) {
    fechas[22].classList.add("seleccionado");
  }
  if (scrollPosition >= secciones[24].offsetTop -100) {
    fechas[23].classList.add("seleccionado");
  }
  
}

function eliminarClase(){
  for(i=0; i < fechas.length;i++){
      fechas[i].classList.remove("seleccionado");
    }
}