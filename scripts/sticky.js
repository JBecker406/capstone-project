// Variables
var navbar = document.getElementsByTagName("nav")[0];
var header = document.getElementsByTagName("header")[0];
var sticky = navbar.offsetTop;

// Change variable value when window resizes
$(window).resize(function() {
        if ($(window).width() <= 480) {
            sticky = 240;
        } else {
            sticky = 200;
        }
});

// Sets event listener for scrolling
window.onscroll = checkForStick;

// Function to set or remove sticky class
function checkForStick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        header.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        header.classList.remove("sticky");
    }
}