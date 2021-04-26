
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
   markers: false, 
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
   markers: false, 
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
   end: '100% 25%',
   markers: false, 
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

//--------animation scroll----------

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

//--------quiz----------

let questions = [ 
{
q: "Quel style le groupe Set it off n'est-il pas connu pour?",
o1: "Pop Punk",
o2: "Post Hardoce",
o3: "Jazz Rock" ,
o4: "Acoustique",

r: 3},
{
q: "Combien de batteurs y a-t-il eu dans le groupe depuis sa création?",
o1: "1",
o2: "2",
o3: "3" ,
o4: "4",

r: 4
},
{
q: "Vrai ou faux? Zach DeWall était déjà connu pour ses covers de musiques sur youtube.",
o1: "Vrai",
o2: "Faux",

r: 2
},
{
q: "Quel album possède une seconde version complètement accoustique?",
o1: "Cinematics",
o2: "Duality",
o3: "Upside Down" ,
o4: "Midnight",

r: 2
},
{
q: "Quel est le pays d'origine du groupe?",
o1: "Canada",
o2: "Royaume-Uni",
o3: "États-Unis" ,
o4: "Australie",

r: 3
},
{
q: "Combien de membres possède le groupe présentement?",
o1: "3",
o2: "4",
o3: "5" ,
o4: "6",

r: 1
},
{
q: "Quel est le nom de leur deuxième album?",
o1: "Midnight",
o2: "Duality",
o3: "Horrible Kids" ,
o4: "Cinematics",

r: 4
},
{
q: "Quel instrument joue Maxx Danziger?",
o1: "Batterie",
o2: "Guitare",
o3: "Piano" ,

r: 1
}
]; 


class Quiz {
constructor(tableau) {
this.quizBody = document.querySelector(".modalquiz");
this.index = 0;
this.score = 0;
this.questions = tableau;
this.questions.forEach((question, value) => {
  this.creerHtml(question, value + 1);
});
this.setVisible(this.index);
this.answers();
}
creerHtml(Q, value) {
this.div = document.createElement("div");
 this.div.classList.add("question");    this.quizBody.appendChild(this.div);

this.strong = document.createElement("strong");
this.strong.innerText = Q.q;
this.div.appendChild(this.strong);

this.br = document.createElement("br");
this.div.appendChild(this.br);

if ("o1" in Q) {
  let radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", "question" + value);
  radio.setAttribute("value", "1");
  this.div.appendChild(radio);

  let label = document.createElement("label");
  label.innerText = Q.o1;
  this.div.appendChild(label);

  this.br = document.createElement("br");
  this.div.appendChild(this.br);
}

if ("o2" in Q) {
  let radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", "question" + value);
  radio.setAttribute("value", "2");
  this.div.appendChild(radio);

  let label = document.createElement("label");
  label.innerText = Q.o2;
  this.div.appendChild(label);

  this.br = document.createElement("br");
  this.div.appendChild(this.br);
}

if ("o3" in Q) {
  let radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", "question" + value);
  radio.setAttribute("value", "3");
  this.div.appendChild(radio);

  let label = document.createElement("label");
  label.innerText = Q.o3;
  this.div.appendChild(label);

  this.br = document.createElement("br");
  this.div.appendChild(this.br);
}

if ("o4" in Q) {
  let radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", "question" + value);
  radio.setAttribute("value", "4");
  this.div.appendChild(radio);

  let label = document.createElement("label");
  label.innerText = Q.o4;
  this.div.appendChild(label);

  this.br = document.createElement("br");
  this.div.appendChild(this.br);
}
}
setVisible(number) {
let divQ = document.querySelectorAll(".question");
divQ.forEach((q) => {
  q.classList.remove("is-visible");
  divQ[number].classList.add("is-visible");
});
}
answers() {
let R = document.querySelectorAll("input[type = 'radio']");
R.forEach((radio) => {
  radio.addEventListener("change", () => {
	if (radio.checked) {
	  if (radio.value == this.questions[this.index].r) {
		this.score++;
		console.log("Bonne réponse: pointage " + this.score);

			gsap.fromTo('.anim01', 
			{ x: '-100vh',
			  opacity: '0%',
			}, 
			{ x: '152px',
			 y: '-25px',
			  opacity: '100%',
			  ease: "sine",
			duration:0.3,}
			);

			gsap.fromTo('.anim02', 
			{ y: '-100vh',
			  opacity: '0%',
			 width:'0px'}, 
			{ y: '-55px', 
			 x: '180px',
			 opacity: '100%',
			  width:'100px',
			 ease: "sine",
			 duration:0.3,}
			);

			gsap.fromTo('.anim03', 
			{ height: '0px',
			  width: '0px',
			  rotate: '160deg' }, 
			{ height: '140px',
			  width: '140px',
			  rotate: '0deg',
			  duration:0.2,
			  ease: "sine",
			  }
			);

			gsap.fromTo('.anim01', 
			{ x: '0%',
			opacity: '100%',},
			{ x: '-100vh',
			  opacity: '0%',
			  ease: "slow",
			  duration:0.3,
			  delay:3,
			}, 
			);

			gsap.fromTo('.anim02', 
			{ y: '-265px', 
			 opacity: '100%',
			  width:'100px',
			 },
			 { y: '-100vh',
			  opacity: '0%',
			 width:'0px',
			 ease: "slow",
			 duration:0.3,
			 delay:3, 
			}, 
			);

			gsap.fromTo('.anim03', 
			  { opacity: "100%",  
			  }, 
			{ opacity: "0%",
			  duration:0.3, 
			  delay:3, 
			  ease: "slow",
			  onComplete() {
			console.log("fin bonne réponse");
               },
              }
            );
	  } else {
		this.score--;
		if(this.score == -1) { this.score = 0 }
		console.log("Mauvaise réponse: pointage " + this.score);
      
			gsap.fromTo('.anim_img02', {
			x: 0,
			opacity: 0,
			scale: 2
		  },{
			duration: 0.5,
			rotate: '-=1000',
			opacity: 1,
			scale: 1,
			delay: 0.2,
		  });
		  gsap.fromTo('.anim04', 
			{ x: '-100vh',
			  opacity: '0%',
			}, 
			{ x: '153px',
			 y: '-150px',
			  opacity: '100%',
			  ease: "bounce",
			duration:0.3,}
		  );

		  gsap.fromTo('.anim05', 
			{ x: '-100vh',
			  opacity: '0%',
			 width:'0px'}, 
			{ y: '-175px', 
			 x: '155px',
			 opacity: '100%',
			  width:'100px',
			 ease: "bounce",
			 duration:0.3,}
		  );
		  
		  gsap.fromTo('.anim06', 
			{ height: '0px',
			  width: '0px',
			  rotate: '160deg' }, 
			{ height: '140px',
			  width: '140px',
			  rotate: '0deg',
			  duration:0.2,
			  ease: "bounce",
			  }
		  );

		  gsap.fromTo('.anim04', 
			{ x: '0%',
			opacity: '100%',},
			{ x: '-100vh',
			  opacity: '0%',
			  ease: "slow",
			  duration:0.3,
			  delay:3,
			}, 
		  );

		  gsap.fromTo('.anim05', 
			{ y: '-265px', 
			 opacity: '100%',
			  width:'100px',
			 },
			 { y: '-100vh',
			  opacity: '0%',
			 width:'0px',
			 ease: "slow",
			 duration:0.3,
			 delay:3, 
			}, 
		  );
		  
			gsap.fromTo('.anim06', 
			  { opacity: "100%",  
			  }, 
			{ opacity: "0%",
			  duration:0.3, 
			  delay:3, 
			  ease: "slow",
			  onComplete() {
			console.log("fin mauvaise réponse");
              },
            });
          }
	  if (this.index < this.questions.length) {
		this.index++;
		if(this.index == this.questions.length) {
		  this.final();
		}
		this.setVisible(this.index);
	  }
	}
  });
});
}
final() {
let divFinal = document.createElement('div');
divFinal.innerText = 'Quiz terminé' ;
 this.quizBody.appendChild(divFinal);
}
}

new Quiz(questions);
