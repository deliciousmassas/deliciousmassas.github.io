$(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 0 /*$nav.height()*/);
    $nav.toggleClass('toggle-flag', $(this).scrollTop() > 0);

    var $logo = $("#brand");
    $logo.toggleClass('scrolled', $(this).scrollTop() > 0);
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
});

// $(function() {
//    $("img.hover").each(function() {
//      var height = $("img.hover").height();
//      $(".hover").css("height",height+"px");
//      // for correctly load products images for the first time
//      //$(this).attr('src', $(this).attr('src')+'?'+Math.random());
//    });
//    $($('link')[0]||$('style')[0]).remove();$.get('/css/main.css', function(d){$('head').append($('<style/>').html(d))})
// });

$(".hover").hover(
  function() {
    var name = $(this).attr('src');
    var newName = name.replace(".jpg","2.jpg")
    $(this).attr('src', newName);
  },
  function() {
    var height = $(this)
    var name = $(this).attr('src');
    var newName = name.replace("2.jpg",".jpg")
    $(this).attr('src', newName);
  }
);
