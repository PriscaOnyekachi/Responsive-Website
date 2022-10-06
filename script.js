let menu = document.querySelector(".menu-icon")
let navBar = document.querySelector(".nav-bar")

menu.onclick = () => {
    menu.classList.toggle("hamb")
    navBar.classList.toggle("open")
}