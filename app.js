var app = angular.module('travelapp', ['dragularModule', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
        .state('mainpage', {
            url: '/mainpage',
            views: {
                "": {
                    templateUrl: 'templates/mainpage.html',
                    controller: 'mainpageController'
                }
            }
        })
        .state('mainpage.home', {
            url: '/home',
            views: {
                "": {
                    templateUrl: 'templates/home.html'
                }
            }
        })
        .state('reviewPackageSummary', {
            url: '/reviewPackageSummary',
            views: {
                "": {
                    templateUrl: 'templates/reviewPackageSummary.html'
                }
            }
        })
        .state('mainpage.hotels', {
            url: '/hotels',
            views: {
                "": {
                    templateUrl: 'templates/hotels.html',
                    controller: 'hotelsController'
                }
            }
        })
        .state('mainpage.hotels.hotelsresults', {
            url: '/hotelsresults',
            views: {
                "": {
                    templateUrl: 'templates/hotelsresults.html',
                    controller: 'hotelResultsController'
                }
            }
        })
        .state('mainpage.hotelbooking', {
            url: '/hotelbooking',
            views: {
                "": {
                    templateUrl: 'templates/hotelbooking.html'
                }
            }
        })
        .state('mainpage.itenary', {
            url: '/itenary',
            views: {
                "": {
                    templateUrl: 'templates/iternary.html',
                    controller: 'ItenaryController'
                }
            }
        })
        .state('mainpage.packageSummary', {
            url: '/packageSummary',
            views: {
                "": {
                    templateUrl: 'templates/packageSummary.html',
                    controller: 'PackageSummaryController'
                }
            }
        })
        .state("otherwise", { url : '/login'})
});

app.controller('mainCtrl', ['$scope',
    function($scope) {
        $scope.isUserLoggedIn = "false";
    }
]);