var app = angular.module('travelapp');

app.controller('mainpageController', ['$scope', '$state', function($scope, $state) {
    $scope.loginUserMenu = LOGIN_USER_ITEMS;
    $scope.mainmenu = MAIN_MENU;
    $scope.selectedMenu = "Hotels";
    $scope.navigateToAndSelect = function(menu) {
        $scope.selectedMenu = menu.title;
        if(menu.state != '') {
            $state.go(menu.state);
        }
    };
    function loadHotelSearch() {
        $state.go('mainpage.hotels');
    };
    loadHotelSearch();
}]);