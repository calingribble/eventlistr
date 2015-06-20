angular
  .module('app')
  .controller('ListController', ListController);

  function ListController(events) {
    this.events = events.data;
  }
