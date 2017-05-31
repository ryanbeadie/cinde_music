
myApp.controller('VenueAddController',[ '$http', '$location',  function($http, $location) {
  console.log('VenueAddController loaded');
  var vm= this;
  vm.newVenue = [];

  vm.addVenue = function(){
    console.log('in function add');
    var objectToSend = {
      firstName: vm.firstName,
      lastName: vm.lastName
    };//end objectToSend

    $http({
      method: 'POST',
      url: '/addVenue',
      data: objectToSend
    }).then(function success(response) {
      console.log('response from venue add:', response);
    });
  };//end addVenue
}]);//end VenueAddController
