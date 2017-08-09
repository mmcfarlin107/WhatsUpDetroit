var app = angular.module('detroitMod');

app.controller('homeCtrl', function($scope, detroitFactory){
	$scope.zip = 'getting info..'
	detroitFactory.getLocation()

});
