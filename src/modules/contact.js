let loadContact = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');

    contactButton.classList.add('activeButton');
    menuButton.classList.remove('activeButton');
    homeButton.classList.remove('activeButton');

    let contact = document.createElement('div');
    contact.innerText = "asd";
    content.appendChild(contact);
}

export default loadContact;