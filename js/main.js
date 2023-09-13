// Intro section
const sectionIntro = document.querySelector('.section-intro');
sectionIntro.classList.add('fade-in');


setTimeout(() => {

    const sectionIntro = document.getElementById("section-intro");
    sectionIntro.classList.add("removed")

    const allMainSections = document.getElementsByClassName("main-section");
    for (let i = 0; i < allMainSections.length; i++) {
        allMainSections[i].classList.remove("deactivated");
    }

}, 3000);


// Close the dropdown if the user clicks outside of it

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

//  Burger Menu

function toggleBurger() {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenu.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");

}

// Scroll up
const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function () {

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});