// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var team = angular.module('team',['dropdown']);

team.controller('TeamControllerIndex', ['teamFactory', function (teamFactory) {

  var ctrl = this;
  teamFactory.getAllTeams().then(function(response){
    ctrl.listOfTeams = response.data;
    console.log(ctrl.listOfTeams);
  }); 

  this.addTeam = function(team_name) {
    teamFactory.createTeam(team_name).then(function(response){
      console.log(response.data.team);      
      $( "#table_id tbody" ).append( "<tr><td>"+"<a href=teams/"+response.data.team.id+">"+response.data.team.name+"</a>"+"</td><td>"+response.data.team.owner_id+"</td></tr>");
    });
  };
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

  this.selectLevel = function(level_option) {
    console.log(level_option);
  };

  this.selectPersona = function(persona) {
    console.log(persona);
  }

  
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

  fact.createTeam = function(team_name) {
    items = { team_name: team_name};
    return $http.post('/teams.json',items).success(function(data){
    });
  };


  fact.addMemberToTeam = function(mail, team_id) {
    items = { email: mail, team: team_id };
    return $http.post('/teams/add_member.json',items).success(function(data) {      
    });
  };
  return fact;
}]);

