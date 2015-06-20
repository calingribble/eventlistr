angular
  .module('app')
  .service('EventService', EventService);

  function EventService ($http) {
    this.getEvents = function() {
      return $http.get('/api/events');
    }
  }
