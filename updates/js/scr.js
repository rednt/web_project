const openShopping = document.querySelector(".np");
const list = document.querySelector(".list");
const closeShopping = document.querySelector(".close");
const body = document.querySelector("body");
const detail = document.getElementById("detailsModal");
const PopupTitle = document.getElementById("PopupTitle");
const Description = document.getElementById("description");
const closeModalBtn = document.querySelector(".close-btn");

let produits = [
    { id: 1, name: "Expert Gaming ", images: "p1.jpg", des:"Bienvenue sur EXPERT GAMING, votre destination incontournable pour tout ce qui concerne le monde du gaming. Chez nous, le gaming est bien plus qu'une passion, c'est notre obsession. Nous sommes une équipe de gamers passionnés, d'experts en technologie et de connaisseurs du matériel gaming. Notre mission est simple : offrir à nos clients des produits de qualité supérieure, des conseils éclairés et une expérience de jeu exceptionnelle." },
    { id: 2, name: "Jumpark", images: "p2.jpg", des:"Venez repousser vos limites dans le plus grand parc de trampoline indoor en Tunisie. Parcours Ninja, Laser Room, Jump Ball et bien plus." },
    { id: 3, name: "Movenpick Gammarth Tunis", images: "p3.jpg", des:"L'hôtel 5 étoiles Mövenpick Gammarth Tunis s'adresse à ceux qui apprécient la perfection jusque dans les moindres détails. Ce nouveau joyaux de la banlieue de Tunis est parfait pour le voyageur qui veut allier affaires et bien-être." },
    { id: 4, name: "Slim Fit", images: "p4.jpg",des:"Slim Fit vous offre un espace de 700 m² réparti entre un espace de cardio-training, un espace de musculation, un espace de spinning, une grande salle de fitness où vous pourrez profiter d'un éventail de cours collectifs" },
    { id: 5, name: "Librairie Al Kitab", images: "p5.jpg", des:"Histoire de la librairie AL KITAB : Fondée en 1967 par Lilia Tej Kabadou, première femme libraire du monde arabe à ouvrir une librairie. La librairie de Tunis se trouve sur l’artère principale du centre-ville : L’avenue Habib Bourguiba. Reprise par ma mère, Selma Kabadou Jabbes, dans les années 80, elle fait un gros travail d’évolution de la librairie et une ouverture d’un deuxième point de vente dans la banlieue nord de Tunis, La Marsa. Notre souhait est de transformer la librairie, d’une boutique dans laquelle on rentre acheter un livre, en un lieu de vie dans lequel nous pouvons s’oublier pendant des heures sans s’en rendre compte." },
    { id: 6, name: "Patisserie Madame Jedidi", images: "p6.jpg", des:"Pâtisserie Madame Jdidi est une maison de douceurs où tradition et modernité se rencontrent pour offrir une expérience gourmande inoubliable. Située au cœur d'un cadre chaleureux et raffiné, elle se distingue par ses créations artisanales, préparées avec passion et des ingrédients de première qualité. Chez Madame Jdidi, chaque pâtisserie raconte une histoire, mêlant saveurs authentiques et touches d'originalité. Que vous soyez amateur de classiques intemporels comme les éclairs et les tartes, ou curieux de découvrir des créations innovantes inspirées de recettes locales et internationales, cette pâtisserie est un véritable paradis pour les gourmets." },
    { id: 7, name: "Sherrington", images: "p7.jpg", des:"Sherrington s'inspire des tendances actuelles et de la haute couture. Elle propose des vêtements à la fois classiques, distingués voire même décontractés. Ce style vestimentaire s'adresse par excellence aux hommes au goût raffiné, casual, classe et chic. La matière est celle qui donne le premier visage à nos vêtements. Notre draperie comporte plusieurs références. Chacune d'entre elles correspond à un esprit bien particulier tout en respectant deux principes primordiaux : qualité et élégance." },
    { id: 8, name: "LC WAIKIKI", images: "p8.jpg", des:"LC Waikiki** est une marque de mode qui propose des vêtements modernes et abordables pour toute la famille. Que ce soit pour les femmes, les hommes ou les enfants, elle offre un large choix de styles adaptés à tous les goûts et à tous les budgets. Avec son excellent rapport qualité-prix, LC Waikiki permet à chacun de bien s'habiller simplement et facilement." },
    { id: 9, name: "Sophia Beauty & Spa", images: "p9.jpg", des:"✨Bienvenue chez Sophia Beauty & Spa ! ✨Contactez-nous pour réserver votre moment de détente et de beauté chez Sophia Beauty & Spa ! 💆‍♀️💅📍12 rue l’imam ibn Arafa , La Marsa☎️ 29 390 835" },
];

const initApp = () => {
    produits.forEach((value, key) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");

        newDiv.innerHTML = `
            <div><img src="photo/${value.images}" alt="${value.name}"></div>
            <div class="title">${value.name}</div>
            <button class="show-popup" data-key="${key}">
                <i class="fa fa-info-circle"></i> Afficher détails
            </button>
            
           
        `;

        list.appendChild(newDiv);
    });
};

initApp();
const scriptButtons = document.querySelectorAll(".show-popup");
scriptButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const key = event.target.closest("button").dataset.key;
        const product = produits[key];
        PopupTitle.textContent = product.name;
        Description .textContent = product.des;
        detail.style.display = "block";
    });
});
 
 closeModalBtn.addEventListener("click", () => {
     detail.style.display = "none";
 });
 window.addEventListener("click", (event) => {
     if (event.target === detail) {
         detail.style.display = "none";
     }
 });
 
 
 

