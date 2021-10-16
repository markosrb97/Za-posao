const menu =  document.getElementById("menu");
const searchBar = document.getElementsByClassName("search")[0]
const button = document.getElementsByClassName("menu-button")[0]
const srcImg = document.getElementById("src-pic")

button.addEventListener("click",(e)=> {
    menu.classList.toggle("menu-active")
})

srcImg.addEventListener("click", (e)=> {
    searchBar.classList.toggle("search-active")
})