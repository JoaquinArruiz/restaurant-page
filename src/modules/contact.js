let loadContact = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');

    contactButton.classList.add('activeButton');
    menuButton.classList.remove('activeButton');
    homeButton.classList.remove('activeButton');

    

    let contactCreator = (phone, email, address) => {
        
        const contactContainer = document.createElement('div');

        const contactPhone = document.createElement('p');
        contactPhone.innerText = "Phone: " + phone;
        contactContainer.appendChild(contactPhone)

        const contactEmail = document.createElement('p');
        contactEmail.innerText = "Email: " + email;

        const contactAdrees = document.createElement('p');
        contactAdrees.innerText = "Adress: " + address;

        contactContainer.appendChild(contactPhone);
        contactContainer.appendChild(contactEmail);
        contactContainer.appendChild(contactAdrees);
        contactContainer.classList.add('contactContainer')

        return contactContainer
    }

    const contact = contactCreator("(555) 123-4567", "examplepizza@email.com","123 Main Street, Anytown, USA 12345")

    content.appendChild(contact)
}

export default loadContact;