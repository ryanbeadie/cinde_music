myApp.controller('ArtistListController',[ '$http', '$location',  function($http, $location) {
  console.log('ArtistListController loaded');
  var vm= this;
  getArtist();
  vm.artist= [];

  function getArtist() {
      console.log('In get artist');
     $http({
       method: 'GET',
       url: '/artist'
     }).then(function(response) {
       console.log('response.data from artist collection: ', response.data);
       vm.artist= response.data;
     });
   }
  //  getArtist();
}]);//end ArtistListController
