var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', function($routeProvider) {
    //$locationProvider.hashPrefix('');

    $routeProvider
        .when('/user', {
            templateUrl: '/views/templates/user.html',
            controller: 'UserController as uc'
        }).when('/repos', {
            templateUrl: '/views/templates/repos.html',
            controller: 'ReposController as rc'
        }).otherwise({
            // catch-all
            redirectTo: '/user'
        });
}]);