// Variables
var slideIndex = 1;
var slides = document.getElementsByClassName("cImage");
var suns = document.getElementsByClassName("cSun");
// Show first slide
showSlide();

// Set interval
var slideTime = setInterval(function() {rightArrow()}, 4000);

// Function to move to right one
function rightArrow() {
    if (slideIndex === slides.length) {
        slideIndex = 1;
    } else {
        slideIndex += 1;
    }
    showSlide();
    resetTimer();
}

// Function to move to left one
function leftArrow() {
    if (slideIndex === 1) {
        slideIndex = slides.length;
    } else {
        slideIndex -= 1;
    }
    showSlide();
    resetTimer();
}

// Function to show current slide
function showSlide() {
    for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    var selectedSun = suns[slideIndex - 1];
    for (var i = 0; i < suns.length; i++) {
        suns[i].classList.remove("cActive");
    }
    selectedSun.classList.add("cActive");
}

// Function to choose slide based on sun clicked
function sunSelect(e) {
    var selectedSun = e.target;
    var sunNumber = selectedSun.id.slice(3);
    slideIndex = parseInt(sunNumber) + 1;
    showSlide();
    resetTimer();
}

// Function to add event listeners
function addEventListeners() {
    document.getElementById("cPrev").addEventListener("click", leftArrow);
    document.getElementById("cNext").addEventListener("click", rightArrow);
    for (var i = 0; i < suns.length; i++) {
        suns[i].addEventListener("click", sunSelect);
        suns[i].setAttribute("id", "sun" + i);
    }
}

// Function to reset timer when slide is manually changed
function resetTimer() {
    clearInterval(slideTime);
    slideTime = setInterval(function() {rightArrow()}, 4000);
}

// Adds event listeners on load
window.addEventListener("load", addEventListeners);