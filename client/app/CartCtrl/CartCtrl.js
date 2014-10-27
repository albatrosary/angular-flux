'use strict';

angular.module('angularFluxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('CartCtrl', {
        url: '/CartCtrl',
        templateUrl: 'app/CartCtrl/CartCtrl.html',
        controller: 'CartctrlCtrl'
      });
  });