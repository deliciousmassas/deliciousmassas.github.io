// $(function () {
    

    
// });
$(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 0 /*$nav.height()*/);
    $nav.toggleClass('toggle-flag', $(this).scrollTop() > 0);
});

$('#collapsibleNavId').on('show.bs.collapse', function (e) {
    // Action to execute once the collapsible area is expanded
    var $nav = $(".navbar-fixed-top");
    $nav.addClass("scrolled")
});

$('#collapsibleNavId').on('hide.bs.collapse', function (e) {
    // Action to execute once the collapsible area is expanded
    var $nav = $(".navbar-fixed-top");
    if(!$nav.hasClass("toggle-flag")) {
        $nav.removeClass("scrolled")
    }
}); 

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}