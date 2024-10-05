const shoppingCart = document.querySelector('.shopping_cart');

cart.getProducts().forEach((item) => {

    const shoppingCartCard = document.createElement('div');
    shoppingCartCard.classList.add('shopping_cart__card');
    const shoppingCartImage = document.createElement('div');
    shoppingCartImage.classList.add('shopping_cart__image');
    const productImg = document.createElement('img');
    productImg.src = 'images/shopping-cart1.png';
    const cardPrice = document.createElement('div');
    cardPrice.classList.add('card_price');
    const cardPriceTitle = document.createElement('div');
    cardPriceTitle.classList.add('card_price__title');
    cardPriceTitle.textContent = item.prod.name;
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = '$ 700';
    const countProduct = document.createElement('div');
    countProduct.classList.add('price');
    countProduct.textContent = item.prodCount;
    const closer = document.createElement('button');
    closer.classList.add('card_close');
    const closerImg = document.createElement('img');
    closerImg.src = "images/card-close.svg";


    shoppingCart.appendChild(shoppingCartCard);
    shoppingCartCard.appendChild(shoppingCartImage);
    shoppingCartImage.appendChild(productImg);
    shoppingCartCard.appendChild(cardPrice);
    cardPrice.appendChild(cardPriceTitle);
    cardPrice.appendChild(price);
    cardPrice.appendChild(countProduct);
    cardPrice.appendChild(closer);
    closer.appendChild(closerImg);

    closer.addEventListener('click', (e) => {
        const count = cart.deleteProduct(item.prod.id).count;

        if (count == 0) {
            shoppingCartCard.remove();
        } else {
            countProduct.textContent = count;
        };
    });

});

console.log(cart);

const deleteItem = document.querySelector('.delete_item');
console.log(deleteItem);
deleteItem.addEventListener('click', (e) => {
    cart.clearProducts();
    shoppingCart.remove();
});