describe('ListController', function () {

  var EventService, controller, scope;
  beforeEach(module('app'));
  beforeEach(module(function ($provide) {
    $provide.value('events', [{}]);
  }));
  beforeEach(inject(function (_EventService_, $controller,_events_) {
    EventService = _EventService_;
    events = _events_
    controller = $controller('ListController');
  }));

  it('has access to an array of events', function () {
    expect(events).to.be.an.instanceOf(Array);
  });

});
