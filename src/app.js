const camadas = document.querySelector('.camada');
const reducaoMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducaoMovimento) {
    camadas.forEach(camadas => {
        camadas.style.transform = 'translate3d(0, 0, 0)';
    });
}
let pensando = false;
function atualizarPallax() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = heroSection.yOffsetHeight;
    camadas.forEach(camadas => {
        const velocidade = parseFloat(camadas.getAttribute('data-velocidade')) || 0;
        const yOffset = -(scrollY * velocidade);
        camadas.style.transform = `translate3d(0, ${yOffset}px, 0)`;
    });
    pensando = false;
}

window.addEventListener('scroll', () => {
    if (!pensando) {
        pensando = true;
        window.requestAnimationFrame(atualizarPallax);
    }
}, {passive: true});
