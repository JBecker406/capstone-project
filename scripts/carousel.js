var slideIndex = 1;
var slides = document.getElementsByClassName("cImage");
var suns = document.getElementsByClassName("cSun");
showSlide();

var slideTime = setInterval(function() {rightArrow()}, 4000);

function rightArrow() {
    if (slideIndex === slides.length) {
        slideIndex = 1;
    } else {
        slideIndex += 1;
    }
    showSlide();
    resetTimer();
}

function leftArrow() {
    if (slideIndex === 1) {
        slideIndex = slides.length;
    } else {
        slideIndex -= 1;
    }
    showSlide();
    resetTimer();
}

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

function sunSelect(e) {
    var selectedSun = e.target;
    var sunNumber = selectedSun.id.slice(3);
    slideIndex = parseInt(sunNumber) + 1;
    showSlide();
    resetTimer();
}

function addEventListeners() {
    document.getElementById("cPrev").addEventListener("click", leftArrow);
    document.getElementById("cNext").addEventListener("click", rightArrow);
    for (var i = 0; i < suns.length; i++) {
        suns[i].addEventListener("click", sunSelect);
        suns[i].setAttribute("id", "sun" + i);
    }
}

function resetTimer() {
    clearInterval(slideTime);
    slideTime = setInterval(function() {rightArrow()}, 4000);
}

window.addEventListener("load", addEventListeners);