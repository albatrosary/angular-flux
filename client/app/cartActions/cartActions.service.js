'use strict';

var ADD_ITEM = "ADD_ITEM";

angular.module('angularFluxApp')
  .factory('cartActions', function (dispatcher) {
    // Service logic
    // ...

    // Public API here
    return {
      addItem: function (item) {
        console.log('cartActions.add');
        dispatcher.emit({
          actionType: ADD_ITEM,
          item: item
        });
      }
    };
  });
