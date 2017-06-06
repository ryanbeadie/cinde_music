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
       vm.venueReviews= response.data;
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
     getVenueDetails();
  });
  getVenueDetails();
  };//end updateVenueDescription

  vm.updateVenueReviews = function(){
  console.log('in function venueReviews logging vm.VenueReviews',vm.venueReviews);

  vm.venueReviews[0].newReview = vm.newReview;

  console.log('new description =' ,vm.venueReviews[0].newReview);

   $http({
     method: 'PUT',
     url: '/venue/reviews',
     data: vm.venueReviews[0]
   }).then(function success(response) {
     console.log('response from update venue reviews:', response);
     getVenueDetails();
    });
 };//end updateVenueReviews










}]);//end VenueViewController
