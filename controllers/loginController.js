var app = angular.module('travelapp');
app.controller('loginController', ['$scope', '$state', 'hotelsService', function($scope, $state, hotelsService) {
    $scope.preloginItems = PRE_LOGIN_ITEMS;
    $scope.userType = "Agent";
    $scope.imgIndex = 0;
    $scope.imageURLs = LOGIN_IMG_URLS;
    $scope.scrollImage = function(direction) {
    };
    $scope.authenticateUserAndLogIn = function(isAuth) {
        if(isAuth) {
            $state.go('mainpage');
            $scope.isUserLoggedIn = true;
            hotelsService.guestName = isAuth;
        } else {
            $scope.isUserLoggedIn = false;
            $scope.error = 'Type your name below and try guest login.'
        }
    };
    $scope.selectUserType = function(type) {
        $scope.userType = type;
    };
}]);