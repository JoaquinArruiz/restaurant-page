import pIcon from '../images/icons/pizza-icon.png'
import pSliceIcon from '../images/icons/slice-pizza-icon.png'
import dIcon from '../images/icons/pizza-deliver.png'


let loadHome = () => {

    //Clearing all the inside content
    const content = document.getElementById('content');
    content.innerHTML = ''


    //Container for text and images
    const topContainer = document.createElement('div')
    topContainer.classList.add('topContainer')

    //image for the container
    
    const pizzaIcon = new Image();
    pizzaIcon.src = pIcon;
    pizzaIcon.setAttribute('id','leftIcon')
    pizzaIcon.classList.add('headerIcon')
    pizzaIcon.height = 64;
    pizzaIcon.width = 64;

    topContainer.appendChild(pizzaIcon)

    //container for the text
    const topTextContainer = document.createElement('div')
    topTextContainer.classList.add('textContainer')
    topContainer.appendChild(topTextContainer)

    //text for the container
    const topText = document.createElement('h2')
    topText.classList.add('topText')
    topText.innerText = 'The best Pizza!'
    topTextContainer.appendChild(topText)

    //2nd image for the container

    const sliceIcon = new Image();
    sliceIcon.src = pSliceIcon
    sliceIcon.setAttribute('id','rightIcon')
    sliceIcon.classList.add('headerIcon')
    topContainer.appendChild(sliceIcon)
   

    content.appendChild(topContainer)
}

export default loadHome;
// for later use: <a href="https://www.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_26593854.htm#&position=1&from_view=undefined">Image by YuliiaKa</a> on Freepik


// for later use: <a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by Smashicons - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by Freepik - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by smashingstocks - Flaticon</a>