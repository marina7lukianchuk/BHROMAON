
function toggleMenu() {
    const navMenu = document.querySelector("#navMenu");
    navMenu.classList.add("active");

    listMenu = document.querySelector('.header_menu');
    listMenu.classList.toggle("show_menu");
}