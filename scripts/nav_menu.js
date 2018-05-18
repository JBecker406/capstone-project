// jQuery variables
var $subTitles = $(".submenuTitle");
var $submenus = $(".submenu");
var $navArrow = $("#navArrow");
var $navMenu = $("#navMenu");
var $returnBtn = $("#returnBtn");

// Sets event listener if width is less than or equal to 480px
if ($(window).width() <= 480 ) {
    $(document).ready(function() {
        $subTitles.on("click", openSubmenu);
    });
} 

// Sets click even listeners
$navArrow.on("click", openMenu);
$returnBtn.on("click", closeSubmenu)

// Sets or removes event listeners when window is resized based on width of window
$(window).resize(function() {
    if ($(window).width() <= 480 ) {
        $subTitles.on("click", openSubmenu);
    } else {
        $subTitles.off("click", openSubmenu);
        removeStyles();
    }
});

// Opens navigation menu
function openMenu() {
    $navMenu.css("display", "block");
    $navArrow.html("Close Menu &#8744;").off("click", openMenu).on("click", closeMenu);
}

// Closes menu
function closeMenu() {
    $navMenu.css("display", "none");
    $navArrow.html("Open Menu &#62;").off("click", closeMenu).on("click", openMenu);
    closeSubmenu();
}

// Opens a submenu
function openSubmenu(e) {
    var $submenu = $(e.target).siblings();
    $("#navMenu>li>a").css("display", "none");
    $submenu.css("display", "block");
    $returnBtn.css("display", "block");
}

// Closes a submenu
function closeSubmenu() {
    $(".submenu").css("display", "none");
    $("#navMenu>li>a").css("display", "block");
    $returnBtn.css("display", "none");
}

// Removes styles to prevent problems switching window sizes
function removeStyles() {
    $("#navMenu").removeAttr("style");
    $("#navMenu>li>a").removeAttr("style");
    $(".submenu").removeAttr("style");
    $returnBtn.removeAttr("style");
    $navArrow.html("Open Menu &#62;").off("click", closeMenu).on("click", openMenu);
}