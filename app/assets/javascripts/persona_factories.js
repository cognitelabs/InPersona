angular.module('persona').factory('photoFactory', function($rootScope) {
  var sharedService = {};
  //sharedService.showModal = false;
  sharedService.chosenPhoto = '/uploads/avatar/avatar/18/IMG_2027.JPG';
  sharedService.setPhoto = function(photo) {
    this.chosenPhoto = photo;
    //  this.showModal = !this.showModal;
    this.broadcastItem();
  };
  sharedService.broadcastItem = function() {
    $rootScope.$broadcast('handleBroadcast');
  }
  return sharedService;
});


angular.module('persona').factory('personaFactory', ['$http', function($http) {
  var fact = {
    personas: [],
    slider: {
      min: 0,
      max: 10,
      step: 5,
      value: 5
    }
  };
  fact.create = function(persona) {
    return $http.post('/personas.json', persona).success(function(data) {

    });
  };
  fact.updatePersona = function(persona) {
    return $http.put("/personas/" + persona.per_id + ".json", persona).success(function(data) {

    })
  };

  fact.getAll = function() {
    return $http.get('/personas.json').success(function(response) {
      return response;
    });
  };

  return fact;
}]);
