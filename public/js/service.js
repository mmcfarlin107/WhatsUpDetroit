var app = angular.module('detroitMod');

app.factory('detroitFactory', function($http, $location, $rootScope){

var postList = [];

	return {
		getLocation: getLocation,
		getZip: getZip,
		getPosts: getPosts,
		addPost: addPost,
		voteUp: voteUp,
		voteDown: voteDown,
		returnList: returnList,
		blockProf: blockProf
	}

	function getPosts (zip){
		var p = $http({
			method: 'GET',
			url: '/getposts/' + zip
		}).then(function(response){
			postList = response.data;
		});
		return p;
	}

	function returnList(){
		postList.forEach(function(x){
			x.upClicked = false
			x.downClicked = false
		})
		return postList;
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
	below function is passed as a parameter into the above geolocation api call.
	upon success, the returned latitude and longitude data are passed into
	the crd object and then console logged.
	then, an http call is made to the google geocoding API
	the latitude and longitude we got from the html5 geolocation api are passed in as variables
	then the user's reverse geocoded data, the zip code specifically, is returned.
	*/
	function success(pos) {
		var crd = pos.coords;
		//console.log(crd.latitude)
		//console.log(crd.longitude)
		$http({
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + crd.latitude + ',' + crd.longitude + '&key=AIzaSyDPVrV4R_jLLWAIQe4zPaIJaNSEJGiRwYM'
		}).then(function successfulCallback(response){
			console.log(response.data.results)
			zip = response.data.results[0].address_components[7].long_name
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

	//trying to get the profanity API to work
	function blockProf(content){
	  console.log('works');
	  var words= ['puppies', 'rainbow', 'unicorn', 'tigers', 'kittens', 'beautiful', 'leprechaun', 'cookies',
	  'sunshine', 'brownie', 'spirit', 'heart', 'love', 'taco', 'jazz', 'awesome', 'sparkle'];
	  var wordReplace = words[Math.floor(Math.random() * words.length)];
	  // var inputArea = document.getElementbyId('inputArea').value;
	  var p= $http({
	    method: 'GET',
	    url: 'https://community-purgomalum.p.mashape.com/json?fill_text=' + wordReplace + '&text=' + content,
	    headers:{
	      "X-Mashape-Key": "98M34VsMZrmshKpU82TTSAgyvWv6p1b9BZsjsnxdtc5Jidg4TW",
	      "Accept": "application/json"
	    }
	  }).then(function(result){
	    var data = {};
	    data.post = result.data.result;
	    data.zip = $rootScope.zip;
	    console.log(data);
	    addPost(data);
	  });
	  return p;
	}

	function addPost(newPost) {
	  return $http({
	     url: '/post',
	     method: 'POST',
	     data: newPost
	  }).then(function(response){
	    postList = response.data
	    console.log(postList)
	  })
	}

  function voteUp(post, id) {
  	console.log('talking to service')
  	var prom = $http({
  		url: '/upvote/' + id,
  		method: 'PUT',
  		data: post
  	}).then(function(response){
  		postList = response.data
  	})
  	return prom;
  }

  function voteDown(post, id) {
  	console.log('votedown talking to service')
  	var prom = $http({
  		url: '/downvote/' + id,
  		method: 'PUT',
  		data: post
  	}).then(function(response){
  		postList = response.data
  	})
  	return prom;
  }

});
