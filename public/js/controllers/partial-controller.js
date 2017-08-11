var app = angular.module('detroitMod');


//BEGIN CORKTOWN CONTROLLER
app.controller('corktown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Corktown"
	$scope.thisZip = "48216"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48216").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
	$scope.upvotePost = function(post, id) {
		console.log(post, id)
		detroitFactory.voteUp(post, id).then(function(){
			console.log('sending data back');
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.downvotePost = function(post, id){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
});
//-----END------


//BEGIN DOWNTOWN CONTROLLER
app.controller('downtown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Downtown"
	$scope.thisZip = "48226"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48226").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		content.zip = $rootScope.zip
		console.log(content.zip)
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.upvotePost = function(post, id) {
		console.log(post, id)
		detroitFactory.voteUp(post, id).then(function(){
			console.log('sending data back');
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.downvotePost = function(post, id){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
});
//-----END------

//BEGIN MIDTOWN CONTROLLER
app.controller('midtown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Midtown"
	$scope.thisZip = "48201"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};

	detroitFactory.getPosts("48201").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
	$scope.upvotePost = function(post, id) {
		console.log(post, id)
		detroitFactory.voteUp(post, id).then(function(){
			console.log('sending data back');
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.downvotePost = function(post, id){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
});
//-----END------

//BEGIN WOODBRIDGE CONTROLLER
app.controller('woodbridge', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Woodbridge"
	$scope.thisZip = "48208"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48208").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
	$scope.upvotePost = function(post, id) {
		console.log(post, id)
		detroitFactory.voteUp(post, id).then(function(){
			console.log('sending data back');
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.downvotePost = function(post, id){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
});
//-----END------


//BEGIN NEW CENTER CONTROLLER
app.controller('newCenter', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "New Center"
	$scope.thisZip = "48202"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48202").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
	$scope.upvotePost = function(post, id) {
		console.log(post, id)
		detroitFactory.voteUp(post, id).then(function(){
			console.log('sending data back');
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.downvotePost = function(post, id){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
});
//-----END------


//BEGIN EAST CENTRAL CONTROLLER
app.controller('eastCentral', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "East Central"
	$scope.thisZip = "48207"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48207").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
	$scope.upvotePost = function(post, id) {
		console.log(post, id)
		detroitFactory.voteUp(post, id).then(function(){
			console.log('sending data back');
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.downvotePost = function(post, id){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}

});
//-----END------


//BEGIN SOUTHWEST CONTROLLER
app.controller('southwest', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Southwest"
	$scope.thisZip = "48209"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48209").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
	$scope.upvotePost = function(post, id) {
		console.log(post, id)
		detroitFactory.voteUp(post, id).then(function(){
			console.log('sending data back');
			$scope.posts = detroitFactory.returnList();
		})
	}

	$scope.downvotePost = function(post, id){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
		})
	}
});
//-----END------

/*
	Downtown: 48226
	Corktown: 48216
	Woodbridge: 48208
	New Center: 48202
	East Central: 48207
	Southwest: 48209
	*/
