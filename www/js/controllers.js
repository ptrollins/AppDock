angular.module('AppDock')

  .controller('DashCtrl', function($scope, UtilFactory) {
    $scope.util = UtilFactory;
  })

  .controller('AppsCtrl', function($scope, $filter, Apps, UtilFactory) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.currmonth = $filter('date')(new Date(), 'MMMM');

    $scope.apps = Apps.all();
    //$scope.remove = function(app) {
      //Apps.remove(app);
    //};

    $scope.util = UtilFactory;
  })

  .controller('AppDetailCtrl', function($scope, $stateParams, Apps, $ionicModal) {
    $scope.app = Apps.get($stateParams.appId);

    $scope.rating = {};
    $scope.rating.rate = 3;
    $scope.rating.max = 5;

    $ionicModal.fromTemplateUrl('./templates/app-feedback-mod.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
  })

  .controller('AppDownloadCtrl', function($scope, $stateParams, Apps) {
    $scope.app = Apps.get($stateParams.appId);
  })

  .controller('DevelopersCtrl', function($scope, $stateParams, Apps) {
    $scope.developers = Apps.allDevelopers();
  })

  .controller('DevTemplateCtrl', function($scope, $stateParams, Apps) {
    $scope.developer = Apps.getDeveloper($stateParams.devId);
    $scope.view = 'dev-profile';
  })

  .controller('HowToCtrl', function($scope, Apps, UtilFactory) {
    $scope.util = UtilFactory;
    $scope.videos = Apps.getVideos();
    $scope.vidsrc = $scope.videos[1].video;
    $scope.activeItem = $scope.videos[1].name;
    $scope.select_item = function (key) {
      // highlights active howto list item
      $scope.activeItem = $scope.videos[key].name;
      // sets video source for active list item
      $scope.vidsrc = $scope.videos[key].video;
    };
  })

  .controller('SocialCtrl', function($scope, UtilFactory) {
    $scope.util = UtilFactory;
  })

  .controller('AboutCtrl', function($scope, UtilFactory) {
    $scope.util = UtilFactory;
  });
