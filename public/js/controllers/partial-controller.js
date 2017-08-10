var app = angular.module('detroitMod');


//BEGIN CORKTOWN CONTROLLER
app.controller('corktown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Corktown"
	$scope.thisZip = "48216"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	};
	detroitFactory.getCorktown().then(function(){
		$scope.posts = detroitFactory.returnList();
	});


});
//-----END------


//BEGIN DOWNTOWN CONTROLLER
app.controller('downtown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Downtown"
	$scope.thisZip = "48226"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	};


	detroitFactory.getDowntown().then(function(){
		$scope.posts = detroitFactory.returnList();
	});

	$scope.newPost = function(content) {
		console.log('working from click')
		detroitFactory.addPost(content).then(function(){
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
	} else {
		$scope.hide = true
	};

	detroitFactory.getMidtown().then(function(){
		$scope.posts = detroitFactory.returnList();
	});
});
//-----END------

//BEGIN WOODBRIDGE CONTROLLER
app.controller('woodbridge', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Woodbridge"
	$scope.thisZip = "48208"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	};
	detroitFactory.getWoodbridge().then(function(){
		$scope.posts = detroitFactory.returnList();
	});
});
//-----END------


//BEGIN NEW CENTER CONTROLLER
app.controller('newCenter', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "New Center"
	$scope.thisZip = "48202"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	};
	detroitFactory.getNewCenter().then(function(){
		$scope.posts = detroitFactory.returnList();
	});
});
//-----END------


//BEGIN EAST CENTRAL CONTROLLER
app.controller('eastCentral', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "East Central"
	$scope.thisZip = "48207"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	};
	detroitFactory.getEastCentral().then(function(){
		$scope.posts = detroitFactory.returnList();
	});
});
//-----END------


//BEGIN SOUTHWEST CONTROLLER
app.controller('southwest', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Southwest"
	$scope.thisZip = "48209"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	};
	detroitFactory.getSouthwest().then(function(){
		$scope.posts = detroitFactory.returnList();
	});
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
