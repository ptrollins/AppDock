angular.module('AppDock')

.factory('UtilFactory', ['$state', function($state) {
  return {
    linkTo: function(link) {
      $state.go(link);
    }
  };
}]);

