var app = angular.module('travelapp');
app.controller('loginController', ['$scope', '$state', function($scope, $state) {
    $scope.preloginItems = PRE_LOGIN_ITEMS;
    $scope.userType = "Agent";
    $scope.imgIndex = 0;
    $scope.imageURLs = LOGIN_IMG_URLS;
    $scope.scrollImage = function(direction) {
    };
    $scope.authenticateUserAndLogIn = function() {
        $state.go('mainpage');
        $scope.isUserLoggedIn = true;
    };
    $scope.selectUserType = function(type) {
        $scope.userType = type;
    };
}]);