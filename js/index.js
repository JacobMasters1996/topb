$(document).foundation();
function initMap() {
  var center = {lat: 52.221202, lng: -1.035484};
  var locations = [
    ['The Royal Oak<br>\
  22 Church St, Crick, Northampton NN6 7TP<br>\
   <a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',   52.349333, -1.138067],
    ['The Melbourne Arms<br>\
    9 Melbourne La, Northampton NN5 6HS<br>\
   <a href="https://goo.gl/maps/PY1abQhuW9C2">Get Directions</a>',   52.242442, -0.944717],
    ['Foresters Arms<br>\
  22 The Green, Nether Heyford, Northampton NN7 3LE<br>\
    <a href="https://goo.gl/maps/eUmyNuMyYNN2">Get Directions</a>', 52.221202, -1.035484]
  ];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: center
  });
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}
