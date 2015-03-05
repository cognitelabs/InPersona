'use strict';

var app = angular.module('dropdown', ['ngSanitize', 'ui.select']);


app.controller('dropdownCtrl', function($scope) {

  this.init = function(chosen) {
    this.chosenIncome.selected = chosen;
  }

  this.disabled = false;
  var ctrl = this;

  this.initPersonas = function(personas) {
    console.log(personas);
    this.all_personas = personas;
    if (this.all_personas.length == 0) {
      ctrl.disabled = true;
    }
  }

  this.removeFromList = function(selected_persona) {
    console.log(selected_persona);
    this.all_personas.splice(this.all_personas.indexOf(selected_persona), 1);
    this.persona.selected = "";
    console.log(this.all_personas.length);
    if (this.all_personas.length == 0) {
      ctrl.disabled = true;
    }
  }

  this.chosenIncome = {};
  this.Incomes = ['< $30,000', '$30,000-$55,000', '> $55,000'];

  this.publishOptions = ['Export to PDF', 'Print', 'Share'];
  this.publishOption = {};

  this.access_levels = ['read-only', 'read and write'];
  this.access_option = {};

  this.setPrintOption = function(option) {
    this.print = option;
  };

});
