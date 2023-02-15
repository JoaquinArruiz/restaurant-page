import pepImage from '../images/pizzas/peperoni-pizza.png'
import albImage from '../images/pizzas/margarita-pizza.png'
import mushImage from '../images/pizzas/mushroom-pizza.png'
import chickImage from '../images/pizzas/chicken-pizza.png'

let loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');

    contactButton.classList.remove('activeButton');
    menuButton.classList.add('activeButton');
    homeButton.classList.remove('activeButton');



    let pizzaCreator = (name,topping,money,src) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const title = document.createElement('h1');
            title.textContent = name;

            const ingredients = document.createElement('h2');
            ingredients.textContent = "Ingredients: "+topping;

            const price = document.createElement('h3');
            price.textContent = money;

            const img = document.createElement('img');
            img.classList.add('cardImage')
            img.setAttribute('src', src);

            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(ingredients);
            card.appendChild(price);

            return card;
    }

        const pizzas = [
            pizzaCreator(
                'Prodigious Peperoni',
                'Mozzarella, Peperoni, Tomato Sauce',
                '$10.99',
                pepImage
            ),
            pizzaCreator(
                'Awesome Albaca',
                'Mozzarella, Albaca, Olive Oil and Tomatoes',
                '$9.99',
                albImage
            ),
            pizzaCreator(
                'Magic Mushroom',
                'Mozzarella, Olives, Mushrooms, Peperoni, Tomatoes',
                '$9.99',
                mushImage
            ),
            pizzaCreator(
                'Charming Chicken',
                'Chicken, Mushrooms and Tomatoes',
                '$10.99',
                chickImage
            )
        ];
    
    const cardsContainer = document.createElement('div')
    cardsContainer.classList.add('cardsContainer')

    pizzas.forEach((pizza) =>{
        cardsContainer.appendChild(pizza);
    });

    content.appendChild(cardsContainer)
}

export default loadMenu;