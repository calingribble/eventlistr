describe('EventFormController', function () {

  var EventService, controller, scope;
  beforeEach(module('app'));
  beforeEach(module(function ($provide) {
    $provide.value('events', [{}]);
  }));
  beforeEach(inject(function (_EventService_, $controller,_events_) {
    EventService = _EventService_;
    events = _events_
    controller = $controller('EventFormController');
  }));

  it('does something', function () {
    expect(true).to.be(true);
  });

});
