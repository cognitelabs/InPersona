var persona = angular.module('persona', ['dropdown', 'angularFileUpload']);



persona.controller('PersonaController', ['FileUploader', 'photoFactory', 'personaFactory', '$http', function(FileUploader, photoFactory, personaFactory, $http) {
  var ctrl = this;
  ctrl.sliderConfig = personaFactory.slider;
  
  personaFactory.getAll().then(function(response) {
    ctrl.listOfPersonas = response.data;
  });

  ctrl.persona = {};
  ctrl.persona.message = 'Regular';
  ctrl.uploadAvatar = function() {
    ctrl.uploader.uploadAll();
  }

  ctrl.uploader = new FileUploader({
    url: '/avatar'
  });
  ctrl.uploader.onSuccessItem = function(fileItem, response, status, headers) {
    ctrl.persona.avatar_id = response.avatar_id;
    photoFactory.setPhoto(response.avatar_url);
  };

  ctrl.publish = function() {
    var persona_post = {};
    persona_post.devices = [];
    persona_post.operating_systems = [];
    persona_post.social_networks = [];
    if (ctrl.persona.smartphone == true) {
      persona_post.devices.push("smartphone");
    };
    if (ctrl.persona.tablet == true) {
      persona_post.devices.push("tablet");
    };
    if (ctrl.persona.computer == true) {
      persona_post.devices.push("computer");
    };
    if (ctrl.persona.windows7 == true) {
      persona_post.operating_systems.push("windows7");
    };
    if (ctrl.persona.windows8 == true) {
      persona_post.operating_systems.push("windows8");
    };
    if (ctrl.persona.osx == true) {
      persona_post.operating_systems.push("osx");
    };
    if (ctrl.persona.ios == true) {
      persona_post.operating_systems.push("ios");
    };
    if (ctrl.persona.android == true) {
      persona_post.operating_systems.push("android");
    };
    if (ctrl.persona.ubuntu == true) {
      persona_post.operating_systems.push("ubuntu");
    };
    if (ctrl.persona.facebook == true) {
      persona_post.social_networks.push("facebook");
    };
    if (ctrl.persona.twitter == true) {
      persona_post.social_networks.push("twitter");
    };
    if (ctrl.persona.linkedin == true) {
      persona_post.social_networks.push("linkedin");
    };
    if (ctrl.persona.googleplus == true) {
      persona_post.social_networks.push("googleplus");
    };
    if (ctrl.persona.pinterest == true) {
      persona_post.social_networks.push("pinterest");
    };
    persona_post.income = ctrl.persona.income;
    persona_post.goalsfield = ctrl.persona.goalsfield;
    persona_post.challengesfield = ctrl.persona.challengesfield;
    persona_post.helpfield = ctrl.persona.helpfield;
    persona_post.avatar_id = ctrl.persona.avatar_id;
    persona_post.name = ctrl.persona.name;
    persona_post.job = ctrl.persona.job;
    persona_post.bio = ctrl.persona.bio;
    persona_post.gender = ctrl.persona.gender;
    persona_post.agerange = ctrl.persona.agerange;
    persona_post.education = ctrl.persona.education;
    persona_post.tech_use = ctrl.persona.message;
    persona_post.level = ctrl.persona.level;
    personaFactory.create(persona_post);
  };

  ctrl.persona.smartphone = true;
  ctrl.persona.computer = true;
  ctrl.persona.tablet = true;
  ctrl.persona.osx = true;
  ctrl.persona.ios = true;
  ctrl.persona.facebook = true;
  ctrl.persona.twitter = true;

  ctrl.persona.income = ''

  ctrl.selectIncome = function(inc) {
    ctrl.persona.income = inc;
  }

  ctrl.goalChange = function() {
    ctrl.persona.goalsfield = ctrl.persona.goalsfield.replace(/\*/g, '• ');
    var temp = ctrl.persona.goalsfield.split("•");
    ctrl.persona.goalTitle = temp.shift();
    ctrl.persona.goals = temp;
  };
  ctrl.challengeChange = function() {
    ctrl.persona.challengesfield = ctrl.persona.challengesfield.replace(/\*/g, '• ');
    var temp = ctrl.persona.challengesfield.split("•");
    ctrl.persona.challengeTitle = temp.shift();
    ctrl.persona.challenges = temp;
  };
  ctrl.helpChange = function() {
    ctrl.persona.helpfield = ctrl.persona.helpfield.replace(/\*/g, '• ');
    var temp = ctrl.persona.helpfield.split("•");
    ctrl.persona.helpTitle = temp.shift();
    ctrl.persona.helpItems = temp;
  };



}]);



persona.controller('PersonaControllerShow', ['FileUploader', 'photoFactory', 'personaFactory', '$http', function(FileUploader, photoFactory, personaFactory, $http) {
  var ctrl = this;
  ctrl.sliderConfig = personaFactory.slider;

  ctrl.init = function(avat_url, persona_object, show_edit) {
    ctrl.show_edit_on_persona = show_edit;
    ctrl.persona.name = persona_object.name;
    ctrl.persona.job = persona_object.role;
    ctrl.persona.bio = persona_object.bio;
    ctrl.persona.goalsfield = persona_object.goals;
    ctrl.persona.challengesfield = persona_object.challenges;
    ctrl.persona.helpfield = persona_object.solutions;
    ctrl.persona.message = persona_object.tech_use;
    ctrl.persona.gender = persona_object.gender;
    ctrl.persona.agerange = persona_object.age;
    ctrl.persona.education = persona_object.education;
    ctrl.persona.income = persona_object.income;
    ctrl.persona.level = persona_object.access_level;
    ctrl.persona.avatar_id = persona_object.avatar_id;
    ctrl.persona.per_id = persona_object.id;

    if (persona_object.tech_use == "Novice") {
      ctrl.sliderConfig.value = 0;
    }
    if (persona_object.tech_use == "Regular") {
      ctrl.sliderConfig.value = 5;
    }
    if (persona_object.tech_use == "Advanced") {
      ctrl.sliderConfig.value = 10;
    }

    photoFactory.setPhoto(avat_url);
    if (persona_object.devices.indexOf('smartphone') != -1) {
      ctrl.persona.smartphone = true;
    };
    if (persona_object.devices.indexOf('tablet') != -1) {
      ctrl.persona.tablet = true;
    };
    if (persona_object.devices.indexOf('computer') != -1) {
      ctrl.persona.computer = true;
    };
    if (persona_object.os.indexOf('windows7') != -1) {
      ctrl.persona.windows7 = true;
    };
    if (persona_object.os.indexOf('windows8') != -1) {
      ctrl.persona.windows8 = true;
    };
    if (persona_object.os.indexOf('osx') != -1) {
      ctrl.persona.osx = true;
    };
    if (persona_object.os.indexOf('ios') != -1) {
      ctrl.persona.ios = true;
    };
    if (persona_object.os.indexOf('android') != -1) {
      ctrl.persona.android = true;
    };
    if (persona_object.os.indexOf('ubuntu') != -1) {
      ctrl.persona.ubuntu = true;
    };
    if (persona_object.social_networks.indexOf('facebook') != -1) {
      ctrl.persona.facebook = true;
    };
    if (persona_object.social_networks.indexOf('twitter') != -1) {
      ctrl.persona.twitter = true;
    };
    if (persona_object.social_networks.indexOf('linkedin') != -1) {
      ctrl.persona.linkedin = true;
    };
    if (persona_object.social_networks.indexOf('pinterest') != -1) {
      ctrl.persona.pinterest = true;
    };
    if (persona_object.social_networks.indexOf('googleplus') != -1) {
      ctrl.persona.googleplus = true;
    };
    ctrl.persona.goalsfield = ctrl.persona.goalsfield.replace(/\*/g, '• ');
    var temp = ctrl.persona.goalsfield.split("•");
    ctrl.persona.goalTitle = temp.shift();
    ctrl.persona.goals = temp;

    ctrl.persona.challengesfield = ctrl.persona.challengesfield.replace(/\*/g, '• ');
    var temp2 = ctrl.persona.challengesfield.split("•");
    ctrl.persona.challengeTitle = temp2.shift();
    ctrl.persona.challenges = temp2;

    ctrl.persona.helpfield = ctrl.persona.helpfield.replace(/\*/g, '• ');
    var temp3 = ctrl.persona.helpfield.split("•");
    ctrl.persona.helpTitle = temp3.shift();
    ctrl.persona.helpItems = temp3;
  };

  ctrl.persona = {};

  ctrl.uploadAvatar = function() {
    ctrl.uploader.uploadAll();
  }
  ctrl.uploader = new FileUploader({
    url: '/avatar'
  });
  ctrl.uploader.onSuccessItem = function(fileItem, response, status, headers) {
    ctrl.persona.avatar_id = response.avatar_id;
    photoFactory.setPhoto(response.avatar_url);
  };

  ctrl.publishUpdate = function() {
    var persona_post = {};
    persona_post.devices = [];
    persona_post.operating_systems = [];
    persona_post.social_networks = [];
    if (ctrl.persona.smartphone == true) {
      persona_post.devices.push("smartphone");
    };
    if (ctrl.persona.tablet == true) {
      persona_post.devices.push("tablet");
    };
    if (ctrl.persona.computer == true) {
      persona_post.devices.push("computer");
    };
    if (ctrl.persona.windows7 == true) {
      persona_post.operating_systems.push("windows7");
    };
    if (ctrl.persona.windows8 == true) {
      persona_post.operating_systems.push("windows8");
    };
    if (ctrl.persona.osx == true) {
      persona_post.operating_systems.push("osx");
    };
    if (ctrl.persona.ios == true) {
      persona_post.operating_systems.push("ios");
    };
    if (ctrl.persona.android == true) {
      persona_post.operating_systems.push("android");
    };
    if (ctrl.persona.ubuntu == true) {
      persona_post.operating_systems.push("ubuntu");
    };
    if (ctrl.persona.facebook == true) {
      persona_post.social_networks.push("facebook");
    };
    if (ctrl.persona.twitter == true) {
      persona_post.social_networks.push("twitter");
    };
    if (ctrl.persona.linkedin == true) {
      persona_post.social_networks.push("linkedin");
    };
    if (ctrl.persona.googleplus == true) {
      persona_post.social_networks.push("googleplus");
    };
    if (ctrl.persona.pinterest == true) {
      persona_post.social_networks.push("pinterest");
    };
    persona_post.income = ctrl.persona.income;
    persona_post.goalsfield = ctrl.persona.goalsfield;
    persona_post.challengesfield = ctrl.persona.challengesfield;
    persona_post.helpfield = ctrl.persona.helpfield;
    persona_post.avatar_id = ctrl.persona.avatar_id;
    persona_post.name = ctrl.persona.name;
    persona_post.job = ctrl.persona.job;
    persona_post.bio = ctrl.persona.bio;
    persona_post.gender = ctrl.persona.gender;
    persona_post.agerange = ctrl.persona.agerange;
    persona_post.education = ctrl.persona.education;
    persona_post.tech_use = ctrl.persona.message;
    persona_post.level = ctrl.persona.level;
    persona_post.per_id = ctrl.persona.per_id;
    personaFactory.updatePersona(persona_post);
  };



  ctrl.selectIncome = function(inc) {
    ctrl.persona.income = inc;
  }

  ctrl.goalChange = function() {
    ctrl.persona.goalsfield = ctrl.persona.goalsfield.replace(/\*/g, '• ');
    var temp = ctrl.persona.goalsfield.split("•");
    ctrl.persona.goalTitle = temp.shift();
    ctrl.persona.goals = temp;
  };
  ctrl.challengeChange = function() {
    ctrl.persona.challengesfield = ctrl.persona.challengesfield.replace(/\*/g, '• ');
    var temp = ctrl.persona.challengesfield.split("•");
    ctrl.persona.challengeTitle = temp.shift();
    ctrl.persona.challenges = temp;
  };
  ctrl.helpChange = function() {
    ctrl.persona.helpfield = ctrl.persona.helpfield.replace(/\*/g, '• ');
    var temp = ctrl.persona.helpfield.split("•");
    ctrl.persona.helpTitle = temp.shift();
    ctrl.persona.helpItems = temp;
  };

}]);

persona.controller('MainCtrl', function($scope, photoFactory) {

  $scope.$on('handleBroadcast', function() {
    $scope.chosenPhoto = photoFactory.chosenPhoto;
    $scope.showModal = !$scope.showModal;
  });

  $scope.showModal = false;
  $scope.toggleModal = function() {
    $scope.showModal = !$scope.showModal;
  };

  $scope.urls = ['http://img1.jurko.net/avatar_12034.gif', 'http://img1.jurko.net/avatar_13909.gif', 'http://img1.jurko.net/avatar_16426.gif',
    'http://img1.jurko.net/avatar_17385.jpg', 'http://img1.jurko.net/avatar_18567.jpg', 'http://img1.jurko.net/avatar_18897.jpg',
    'http://img1.jurko.net/2396030.jpg', 'http://img1.jurko.net/rb1.jpg'
  ];

  $scope.setPhoto = function(photo) {
    $scope.chosenPhoto = photo;
    $scope.showModal = !$scope.showModal;
  };

});
