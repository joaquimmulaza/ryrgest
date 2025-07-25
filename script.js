document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('body');

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
    }
});

const style = document.createElement('style');
style.innerHTML = `
.particle {
    position: absolute;
    background-color: var(--primary-color);
    border-radius: 50%;
    opacity: 0.6;
    animation: float 20s infinite ease-in-out;
    width: 10px;
    height: 10px;
}

@keyframes float {
    0% {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(-100px) translateX(20px);
    }
    100% {
        transform: translateY(0) translateX(0);
    }
}
`;
document.head.appendChild(style);
