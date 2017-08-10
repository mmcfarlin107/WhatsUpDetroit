var app = angular.module('detroitMod');

app.controller('corktown', function($scope, $rootScope){
	$scope.areaName = "Corktown"
	$scope.thisZip = "48216"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	}
});

app.controller('downtown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Downtown"
	$scope.thisZip = "48226"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	};

	detroitFactory.getDowntown().then(function(){
		// may need to add function
	});
});

app.controller('midtown', function($scope, $rootScope){
	$scope.areaName = "Midtown"
	$scope.thisZip = "48201"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	}
});

app.controller('woodbridge', function($scope, $rootScope){
	$scope.areaName = "Woodbridge"
	$scope.thisZip = "48208"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	}
});

app.controller('newCenter', function($scope, $rootScope){
	$scope.areaName = "New Center"
	$scope.thisZip = "48202"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	}
});

app.controller('eastCentral', function($scope, $rootScope){
	$scope.areaName = "East Central"
	$scope.thisZip = "48207"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	}
});

app.controller('southwest', function($scope, $rootScope){
	$scope.areaName = "Southwest"
	$scope.thisZip = "48209"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
	} else {
		$scope.hide = true
	}
});

/*
	Downtown: 48226
	Corktown: 48216
	Woodbridge: 48208
	New Center: 48202
	East Central: 48207
	Southwest: 48209
	*/
