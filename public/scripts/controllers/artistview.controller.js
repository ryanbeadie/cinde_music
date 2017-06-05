myApp.controller('ArtistViewController',[ '$http', '$routeParams', '$location',

  function($http, $routeParams, $location ) {
  console.log('ArtistViewController loaded');
  console.log('route params=',$routeParams);
  var vm= this;

  vm.artistDetails= [];
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
     });
  
   }//end getArtistDetails()



   vm.updateArtist=[];
   vm.updateArtistDetails = function(){
    console.log('in function updateArtistDetails');

    vm.artistDetails[0].newDetails = vm.newDescription;

    console.log('new description =' ,vm.artistDetails[0].newDetails);

     $http({
       method: 'PUT',
       url: '/artist',
       data: vm.artistDetails[0]
     }).then(function success(response) {
       console.log('response from update artist:', response);
       getArtistDetails().then(function (res){
         console.log('Response from getArtistDetails', res);
       });
        // vm.updateArtist= response.data;
            //vm.updateArtist= response.data[0].description;
        // console.log( vm.updateArtist);
         });
   };//end addArtist
}]);//end ArtistViewController
