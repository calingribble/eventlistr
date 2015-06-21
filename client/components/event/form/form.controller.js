angular
  .module('app')
  .controller('EventFormController', EventFormController);

  function EventFormController (EventService, event, $state) {
    if(event.data) event.data.participants = event.data.participants.join(", ");

    this.event = event.data || {};


    this.saveEvent = function () {
      this.event.participants = (this.event.participants instanceof Array) ? this.event.participants : this.event.participants.split(',');

      if (this.event._id) {
        EventService.updateEvent(this.event._id, this.event)
        .success(function() {
          $state.go('list');
        });
      } else {
        EventService.saveEvent(this.event)
        .success(function() {
          $state.go('list');
        });
      }
    }
  }
