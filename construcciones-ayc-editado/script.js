let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Achica el header cuando baja scroll
    if(currentScroll > 50){
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }

    // Oculta header al bajar, muestra al subir
    if(currentScroll > lastScroll && currentScroll > 100){
        // bajando
        header.classList.add('hide');
    } else {
        // subiendo
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});
