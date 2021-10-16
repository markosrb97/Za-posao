const menu =  document.getElementById("menu");
const button = document.getElementsByClassName("menu-button")[0]


button.addEventListener("click",(e)=> {
    menu.classList.toggle("menu-active")
})