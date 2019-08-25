var app = angular.module('travelapp');
app.factory('httpService', ['$http',
    function($http) {
        return {
            getHttpCall: function(url, successCB) {

            },
            postHttpCall: function(url, param, successCB, failureCB) {

            }
        };
    }
]);