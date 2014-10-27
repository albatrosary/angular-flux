'use strict';

angular.module('angularFluxApp')
  .controller('CartctrlCtrl', function ($scope, cartStore, cartActions) {

    var resetItems = function() {
      $scope.cart = {};
      $scope.cart.items = JSON.parse(sessionStorage.getItem('cartItems'));
      //$scope.items = cartStore.cartItems();
    };

    var removeItem = function(item) {
    //to be implemented
    };
   
    resetItems();

    // cartStore.addListener(function () {
    //   resetItems();
    // });
  });



