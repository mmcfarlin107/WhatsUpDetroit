var app = angular.module('detroitMod');

app.config(function($routeProvider){
$routeProvider
    .when('/home', {
      controller: 'partial-controller',
      templateUrl: 'home.html'
    })
    .when('/downtown', {
      controller: 'partial-controller',
      templateUrl: 'downtown.html'
    })
    .when('/corktown', {
      controller: 'partial-controller',
      templateUrl: 'corktown.html'
    })
    .when('/woodbridge', {
      controller: 'partial-controller',
      templateUrl: 'woodbridge.html'
    })
    .when('/new-center', {
      controller: 'partial-controller',
      templateUrl: 'new-center.html'
    })
    .when('/east-central', {
      controller: 'partial-controller',
      templateUrl: 'east-central.html'
    })
    .when('/southwest', {
      controller: 'partial-controller',
      templateUrl: 'southwest.html'
    })
    .otherwise({
      redirectTo: '/home'
    })
// clsoing out config
});
