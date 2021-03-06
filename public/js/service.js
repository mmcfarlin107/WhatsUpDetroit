var app = angular.module('detroitMod');

app.factory('detroitFactory', function($http, $location, $rootScope){

var postList = [];
var modPost = {};

	return {
		getLocation: getLocation,
		getPosts: getPosts,
		getPopular: getPopular,
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

	function getPopular (){
		var p = $http({
			method: 'GET',
			url: '/popular/'
		}).then(function(response){
			postList = response.data;
		});
		return p;
	}

	function returnList(){
		return postList;
	}

	function getLocation() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error, options)
		} else {
			console.log('not working');
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
			//console.log(response.data.results)
			zip = response.data.results[0].address_components[7].long_name
		}).then(function(){
			$rootScope.zip = zip
			 if($rootScope.zip === "48226"){
				$location.path('/downtown')
			} else if($rootScope.zip === "48216") {
				$location.path('/corktown')
			} else if ($rootScope.zip === "48208") {
				$location.path('/woodbridge')
			} else if ($rootScope.zip === "48202") {
				$location.path('/new-center')
			} else if ($rootScope.zip === "48201") {
				$location.path('/midtown')
			} else if ($rootScope.zip === '48207') {
				$location.path('/east-central')
			} else if ($rootScope.zip === '48209') {
				$location.path('/southwest')
			} else {
				console.log('error or invalid zip code')
				$location.path('/sorry')
			}
		});
	}

	function error(err) {
		console.warn('error ' + err.code + ' ' + err.message);
	}

	var options = {
		enableHighAccuracy: true,
		timeout: 1000000,
		maximumAge: 0
	}


	//trying to get the profanity API to work
	function blockProf(content){
	  //console.log('works');
	  var words= ['puppies', 'rainbow', 'unicorn', 'tigers', 'kittens', 'beautiful', 'leprechaun', 'cookies',
	  'sunshine', 'brownie', 'spirit', 'heart', 'love', 'taco', 'jazz', 'awesome', 'sparkle'];
		var badWords = 'dick,cock,suck,slut,whore,hoe,titty,fag';
	  var wordReplace = words[Math.floor(Math.random() * words.length)];
	  // var inputArea = document.getElementbyId('inputArea').value;
	  var p= $http({
	    method: 'GET',
	    url: 'https://community-purgomalum.p.mashape.com/json?fill_text=' + wordReplace + '&text=' + content + '&add=' + badWords,
	    headers:{
	      "X-Mashape-Key": "98M34VsMZrmshKpU82TTSAgyvWv6p1b9BZsjsnxdtc5Jidg4TW",
	      "Accept": "application/json"
	    }
	  }).then(function(result){
	    modPost.post = result.data.result;
	    modPost.zip = $rootScope.zip;
	    // console.log(data);
	  });
	  return p;
	}

	function addPost() {
	  return $http({
	     url: '/post',
	     method: 'POST',
	     data: modPost
	  }).then(function(response){
	    postList = response.data
	    //console.log(postList)
	  })
	}

  function voteUp(post, id) {
  	//console.log('talking to service')
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
  	//console.log('votedown talking to service')
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
