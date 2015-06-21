angular
  .module('app')
  .controller('EventListController', EventListController);

  function EventListController(events) {
    this.events = events.data;
  }
