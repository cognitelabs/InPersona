var persona = angular.module('persona',['dropdown']);

persona.controller('PersonaController', [function () {
    this.sliderConfig = {
        min: 0,
        max: 10,
        step: 5,
        value: 5
    };
    this.message = 'Regular';

    this.smartphone = true;
    this.computer = true;
    this.tablet = true;
    this.osx = true;
    this.ios = true;
    this.facebook = true;
    this.twitter = true;

    this.income = ''

  this.selectIncome = function(inc) {
    this.income = inc;
  }

  this.GoalChange = function() {
    this.goalsfield = this.goalsfield.replace(/\*/g, '• ');
    var temp  = this.goalsfield.split("•");
    this.goalTitle = temp.shift();
    this.goals = temp;
  }; 
  this.ChallengeChange = function() {
    this.challlengesfield= this.challlengesfield.replace(/\*/g, '• ');
    var temp  = this.challlengesfield.split("•");
    this.challengeTitle = temp.shift();
    this.challenges = temp;
  }; 
  this.helpChange = function() {
    this.helpfield= this.helpfield.replace(/\*/g, '• ');
    var temp  = this.helpfield.split("•");
    this.helpTitle = temp.shift();
    this.helpItems = temp;
  }; 


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
                          scope.$parent.persona.message ='Novice';
                        }
                        else if (scope.price ==5) {
                          scope.$parent.persona.message ='Regular';
                        }
                        else {
                          scope.$parent.persona.message ='Advanced';
                        }
                    });
              }
          });
      }
    }
});