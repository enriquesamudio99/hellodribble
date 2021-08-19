const navbarNav = document.getElementById("navbarNav");
const navToggler = document.getElementById("navbarToggler");

console.log(navToggler);

if (navToggler) {
    navToggler.addEventListener("click", () => {
        navbarNav.classList.toggle("show");
    });
}