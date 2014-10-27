'use strict';

angular.module('angularFluxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('CatalogCtrl', {
        url: '/CatalogCtrl',
        templateUrl: 'app/CatalogCtrl/CatalogCtrl.html',
        controller: 'CatalogctrlCtrl'
      });
  });