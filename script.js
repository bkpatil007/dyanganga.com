const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
const triggerBottom = window.innerHeight * 0.8;
faders.forEach(fade => {
const boxTop = fade.getBoundingClientRect().top;
if(boxTop < triggerBottom){
fade.classList.add('show');
}
});
}); 