'use strict';

describe('Service: cartActions', function () {

  // load the service's module
  beforeEach(module('angularFluxApp'));

  // instantiate service
  var cartActions;
  beforeEach(inject(function (_cartActions_) {
    cartActions = _cartActions_;
  }));

  it('should do something', function () {
    expect(!!cartActions).toBe(true);
  });

});
