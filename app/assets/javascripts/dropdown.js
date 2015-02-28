'use strict';

var app = angular.module('dropdown', ['ngSanitize', 'ui.select']);


app.controller('dropdownCtrl', function($scope) {

  this.init = function(chosen) {
    this.chosenIncome.selected = chosen;
  }

  this.initPersonas = function(personas) {
    console.log(personas);
    this.all_personas = personas;
  }

  this.chosenIncome = {};
  this.Incomes = ['< $30,000','$30,000-$55,000','> $55,000'];

  this.publishOptions = ['Export to PDF', 'Print','Share'];
  this.publishOption = {};

  this.access_levels = ['read-only','read and write'];
  this.access_option = {};

  this.setPrintOption = function(option) {
    this.print = option;
  };

});