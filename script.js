const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const filterButtons = document.querySelectorAll(".filter-btn");
const certificateCards = document.querySelectorAll(".certificates-grid .certificate-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        certificateCards.forEach((card) => {
            const categories = card.dataset.category.split(" ");
            if (filter === "all" || categories.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    successMessage.textContent =
        "Thank you! Your message has been received.";

    form.reset();

    setTimeout(() => {
        successMessage.textContent = "";
    }, 3000);
});