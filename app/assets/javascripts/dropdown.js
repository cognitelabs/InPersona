'use strict';

var app = angular.module('dropdown', ['ngSanitize', 'ui.select']);


app.controller('dropdownCtrl', function($scope) {

  this.chosenIncome = {};
  this.Incomes = ['< $30,000','$30,000-$55,000','> $55,000'];

});