window.addEventListener("load",function(){
    const preloader = document.querySelector(".loader");
    preloader.classList.add("preload-finish");
    
})

const menu = document.querySelector(".menu");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
let open = false;

menu.addEventListener("click",function(){
    if (!open) {
        one.classList.add("one-modify");
        two.classList.add("two-modify");
        three.classList.add("three-modify");
        open = true;
    }
    else{
        one.classList.remove("one-modify");
        two.classList.remove("two-modify");
        three.classList.remove("three-modify");
        open = false;
       
    }
   
})