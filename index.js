const dataCardItems = [

    {
        id: 1,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teamsup with Moda Operandi.",
        price: '$ 50.00',
        src: 'images/card.svg',

    },
    {
        id: 2,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teamsup with Moda Operandi.",
        price: '$ 51.00',
        src: 'images/card1.svg',
    },

    {
        id: 3,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teamsup with Moda Operandi.",
        price: '$ 54.00',
        src: 'images/card3.svg',
    },
    {
        id: 4,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teamsup with Moda Operandi.",
        price: '$ 55.00',
        src: 'images/card4.svg',
    },
    {
        id: 5,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teamsup with Moda Operandi.",
        price: '$ 52.00',
        src: 'images/card5.svg',
    },
    {
        id: 6,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teamsup with Moda Operandi.",
        price: '$ 52.00',
        src: 'images/card6.svg',
    },
];

const galleryBox = document.querySelector('.gallery');
if (galleryBox !== null) {
    dataCardItems.forEach((product) => {

        const cardItems = document.createElement('div');
        cardItems.classList.add('card_items');

        const cardWrap = document.createElement('div');
        cardWrap.classList.add('card_wrap');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card_image');
        cardImage.src = product.src;
        cardImage.setAttribute("alt", "photo_card");

        const cardImageDark = document.createElement('div');
        cardImageDark.classList.add('card_image_dark');

        const buttonImageDark = document.createElement('button');
        buttonImageDark.classList.add('button_image_dark');
        buttonImageDark.classList.add('product_add');
        buttonImageDark.setAttribute("data-product-id", product.id);
        buttonImageDark.textContent = 'Add to Cart';


        const buttonImage = document.createElement('img');
        buttonImage.src = 'images/basket.svg';


        const cardItemsTitle = document.createElement('div');
        cardItemsTitle.classList.add('card_items_title');

        const headerImage = document.createElement('h6');
        headerImage.classList.add('header_image');
        headerImage.textContent = product.name;

        const textCard = document.createElement('p');
        textCard.classList.add('text_card');
        textCard.textContent = product.text;

        const price = document.createElement('span');
        price.textContent = product.price;


        galleryBox.appendChild(cardItems);
        cardItems.appendChild(cardWrap);
        cardWrap.appendChild(cardImage);
        cardWrap.appendChild(cardImageDark);
        cardImageDark.appendChild(buttonImageDark);
        cardImageDark.appendChild(buttonImageDark);
        buttonImageDark.appendChild(buttonImage);
        cardItems.appendChild(cardItemsTitle);
        cardItemsTitle.appendChild(headerImage);
        cardItemsTitle.appendChild(textCard);
        cardItemsTitle.appendChild(price);

    });
}



const buttonAddToCart = document.querySelectorAll('.product_add');
buttonAddToCart.forEach(btn => {
    btn.addEventListener('click', function (e) {
        cart.addProduct(e.currentTarget.getAttribute('data-product-id'));
        cart.render();
    })
})
const cart = {
    getProducts() {
        let list = this.getProductIds();
        let products = list.map(
            (item) => {
                return {
                    prodCount: item.count,
                    prod: dataCardItems.filter(
                        (product) => product.id == item.productId
                    ).pop()
                }
            }
        );
        return products.filter((item, index) => products.indexOf(item) == index)
    },

    getProductIds() {
        let list = sessionStorage.getItem('cart');
        if (list == null) {
            list = [];
        } else {
            list = JSON.parse(list)
        }
        return list;
    },

    addProduct(productId) {
        let list = this.getProductIds();
        let item = list.filter((item) => item.productId == productId).pop();

        if (item == undefined) {
            list.push({
                productId,
                count: 1
            });
        } else {
            item.count++;
        }

        sessionStorage.setItem('cart', JSON.stringify(list));
    },

    deleteProduct(productId) {
        let count = 0;
        let list = cart.getProductIds();
        const item = list.filter((element) => productId == element.productId).pop();
        if (item == undefined) {
            return;
        }
        if (item.count > 1) {
            item.count--;
            count = item.count;
        } else {
            list = list.filter((element) => item.productId !== element.productId)

        }
        sessionStorage.setItem('cart', JSON.stringify(list));
        
        return {count};

    },

    clearProducts() {
        sessionStorage.setItem('cart', JSON.stringify([]));
    },

    render() {
        cardRenderer.render(this)
    }
};

const cardRenderer = {
    render(cart) {
        console.log(cart.getProducts());
    }
};


//CART