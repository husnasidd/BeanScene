// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
     $ionicPlatform.ready(function() {
                          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                          // for form inputs)
                          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                          cordova.plugins.Keyboard.disableScroll(true);
                          
                          }
                          if (window.StatusBar) {
                          // org.apache.cordova.statusbar required
                          StatusBar.styleDefault();
                          }
                          });
     })

.config(function($stateProvider, $urlRouterProvider) {
        
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
        
        // setup an abstract state for the tabs directive
        .state('tab', {
               url: '/tab',
               abstract: true,
               templateUrl: 'templates/tabs.html'
               })
        
        // Each tab has its own nav history stack:
        
        .state('tab.home', {
               url: '/home',
               views: {
               'tab-home': {
               templateUrl: 'templates/tab-home.html',
               controller: 'HomeCtrl'
               }
               }
               })
        
        .state('tab.shops', {
               url: '/shops',
               views: {
               'tab-shops': {
               templateUrl: 'templates/tab-shops.html',
               controller: 'CoffeeShopListCtrl'
               }
               }
               })
        .state('tab.coffee-shop-detail', {
               url: '/shops/:shopId',
               views: {
               'tab-shops': {
               templateUrl: 'templates/coffee-shop-detail.html',
               controller: 'CoffeeShopDetailCtrl'
               }
               }
               })
        
        .state('tab.knowledge', {
               url: '/knowledge',
               views: {
               'tab-knowledge': {
               templateUrl: 'templates/tab-knowledge.html',
               controller: 'KnowledgeCtrl'
               }
               }
               });
        
        
        // if none of the above states are matched, use this as the fallback
        //        $urlRouterProvider.otherwise('/tab/dash');
        $urlRouterProvider.otherwise('/tab/home');
        
        
        })

var map;
var infowindow;
var initialLocation;
var service;
var globalShops = [];
var list = []
var placesNameList = [];
var PlacesAddressList = [];
var PlacesIdList = [];
var coffeeshops;
var previousPosition;


function initMap() {
    
    var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    console.log(map);
    
    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                                                 pos = new google.maps.LatLng(position.coords.latitude,
                                                                              position.coords.longitude);
                                                 
                                                 infowindow = new google.maps.InfoWindow({
                                                                                         map: map,
                                                                                         position: pos,
                                                                                         content: 'You are here'
                                                                                         });
                                                 
                                                 map.setCenter(pos);
                                                 
                                                 var request = {
                                                 location:pos,
                                                 radius:2000,
                                                 types: ['cafe']
                                                 };
                                                 
                                                 infowindow = new google.maps.InfoWindow();
                                                 service = new google.maps.places.PlacesService(map);
                                                 service.nearbySearch(request,callback);
                                                 
                                                 
                                                 
                                                 //             service.getDetails(request, callback);
                                                 }, function() {
                                                 handleNoGeolocation(true);
                                                 });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
    
}

function callback(results, status, pagination) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results.length);
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            
            
            //globalShops.push(results[i]);
            PlacesIdList.push(results[i].place_id);
        }
        
        //        if(pagination.hasNextPage){
        //            pagination.nextPage();
        //
        //        }
        createList();
        console.log("list length in callback after createList is: " + list.length);
        
    }
}

function createMarker(place) {
    
    var placeLoc = place.geometry.location;
    var icon = {
    url:place.icon,
    scaledSize:new google.maps.Size(23, 23)
    };
    
    var marker = new google.maps.Marker({
                                        map: map,
                                        animation: google.maps.Animation.DROP,
                                        icon:icon,
                                        position: place.geometry.location
                                        });
    previousPosition = map.getCenter();
    marker.addListener('click',function(){
                       var request ={
                       reference:place.reference
                       };
                       service.getDetails(request,function(details,status){
                                          if(status == google.maps.places.PlacesServiceStatus.OK){
                                          infowindow.setContent([
                                                                 details.name,
                                                                 details.formatted_address,
                                                                 details.formatted_phone_number].join("<br />"));
                                          infowindow.open(map, marker);
                                          }
                                          });
                       });
    
    globalShops.push(place);
    console.log("globalShopsLength = "+globalShops.length);
    
}

function createList(){
    
    for(i=0;i<globalShops.length;i++)
    {
        var okCount = 0;
        console.log("i in create list is: "+ i);
        console.log("globalShops[i] in create list is: "+ globalShops[i].place_id);
        var request ={
            placeId :globalShops[i].place_id
        };
        service.getDetails(request,function(details,status){
                           if(status == google.maps.places.PlacesServiceStatus.OK){
                           okCount++;
                           list.push({id: okCount, name: details.name, address: details.formatted_address, phoneNumber: details.formatted_phone_number, website: details.website, priceLevel: details.priceLevel, rating: details.rating, image: details.photos[0].getUrl({'maxWidth':64, 'maxHeight':64})});
                           console.log("status is ok on globalShops["+i+"] and okCount is " + okCount + " and name got was " +details.name);
                           }
                           else{
                           console.log("status was not ok on globalShops["+i+"] and okCount is " + okCount);
                           }
                           });
        
        
    }
    console.log("list length is " + list.length);
}





function returnToSavedPosition() {
    if (previousPosition) {
        map.panTo(previousPosition); // or setCenter
    }
}


//    var request = {reference: place.};
//    var service = new google.maps.places.PlacesService(map);
//    service.getDetails(request, function(details, status){
//                       
//                       google.maps.event.addListener(marker, 'click', function() {
////                                  infowindow.setContent(place.name);
//                          infowindow.setContent('<div><strong>' + details.name + '</strong><br>'
//                          + '<br>' + details.formatted_address + '</div>');
//                          infowindow.open(map, this);
//                       });
//   });



