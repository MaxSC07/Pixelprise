const menuIcon = document.querySelector(".menu__i");
const menu = document.querySelector(".menu");

let active = false;



menuIcon.addEventListener('click', ()=> {
    if(active == true){
        menu.classList.remove("menu--open")
        active = false;
    } else {
        menu.classList.add("menu--open")
        active = true
    }
})





