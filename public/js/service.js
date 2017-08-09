
var app = angular.module('detroitMod');

app.factory('detroitFactory', function($http){

	return {
		getLocation: getLocation,
		getZip: getZip
	}

	function getLocation() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error, options)
		} else {
			console.log('your shit dont work');
		}
	}

	var zip;
	/*
	below function is passed as a parameter into geolocation api call.
	upon success, the returned latitude and longitude data are passed into
	the crd object and then console logged.
	then, an http call is made to the google geocoding API
	the latitude and longitude we got from the html5 geolocation api are passed in as variables
	then the user's reverse geocoded data, the zip code specifically, is returned.
	*/
	function success(pos) {
		var crd = pos.coords;
		console.log(crd.latitude)
		console.log(crd.longitude)
		$http({
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + crd.latitude + ',' + crd.longitude + '&key=AIzaSyDPVrV4R_jLLWAIQe4zPaIJaNSEJGiRwYM'
		}).then(function successfulCallback(response){
			console.log(response.data.results[4].address_components[0].long_name)
			zip = response.data.results[4].address_components[0].long_name

		});
	}

	function error(err) {
		console.warn('error ' + err.code + ' ' + err.message);
	}

	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	}

	function getZip() {
		console.log(zip)
		return zip
	}




	/*
	Downtown: 48226
	Corktown: 48216
	Woodbridge: 48208
	New Center: 48202
	East Central: 48207
	Southwest: 48209
	*/

});
