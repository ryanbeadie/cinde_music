myApp.controller('ArtistViewController',[ '$http', '$routeParams', '$location','$scope',

  function($http, $routeParams, $location, $scope) {
  console.log('ArtistViewController loaded');
  console.log('route params=',$routeParams);
  var vm= this;

  vm.artistDetails= [];
  vm.artistReviews= [];
  vm.upcomingShows= [];
  vm.artistPhoto= [];

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
       vm.artistPhoto= response.data;

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
console.log('vm.upcomingShows[0].newUpcomingShows = vm.newUpcomingShows;',vm.upcomingShows[0].newUpcomingShows = vm.newUpcomingShows);
console.log('new description = vm.upcomingShows[0].newUpcomingShows ' ,vm.upcomingShows[0].newUpcomingShows);
console.log('vm.upcomingShows[0]',vm.upcomingShows[0]);
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
   };//end updateUpcomingShows




   // uploading an image to filestack
    vm.uploadImg = filestack.init('AUz2UHIiSlKQwrkbaRwISz');


    vm.uploadPhoto = function() {
      vm.uploadImg.pick({
      }).then(function(response){

        console.log('upload this img', (response.filesUploaded[0].url));

        vm.newPhoto.content=(response.filesUploaded[0].url);
        vm.artistPhoto[0].newPhoto= vm.newPhoto;

        console.log('artistPhoto[0]', vm.artistPhoto[0]);


        $http({
          method: 'PUT',
          url: '/artist/photo',
          data: vm.artistPhoto[0]

        }).then(function success(response) {
          console.log('response from update artist photo:', response);
          getArtistDetails();
         });

        $scope.$apply();// trigger the digest cycle or will have to click to show that it's populated
      });

    };// end uploadphoto






}]);//end ArtistViewController
