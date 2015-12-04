var app = angular.module('CentralPerkApp', ['FriendsCtrls', 'ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //define routes
    $routeProvider.when('/', {
        templateUrl: 'views/cpindex.html',
    }).when('/about', {
        templateUrl: 'views/cpabout.html'
    }).when("/friends", {
    	templateUrl: "views/friends.html",
    	controller: 'FriendCtrl'
    }).otherwise({
        templateUrl: 'views/404.html'
    });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);