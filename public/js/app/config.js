var app = angular.module('detroitMod');

app.directive('postPopulate', function(){
  
  return {
      replace: false,
      restrict: 'E',
      templateUrl: 'partials/template.html'
   }

});

app.directive('inputField', function(){

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'partials/form.html'
  }
});


app.config(function($routeProvider){
$routeProvider
    .when('/home', {
      controller: 'homeCtrl',
      templateUrl: 'partials/home.html'
    })
    .when('/downtown', {
      controller: 'downtown',
      templateUrl: 'partials/downtown.html'
    })
    .when('/corktown', {
      controller: 'corktown',
      templateUrl: 'partials/corktown.html'
    })
    .when('/woodbridge', {
      controller: 'woodbridge',
      templateUrl: 'partials/woodbridge.html'
    })
    .when('/new-center', {
      controller: 'newCenter',
      templateUrl: 'partials/new-center.html'
    })
    .when('/east-central', {
      controller: 'eastCentral',
      templateUrl: 'partials/east-central.html'
    })
    .when('/southwest', {
      controller: 'southwest',
      templateUrl: 'partials/southwest.html'
    })
    .when('/midtown', {
      controller: 'midtown',
      templateUrl: 'partials/midtown.html'
    })
    .otherwise({
      redirectTo: '/home'
    })
// clsoing out config
});
