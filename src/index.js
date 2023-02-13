console.log('hey yaa!');
import  './style.css';

import loadHome from './modules/home';
import loadContact from './modules/contact';
import loadMenu from './modules/menu'



const content = document.getElementById("content")

const header = document.getElementById('header');


const homeButton = document.createElement('div');
homeButton.setAttribute('id', 'homeButton');
homeButton.classList.add('headerButton');
homeButton.innerText = "Home";
header.appendChild(homeButton);

const menuButton = document.createElement('div');
menuButton.setAttribute('id', 'menuButton');
menuButton.classList.add('headerButton');
menuButton.innerText = "Menu";
header.appendChild(menuButton);

const contactButton = document.createElement('div');
contactButton.setAttribute('id', 'contactButton');
contactButton.classList.add('headerButton');
contactButton.innerText = "Contact";
header.appendChild(contactButton);
