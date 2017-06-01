myApp.controller('ArtistViewController',[ '$http', '$routeParams', '$location',

  function($http, $routeParams, $location ) {
  console.log('ArtistViewController loaded');
  console.log('route params=',$routeParams);
  var vm= this;

  vm.artistDetails= [];
  getArtistDetails();

  function getArtistDetails() {
    console.log('In get artist details');
     $http({
       method: 'GET',
       url: '/artist/solo',
          params:{
            artistId: $routeParams.artistId
          }
     }).then(function(response) {
       console.log('response.data from artist details: ', response.data);
       vm.artistDetails= response.data;
     });
   }
}]);//end ArtistViewController
