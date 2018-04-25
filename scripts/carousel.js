var slideIndex = 1;
var slides = document.getElementsByClassName("cImage");
var squares = document.getElementsByClassName("cSun");
showSlide();

function rightArrow() {
    if (slideIndex === slides.length) {
        slideIndex = 1;
    } else {
        slideIndex += 1;
    }
    showSlide();
}

function leftArrow() {
    if (slideIndex === 1) {
        slideIndex = slides.length;
    } else {
        slideIndex -= 1;
    }
    showSlide();
}

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function squareSelect(e) {
    var selectedSquare = e.target;
    var squareNumber = selectedSquare.id.slice(6);
    slideIndex = parseInt(squareNumber) + 1;
    showSlide();
}

function addEventListeners() {
    document.getElementById("cPrev").addEventListener("click", leftArrow);
    document.getElementById("cNext").addEventListener("click", rightArrow);
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", squareSelect);
        squares[i].setAttribute("id", "square" + i);
    }
}

window.addEventListener("load", addEventListeners);