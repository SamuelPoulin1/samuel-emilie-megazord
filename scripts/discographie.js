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
  const album1 = document.querySelector('.album1');
  const album2 = document.querySelector('.album2');
  const album3 = document.querySelector('.album3');
  const section02 = document.querySelector('.section02');
  const sectionTitre04 = section02.querySelector('.sectionTitre');
  const main = document.querySelector('main');
  
  gsap.timeline({
     scrollTrigger: {
       opacity: 0, 
       start: 'bottom bottom',
       ease: 'back', 
       toggleActions: 'restart complete reverse reset',
      }
    })
  
  .from(".section01", {
    scrollTrigger: ".section01",
    y: -200,
    duration: 1,
  })
  
  .from(".sectionTitre01", {
    scrollTrigger: ".section01",
    x: -600,
    duration: 1,
    scale: 3,
  })
  
  .from(".sectionTitre02", {
    scrollTrigger: ".section01",
    x: -600,
    duration: 1,
    scale: 3,
  })
  
  .from(".sectionTitre03", {
    scrollTrigger: ".section01",
    x: -600,
    duration: 1,
    scale: 3,
  })
  
  gsap.from(".section02", {
    scrollTrigger: ".section02",
    y: -100,
    duration: 2,
  })
  
  gsap.from(".sectionTitre04", {
    scrollTrigger: ".section02",
    scale: 1.5,
    duration: 1.5,
  })