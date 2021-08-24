"use strict";

// Mobile Menu 

const headerContent = document.getElementById('header-content');
const menuIcon = document.getElementById('icon-menu');

menuIcon.addEventListener('click', () => {
    headerContent.classList.toggle('active');
    menuIcon.classList.toggle('active');
});