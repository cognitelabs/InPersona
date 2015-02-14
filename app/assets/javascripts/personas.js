var persona = angular.module('persona',['dropdown','angularFileUpload']);

persona.controller('PersonaController', ['FileUploader','photoFactory',function (FileUploader, photoFactory) {
    this.sliderConfig = {
        min: 0,
        max: 10,
        step: 5,
        value: 5
    };
    
    this.persona = {};
    this.persona.message = 'Regular';
    this.uploadAvatar = function() {
      this.uploader.uploadAll();
    }

    var ctrl = this;
    this.uploader = new FileUploader({url: '/avatar'});
    this.uploader.onSuccessItem = function(fileItem, response, status, headers) {
         ctrl.persona.avatar_id = response.avatar_id;
         photoFactory.setPhoto(response.avatar_url);
        };

   this.publish = function() {

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
    this.persona.challlengesfield= this.persona.challlengesfield.replace(/\*/g, '• ');
    var temp  = this.persona.challlengesfield.split("•");
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
    $scope.chosenPhoto = '/uploads/avatar/avatar/18/IMG_2027.JPG';
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