function init_map() {
	var myOptions = {
		zoom: 17,
		center: new google.maps.LatLng(28.5888, 77.17655749999994),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(28.5888, 77.17655749999994)
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
	infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);