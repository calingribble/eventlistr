angular
  .module('app')
  .directive('eventForm', EventFormDirective);

  function EventFormDirective () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/directives/event-form/event-form.html',
      controller: EventFormDirectiveController,
      controllerAs: 'eventEditor'
    };
  }

  function EventFormDirectiveController (EventService) {
    this.event = {};

    this.saveEvent = function () {
      this.event.participants = this.event.participants.split(',');
      EventService.saveEvent(this.event);
    }
  }
