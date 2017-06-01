myApp.controller('VenueViewController',[ '$http', '$routeParams', '$location',

  function($http, $routeParams, $location ) {
  console.log('VenueViewController loaded');
  console.log('route params=',$routeParams);
  var vm= this;

  vm.venueDetails= [];
  getVenueDetails();

  function getVenueDetails() {
    console.log('In get artist details');
     $http({
       method: 'GET',
       url: '/venue/solo',
          params:{
            venueId: $routeParams.venueId
          }
     }).then(function(response) {
       console.log('response.data from artist details: ', response.data);
       vm.venueDetails= response.data;
     });
   }
}]);//end VenueViewController
