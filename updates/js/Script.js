const openShopping = document.querySelector(".np");
const list = document.querySelector(".list");
const closeShopping = document.querySelector(".close");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");
const modal = document.getElementById("amountModal");
const closeModalBtn = modal.querySelector(".close-btn");
const amountButtons = modal.querySelectorAll(".amount-option");
const manualAmountInput = document.getElementById("manualAmount");
const addManualAmountBtn = document.getElementById("addManualAmount");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    { id: 1, name: "Expert Gaming ", images: "p1.jpg",  },
    { id: 2, name: "Jumpark", images: "p2.jpg" },
    { id: 3, name: "Movenpick Gammarth Tunis", images: "p3.jpg" },
    { id: 4, name: "Slim Fit", images: "p4.jpg" },
    { id: 5, name: "Librairie Al Kitab", images: "p5.jpg" },
    { id: 6, name: "Patisserie Madame Jedidi", images: "p6.jpg" },
    { id: 7, name: "Sherrington", images: "p7.jpg"},
    { id: 8, name: "LC WAIKIKI", images: "p8.jpg" },
    { id: 9, name: "Sophia Beauty & Spa", images: "p9.jpg" },
];

let listCards = [];
let totalPrice = 0;
let count = 0;

const initApp = () => {
    products.forEach((value, key) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");

        newDiv.innerHTML = `
            <img src="photo/${value.images}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <button class="open-amount-modal" data-key="${key}">
                <i class="fa fa-money-bill"></i> Ajouter un montant
            </button>
        `;

        list.appendChild(newDiv);
    });

    const amountModalButtons = document.querySelectorAll(".open-amount-modal");
    amountModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.style.display = "block";
            modal.dataset.key = button.dataset.key; 
        });
    });
};


const addToCart = (key, amount) => {
    const product = products[key];
    listCards.push({ 
        name: product.name, 
        images: product.images, 
        amount: parseFloat(amount) 
    });
    totalPrice += parseFloat(amount);
    count += 1;

    reloadCart();
};

const reloadCart = () => {
    listCard.innerHTML = "";
    listCards.forEach((value) => {
        let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="photo/${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div>${value.amount.toFixed(2)} TND</div>
        `;
        listCard.appendChild(newDiv);
    });
    total.innerText = totalPrice.toFixed(2) + " TND";
    quantity.innerText = count;
};

amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const key = modal.dataset.key;
        const amount = button.dataset.amount;
        addToCart(key, amount);
        modal.style.display = "none";
    });
});

addManualAmountBtn.addEventListener("click", () => {
    const key = modal.dataset.key;
    const amount = manualAmountInput.value;
    if (amount && parseFloat(amount) > 0) {
        addToCart(key, amount);
        manualAmountInput.value = ""; 
        modal.style.display = "none";
    } else {
        alert("Veuillez entrer un montant valide.");
    }
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Initialisation
initApp();








