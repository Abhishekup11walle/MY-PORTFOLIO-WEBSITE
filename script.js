document.addEventListener("DOMContentLoaded", function () {
    // Typing effect on hero name
    const nameElement = document.getElementById("hero-name");
    const nameText = "Abhishek Sharma";
    let index = 0;
  
    function typeEffect() {
        if (index < nameText.length) {
            nameElement.innerHTML = `Hello, I'm <span>${nameText.substring(0, index + 1)}</span>`;
            index++;
            setTimeout(typeEffect, 150);
        }
    }
  
    typeEffect(); // Start typing effect
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
  
    // Contact form validation
    document.querySelector("form").addEventListener("submit", function (e) {
        const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
        const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();
  
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            e.preventDefault();
        }
    });
  });