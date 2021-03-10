'use strict';

// Menu

const menuBtn=  document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const exit = document.querySelector("#exit");
const menuLinks = document.querySelectorAll('.menu ul li a');

const buttons = [exit, menuBtn, ...menuLinks];

buttons.forEach(button => {
    button.onclick = () => {
        if (menu.classList.contains('hide')) return menu.classList.remove('hide');
        menu.classList.add("hide");
    };
});

// Squares Animations

const squares = document.querySelectorAll('.work-together .right-side div');

squares.forEach((square, index, array) => {
    square.onclick = () => {
        if (square.classList.contains("rotate")) return square.classList.remove("rotate");
        square.classList.add("rotate");
    };
});

// Scroll events

const container = document.querySelector('.outter-wrapper');
const innerContainer = container.querySelector(".inner-wrapper");
const titles = document.querySelectorAll(".work-together .left-side h3");

container.onscroll = () => {
    const sectionX = innerContainer.getBoundingClientRect().left;
    const screenWidth = screen.width;

    if(sectionX < screenWidth * -3.5 && sectionX > screenWidth * -4.5) {
        titles.forEach(title => title.classList.add("appear"));
        squares.forEach(square => square.classList.add("fall"));
    } else {
        titles.forEach(title => title.classList.remove("appear"));
        squares.forEach(square => square.classList.remove("fall"));
    };
};