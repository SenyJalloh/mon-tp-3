const titrespans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


window.addEventListener('load', ()=>{
    const TL = gsap.timeline({paused:true});
    TL
    .staggerForm(titrespans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    
    .staggerForm(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')

    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')

    .staggerForm(medias, 1, {rigth: -200, opacity: 0, ease: "power2.out"}, 0.3);
    TL.play();
})