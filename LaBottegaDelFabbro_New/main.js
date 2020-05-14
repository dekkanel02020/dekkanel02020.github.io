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

menu.addEventListener("click",function(){
    if (!open) {
        one.classList.add("one-modify");
        two.classList.add("two-modify");
        three.classList.add("three-modify");
        open = true;
        slide.classList.add("slide-modify");
        menu.classList.add("menu-modify");
        
    }
    else{
        one.classList.remove("one-modify");
        two.classList.remove("two-modify");
        three.classList.remove("three-modify");
        open = false;
        slide.classList.remove("slide-modify");
        menu.classList.remove("menu-modify");
      
    }
       
    
   
});