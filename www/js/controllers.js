angular.module('AppDock')

    .controller('AppsCtrl', function ($scope, $filter, Apps, UtilFactory, AppDBService) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});


        var appdb = AppDBService.getAppDB();
        appdb.allDocs({
            include_docs: true
        }).then(function (result) {
            $scope.apps = result.rows.map(function (row) { return row.doc; });
            console.log($scope.apps);
        }).catch(function (err) {
            console.log(err);
        });


        $scope.currmonth = $filter('date')(new Date(), 'MMMM');

        //$scope.apps = Apps.all();
        //$scope.remove = function(app) {
        //Apps.remove(app);
        //};

        $scope.util = UtilFactory;
    })

    .controller('AppDetailCtrl', function ($scope, $stateParams, Apps, $ionicModal, AppDBService) {

        var appdb = AppDBService.getAppDB();
        appdb.allDocs({
            include_docs: true
        }).then(function (result) {
            $scope.app = result.rows.map(function (row) { if (row.doc.id == $stateParams.appId )return row.doc; });
            console.log($scope.app);
        }).catch(function (err) {
            console.log(err);
        });
        //$scope.app = Apps.get($stateParams.appId);

        $scope.rating = {};
        $scope.rating.rate = 3;
        $scope.rating.max = 5;

        $ionicModal.fromTemplateUrl('./templates/app-feedback-mod.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
    })

    .controller('AppDownloadCtrl', function ($scope, $stateParams, Apps) {
        var appdb = AppDBService.getAppDB();
        appdb.allDocs({
            include_docs: true
        }).then(function (result) {
            $scope.app = result.rows.map(function (row) { if (row.id == $stateParams.appId ) return row.doc; });
            console.log($scope.app);
        }).catch(function (err) {
            console.log(err);
        });
        //$scope.app = Apps.get($stateParams.appId);
    })

    .controller('DevelopersCtrl', function ($scope, $stateParams, Apps, UtilFactory) {
        var developerdb = DevDBService.getDeveloperDB();
        developerdb.allDocs({
            include_docs: true
        }).then(function (result) {
            $scope.developers = result.rows.map(function (row) { return row.doc; });
        }).catch(function (err) {
            console.log(err);
        });
        //$scope.developers = Apps.allDevelopers();
        $scope.util = UtilFactory;
    })

    .controller('DevTemplateCtrl', function ($scope, $stateParams, Apps, UtilFactory, $ionicViewSwitcher) {
        // read a document by ID; log the response
        //db.get(DOCUMENT_ID, function (err, response) {
        //  console.log(err || response);
        //});

        $scope.util = UtilFactory; // for back button
        $scope.developer = Apps.getDeveloper($stateParams.devId);

        $scope.activeItem = 'profile';
        $scope.showProfile = true;
        $scope.showApps = false;
        $scope.showFeedback = false;

        $scope.setProfile = function () {
            $ionicViewSwitcher.nextTransition('none');
            try {
                angular.element(devapps).removeAttr("nav-view");
            } catch (e) {
                console.log(e)
            }
            try {
                angular.element(devfeedback).removeAttr("nav-view");
            } catch (e) {
                console.log(e)
            }

            $scope.activeItem = 'profile';
            //$scope.showProfile = true;
            //$scope.showApps = false;
            //$scope.showFeedback = false;
        };
        $scope.setApps = function () {
            $ionicViewSwitcher.nextTransition('none');
            try {
                angular.element(devprofile).removeAttr("nav-view");
            } catch (e) {
                console.log(e)
            }
            try {
                angular.element(devfeedback).removeAttr("nav-view");
            } catch (e) {
                console.log(e)
            }

            $scope.activeItem = 'apps';
            //$scope.showProfile = false;
            //$scope.showApps = true;
            //$scope.showFeedback = false;
        };
        $scope.setFeedback = function () {
            $ionicViewSwitcher.nextTransition('none');
            try {
                angular.element(devprofile).removeAttr("nav-view");
            } catch (e) {
                console.log(e)
            }
            try {
                angular.element(devapps).removeAttr("nav-view");
            } catch (e) {
                console.log(e)
            }

            $scope.activeItem = 'feedback';
            //$scope.showProfile = false;
            //$scope.showApps = false;
            //$scope.showFeedback = true;
        };
        //$scope.view1 = 'dev-profile';
        //$scope.setView = function(view){
        //  $scope.view1 = view;
        //  state.go('tab.dev-template.' + view + '/:devId',{devId:$stateParams.devId});
        //};
    })

    .controller('DevProfileCtrl', function ($scope, $stateParams, Apps) {
        $scope.developer = Apps.getDeveloper($stateParams.devId);
    })

    .controller('DevAppsCtrl', function ($scope, $stateParams, Apps) {
        $scope.developer = Apps.getDeveloper($stateParams.devId);
        $scope.apps = Apps.getByDeveloper($scope.developer.name);
    })

    .controller('DevFeedbackCtrl', function ($scope, $stateParams, Apps) {
        $scope.developer = Apps.getDeveloper($stateParams.devId);

        //function addDoc() {
        //  var doc = {_id: new Date().toISOString()};
        //  DBService.db.put(doc).then(function (result) {
        //    console.log(result);
        //  }).catch(function (error) {
        //    console.log(error);
        //  });
        //}
    })

    .controller('HowToCtrl', function ($scope, Apps, UtilFactory) {
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

    .controller('SocialCtrl', function ($scope, UtilFactory, Camera) {
        $scope.util = UtilFactory;

        $scope.lastPhoto = '../img/appimage.png'
        $scope.getPhoto = function () {
            console.log('Getting camera');
            Camera.getPicture({
                quality: 75,
                targetWidth: 320,
                targetHeight: 320,
                saveToPhotoAlbum: false
            }).then(function (imageURI) {
                console.log(imageURI);
                $scope.lastPhoto = imageURI;
            }, function (err) {
                console.err(err);
            });
        };
    })

    .controller('FeedbackCtrl', function ($scope, UtilFactory, Apps, $ionicModal) {
        $scope.util = UtilFactory;
        $scope.questions = Apps.allQuestions();

        $scope.rating = {};
        $scope.rating.rate = 3;
        $scope.rating.max = 5;

        $ionicModal.fromTemplateUrl('./templates/fb-feedback-mod.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
    })

    .controller('DonateCtrl', function ($scope, UtilFactory) {
        $scope.util = UtilFactory;
    })

    .controller('AboutCtrl', function ($scope, UtilFactory) {
        $scope.util = UtilFactory;
    });
