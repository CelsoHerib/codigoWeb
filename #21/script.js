const menuOpen = document.querySelector('#menuopen');
const menuClose = document.querySelector('#menuclose');

menuOpen.addEventListener('click', () => {

    document.body.classList.toggle('menushow');
});

menuClose.addEventListener('click', () => 
    menuOpen.click(
));