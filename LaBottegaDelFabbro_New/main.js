window.addEventListener("load",function(){
    const preloader = document.querySelector(".loader");
    preloader.classList.add("preload-finish");
    
})

const menu = document.querySelector(".menu");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
let open = false;
const slide = document.querySelector(".slide");
const ahref = document.getElementsByClassName("ahref")[0];
const ahref1 = document.getElementsByClassName("ahref")[1];
const ahref2 = document.getElementsByClassName("ahref")[2];
const ahref3 = document.getElementsByClassName("ahref")[3];

menu.addEventListener("click",function(){
    if (!open) {
        one.classList.add("one-modify");
        two.classList.add("two-modify");
        three.classList.add("three-modify");
        open = true;
        slide.classList.add("slide-modify");
        menu.classList.add("menu-modify");
        ahref.classList.add("ahref1");
        ahref1.classList.add("ahref2");
        ahref2.classList.add("ahref3");
        ahref3.classList.add("ahref4");
        
    }
    else{
        one.classList.remove("one-modify");
        two.classList.remove("two-modify");
        three.classList.remove("three-modify");
        open = false;
        slide.classList.remove("slide-modify");
        menu.classList.remove("menu-modify");
        ahref.classList.remove("ahref1");
        ahref1.classList.remove("ahref2");
        ahref2.classList.remove("ahref3");
        ahref3.classList.remove("ahref4");
      
    }
       
    
   
});


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true
  });
