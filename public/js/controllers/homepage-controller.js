var app = angular.module('detroitMod');

app.controller('partialCtrl', function($scope, detroitFactory){
	$scope.zip = 'getting info..'
	detroitFactory.getLocation();

	setTimeout(function () {
        $scope.$apply(function () {
            $scope.zip = detroitFactory.getZip() ;
        });
    }, 5000);
	

});
