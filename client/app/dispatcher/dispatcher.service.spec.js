'use strict';

describe('Service: dispatcher', function () {

  // load the service's module
  beforeEach(module('angularFluxApp'));

  // instantiate service
  var dispatcher;
  beforeEach(inject(function (_dispatcher_) {
    dispatcher = _dispatcher_;
  }));

  it('should do something', function () {
    expect(!!dispatcher).toBe(true);
  });

});
