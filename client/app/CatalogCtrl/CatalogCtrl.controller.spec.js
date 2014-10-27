'use strict';

describe('Controller: CatalogctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFluxApp'));

  var CatalogctrlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogctrlCtrl = $controller('CatalogctrlCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
