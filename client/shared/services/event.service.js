angular
  .module('app')
  .service('EventService', EventService);

  function EventService ($http) {
    this.getEvents = function() {
      return $http.get('/api/events');
    }

    this.getEvent = function(id) {
      return $http.get('/api/events/' + id);
    }

    this.updateEvent = function(id, event) {
      return $http.post('/api/events/' + id, event);
    }

    this.saveEvent = function(event) {
      return $http.post('/api/events', event);
    }

    this.deleteEvent = function(id) {
      return $http.delete('/api/events/' + id);
    }
  }
