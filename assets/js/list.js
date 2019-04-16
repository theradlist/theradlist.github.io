// Toggle the filterview on mobile when it's pressed 
toggleMobileNavView = function () {
    // $(window).scrollTop() < $("#sticky-anchor").offset().top && !$("#mobile-nav").hasClass("open") && $("body,html").scrollTop($("#sticky-anchor").offset().top + 1), 
    $("#mobile-nav").toggleClass("open")
}
$("#mobile-nav").on("click", ".toggle-zone", toggleMobileNavView);
$("#mobile-nav").on("click", ".toggle-close", toggleMobileNavView);

// Make the filterview button stick to the top of the page when scrolling down
var stickyAnchorPlacement = false; 
function toggleFixedMobileNavButton() {
    $("body").toggleClass("filter-fixed"); 
    stickyAnchorPlacement = !stickyAnchorPlacement; 
    $("#sticky-phantom").toggle(); 
}
$("body").on('scroll', function () {
    if ($("#mobile-nav").css("display") != "none") {
        if (stickyAnchorPlacement && $("#sticky-anchor").offset().top > 0) toggleFixedMobileNavButton();
        if (!stickyAnchorPlacement && $("#sticky-anchor").offset().top < 0) toggleFixedMobileNavButton();
    }
})