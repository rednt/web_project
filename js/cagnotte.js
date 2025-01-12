function updateCounter() {
    const textarea = document.getElementById('message');
    const counter = document.getElementById('charCounter');
    counter.textContent = `${textarea.value.length}/180`;
}
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const stepContainers = document.querySelectorAll(".step-container");
    const nextBtns = document.querySelectorAll(".step-container button[type='button']");
    const backBtns = document.querySelectorAll(".step-container button[id='backToStep']");

    let currentStep = 0;
    function showStep(stepIndex) {
        stepContainers.forEach((container, index) => {
            if (index === stepIndex) {
                container.classList.add("active");
                steps[index].classList.add("active");
            } else {
                container.classList.remove("active");
                steps[index].classList.remove("active");
            }
        });
    }
    nextBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (index < steps.length - 1) {
                currentStep = index + 1;
                showStep(currentStep);
            }
        });
    });
    backBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (index > 0) {
                currentStep = index - 1;
                showStep(currentStep);
            }
        });
    });
    showStep(currentStep);
});
