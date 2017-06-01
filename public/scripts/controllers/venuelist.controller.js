
myApp.controller('VenueListController',[ '$http', '$location',  function($http, $location) {
  console.log('VenueListController loaded');
  var vm= this;

  vm.venue= [];
  function getVenue() {

    console.log('In get venue');
     $http({
       method: 'GET',
       url: '/venue'
     }).then(function(response) {
       console.log('response.data from venue collection: ', response.data);
       vm.venue= response.data;
     });
   }
   getVenue();
}]);//end VenueListController
