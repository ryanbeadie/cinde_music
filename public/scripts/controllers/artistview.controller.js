myApp.controller('ArtistViewController',[ '$http', '$routeParams', '$location',

  function($http, $routeParams, $location ) {
  console.log('ArtistViewController loaded');
  console.log('route params=',$routeParams);
  var vm= this;

  vm.artistDetails= [];
  vm.artistReviews= [];
  vm.upcomingShows= [];

  getArtistDetails();

  function getArtistDetails() {
    console.log('In get artist details');
     return $http({
       method: 'GET',
       url: '/artist/solo',
          params:{
            artistId: $routeParams.artistId
          }
     }).then(function(response) {
       console.log('response.data from artist details: ', response.data);
       vm.artistDetails= response.data;
       vm.artistReviews= response.data;//do the same for upcoming shows
       vm.upcomingShows= response.data;

     });
   }//end getArtistDetails()



  //  vm.updateArtist=[];
   vm.updateArtistDetails = function(){
        console.log('in function updateArtistDetails');
   vm.artistDetails[0].newDetails = vm.newDescription;

    console.log('new description =' ,vm.artistDetails[0]);

     $http({
       method: 'PUT',
       url: '/artist/description',
       data: vm.artistDetails[0]
     }).then(function success(response) {
       console.log('response from update artist:', response);
       getArtistDetails().then(function (res){
         console.log('Response from getArtistDetails', response);
       });
    });
    getArtistDetails();
   };//end updateArtist




    vm.updateArtistReviews = function(){
    console.log('in function updateArtistReviews logging vm.artistReviews',vm.artistReviews);

    vm.artistReviews[0].newReview = vm.newReview;

    console.log('new description =' ,vm.artistReviews[0].newReview);

     $http({
       method: 'PUT',
       url: '/artist/reviews',
       data: vm.artistReviews[0]
     }).then(function success(response) {
       console.log('response from update artist reviews:', response);
       getArtistDetails().then(function (res){
         console.log('Response from updateArtistReviews', res);
       });
      });
   };//end updateArtistReview

   vm.updateUpcomingShows = function(){

   vm.upcomingShows[0].newUpcomingShows = vm.newUpcomingShows;

   console.log('new description =' ,vm.upcomingShows[0].newUpcomingShows);

    $http({
      method: 'PUT',
      url: '/artist/upcomingShows',
      data: vm.upcomingShows[0]
    }).then(function success(response) {
      console.log('response from update artist reviews:', response);
      getArtistDetails().then(function (res){
        console.log('Response from updateArtistReviews', res);
      });
     });
   };//end updateArtistReview




}]);//end ArtistViewController
