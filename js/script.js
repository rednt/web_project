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

/*Comment ca marche q&a */

const questions = document.querySelectorAll('.question');

        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isOpen = question.classList.contains('open');

                document.querySelectorAll('.question.open').forEach(q => {
                    q.classList.remove('open');
                    q.nextElementSibling.style.maxHeight = 0;
                    q.nextElementSibling.style.opacity = 0;
                });

                if (!isOpen) {
                    question.classList.add('open');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.opacity = 1;
                }
            });
        });

//Login and Signup Form

const loginBox = document.getElementById('login-box');
const signupBox = document.getElementById('signup-box');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
      

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.classList.add('hidden');
    signupBox.classList.remove('hidden');
        });
      

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.classList.add('hidden');
    loginBox.classList.remove('hidden');
        });



