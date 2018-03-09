var navbar = document.getElementsByClassName("mainNav")[0];
var sticky = navbar.offsetTop;

function checkForStick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}