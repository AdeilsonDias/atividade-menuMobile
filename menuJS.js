const openMenu = document.querySelector(".openMenu")
const menuMobile=document.querySelector(".menu-mobile")
const closeMenu = document.querySelector(".closeMenu")

openMenu.addEventListener("click",()=>{
    menuMobile.classList.add("active")
    if(menuMobile.classList.contains("active")){
        openMenu.style.display="none"
    }
})
closeMenu.addEventListener("click",()=>{
    menuMobile.classList.remove("active")
    openMenu.style.display="flex"
})
window.addEventListener("resize",()=>{
    if (window.innerWidth >= 745) {

        openMenu.style.display = "none";
        menuMobile.classList.remove("active");
    } else {
        openMenu.style.display = "flex"; 
    }
})
