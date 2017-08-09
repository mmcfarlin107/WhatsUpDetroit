var app = angular.module('detroitMod');

app.config(function($routeProvider){
$routeProvider
    .when('/home', {
      controller: 'partial-controller',
<<<<<<< HEAD
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
=======
      templateUrl: 'partials/home.html'
    })
    .when('/downtown', {
      controller: 'partialCtrl',
      templateUrl: 'partials/downtown.html'
    })
    .when('/corktown', {
      controller: 'partialCtrl',
      templateUrl: 'partials/corktown.html'
    })
    .when('/woodbridge', {
      controller: 'partial-controller',
      templateUrl: 'partials/woodbridge.html'
    })
    .when('/new-center', {
      controller: 'partialCtrl',
      templateUrl: 'partials/new-center.html'
    })
    .when('/east-central', {
      controller: 'partialCtrl',
      templateUrl: 'partials/east-central.html'
    })
    .when('/southwest', {
      controller: 'partialCtrl',
      templateUrl: 'partials/southwest.html'
>>>>>>> master
    })
    .otherwise({
      redirectTo: '/home'
    })
// clsoing out config
});
