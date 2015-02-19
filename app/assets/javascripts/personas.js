var persona = angular.module('persona',['dropdown','angularFileUpload']);



persona.controller('PersonaController', ['FileUploader','photoFactory','personaFactory','$http',function (FileUploader, photoFactory, personaFactory, $http) {
    this.sliderConfig = {
        min: 0,
        max: 10,
        step: 5,
        value: 5
    };


    var ctrl = this;
    personaFactory.getAll().then(function(response) {
      ctrl.listOfPersonas = response.data;
      console.log(ctrl.listOfPersonas);
    });

    this.persona = {};
    this.persona.message = 'Regular';
    this.uploadAvatar = function() {
      this.uploader.uploadAll();
    }

  



 
    this.uploader = new FileUploader({url: '/avatar'});
    this.uploader.onSuccessItem = function(fileItem, response, status, headers) {
         ctrl.persona.avatar_id = response.avatar_id;
         photoFactory.setPhoto(response.avatar_url);
        };

   this.publish = function() {
      var persona_post = {};
      persona_post.devices = [];
      persona_post.operating_systems = [];
      persona_post.social_networks = [];
      if (this.persona.smartphone == true) {
        persona_post.devices.push("smartphone");
      };
      if (this.persona.tablet == true) {
        persona_post.devices.push("tablet");
      };
      if (this.persona.computer == true) {
        persona_post.devices.push("computer");
      };
      if (this.persona.windows7 == true) {
        persona_post.operating_systems.push("windows7");
      };
      if (this.persona.windows8 == true) {
        persona_post.operating_systems.push("windows8");
      };
      if (this.persona.osx == true) {
        persona_post.operating_systems.push("osx");
      };
      if (this.persona.ios == true) {
        persona_post.operating_systems.push("ios");
      };
      if (this.persona.android == true) {
        persona_post.operating_systems.push("android");
      };
      if (this.persona.ubuntu == true) {
        persona_post.operating_systems.push("ubuntu");
      };
      if (this.persona.facebook == true) {
        persona_post.social_networks.push("facebook");
      };
      if (this.persona.twitter == true) {
        persona_post.social_networks.push("twitter");
      };
      if (this.persona.linkedin == true) {
        persona_post.social_networks.push("linkedin");
      };
      if (this.persona.googleplus == true) {
        persona_post.social_networks.push("googleplus");
      };
      if (this.persona.pinterest == true) {
        persona_post.social_networks.push("pinterest");
      };
      persona_post.income = this.persona.income;
      persona_post.goalsfield = this.persona.goalsfield;
      persona_post.challengesfield = this.persona.challengesfield;
      persona_post.helpfield = this.persona.helpfield;
      persona_post.avatar_id = this.persona.avatar_id;
      persona_post.name = this.persona.name;
      persona_post.job = this.persona.job;
      persona_post.bio = this.persona.bio;
      persona_post.gender = this.persona.gender;
      persona_post.agerange = this.persona.agerange;
      persona_post.education = this.persona.education;
      persona_post.tech_use = this.persona.message;
      persona_post.level = this.persona.level;
      personaFactory.create(persona_post);
   };

    this.persona.smartphone = true;
    this.persona.computer = true;
    this.persona.tablet = true;
    this.persona.osx = true;
    this.persona.ios = true;
    this.persona.facebook = true;
    this.persona.twitter = true;

    this.persona.income = ''

  this.selectIncome = function(inc) {
    this.persona.income = inc;
  }

  this.GoalChange = function() {
    this.persona.goalsfield = this.persona.goalsfield.replace(/\*/g, '• ');
    var temp  = this.persona.goalsfield.split("•");
    this.persona.goalTitle = temp.shift();
    this.persona.goals = temp;
  }; 
  this.ChallengeChange = function() {
    this.persona.challengesfield= this.persona.challengesfield.replace(/\*/g, '• ');
    var temp  = this.persona.challengesfield.split("•");
    this.persona.challengeTitle = temp.shift();
    this.persona.challenges = temp;
  }; 
  this.helpChange = function() {
    this.persona.helpfield= this.persona.helpfield.replace(/\*/g, '• ');
    var temp  = this.persona.helpfield.split("•");
    this.persona.helpTitle = temp.shift();
    this.persona.helpItems = temp;
  }; 



}]);



persona.controller('PersonaControllerShow', ['FileUploader','photoFactory','personaFactory','$http',function (FileUploader, photoFactory, personaFactory, $http) {
    this.sliderConfig = {
        min: 0,
        max: 10,
        step: 5,
        value: 5
    };

    this.init = function(name, role, bio, goals, challenges, solutions, tech_use, gender, age, income, education, devices, os, social_networks, level, avat_url, avat_id, per_id) {
      this.persona.name = name;
      this.persona.job = role;
      this.persona.bio = bio;
      this.persona.goalsfield = goals;
      this.persona.challengesfield = challenges;
      this.persona.helpfield = solutions;
      this.persona.message = tech_use;
      this.persona.gender = gender;
      this.persona.agerange = age;
      this.persona.education = education;
      this.persona.income = income;
      this.persona.level = level;
      this.persona.avatar_id = avat_id;
      this.persona.per_id = per_id;
      photoFactory.setPhoto(avat_url);
      if (devices.indexOf('smartphone') != -1) {
        this.persona.smartphone = true;
      };
      if (devices.indexOf('tablet') != -1) {
        this.persona.tablet = true;
      };
      if (devices.indexOf('computer') != -1) {
        this.persona.computer = true;
      };
      if (os.indexOf('windows7') != -1) {
        this.persona.windows7 = true;
      };
      if (os.indexOf('windows8') != -1) {
        this.persona.windows8 = true;
      };
      if (os.indexOf('osx') != -1) {
        this.persona.osx = true;
      };
      if (os.indexOf('ios') != -1) {
        this.persona.ios = true;
      };
      if (os.indexOf('android') != -1) {
        this.persona.android = true;
      };
      if (os.indexOf('ubuntu') != -1) {
        this.persona.ubuntu = true;
      };
      if (social_networks.indexOf('facebook') != -1) {
        this.persona.facebook = true;
      };
      if (social_networks.indexOf('twitter') != -1) {
        this.persona.twitter = true;
      };
      if (social_networks.indexOf('linkedin') != -1) {
        this.persona.linkedin = true;
      };
      if (social_networks.indexOf('pinterest') != -1) {
        this.persona.pinterest = true;
      };
      if (social_networks.indexOf('googleplus') != -1) {
        this.persona.googleplus = true;
      };
      this.persona.goalsfield = this.persona.goalsfield.replace(/\*/g, '• ');
      var temp  = this.persona.goalsfield.split("•");
      this.persona.goalTitle = temp.shift();
      this.persona.goals = temp;

      this.persona.challengesfield= this.persona.challengesfield.replace(/\*/g, '• ');
      var temp2  = this.persona.challengesfield.split("•");
      this.persona.challengeTitle = temp2.shift();
      this.persona.challenges = temp2;

      this.persona.helpfield= this.persona.helpfield.replace(/\*/g, '• ');
      var temp3  = this.persona.helpfield.split("•");
      this.persona.helpTitle = temp3.shift();
      this.persona.helpItems = temp3;


    };


    var ctrl = this;

    this.persona = {};

    this.uploadAvatar = function() {
      this.uploader.uploadAll();
    } 
    this.uploader = new FileUploader({url: '/avatar'});
    this.uploader.onSuccessItem = function(fileItem, response, status, headers) {
         ctrl.persona.avatar_id = response.avatar_id;
         photoFactory.setPhoto(response.avatar_url);
        };

   this.publishUpdate = function() {
      var persona_post = {};
      persona_post.devices = [];
      persona_post.operating_systems = [];
      persona_post.social_networks = [];
      if (this.persona.smartphone == true) {
        persona_post.devices.push("smartphone");
      };
      if (this.persona.tablet == true) {
        persona_post.devices.push("tablet");
      };
      if (this.persona.computer == true) {
        persona_post.devices.push("computer");
      };
      if (this.persona.windows7 == true) {
        persona_post.operating_systems.push("windows7");
      };
      if (this.persona.windows8 == true) {
        persona_post.operating_systems.push("windows8");
      };
      if (this.persona.osx == true) {
        persona_post.operating_systems.push("osx");
      };
      if (this.persona.ios == true) {
        persona_post.operating_systems.push("ios");
      };
      if (this.persona.android == true) {
        persona_post.operating_systems.push("android");
      };
      if (this.persona.ubuntu == true) {
        persona_post.operating_systems.push("ubuntu");
      };
      if (this.persona.facebook == true) {
        persona_post.social_networks.push("facebook");
      };
      if (this.persona.twitter == true) {
        persona_post.social_networks.push("twitter");
      };
      if (this.persona.linkedin == true) {
        persona_post.social_networks.push("linkedin");
      };
      if (this.persona.googleplus == true) {
        persona_post.social_networks.push("googleplus");
      };
      if (this.persona.pinterest == true) {
        persona_post.social_networks.push("pinterest");
      };
      persona_post.income = this.persona.income;
      persona_post.goalsfield = this.persona.goalsfield;
      persona_post.challengesfield = this.persona.challengesfield;
      persona_post.helpfield = this.persona.helpfield;
      persona_post.avatar_id = this.persona.avatar_id;
      persona_post.name = this.persona.name;
      persona_post.job = this.persona.job;
      persona_post.bio = this.persona.bio;
      persona_post.gender = this.persona.gender;
      persona_post.agerange = this.persona.agerange;
      persona_post.education = this.persona.education;
      persona_post.tech_use = this.persona.message;
      persona_post.level = this.persona.level;
      persona_post.per_id = this.persona.per_id;
      personaFactory.updatePersona(persona_post);
   };

    

  this.selectIncome = function(inc) {
    this.persona.income = inc;
  }

  this.GoalChange = function() {
    this.persona.goalsfield = this.persona.goalsfield.replace(/\*/g, '• ');
    var temp  = this.persona.goalsfield.split("•");
    this.persona.goalTitle = temp.shift();
    this.persona.goals = temp;
  }; 
  this.ChallengeChange = function() {
    this.persona.challengesfield= this.persona.challengesfield.replace(/\*/g, '• ');
    var temp  = this.persona.challengesfield.split("•");
    this.persona.challengeTitle = temp.shift();
    this.persona.challenges = temp;
  }; 
  this.helpChange = function() {
    this.persona.helpfield= this.persona.helpfield.replace(/\*/g, '• ');
    var temp  = this.persona.helpfield.split("•");
    this.persona.helpTitle = temp.shift();
    this.persona.helpItems = temp;
  }; 

}]);

persona.factory('photoFactory', function ($rootScope) {
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

persona.factory('personaFactory', ['$http','$q', function($http,$q) {
  var fact = {
    personas: []
  };
  fact.create = function(persona) {
    return $http.post('/personas.json',persona).success(function(data) {
      
    });
    };
  fact.updatePersona = function(persona) {
    return $http.put("/personas/"+persona.per_id+".json", persona).success(function(data) {

    })
  }; 
    
  fact.getAll = function() {
      var deferred = $q.defer();
      deferred.resolve($http.get('/personas.json').success(function (response) {
        deferred.resolve(response);
      }));
      return deferred.promise;
  };

  return fact;  
}]);

persona.directive("slider", function() {
    return {
        restrict: 'A',
        scope: {
            config: "=config",
            price: "=model"
        },
        link: function(scope, elem, attrs) {
            var setModel = function(value) {
                scope.model = value; 
            }
            
            $(elem).slider({
                range: false,
              min: scope.config.min,
              max: scope.config.max,
                step: scope.config.step,
                value: scope.config.value,
                slide: function(event, ui) { 
                    scope.$apply(function() {
                        scope.price = ui.value;
                        if (scope.price == 0) {
                          scope.$parent.pCtrl.persona.message ='Novice';
                        }
                        else if (scope.price ==5) {
                          scope.$parent.pCtrl.persona.message ='Regular';
                        }
                        else {
                          scope.$parent.pCtrl.persona.message ='Advanced';
                        }
                    });
              }
          });
      }
    }
});

persona.controller('MainCtrl', function ($scope,photoFactory) {

    $scope.$on('handleBroadcast', function() {
      $scope.chosenPhoto = photoFactory.chosenPhoto;
      $scope.showModal = !$scope.showModal;
    });

    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

     $scope.urls = ['http://img1.jurko.net/avatar_12034.gif','http://img1.jurko.net/avatar_13909.gif','http://img1.jurko.net/avatar_16426.gif',
     'http://img1.jurko.net/avatar_17385.jpg','http://img1.jurko.net/avatar_18567.jpg','http://img1.jurko.net/avatar_18897.jpg',
     'http://img1.jurko.net/2396030.jpg','http://img1.jurko.net/rb1.jpg'];

     $scope.setPhoto = function(photo) {
        $scope.chosenPhoto = photo;
        $scope.showModal = !$scope.showModal;
     };



  });

persona.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });


persona.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                $(element).tooltip('show');
            }, function(){
                $(element).tooltip('hide');
            });
        }
    };
});