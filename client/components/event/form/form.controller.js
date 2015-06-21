angular
  .module('app')
  .controller('EventFormController', EventFormController);

  function EventFormController (EventService, event, $state) {
    console.log(event);
    this.event = event;

    this.saveEvent = function () {
      this.event.participants = this.event.participants.split(',');
      EventService.saveEvent(this.event)
      .success(function() {
        $state.go('list');
      });
    }
  }
