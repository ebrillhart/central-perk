var app = angular.module('CentralPerkApp', ['FriendsCtrls', 'ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //define routes
    $routeProvider.when('/', {
        templateUrl: 'views/index.html',
    }).when('/about', {
        templateUrl: 'views/about.html'
    }).when("/friends", {
    	templateUrl: "views/friends.html",
    	controller: 'FriendCtrl'
    }).when("/friends/monica", {
        templateUrl: "views/monica.html",
        controller: 'FriendCtrl'
    }).when("/friends/rachel", {
        templateUrl: "views/rachel.html",
        controller: 'FriendCtrl'
    }).when("/friends/phoebe", {
        templateUrl: "views/phoebe.html",
        controller: 'FriendCtrl'
    }).when("/friends/ross", {
        templateUrl: "views/ross.html",
        controller: 'FriendCtrl'
    }).when("/friends/chandler", {
        templateUrl: "views/chandler.html",
        controller: 'FriendCtrl'
    }).when("/friends/joey", {
        templateUrl: "views/joey.html",
        controller: 'FriendCtrl'
    }).otherwise({
        templateUrl: 'views/404.html'
    });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);