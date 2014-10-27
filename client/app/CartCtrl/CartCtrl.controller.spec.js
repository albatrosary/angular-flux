'use strict';

describe('Controller: CartctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFluxApp'));

  var CartctrlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartctrlCtrl = $controller('CartctrlCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
