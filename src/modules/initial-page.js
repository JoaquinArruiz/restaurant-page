function buttonCreator(id, cls, txt){ // create a button using parameters
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.classList.add(cls);
    button.innerText = txt;
    return button;
}

let loadPage = () => {
    const content = document.getElementById('content')
    const header = document.getElementById('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = "It's-a Pizz-a";
    header.appendChild(title);

    const navBar = document.createElement('nav');
    navBar.classList.add('navBar');
    header.appendChild(navBar)

    const footer = document.createElement('footer');
    const creditFooter = document.createElement('footer')
    footer.classList.add('footer')
    creditFooter.classList.add('footer')
    content.appendChild(footer)
    content.appendChild(creditFooter)
    
    const homeButton =buttonCreator("homeButton", "headerButton", "Home")
    const menuButton =buttonCreator("menuButton", "headerButton", "Menu")
    const contactButton =buttonCreator("contactButton", "headerButton", "Contact")

    navBar.appendChild(homeButton); //adds the buttons to the header
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
}

export default loadPage;