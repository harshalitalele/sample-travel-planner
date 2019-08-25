var app = angular.module('travelapp');
app.controller('hotelsController', ['$scope', '$state', 'hotelsService', function($scope, $state, hotelsService) {
    $scope.rooms = [{
        no: 1,
        childCount: 1,
        adultCount: 2
    }, {
        no: 2,
        childCount: 0,
        adultCount: 0
    }, {
        no: 3,
        childCount: 0,
        adultCount: 0
    }, {
        no: 4,
        childCount: 0,
        adultCount: 0
    }, {
        no: 5,
        childCount: 0,
        adultCount: 0
    }];
    $scope.childCount = [1, 2, 3, 4];
    $scope.adultCount = [1, 2, 3, 4];
    $scope.noOfRooms = 1;
    $scope.isCollapsed = false;
    $scope.selectDropdown = function(key, value) {
        $scope[key] = value;
    };
    $scope.selectChildCnt = function(index, value) {
        $scope.rooms[index].childCount = value;
    };
    $scope.selectAdultCnt = function(index, value) {
        $scope.rooms[index].adultCount = value;
    };
    $scope.searchHotels = function() {
        $scope.hideShortcuts = true;
        $state.go('mainpage.hotels.hotelsresults');
    };
    
    $scope.guestName = hotelsService.guestName;
}]);