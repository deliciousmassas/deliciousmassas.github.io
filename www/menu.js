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
    if (!$nav.hasClass("toggle-flag")) {
        $nav.removeClass("scrolled")
    }
});

$(function () {
    var map = new google.maps.Map(document.getElementById('myMap'), {
        center: { lat: -16.290238, lng: -48.966344 },
        zoom: 15
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
        placeId: 'ChIJo_BhHU6hXpMRsT8VWzg4Dc4'
    }, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                // icon: "./images/logo.png",
                position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                    place.formatted_address + '</div>');
                infowindow.open(map, this);
            });
        }
    });
}
)