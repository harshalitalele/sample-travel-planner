var app = angular.module('travelapp');
app.factory('hotelsService', ['httpService',
    function(httpService) {
        return {
            getAllHotels: function(criteria, successCB, failureCB) {
                var data = [{
                    hname: 'Bali Dynasty Resort',
                    ratings: 4,
                    tripadv_ratings: 2,
                    location: {
                        name: 'Kuta',
                        lat: '',
                        log: ''
                    },
                    rooms: [{
                        type: 'Standard',
                        meal: 'Breakfast',
                        avgprice: '30',
                        availablity: "Available",
                        policies: "Non Refundable on cancellation"
                    }, {
                        type: 'Deluxe',
                        meal: 'Breakfast',
                        avgprice: '40',
                        availablity: "Available",
                        policies: "20% of Amount Refundable"
                    }, {
                        type: 'Suite',
                        meal: 'Breakfast',
                        avgprice: '50',
                        availablity: "On-request",
                        policies: "Non Refundable on cancellation"
                    }],
                    img: 'imgs/hotel_img1.jpg'
                }, {
                    hname: 'Risata Resort',
                    ratings: 3,
                    tripadv_ratings: 2,
                    location: {
                        name: 'Seminyak',
                        lat: '',
                        log: ''
                    },
                    rooms: [{
                        type: 'Suite',
                        meal: 'Breakfast',
                        avgprice: '45',
                        availablity: "On-request",
                        policies: "Non Refundable on cancellation"
                    }],
                    img: 'imgs/hotel_img2.jpg'
                }, {
                    hname: 'Bali Dream Villa',
                    ratings: 3,
                    tripadv_ratings: '',
                    location: {
                        name: 'Jimbran',
                        lat: '',
                        log: ''
                    },
                    rooms: [{
                        type: 'Deluxe',
                        meal: 'Breakfast',
                        avgprice: '45',
                        availablity: "Available",
                        policies: "Non Refundable on cancellation"
                    }],
                    img: 'imgs/hotel_img3.jpg'
                }];
                successCB(data);
            },
            getHotelSearchCriteria: function() {
                var data = {
                    destination: 'Bali',
                    checkin: '2017-03-02T18:30:00.000Z',
                    checkindisp: function() {
                        var date = new Date(this.checkin);
                        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
                    },
                    checkout: '2017-03-06T18:30:00.000Z',
                    checkoutdisp: function() {
                        var date = new Date(this.checkout);
                        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
                    },
                    noOfAdult: 2,
                    noOfChild: 1,
                    nights: function() {
                        var oneDay = 24 * 60 * 60 * 1000;
                        var firstDate = new Date(this.checkout);
                        var secondDate = new Date(this.checkin);
                        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
                        return diffDays;
                    },
                    loc: [0, 0],
                    mapurl: function() {
                        return "imgs/bali_map.JPG";
                    },
                    hotel: "Bali Dynasty",
                    roomtype: "Deluxe",
                    avgprice: 40
                };
                return data;
            },
            getMyAccountResultsFor: function(param, successCB, failureCB) {
                var data = {
                    'lastsearches': [],
                    'quotations': [],
                    'bookings': []
                };
                successCB(data[param]);
            }
        };
    }
]);