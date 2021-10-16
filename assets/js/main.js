const menu =  document.getElementById("menu");
const searchBar = document.getElementsByClassName("search")[0]
const button = document.getElementsByClassName("menu-button")[0]
const srcImg = document.getElementById("src-pic")
const left = document.getElementById("arrow-left")
const right = document.getElementById("arrow-right")
const banners = document.querySelectorAll('.banner-content')
let position = 0;   

button.addEventListener("click",(e)=> {
    menu.classList.toggle("menu-active")
})

srcImg.addEventListener("click", (e)=> {
    searchBar.classList.toggle("search-active")
})

right.addEventListener("click", (e)=> {
    position++
    if (position > banners.length-1) {
        position = 0;
    }
    changeBanner();
})

left.addEventListener("click", (e)=> {
    position--;
    if (position < 0) {
        position = 2;
    }
    changeBanner();
})

const changeBanner = ()=> {
    banners.forEach((banner) => {
        banner.classList.remove('active')
    })
    banners[position].classList.add('active');
}