var app = angular.module('detroitMod');

app.controller('homeCtrl', function($scope, $rootScope, $location, detroitFactory){
	detroitFactory.getLocation()

	$scope.bodyClass = 'loading';

});
