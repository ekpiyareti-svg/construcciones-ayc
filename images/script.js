let lastScroll = 0;
const header = document.querySelector('.header');
const MOBILE_BREAKPOINT = 768;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Achica el header cuando baja scroll
    if(currentScroll > 50){
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }

    // Oculta header al bajar, muestra al subir (solo en teléfono)
    if(window.innerWidth <= MOBILE_BREAKPOINT){
        if(currentScroll > lastScroll && currentScroll > 100){
            // bajando
            header.classList.add('hide');
        } else {
            // subiendo
            header.classList.remove('hide');
        }
    } else {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});
