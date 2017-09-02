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

// realEstateApp.config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//         .when('/forSale', {
//             templateUrl: '/views/forsale.html',
//             controller: 'SaleController as vm'
//         })
//         .when('/forRent', {
//             templateUrl: '/views/forrent.html',
//             controller: 'RentController as vm'
//         })
//         .when('/addListing', {
//             templateUrl: '/views/addlisting.html',
//             controller: 'AddListingController as vm'
//         })
//         .otherwise({
//             // catch-all
//             redirectTo: '/forSale'
//         });
// }]);