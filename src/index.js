console.log("Restaurant Page for The Odin Project - By Joaquin Arruiz");
import  './styles/style.scss';

import loadPage from './modules/initial-page';
import loadHome from './modules/home';
import loadContact from './modules/contact';
import loadMenu from './modules/menu';



function navigationEvents() { // add nav events to the created buttons
    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');

    homeButton.addEventListener("click", loadHome);
    menuButton.addEventListener("click", loadMenu);
    contactButton.addEventListener("click", loadContact);
}



let init = () => { // creates the header, title, buttones, navbar and the content section
    loadPage();
    loadMenu();
    navigationEvents();
}

init()