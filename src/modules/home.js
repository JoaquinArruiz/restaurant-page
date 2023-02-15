import pIcon from '../images/icons/pizza-icon.png'
import pSliceIcon from '../images/icons/slice-pizza-icon.png'


let loadHome = () => {

    //Clearing all the inside content
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');

    contactButton.classList.remove('activeButton');
    menuButton.classList.remove('activeButton');
    homeButton.classList.add('activeButton');


    //Container for text and images
    const topContainer = document.createElement('div');
    topContainer.classList.add('topContainer');

    //image for the container
    
    const pizzaIcon = new Image();
    pizzaIcon.src = pIcon;
    pizzaIcon.setAttribute('id','leftIcon');
    pizzaIcon.classList.add('headerIcon');
    pizzaIcon.height = 64;
    pizzaIcon.width = 64;

    topContainer.appendChild(pizzaIcon)

    //container for the text
    const topTextContainer = document.createElement('div');
    topTextContainer.classList.add('textContainer');
    topContainer.appendChild(topTextContainer);

    //text for the container
    const topText = document.createElement('h2');
    topText.classList.add('topText');
    topText.innerText = 'The best Pizza!';
    topTextContainer.appendChild(topText);

    //2nd image for the container

    const sliceIcon = new Image();
    sliceIcon.src = pSliceIcon;
    sliceIcon.setAttribute('id','rightIcon');
    sliceIcon.classList.add('headerIcon');
    topContainer.appendChild(sliceIcon);
   

    const homeBody = document.createElement('div');
    homeBody.classList.add('homeBody');
    const contentBodyText=document.createElement('p');
    contentBodyText.innerText = `Welcome to our beloved pizza shop, where we've been serving up delicious, handcrafted pies since 1985. From our humble beginnings as a small family-owned business, we've grown into a local institution known for our fresh ingredients, homemade sauces, and crispy crusts.

    Over the years, we've expanded our menu to include a variety of classic and unique toppings, from savory meats to fresh vegetables. We've also become a gathering place for friends and families to come together and share a slice or two.
    
    When the pandemic hit, we knew we had to adapt to stay afloat. We quickly added delivery services so our customers could still enjoy our pizzas from the comfort of their own homes. And while the past year has been challenging, we've been grateful for the opportunity to continue serving our community during these difficult times. 🛵
    
    We may be a small pizza shop, but we put a lot of heart and soul into everything we do. From our kitchen to your door, we hope our pizzas bring a smile to your face and warmth to your heart. Thank you for supporting us through thick and thin.`

    homeBody.appendChild(contentBodyText);


    content.appendChild(topContainer);
    content.appendChild(homeBody);
}

export default loadHome;
// for later use: <a href="https://www.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_26593854.htm#&position=1&from_view=undefined">Image by YuliiaKa</a> on Freepik


// for later use: <a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by Smashicons - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by Freepik - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by smashingstocks - Flaticon</a>