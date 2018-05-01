var $subTitles = $(".submenuTitle");
var $submenus = $(".submenu");
var $navArrow = $("#navArrow");
var $navMenu = $("#navMenu");
var $returnBtn = $("#returnBtn");

if ($(window).width() <= 480 ) {
    $(document).ready(function() {
        $subTitles.on("click", openSubmenu);
    });
} 

$navArrow.on("click", openMenu);
$returnBtn.on("click", closeSubmenu)

$(window).resize(function() {
    if ($(window).width() <= 480 ) {
        $subTitles.on("click", openSubmenu);
    } else {
        $subTitles.off("click", openSubmenu);
        removeStyles();
    }
});

function openMenu() {
    $navMenu.css("display", "block");
    $navArrow.html("Close Menu &#8744;").off("click", openMenu).on("click", closeMenu);
}

function closeMenu() {
    $navMenu.css("display", "none");
    $navArrow.html("Open Menu &#62;").off("click", closeMenu).on("click", openMenu);
    closeSubmenu();
}

function openSubmenu(e) {
    var $submenu = $(e.target).siblings();
    $("#navMenu>li>a").css("display", "none");
    $submenu.css("display", "block");
    $returnBtn.css("display", "block");
}

function closeSubmenu() {
    $(".submenu").css("display", "none");
    $("#navMenu>li>a").css("display", "block");
    $returnBtn.css("display", "none");
}

function removeStyles() {
    $("#navMenu").removeAttr("style");
    $("#navMenu>li>a").removeAttr("style");
    $(".submenu").removeAttr("style");
    $returnBtn.removeAttr("style");
    $navArrow.html("Open Menu &#62;").off("click", closeMenu).on("click", openMenu);
}