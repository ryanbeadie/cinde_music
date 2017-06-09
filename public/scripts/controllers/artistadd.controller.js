myApp.controller('ArtistAddController',[ '$http', '$location', '$scope',  function($http, $location, $scope) {
  console.log('ArtistAddController loaded');
  var vm= this;
  // vm.description = [{}];
  // vm.review= [{}];
  // vm.photo = [{}];
  // vm.upcomingShows = [{}];


  vm.addArtist = function(){
    console.log('in function add');
    var objectToSend = {
      name: vm.name,
      description: [{
        content: vm.description,
        authorId: vm.addedBy
      }],
      review: [{
        content:vm.review,
        authorId: vm.addedBy
      }],
      photo:[{
      content: vm.photo,
      authorId: vm.addedBy
      }],
      upcomingShows:[{
        content:vm.upcomingShows,
        authorId: vm.addedBy
      }],
    };//end objectToSend

    $http({
      method: 'POST',
      url: '/artist',
      data: objectToSend
    }).then(function success(response) {
      console.log('response from artist add:', response);
        });
  };//end addArtist

  vm.uploadImg = filestack.init('AUz2UHIiSlKQwrkbaRwISz');

  vm.uploadPhoto = function() {
    vm.uploadImg.pick({
    }).then(function(response){
      console.log('upload this img', (response.filesUploaded[0].url));

      vm.photo = response.filesUploaded[0].url;
      $scope.$apply();// trigger the digest cycle or will have to click to show that it's populated
    });
  };// end uploadphoto
}]);//end ArtistAddController
