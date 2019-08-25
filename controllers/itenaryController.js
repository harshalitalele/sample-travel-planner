angular.module('travelapp').controller('ItenaryController', ['$scope', '$state', '$interval', '$filter', 'hotelsService', function($scope, $state, $interval, $filter, hotelsService) {
    //dragularService.cleanEnviroment();
    $scope.criteria = hotelsService.getHotelSearchCriteria();
    $scope.iternarySourceList = [{
            id: '1',
            currency: 'USD',
            cost: '25',
            costType: 'per person',
            name: 'Hotel and Airport Transfer ',
            content: 'Return Airport and inter hotel transfers on private basis'
        }, {
            id: '2',
            currency: 'USD',
            cost: '25',
            costType: 'per person',
            name: 'Bedugul lake temple and Tanah lot temple Tour',
            content: 'Full Day Bedugul lake temple tour followed by Tanah lot temple Tour on private basis'
        }, {
            id: '3',
            currency: 'USD',
            cost: '25',
            costType: 'per person',
            name: 'Authentic Balinese Massage',
            content: '02 Hrs of Authentic Balinese Massage on SIC basis - USD 25 per person'
        },
        {
            id: '4',
            currency: 'USD',
            cost: '50',
            costType: 'per adult',
            name: 'Bali Zoo',
            content: 'Full Day Tour at Bali Zoo (Zoo Explorer) on SIC basis - USD 50 per adult'
        },
        {
            id: '5',
            currency: 'USD',
            cost: '138',
            costType: 'per adult',
            name: 'ATV Quad Bike Or Buggy driving + Canyon Tubing by Bali Quad',
            content: 'ATV Quad Bike Or Buggy driving + Canyon Tubing by Bali Quad with transfers - USD 138 per adult'
        }, {
            id: '11',
            currency: 'USD',
            cost: '50',
            costType: 'per person',
            name: 'SUNSET DINNER CRUISE BY BALI HAI ON SIC BASIS ',
            content: 'There’s no better way to spend a balmy tropical evening than on a beautiful evening Dinner Cruise. As the sun goes down you set off on a relaxing cruise around the harbour. Take in the cool night air on the top deck, be entertained by live musical entertainers at the bridge deck, savour a delicious international buffet dinner, then dance the night away at the disco or enjoy our live cabaret show onboard. It is definitely a treat for all age groups especially the honeymooners. All in all a memorable evening at the Sunset dinner cruise will always make you nostalgic in the future… '
        }, {
            id: '12',
            currency: 'USD',
            cost: '25',
            costType: 'per person',
            name: 'FULL DAY KINTAMANI VOLCANO TOUR WITH UBUD VILLAGE ON PRIVATE BASIS',
            content: 'Morning after breakfast, proceed for a full day excursion to the Kintamani Volcano. This trip will take you up close & personal with the essence of Bali. It is the most favorite tour of any first time visitor to Bali. Visit the Batubulan village (famous for traditional Batik and hand weavings), Mas village (famous for Wood carving) & then past the Celuk village (famous for silver and gold works). There after proceed to the one of the most historical & ancient Hindu temples in Bali. Continue your tour to The Mount & Lake Batur in Kintamani village for some stunning views of the beautiful locales in this region. Your tour ends in the famous coffee plantation. Here you can look in & taste many kind of coffees from Indonesia including Luwak coffee. '
        }, {
            id: '13',
            currency: 'USD',
            cost: '25',
            costType: 'per person',
            name: 'HALF DAY BENOA BEACH TOUR ON PRIVATE BASIS',
            content: 'An ideal  Bali holiday is incomplete without Bali water sports at the famous Tanjung Benoa beach. This beach best known for its aquatic adventure is located in the Benoa peninsula far away from the hustle & bustle. North of Nusa Dua this beach offers a wide range of water sports. Please check with our representatives for all the water sports information. Many shacks & restaurants lined up along the beach make sure that your tummy is full & you enjoy the most.Watersports Included: Snorkling, Turtle Island'
        }, {
            id: '14',
            currency: 'USD',
            cost: '32',
            costType: 'per adult',
            name: 'DEV DAN SHOW ( B CATEGORY ) BY NUSA DUA THEATER ON SIC BASIS',
            content: 'A Magnificent, Alluring and Daring Show”,  “devdan - Treasure of the Archipelago” is playing now at Bali Nusa Dua Theatre.  Bali Nusa Dua Theatre is the premiere setting to showcase Bali and Nusantara’s rich and diverse cultures with stunning illusion, dazzling costumes, uniquely artistic contemporary cultural dances and heart-stopping aerial acrobatic performances. The audience is taken on a magical journey across Bali and beyond to the Archipelago of Indonesia. This 90-minutes mega production of devdan is a “must-see” show where you discover Indonesia in a thrilling and enchanting way, as never experienced before.  See the show and be prepared to fall in love with our amazing Indonesia.'
        }, {
            id: '15',
            currency: 'USD',
            cost: '64',
            costType: 'per adult',
            name: 'FULL DAY BALI SAFARI & MARINE PARK ( JUNGLE HOPPER PASS ) ON PRIVATE BASIS ',
            content: "Breakfast at the resort. For animal lovers a trip to Bali is not complete without visiting Bali Safari & Marine Park. This Park is located in Gianyar and showcases many of Indonesia's protected wildlife with their natural surroundings and environment. This amazing wildlife includes the conservation projects for the Sumatran Tigers and many other forms of wildlife from both the land and the waters of Indonesia. The wildlife showcased here features the genuine Balinese culture with temples and traditional style huts and buildings around the park that produce an excellent, well balanced tourist attraction portraying both traditional Balinese culture and safari style with the amazing animals of Indonesia. Designed for animals to live in a natural habitat, this park however also allow you to get closer to them than you ever thought possible. Have the chance to cuddle a baby orangutan, tiger, lion or leopard. Observe and get up close to over 60 different species as you enjoy a safari journey, on a tram, straight through animal enclosures."
        }, {
            id: '16',
            currency: 'USD',
            cost: '30',
            costType: 'per person',
            name: 'FULL DAY WHITE WATER RAFTING BY TRUE BALINESE ON SIC BASIS ',
            content: 'After breakfast, proceed for White Water Rafting - One of the most spectacular experiences with an amazing panorama of the Ayung River and its surrounding area. Experience a unique and unforgettable journey through the winding gorgeous, luscious jungles and magnificent terraced rice fields. Paddle through breathtaking waterfalls for an unparalleled fun on water. It provides a great water adventure with the beautiful landscapes. Whether you are 5 or 75, a natural or a novice, our white water rafting in Bali is safe, fun and a breathtaking experience to be enjoyed by the whole family. A scrumptious local Indonesian Buffet Lunch awaits you after a scintillating ride.'
        }
    ];

    $scope.getItenaryTileHeading = function(item) {
        return item.name + " (" + item.currency + " " + item.cost + " " + item.costType + ")";
    };

    $scope.filterItenary = function() {
        $scope.iternaryFilteredSourceList = $scope.iternaryFilteredSourceList || [];
        $scope.iternaryFilteredSourceList.splice(0);
        $scope.iternaryFilteredSourceList.push.apply($scope.iternaryFilteredSourceList, $filter('filter')($scope.iternarySourceList, {
            name: $scope.itenarySearch,
        }));
        console.log($scope.iternaryFilteredSourceList);
    };
    $scope.filterItenary();

    $scope.itenaryData = {
        days: [{
            day: '1',
            data: []
        }, {
            day: '2',
            data: []
        }, {
            day: '3',
            data: []
        }, {
            day: '4',
            data: []
        }]
    }


    //Draggable Code begins
    var timer,
        containerItenarySourceList = document.getElementById('itenary-source-list-container'),
        containerItenaryTargetList = document.getElementById('itenary-target-list-container'),
        leftTopBar = document.getElementById('leftTopBar'),
        leftBottomBar = document.getElementById('leftBottomBar'),
        rightTopBar = document.getElementById('rightTopBar'),
        rightBottomBar = document.getElementById('rightBottomBar');

    registerEvents(leftTopBar, containerItenarySourceList, -5);
    registerEvents(leftBottomBar, containerItenarySourceList, 5);
    registerEvents(rightTopBar, containerItenaryTargetList, -5);
    registerEvents(rightBottomBar, containerItenaryTargetList, 5);

    function registerEvents(bar, container, inc, speed) {
        if (!speed) {
            speed = 20;
        }
        angular.element(bar).on('dragularenter', function() {
            container.scrollTop += inc;
            timer = $interval(function moveScroll() {
                container.scrollTop += inc;
            }, speed);
        });
        angular.element(bar).on('dragularleave dragularrelease', function() {
            $interval.cancel(timer);
        });
    }


    $scope.accepts = function(el, target, source) {
        if (target !== containerItenarySourceList || source === target) {
            return true;
        }
    }
    $scope.dragularOptions = {
        containersModel: $scope.iternarySourceList,
        containersFilteredModel: $scope.iternaryFilteredSourceList,
        copy: true,
        classes: {
            mirror: 'custom-green-mirror'
        },
        accepts: $scope.accepts,
        nameSpace: 'common' // just connecting left and right container
    };

    //Draggable code ends








}]);