const hamburguer = document.querySelector(".hamburguer");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link");

hamburguer.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
});