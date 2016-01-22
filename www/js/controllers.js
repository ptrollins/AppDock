angular.module('AppDock')

  .controller('DashCtrl', function($scope) {
  })

  .controller('AppsCtrl', function($scope, $filter, Apps) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.currmonth = $filter('date')(new Date(), 'MMMM');

    $scope.apps = Apps.all();
    $scope.remove = function(app) {
      Apps.remove(app);
    };

    $scope.util = Apps;

  })

  .controller('AppDetailCtrl', function($scope, $stateParams, Apps) {
    console.log($stateParams.appId);
    $scope.app = Apps.get($stateParams.appId);
  })

  .controller('HowToCtrl', function($scope) {
    //$scope.settings = {
    //  enableFriends: true
    //};
  })

  .controller('SocialCtrl', function($scope) {})

  .controller('AboutCtrl', function($scope) {});
