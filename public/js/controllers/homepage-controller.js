var app = angular.module('detroitMod');

app.controller('homeCtrl', function($scope, $rootScope, $location, detroitFactory){
	detroitFactory.getLocation();

	setTimeout(function () {
        $scope.$apply(function () {
        	//rootScope.zip allows for the zip of the user determined by the factory function below to persist throughout the app
      $rootScope.zip = detroitFactory.getZip();
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
    }, 5000);

	$scope.bodyBackground ='../images/timelapse.gif';

});
