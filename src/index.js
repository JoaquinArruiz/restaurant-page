console.log("Restaurant Page for The Odin Project - By Joaquin Arruiz");
import  './style.css';

import loadHome from './modules/home';
import loadContact from './modules/contact';
import loadMenu from './modules/menu';



function buttonCreator(id, cls, txt){ // create a button using parameters
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.classList.add(cls);
    button.innerText = txt;
    return button;
}



function navigationEvents() { // add nav events to the created buttons
    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');

    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    contactButton.addEventListener('click', loadContact);
}



let init = () => { // creates the header and the content section
    const header = document.createElement('section');
    header.classList.add('header');
    document.body.appendChild(header);

    const content = document.createElement('section');
    content.classList.add('content');
    document.body.appendChild(content);

    header.appendChild(buttonCreator("homeButton", "headerButton", "Home")); //adds the buttons to the header
    header.appendChild(buttonCreator("menuButton", "headerButton", "Menu"));
    header.appendChild(buttonCreator("contactButton", "headerButton", "Contact"));

    navigationEvents()
}

init()