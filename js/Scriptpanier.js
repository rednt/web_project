const openShopping = document.querySelector(".np");
const list = document.querySelector(".list");
const closeShopping = document.querySelector(".close");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    { id: 1, name: "Expert Gaming images", images: "p1.jpg", price: 100 },
    { id: 2, name: "Jumpark", images: "p2.jpg", price: 100 },
    { id: 3, name: "Movenpick Gammarth Tunis", images: "p3.jpg", price: 100 },
    { id: 4, name: "Slim Fit", images: "p4.jpg", price: 100 },
    { id: 5, name: "Librairie Al Kitab", images: "p5.jpg", price: 100 },
    { id: 6, name: "Patisserie Madame Jedidi", images: "p6.jpg", price: 100 },
    { id: 7, name: "Sherrington", images: "p7.jpg", price: 100 },
    { id: 8, name: "LC WAIKIKI", images: "p8.jpg", price: 100 },
    { id: 9, name: "Sophia Beauty & Spa", images: "p9.jpg", price: 100 },
];



let listCards = [];

const initAppPanier = () => {
    products.forEach((value, key) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");

        newDiv.innerHTML = `
            <img src="../assets/photo/${value.images}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to Card</button>
        `;

        list.appendChild(newDiv);
    });
};

initAppPanier();

const addToCard = (key) => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
};

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price;
            count += value.quantity;

            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="../assets/photo/${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${value.price.toLocaleString()}</div>
                <div>
                    <button class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};

const changeQuantity = (key, quantity) => {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
};

