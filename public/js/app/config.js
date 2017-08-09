var app = angular.module('detroitMod');

app.config(function($routeProvider){
$routeProvider
    .when('/home', {
      controller: 'partial-controller',
      templateUrl: 'partials/home.html'
    })
    .when('/downtown', {
      controller: 'partial-controller',
      templateUrl: 'partials/downtown.html'
    })
    .when('/corktown', {
      controller: 'partial-controller',
      templateUrl: 'partials/corktown.html'
    })
    .when('/woodbridge', {
      controller: 'partial-controller',
      templateUrl: 'partials/woodbridge.html'
    })
    .when('/new-center', {
      controller: 'partial-controller',
      templateUrl: 'partials/new-center.html'
    })
    .when('/east-central', {
      controller: 'partial-controller',
      templateUrl: 'partials/east-central.html'
    })
    .when('/southwest', {
      controller: 'partial-controller',
      templateUrl: 'partials/southwest.html'
    })
    .otherwise({
      redirectTo: '/home'
    })
// clsoing out config
});
