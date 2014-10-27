'use strict';

angular.module('angularFluxApp')
  .value("catalogItems", [
    {id: 1, title: 'Item #1', cost: 1},
    {id: 2, title: 'Item #2', cost: 2},
    {id: 3, title: 'Item #3', cost: 3}
  ])
  .controller('CatalogctrlCtrl', function ($scope, catalogItems, cartActions, cartStore) {

  	console.log('CatalogctrlCtrl');

    $scope.catalog = {catalogItems:[]};
    $scope.catalog.catalogItems = catalogItems;

    // カートへ追加
    $scope.catalog.addToCart = function(catalogItem) {
      console.log('$scope.catalog.addToCart');
      // 処理イベントを実行する
      cartActions.addItem(catalogItem);
    }

    // 処理イベントを登録
    cartStore.addListener({actionType: 'ADD_ITEM'});
  });
