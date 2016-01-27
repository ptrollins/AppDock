angular.module('AppDock')
  .controller('HomeCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    '$translate',
    function($rootScope, $scope, $state, $translate) {

      $scope.changeAndGo = function (lang) {
        $scope.ChangeLanguage(lang);
        $state.go('tab.apps');
      };

      $scope.ChangeLanguage = function(lang){
        $translate.use(lang);
      };

      //$rootScope.$on('$translateChangeSuccess', function () {
      //  $scope.language_type = $translate.instant('language_type');
      //});

  }]);
