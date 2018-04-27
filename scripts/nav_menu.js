var subTitles = document.getElementsByClassName("submenuTitle");
var submenus = document.getElementsByClassName("submenu");

$(document).ready(function() {
    if ($(window).width() <= 480 ) {
        window.addEventListener("load", function() {
            for (var i = 0; i < subTitles.length; i++) {
                subTitles[i].addEventListener("click", openMenu);
            }
        });
    } 
});


$(window).resize(function() {
    if ($(window).width() <= 480 ) {
        for (var i = 0; i < subTitles.length; i++) {
            subTitles[i].addEventListener("click", openMenu);
        }
    } else {
        for (var i = 0; i < subTitles.length; i++) {
            subTitles[i].removeEventListener("click", openMenu);
        }
    }
});

function openMenu(e) {
    var subTitle = e.target;
    $(".submenu").each(function() {
        $(this).removeAttr("id");
    });
    $(subTitle).siblings().attr("id", "currentMenu");
}