

let loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    let pizzaCreator = (name,topping,money,src) => {
            let card = document.createElement('div');
            card.classList.add('card');

            let title = document.createElement('h1');
            title.textContent = name;

            let ingredients = document.createElement('h2');
            ingredients.textContent = topping;

            let price = document.createElement('h3');
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
                'Peperoni',
                'Mozzarella, Peperoni, Tomato Sauce',
                '$10',
                '../src/images/pizzas/peperoni-pizza.png'
            ),
            pizzaCreator(
                'Margarita',
                'Mozzarella, Albaca, Olive Oil and Tomatoes',
                '$9',
                '../src/images/pizzas/margarita-pizza.png'
            ),
            pizzaCreator(
                '',
                'Mozzarella, Olives, Mushrooms, Peperoni, Tomatoes',
                '$10',
                '../src/images/pizzas/mushroom-pizza.png'
            ),
            pizzaCreator(
                '',
                'Chicken, Mushrooms and Tomatoes',
                '$10',
                '../src/images/pizzas/chicken-pizza.png'
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