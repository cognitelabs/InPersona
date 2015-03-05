// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var team = angular.module('team',['dropdown']);

team.controller('TeamControllerIndex', ['teamFactory','$compile', function (teamFactory, $compile) {

  var ctrl = this;
  teamFactory.getAllTeams().then(function(response){
    ctrl.listOfTeams = response.data;
  }); 

  this.addTeam = function(team_name) {
    teamFactory.createTeam(team_name).then(function(response){
      ctrl.listOfTeams.push(response.data.team);
    });
  };
}]);

team.controller('TeamControllerShow', ['teamFactory', function (teamFactory) {
  var ctrl = this;
  this.init = function(team_param, owner_param, team_members) {
    ctrl.team = team_param;
    ctrl.owner = owner_param;
    ctrl.members = team_members;
  }

  this.addMember = function(member_mail) {
    teamFactory.addMemberToTeam(member_mail, ctrl.team.id).then(function(response){
      ctrl.members.push(response.data.mem);
      ctrl.newMember = "";
    });
  };

  this.removeMember = function(mem) {
    teamFactory.removeMemberFromTeam(mem).then(function(response){
      var arrayLength = ctrl.members.length;
      for (var i = 0; i < arrayLength; i++) {
          if (ctrl.members[i].id == mem) {
            ctrl.members.splice(ctrl.members.indexOf(i),1);
          }
      }
    });
  };

  this.selectLevel = function(level_option) {
    ctrl.team_access = level_option;
  };

  this.selectPersona = function(persona) {
    ctrl.persona_share = persona.id;
  };

  this.addPersona = function() {
    teamFactory.addPersonaPrivilege(ctrl.persona_share, ctrl.team_access, ctrl.team.id).then(function(response){
    });
  };

  
}]);


team.factory('teamFactory', ['$http',function ($http) {
  var fact = {};
  fact.getAllTeams = function() {
    return $http.get('/teams.json').success(function (response) {
    return response;
  });
  };

  fact.createTeam = function(team_name) {
    items = { team_name: team_name};
    return $http.post('/teams.json',items).success(function(data){
    });
  };


  fact.addMemberToTeam = function(mail, team_id) {
    items = { email: mail, id: team_id };
    return $http.post('/teams/add_member.json',items).success(function(data) {      
    });
  };

  fact.addPersonaPrivilege = function(persona, team_access, team_id) {
    items = { persona_id: persona, access: team_access, id: team_id };
    return $http.post('/teams/add_persona_to_team.json',items).success(function(data) {      
    }); 
  };

  fact.removeMemberFromTeam = function(team_mem_id) {
    items = {team_mem_id: team_mem_id };
    return $http.post('/teams/remove_member.json',items).success(function(data) {      
    }); 
  };
  return fact;
}]);

