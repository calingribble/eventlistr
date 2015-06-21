angular
  .module('app')
  .config(config);

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/form');

    $stateProvider
    .state('list', {
      url: '/list',
      controller: 'EventListController',
      controllerAs: 'eventList',
      templateUrl: 'components/event/list/list.html',
      resolve: {
        events: ['EventService','socket',
          function(EventService, socket) {
            return EventService.getEvents().success(function(events){
              socket.syncUpdates('event', events);
            });
          }
        ]
      }
    })
    .state('form', {
      url: '/form',
      controller: 'EventFormController',
      controllerAs: 'eventForm',
      templateUrl: 'components/event/form/form.html',
      resolve: {
        event: [
          function() {
            return {};
          }
        ]
      }
    })
    .state('edit', {
      url: '/form/:id',
      controller: 'EventFormController',
      controllerAs: 'eventForm',
      templateUrl: 'components/event/form/form.html',
      resolve: {
        event: ['$stateParams', 'EventService',
          function($stateParams, EventService) {
            return EventService.getEvent($stateParams.id);
          }
        ]
      }
    });
  }
