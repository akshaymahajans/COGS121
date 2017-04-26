var map;

function initMap() {
    $("#map-loading").fadeOut();
    getGeoPosition(function (pos) {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: pos
        });
        var marker = new google.maps.Marker({
            position: pos,
            icon: 'img/self.png',
            map: map
        });
        var contentString =
        '<h1 id="firstHeading" class="firstHeading">McDonalds</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Software Engineer</b> - Looking for anyone </p>'+
        '<p>Website: <a href="www.mcdonalds.com">'+ 'www.mcdonalds.com</a> '+
        '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        loadLost();
    });
}

function loadLost() {
    // TODO: Load the lost panel
    ajax({
      url: "/ajax/lost?action=get",
      type: "get",
      success: function (data) {
          data.forEach(function (lost) {
              var item = new google.maps.InfoWindow;
              item.setPosition({lat: lost.lat, lng: lost.lng});
              item.setContent(lost.name);
              item.open(map);
          });
      }
  });
}

function postFound() {
    var name, description;
    if ((name = $("#found-item").val()) == "") {
        alert("Please insert the name of the item");
    }
    if ((description = $("#found-description").val()) == "") {
        alert("Please insert the description of the item");
    }
    randomClosePosition(function (pos) {
        // TODO: Post the information
        ajax({
          url: "/ajax/found?action=post",
          type: "post",
          data: {
              name: $("#found-item").val(),
              description: $("#found-description").val(),
              lat: pos.lat,
              lng: pos.lng
          },
    success: function (data) {
              alert("Post Success!");
              window.location.reload();
          }
      });

    });
}

function getGeoPosition(callback) {
    // TODO: Try to get geolocation and put the result back to
    // callback in the form of
    //  {
    //      lat: <LATITUDE>,
    //      lng: <LONGITUDE>
    //  }
    navigator.geolocation.getCurrentPosition(function (info) {
      callback({lat: info.coords.latitude, lng: info.coords.longitude});
      /*callback is a function*/
    });

}

function randomClosePosition(callback) {
    getGeoPosition(function (pos) {
        pos.lat += -0.01 + Math.random() * 0.02;
        pos.lng += -0.01 + Math.random() * 0.02;
        callback(pos);
    });
}
