
function openTab(evt, tabName) {
  //ocultación de todos los elementos
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("javascript").style.display = "none";

  //se retira la clase active de todos los elementos
  document.getElementsByClassName("tablinks")[0].className = "tablinks";
  document.getElementsByClassName("tablinks")[1].className = "tablinks";
  document.getElementsByClassName("tablinks")[2].className = "tablinks";

  //se muestra el elemento seleccionado
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
