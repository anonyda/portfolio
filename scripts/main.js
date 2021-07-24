gsap.registerPlugin(ScrollTrigger);
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// After clicking link in mobile, collapse the menu

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// gsap.from("#home_data", {opacity: 0, scale: 0, duration: 1})
// gsap.from("#home_image", {opacity: 0, scale: 0, duration: 1});
gsap.timeline()
    .set("#scroll", {opacity: 0})
    .from("#home_data", {opacity: 0, x: -30, duration: 1})
    .from("#home_image", {opacity: 0, x: 30, duration: 1}, "<")
    .from("#small_text", {opacity: 0, duration: 1.5})
    .to("#scroll", {y: 15, opacity: 100, duration: 0.2})

gsap.set('.project__container', {opacity: 0})
gsap.utils.toArray('.project__container').forEach((el, index) => { 
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            start: "top center",
            toggleActions: "play none none reverse",
            // markers: true,
        }
    })
    tl
    .set(el, {opacity: 0})
    .fromTo(el, { opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1.2, immediateRender: false})
  })

// gsap.set('.about__content', {opacity: 0})
let aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
    }
})
aboutTL
    .from('.about__image', {opacity: 0, x: 25, duration: 1})
    .from('.about__description', {opacity: 0, x: -25, duration: 1}, "<")

let qualTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#qualifications',
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
    }
})

qualTL
    .from('#qual1', {opacity: 0, x: -25, duration: 0.6})
    .from('#qual2', {opacity: 0, x: -25, duration: 0.6})
    .from('#qual3', {opacity: 0, x: -25, duration: 0.6})
    
