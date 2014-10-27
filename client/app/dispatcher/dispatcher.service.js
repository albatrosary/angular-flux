'use strict';

var listeners = [];

angular.module('angularFluxApp')
  .service('dispatcher', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    return {
      // リスナーに登録されたイベントを実行する
      emit: function (event) {
      	console.log('dispatcher.emit');
      	console.log('event:')
      	console.log(event);
        listeners.forEach (
          function(listener) {
          	console.log(listener);
          	console.log(event);
            listener(event);
          }
        );
      },
      // リスナーの登録
      addListener: function(listener) {
      	console.log('dispatcher.addListener');
        listeners.push(listener);
        return listeners.length - 1;
      }
    }
  });
