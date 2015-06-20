angular
  .module('app')
  .config(config);

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
    .state('list', {
      url: '/list',
      controller: 'ListController',
      controllerAs: 'list',
      templateUrl: 'components/list/list.html',
      resolve: {
        events: ['EventService',
          function(EventService) {
            return EventService.getEvents();
          }
        ]
      }
    });
  }
