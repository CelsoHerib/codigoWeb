window.onscroll = function(){miFuncion()};

var futbol = document.getElementById('futbol');
var tenis = document.getElementById('tenis');
var judo = document.getElementById('judo');
var natacion = document.getElementById('natacion');
var golf = document.getElementById('golf'); 

var distancia_futbol, distancia_tenis, distancia_judo, distancia_natacion, distancia_golf;

function miFuncion(){
    distancia_futbol = window.innerHeight - futbol.getBoundingClientRect().top;
    if(distancia_futbol >= 200){
        futbol.classList.add('efecto-futbol');
    }

    distancia_tenis = window.innerHeight - tenis.getBoundingClientRect().top;
    if(distancia_tenis >= 200){
        tenis.classList.add('efecto-tenis');
    }

    distancia_judo = window.innerHeight - judo.getBoundingClientRect().top;
    if(distancia_judo >= 200){
        judo.classList.add('efecto-judo');
    }

    distancia_natacion = window.innerHeight - natacion.getBoundingClientRect().top;
    if(distancia_natacion >= 200){
        natacion.classList.add('efecto-natacion');
    }

    distancia_golf = window.innerHeight - golf.getBoundingClientRect().top;
    if(distancia_golf >= 200){
        golf.classList.add('efecto-golf');
    }
}//