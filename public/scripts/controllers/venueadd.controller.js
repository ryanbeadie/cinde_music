
myApp.controller('VenueAddController',[ '$http', '$location',  function($http, $location) {
  console.log('VenueAddController loaded');
  var vm= this;


  vm.addVenue = function(){
    console.log('in function add');
    var objectToSend = {
      name: vm.name,
      address: vm.address,
      description: vm.description,
      review: vm.review,
      photo: vm.photo,
      upcomingEvent: vm.upcomingEvent
    };//end objectToSend

    console.log('Venue To Send:', objectToSend);
    
    $http({
      method: 'POST',
      url: '/venue',
      data: objectToSend
    }).then(function success(response) {
      console.log('response from venue add:', response);
    });
  };//end addVenue
}]);//end VenueAddController
