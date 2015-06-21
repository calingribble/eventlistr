angular
  .module('app')
  .controller('ListController', ListController);

  function ListController(events) {
    this.events = events.data;

    this.create = false;

    this.toggleCreate = function() {
      this.create = this.create === false ? true: false;
    };
  }
