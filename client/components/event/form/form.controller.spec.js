describe('EventFormController', function () {

  var EventService, controller, scope;
  beforeEach(module('app'));
  beforeEach(module(function ($provide) {
    $provide.value('event', {});
  }));
  beforeEach(inject(function (_EventService_, $controller,_event_) {
    EventService = _EventService_;
    event = _event_
    controller = $controller('EventFormController');
  }));

  it('does something', function () {
  });

});
