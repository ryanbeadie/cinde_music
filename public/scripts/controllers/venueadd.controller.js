
myApp.controller('VenueAddController',[ '$http', '$location','$scope',  function($http, $location, $scope) {
  console.log('VenueAddController loaded');
  var vm= this;
  // vm.description = [{}];
  // vm.review= [{}];
  // vm.photo = [];
  // vm.upcomingEvent = [{}];

//addVenue
  vm.addVenue = function(){
    console.log('in venue add');
    var objectToSend = {

      name: vm.name,
      address: vm.address,
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
      upcomingEvent:[{
        content:vm.upcomingEvent,
        authorId: vm.addedBy
      }],

    };//end objectToSend

    // name: vm.name,
    // address: vm.address,
    // description: vm.description,
    // review: vm.review,
    // photo: vm.photo,
    // upcomingEvent: vm.upcomingEvent
  //end objectToSend

    console.log('Venue To Send:', objectToSend);

    $http({
      method: 'POST',
      url: '/venue',
      data: objectToSend
    }).then(function success(response) {
      console.log('response from venue add:', response);
    });
  };//end addVenue

//photo upload
  vm.uploadImg = filestack.init('AUz2UHIiSlKQwrkbaRwISz');

  vm.uploadPhoto = function() {
    vm.uploadImg.pick({
    }).then(function(response){
      console.log('upload this img', (response.filesUploaded[0].url));
        vm.photo = response.filesUploaded[0].url;
      $scope.$apply();// trigger the digest cycle or will have to click to show that it's populated
    });
  };// end uploadphoto

}]);//end VenueAddController
