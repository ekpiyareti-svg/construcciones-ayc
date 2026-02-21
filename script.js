// LIGHTBOX GALERÍA
const galeriaItems = document.querySelectorAll('.galeria-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

galeriaItems.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    });
});
closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; });
lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.style.display='none'; });

// ANIMACIONES SCROLL
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
