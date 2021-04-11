/*Swiper Carrousel*/
const swiper = new Swiper('.swiper-container', {
  effect: 'flip',
  direction: 'vertical',
  loop: true,
  autoplay: {
   delay: 2000,
 },
});

/*Animation de section*/
gsap.registerPlugin(ScrollTrigger);

const section01 = document.querySelector('.section01');
const sectionTitre01 = document.querySelector('.sectionTitre');
const sectionTitre02 = document.querySelector('.sectionTitre');
const sectionTitre03 = document.querySelector('.sectionTitre');
const section02 = document.querySelector('.section02');
const sectionTitre04 = section02.querySelector('.sectionTitre');

gsap.timeline({
   scrollTrigger: {
   trigger: ".section01",
	 start: 'top top',
   end: 'bottom bottom',
	 ease: 'back', 
	 toggleActions: 'restart none reverse none',
    }
  })

.from(".section01", {
  scrollTrigger: ".section01",
  ease: 'back',
  opacity: 0,
  y: -200,
  duration: 1,
})

.from(".sectionTitre01", {
  scrollTrigger: ".section01",
  ease: 'back',
  opacity: 0,
  x: -600,
  duration: 1,
  scale: 3,
})

.from(".sectionTitre02", {
  scrollTrigger: ".section01",
  ease: 'back',
  opacity: 0,
  x: -600,
  duration: 1,
  scale: 3,
})

.from(".sectionTitre03", {
  scrollTrigger: ".section01",
  ease: 'back',
  opacity: 0,
  x: -600,
  duration: 1,
  scale: 3,
})

gsap.from(".section02", {
  scrollTrigger: ".section02",
  ease: 'back',
  opacity: 0,
  y: -100,
  duration: 2,
})

gsap.from(".sectionTitre04", {
  scrollTrigger: ".section02",
  ease: 'back',
  opacity: 0,
  scale: 1.5,
  duration: 1.5,
})

/*Animation Scroll*/

gsap.registerPlugin(ScrollTrigger);

let timeout;
let body = document.body;
const animationLogo = document.querySelector('.animationLogo')

gsap.to('.animationLogo', {
  scrollTrigger: {
   scrub: true,
    trigger: '.animationLogo',
    onUpdate: (e) => {
      body.classList.add('is-scrolling');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        body.classList.remove('is-scrolling');
      }, 300)
      
      if(e.direction == 1) {
        body.classList.add('direction-down');
        body.classList.remove('direction-up');
      } 
      if(e.direction == -1) {
        body.classList.remove('direction-down');
        body.classList.add('direction-up');
      }
    }
  }
})