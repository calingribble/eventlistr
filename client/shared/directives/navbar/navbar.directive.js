angular
  .module('app')
  .directive('navbar', NavBarDirective);

  function NavBarDirective () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/directives/navbar/navbar.html'
    };
  }
