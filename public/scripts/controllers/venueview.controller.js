myApp.controller('VenueViewController',[ '$http', '$routeParams', '$location',

  function($http, $routeParams, $location ) {
  console.log('VenueViewController loaded');
  console.log('route params=',$routeParams);
  var vm = this;

  vm.venueDetails= [];
  vm.venueReviews= [];
  vm.upcomingEvents= [];





  getVenueDetails();

  function getVenueDetails() {
    console.log('In  get venue details');
     $http({
       method: 'GET',
       url: '/venue/solo',
          params:{
            venueId: $routeParams.venueId
          }
     }).then(function(response) {
       console.log('response.data from venue details: ', response.data);
       vm.venueDetails= response.data;
       vm.venueReviews= response.data;//do the same for upcoming shows
       vm.upcomingEvents= response.data;
     });
   }





vm.updateVenue=[];
vm.updateVenueDescription = function(){
    console.log('in function updateVenueDetails');
vm.venueDetails[0].newDetails = vm.newDescription;

console.log('new description =' ,vm.venueDetails[0]);

 $http({
   method: 'PUT',
   url: '/venue/description',
   data: vm.venueDetails[0]
 }).then(function success(response) {
    console.log('response from updatevenue:', response);
   getVenueDetails().then(function (res){
    console.log('Response from updateVenue', response);
   });
});
getVenueDetails();
};//end updateVenueDescription


}]);//end VenueViewController
