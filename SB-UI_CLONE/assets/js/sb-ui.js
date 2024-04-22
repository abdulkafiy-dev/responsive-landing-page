'use strict';

const navbarNav = document.querySelector(".navbar-nav");
const navbarMenu = document.querySelector(".navbar-menu");

navbarMenu.addEventListener('click', ()=>{
	navbarNav.classList.toggle('show');
	navbarMenu.classList.toggle('appear');
});