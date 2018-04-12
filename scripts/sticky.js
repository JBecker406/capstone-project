var navbar = document.getElementsByTagName("nav")[0];
var header = document.getElementsByTagName("header")[0];
var sticky = navbar.offsetTop;

window.onscroll = function() {checkForStick()};

function checkForStick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        header.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        header.classList.remove("sticky");
    }
}