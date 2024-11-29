gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".miniText, .social, .ScrollButton",{x:-40, opacity:0},{
  x:0,
  opacity:1,
  duration:.8,
  ease:'circ.out'
});

gsap.fromTo(".video, .pins",{x:40, opacity:0},{
  x:0,
  opacity:1,
  duration:.8,
  ease:'circ.out'
})

const mainTitle = document.getElementsByClassName("mainTitle");

gsap.fromTo(".mainTitle",{opacity:0},{
  opacity:1,
  duration:1,
  ease:'circ.out'
});

const animateFrom = (elem,direction)=>{
  direction = direction || 1;
  let x=0;
  let y = direction *100;

  if(elem.classList.contains("gsapfrom_left")){
    x=-100;
    y=0;
  } 
  else if(elem.classList.contains("gsapfrom_right")){
    x=100;
    y=0;
  } else if(elem.classList.contains("gsapfrom_bottom")){
    x=0;
    y=100;
  }

  elem.style.transform = '("+x+"px, "+y+"px)';
  elem.style.opacity = "0";

  gsap.fromTo(elem, {x:x, y:y, opacity:0},{
    x:0,
    y:0,
    opacity:1,
    duration:1.5,
    ease: 'circ.out',
    overwrite: "auto"
  })
}

const hide = (elem)=> {
    gsap.set(elem, {opacity: 0});
}

const nebu = document.getElementsByClassName("gsapfrom");
document.addEventListener("DOMContentLoaded",function(){
  gsap.utils.toArray(nebu).forEach((elem)=>{
    hide(elem);

    ScrollTrigger.create({
      trigger:elem,
      // markers:true,
      onEnter: function(){
        animateFrom(elem)
      },
      onEnterBack:function(){
        animateFrom(elem,-1)
      },
      onLeave: function() 
      { hide(elem) 
      } 
    });
  });
});

const gl = gsap.timeline({
    scrollTrigger: {
        trigger: ".floatScreen",
        // markers: true,
        start: "top 72%",
        end: "top 28%",
        scrub: 1,
    }
});

gl.fromTo(".floatScreen",{x:80, scale: 0.6,opacity:0},{
  x:0,
  scale:1,
  opacity:1,
  duration:1.5,
  ease: "power2.out",
})


jQuery(function(){
    if(!$.fn.imagezoomsl){
  
       $('.msg').show();
       return;
     }
     else $('.msg').hide();
  
     // plugin initialization
     $('.zoom').imagezoomsl({
  
       innerzoommagnifier: true,
       classmagnifier: "round-loope",
       magnifiersize: [160, 160],
       // disables the scrolling of the document with the mouse wheel when the cursor is over the image
       disablewheel: false
     });
   });