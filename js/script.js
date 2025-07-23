document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = function() {
        navbar.classList.toggle("active"); // Toggle menu open/close
    };

    // Hide the menu when scrolling
    window.addEventListener("scroll", function() {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active"); // Close the menu on scroll
        }
    });
});
