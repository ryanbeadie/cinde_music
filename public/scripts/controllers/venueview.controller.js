myApp.controller('VenueViewController',[ '$http', '$routeParams', '$location','$scope',

  function($http, $routeParams, $location, $scope ) {
  console.log('VenueViewController loaded');
  console.log('route params=',$routeParams);
  var vm = this;

  vm.venueDetails= [];
  vm.venueReviews= [];
  vm.upcomingEvent= [];
  vm.venuePhoto= [];


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
       vm.upcomingEvent= response.data;
       vm.venuePhoto= response.data;
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


 vm.updateUpcomingEvent = function(){

 vm.upcomingEvent[0].newUpcomingEvent = vm.newUpcomingEvent;

 console.log('new event =' ,vm.upcomingEvent[0].newUpcomingEvent);

  $http({
    method: 'PUT',
    url: '/venue/upcomingevents',
    data: vm.upcomingEvent[0]
  }).then(function success(response) {
    console.log('response from update venue events:', response);
    getVenueDetails();
   });
 };//end updateUpcomingShows

 vm.uploadImg = filestack.init('AUz2UHIiSlKQwrkbaRwISz');


 vm.uploadPhoto = function() {
   vm.uploadImg.pick({
   }).then(function(response){

     console.log('upload this img', (response.filesUploaded[0].url));

     vm.newPhoto.content=(response.filesUploaded[0].url);
     vm.venuePhoto[0].newPhoto= vm.newPhoto;

     console.log('venuePhoto[0]', vm.venuePhoto[0]);


     $http({
       method: 'PUT',
       url: '/venue/photo',
       data: vm.venuePhoto[0]

     }).then(function success(response) {
       console.log('response from update artist photo:', response);
       getVenueDetails();
      });

     $scope.$apply();// trigger the digest cycle or will have to click to show that it's populated
   });

 };// end uploadphoto





}]);//end VenueViewController
