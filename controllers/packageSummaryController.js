angular.module('travelapp').controller('PackageSummaryController', ['$scope', '$state', '$window', '$filter', function($scope, $state, $window, $filter) {
    $scope.dummyPdfURL = $window.location.origin + "/sample-website/data/reviewPackageSummary.pdf";
    $scope.openPDFInNewTab = function(url) {
        var win = $window.open(url, '_blank');
        win.focus();
    }
}]);