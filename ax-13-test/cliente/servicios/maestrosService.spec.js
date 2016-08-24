describe('Maestros Service', function() {
  var maestrosService;

  // Before each test load our servicios module
  beforeEach(angular.mock.module('servicios'));

  // Before each test set our injected maestrosService service (_maestrosService_) to our local maestrosService variable
  beforeEach(inject(function(_maestrosService_) {
    maestrosService = _maestrosService_;
  }));

  // A simple test to verify the maestrosService service exists
  it('should exist', function() {
    expect(maestrosService).toBeDefined();
  });
});