angular
  .module('app')
  .controller('EventListController', EventListController);

  function EventListController(events, EventService) {
    this.events = events.data;

    this.deleteEvent = function(id) {
      EventService.deleteEvent(id);
    }
  }
