let loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    let pizzaCreator = (name,topping,money,imgsrc) => {
            let card = document.createElement('div');
            card.classList.add('card');

            let title = document.createElement('h1');
            title.textContent = name;

            let ingredients = document.createElement('h2');
            ingredients.textContent = topping;

            let price = document.createElement('h3');
            price.textContent = money;

            let image = document.createElement('img');
            image.setAttribute('src', imgsrc)

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(ingredients);
            card.appendChild(price);

            return card;
    }

        const pizzas = [
            pizzaCreator(
                'Peperoni',
                'Mozzarella, Peperoni, Tomato Sauce',
                '$10',
                "../src/images/pizzas/peperoni-pizza.png"
            ),
            pizzaCreator(
                'Margarita',
                'Mozzarella, '
            )
        ]
    
}

export default loadMenu;