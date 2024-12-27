function expandir(img) {

    //selecciono la imagen que se va a expandir
    let imgExpandida = document.getElementById('imgExpandida');

    //Selecciono el texto que se va a expandir
    let imgTexto = document.getElementById('imgTexto');

    //le asigno la imagen que se va a expandir
    imgExpandida.src = img.src;

    //le asigno el texto que se va a expandir
    imgTexto.innerHTML = img.alt;

    //le asigno el estilo de display block para que se muestre
    imgExpandida.parentElement.style.display = 'block';
}