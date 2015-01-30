var persona = angular.module('persona',[]);

persona.controller('PersonaController', [function () {


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
