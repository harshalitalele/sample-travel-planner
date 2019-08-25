var app = angular.module('travelapp');
app.factory('sightseeingService', ['httpService',
    function(httpService) {
        return {
            getAttractions: function(criteria, successCB, failureCB) {
                var data = [{
                    "id": 101004,
                    "name": "La Dolce Vita",
                    "address": "Waltersdorfer Straße 1A, Berlin, Germany",
                    "category": "restaurant",
                    "location": "Berlin",
                    "lat": 52.405091,
                    "lng": 13.57337,
                    "details": "http://tour-pedia.org/api/getPlaceDetails?id=101004"
                }, {
                    "address": "",
                    "category": "restaurant",
                    "id": 100263,
                    "lat": 52.442259616828,
                    "lng": 13.240633765583,
                    "location": "Berlin",
                    "name": "La Dolce Vita",
                    "originalId": "4e209cb718a88345f0429983",
                    "polarity": 0,
                    "subCategory": "Italian Restaurant",
                    "details": "http://tour-pedia.org/api/getPlaceDetails?id=100263"
                }, {
                    "id": 324915,
                    "name": "La Dolce Vita",
                    "address": "Wilsnacker Straße 62, Berlin, Germany",
                    "category": "restaurant",
                    "location": "Berlin",
                    "lat": 52.527308,
                    "lng": 13.351412,
                    "numReviews": 1,
                    "reviews": "http://tour-pedia.org/api/getReviewsByPlaceId?placeId=324915",
                    "polarity": 0,
                    "details": "http://tour-pedia.org/api/getPlaceDetails?id=324915"
                }];
                successCB(data);
            },
            selectAttraction: function(url, param, successCB, failureCB) {

            }
        };
    }
]);