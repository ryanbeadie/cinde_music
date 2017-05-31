myApp.controller('ArtistAddController',[ '$http', '$location',  function($http, $location) {
  console.log('ArtistAddController loaded');
  var vm= this;
  vm.newArtist = [];

  vm.addArtist = function(){
    console.log('in function add');
    var objectToSend = {
      firstName: vm.firstName,
      lastName: vm.lastName
    };//end objectToSend

    $http({
      method: 'POST',
      url: '/addArtist',
      data: objectToSend
    }).then(function success(response) {
      console.log('response from artist add:', response);
    });
  };//end
  //create artist object to send to db
}]);//end ArtistAddController
