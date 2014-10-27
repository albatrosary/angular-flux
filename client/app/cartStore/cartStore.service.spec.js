'use strict';

describe('Service: cartStore', function () {

  // load the service's module
  beforeEach(module('angularFluxApp'));

  // instantiate service
  var cartStore;
  beforeEach(inject(function (_cartStore_) {
    cartStore = _cartStore_;
  }));

  it('should do something', function () {
    expect(!!cartStore).toBe(true);
  });

});
