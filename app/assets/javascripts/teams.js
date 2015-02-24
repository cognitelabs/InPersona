// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var team = angular.module('team',[]);

team.controller('TeamControllerIndex', ['teamFactory', function (teamFactory) {

  var ctrl = this;
  teamFactory.getAllTeams().then(function(response){
    ctrl.listOfTeams = response.data;
    console.log(ctrl.listOfTeams);
  });
}]);

team.controller('TeamControllerShow', ['teamFactory', function (teamFactory) {
  var ctrl = this;
  this.init = function(team_param, owner_param) {
    ctrl.team = team_param;
    ctrl.owner = owner_param;
  }

  this.addMember = function(member_mail) {
    teamFactory.addMemberToTeam(member_mail, ctrl.team.id).then(function(response){
      console.log(response.data.test.email);
    });
  };
}]);


team.factory('teamFactory', ['$http','$q',function ($http, $q) {
  var fact = {};
  fact.getAllTeams = function() {
    var deferred = $q.defer();
    deferred.resolve($http.get('/teams.json').success(function(response) {
      deferred.resolve(response);
    }));
    return deferred.promise;
  };

  fact.addMemberToTeam = function(mail, team_id) {
    items = { email: mail, team: team_id };
    return $http.post('/teams/add_member.json',items).success(function(data) {      
    });
  };
  fact.createTeam = function(team_name) {

  };
  return fact;
}]);

