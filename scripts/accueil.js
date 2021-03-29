//--------Swiper----------

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: "coverflow",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
  
  
//----- scroll trigger -----
gsap.registerPlugin(ScrollTrigger);

const section01 = document.querySelector('.section01');
const section02 = document.querySelector('.section02');
const section03 = document.querySelector('.section03');
const card = document.querySelector('.card');
const sectionTitre02 = section02.querySelector('.sectionTitre');
const sectionTitre03 = section03.querySelector('.sectionTitre');
const main = document.querySelector('main');

gsap.timeline({
    scrollTrigger: {
            trigger: ".section01",
            toggleActions: 'restart none reverse none',
            start: 'top 50%', 
            end: '100% 25%',
            },
})
.from(".section01", {
y: -100,
ease:'back', 
opacity: 0,
duration: 1,
})
.from(".card", {
scale:1.2,
ease:'back', 
opacity: 0,
duration: 3,
});


gsap.timeline({
    scrollTrigger: {
        trigger: ".section02",
        toggleActions: 'restart none reverse none',
        start: '50% 50%', 
        end: '100% 25%',
        },
})
.from(".section02", {
y: -100,
ease:'back', 
opacity: 0,
duration: 1,
})
.from(".sectionTitre02", {
scale:1.2,
ease:'back', 
opacity: 0,
duration: 1,
});


gsap.timeline({
    scrollTrigger: {
        trigger: ".section03",
        toggleActions: 'restart none reverse none',
        start: '50% 50%', 
        end: '75% 25%',
        },
})
.from(".section03", {
y: -100,
ease:'back', 
opacity: 0,
duration: 1,
})
.from(".sectionTitre03", {
scale:1.2,
ease:'back', 
opacity: 0,
duration: 1,
});
