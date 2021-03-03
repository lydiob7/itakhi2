const menuBtn=  document.querySelector("#menu-btn")
const menu = document.querySelector("#menu")
const exit = document.querySelector("#exit")
const menuLinks = document.querySelectorAll('.menu ul li a')

const buttons = [exit, menuBtn, ...menuLinks]

buttons.forEach(button => {
    button.onclick = () => {
        if (menu.classList.contains('hide')) return menu.classList.remove('hide')
        menu.classList.add("hide")
    }
})