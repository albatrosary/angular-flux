'use strict';

var cartItems = [];

angular.module('angularFluxApp')
  .factory('cartStore', function (dispatcher) {


    console.log('cartStore');

    var ADD_ITEM = "ADD_ITEM";
    var REMOVE_ITEM = "REMOVE_ITEM";
    // Service logic
    // ...

    var addItem = function (catalogItem) {
      console.log('cartStore.addItem');
      var items = cartItems.filter(function (i) {i.catalogItem == catalogItem});
      if (items.length == 0) {
        cartItems.push({qty: 1, catalogItem: catalogItem});
      } else {
        items[0].qty += 1;
      }
      console.log(cartItems);
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    var removeItem = function (cartItem) {
      console.log('cartStore.removeItem');
      var index = cartItems.indexOf(cartItem);
      this.cartItems.splice(index, 1);
    };

    var emitChange = function () {
      console.log('cartStore.emitChange');
      //dispatcher.emit("change");
    };

    var addListener = function (action) {
      console.log('cartStore.addListener private');
      switch(action.actionType) {
        case ADD_ITEM:
          dispatcher.addListener(addItem);
          break;
        case REMOVE_ITEM:
          dispatcher.addListener(removeItem);
          break;
      };
      emitChange();
    };

    // Public API here
    return {
      addListener: function (l) {
        console.log('cartStore.addListener');
        addListener(l);
      },
      cartItems: function() {
        console.log('cartStore.cartItems');
        return cartItems;
      }
    };
  });
