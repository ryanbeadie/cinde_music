//set up config

var myApp = angular.module('myApp', ['ngRoute']);

//is my location and route provider set up right?
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/artistadd', {
    templateUrl: 'views/artistadd.html',
    controller: 'ArtistAddController as ic'
  })
  .when('/artistlist', {
    templateUrl: 'views/artistlist.html',
    controller: 'ArtistListController as ic'
  })
  .when('/artistview/:artistId', {
    templateUrl: 'views/artistview.html',
    controller: 'ArtistViewController as ic'
  })
  .when('/venueadd', {
    templateUrl: 'views/venueadd.html',
    controller: 'VenueAddController as ic'
  })
  .when('/venuelist', {
    templateUrl: 'views/venuelist.html',
    controller: 'VenueListController as ic'
  })
  .when('/venueview/:venueId', {
    templateUrl: 'views/venueview.html',
    controller: 'VenueViewController as ic'
  })
  .when('/home', {
    templateUrl: 'views/home.html',
  }).otherwise('/home');

  // $locationProvider.html5Mode(true);
});






















//
