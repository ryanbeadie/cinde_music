myApp.controller('ArtistAddController',[ '$http', '$location',  function($http, $location) {
  console.log('ArtistAddController loaded');
  var vm= this;
  vm.description = [{}];
  vm.review= [{}];
  vm.photo = [{}];
  vm.upcomingShows = [{}];


  vm.addArtist = function(){
    console.log('in function add');
    var objectToSend = {
      name: vm.name,
      description: vm.description,
      review: vm.review,
      photo: vm.photo,
      upcomingShows: vm.upcomingShows
    };//end objectToSend

    $http({
      method: 'POST',
      url: '/artist',
      data: objectToSend
    }).then(function success(response) {
      console.log('response from artist add:', response);
        });
  };//end addArtist
}]);//end ArtistAddController
