// Inicializa AOS
AOS.init({
    duration: 1200,
    once: true
});

// Animación hero con GSAP
gsap.from(".hero-content h1", {y: 50, opacity: 0, duration: 1, delay: 0.2});
gsap.from(".hero-content p", {y: 50, opacity: 0, duration: 1, delay: 0.5});
gsap.from(".btn", {y: 50, opacity: 0, duration: 1, delay: 0.8});
