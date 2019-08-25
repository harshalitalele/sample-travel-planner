var app = angular.module('travelapp');
app.controller('hotelResultsController', ['$scope', 'hotelsService', '$state',
    function($scope, hotelsService, $state) {
        $scope.hotelsList = [];
        //get criteria from state params
        $scope.criteria = hotelsService.getHotelSearchCriteria();
        $scope.priceOptions = [{
            option: "LESS THAN $10"
        }, {
            option: "$11 TO  $20"
        }, {
            option: "$21 TO $40 "
        }, {
            option: "$41 TO $70"
        }, {
            option: "$71 TO $100"
        }, {
            option: "GREATER THAN $101"
        }];
        $scope.rated = 3;
        $scope.tripadRating = 5;
        $scope.changeRating = function(stars, model) {
            $scope[model] = stars;
        };
        $scope.readmore = 1;
        $scope.loadMore = function(num) {
            $scope.readmore = num;
        };
        $scope.goToBookingPage = function(availability) {
            if (availability == "Available") {
                $state.go('mainpage.hotelbooking');
            }
        };

        function searchHotelsFor(criteria) {
            hotelsService.getAllHotels(criteria, searchHotelsSuccess, searchHotelsFailure);
        };

        function searchHotelsSuccess(data) {
            $scope.hotelsList = data;
        };

        function searchHotelsFailure(data) {

        };
        $scope.goBack = function() {
            $state.go('mainpage.hotels');
        };
        searchHotelsFor();
    }
]);