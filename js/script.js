

/*const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});*/


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const images = document.querySelectorAll('.image img');
    images.forEach((image) => {
        if (isInViewport(image)) {
            image.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('DOMContentLoaded', handleScroll);




