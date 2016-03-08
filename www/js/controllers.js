angular.module('AppDock')

    .controller('AppsCtrl', function ($scope, $filter, UtilFactory, AppDBService) {
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
        }).catch(function (err) {
            console.log(err+"1");
        });

        $scope.currmonth = $filter('date')(new Date(), 'MMMM');

        $scope.util = UtilFactory;

        //$scope.apps = Apps.all();
        //$scope.remove = function(app) {
        //Apps.remove(app);
        //};
    })

    .controller('AppDetailCtrl', function ($scope, $stateParams, $ionicModal, AppDBService) {

        var appdb = AppDBService.getAppDB();
        appdb.allDocs({
            include_docs: true
        }).then(function (result) {
            result.rows.map(function (row) {
                if (row.doc.id == $stateParams.appId )
                {
                    $scope.app = row.doc;
                }
            });
        }).catch(function (err) {
            console.log(err+"2");
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

    .controller('AppDownloadCtrl', function ($scope, $stateParams, AppDBService) {
        //$scope.app = Apps.get($stateParams.appId);
        var appdb = AppDBService.getAppDB();
        appdb.allDocs({
            include_docs: true
        }).then(function (result) {
            result.rows.map(function (row) {
                if (row.doc.id == $stateParams.appId )
                {
                    $scope.app = row.doc;
                }
            });
        }).catch(function (err) {
            console.log(err+"3");
        });
    })

    .controller('DevelopersCtrl', function ($scope, $stateParams, UtilFactory, DevDBService) {
        var developerdb = DevDBService.getDeveloperDB();
        developerdb.allDocs({
            include_docs: true
        }).then(function (result) {
            $scope.developers = result.rows.map(function (row) { return row.doc; });
        }).catch(function (err) {
            console.log(err+"4");
        });
        // $scope.developers = Apps.allDevelopers();
        $scope.util = UtilFactory;
    })

    .controller('DevTemplateCtrl', function ($scope, $stateParams, UtilFactory, DevDBService, $ionicViewSwitcher) {

        $scope.util = UtilFactory; // for back button
        //$scope.developer = Apps.getDeveloper($stateParams.devId);
        var developerdb = DevDBService.getDeveloperDB();
        developerdb.allDocs({
            include_docs: true
        }).then(function (result) {
            result.rows.map(function (row) {
                if (row.doc.id == $stateParams.devId){
                    $scope.developer =  row.doc;}
            });
        }).catch(function (err) {
            console.log(err+"5");
        });

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

    .controller('DevProfileCtrl', function ($scope, $stateParams, DevDBService) {
        //$scope.developer = Apps.getDeveloper($stateParams.devId);
        var developerdb = DevDBService.getDeveloperDB();
        developerdb.allDocs({
            include_docs: true
        }).then(function (result) {
            result.rows.map(function (row) {
                if (row.doc.id == $stateParams.devId )
                    $scope.developer =  row.doc;
            });
        }).catch(function (err) {
            console.log(err+"6");
        });
    })

    .controller('DevAppsCtrl', function ($scope, $stateParams, DevDBService, AppDBService) {
        //$scope.developer = Apps.getDeveloper($stateParams.devId);
        var developerdb = DevDBService.getDeveloperDB();
        developerdb.allDocs({
            include_docs: true
        }).then(function (result) {
            result.rows.map(function (row) {
                if (row.doc.id == $stateParams.devId )
                    $scope.developer =  row.doc;
            });

            //$scope.apps = Apps.getByDeveloper($scope.developer.name);
            var appdb = AppDBService.getAppDB();
            appdb.allDocs({
                include_docs: true
            }).then(function (result) {
                result.rows.map(function (row) {
                    if (row.developer == $scope.developer.name)
                        $scope.developer =  row.doc;
                });
            }).catch(function (err) {
                console.log(err+"7");
            });
        }).catch(function (err) {
            console.log(err+"8");
        });


    })

    .controller('DevFeedbackCtrl', function ($scope, $stateParams, DevDBService) {
        //$scope.developer = Apps.getDeveloper($stateParams.devId);
        var developerdb = DevDBService.getDeveloperDB();
        developerdb.allDocs({
            include_docs: true
        }).then(function (result) {
            result.rows.map(function (row) {
                if (row.doc.id == $stateParams.devId )
                    $scope.developer =  row.doc;
            });
        }).catch(function (err) {
            console.log(err+"9");
        });

        //function addDoc() {
        //  var doc = {_id: new Date().toISOString()};
        //  DBService.db.put(doc).then(function (result) {
        //    console.log(result);
        //  }).catch(function (error) {
        //    console.log(error);
        //  });
        //}
    })

    .controller('HowToCtrl', function ($scope, UtilFactory, VideoDBService) {
        $scope.util = UtilFactory;
        //$scope.videos = Apps.getVideos();
        var videodb = VideoDBService.getVideoDB();
        videodb.allDocs({
            include_docs: true
        }).then(function (result) {
            $scope.videos = result.rows.map(function (row) { return row.doc; });
            console.log($scope.videos instanceof Array);
            $scope.vidsrc = $scope.videos[1];//.video;
            $scope.activeItem = $scope.videos[1].name;
            $scope.select_item = function (key) {
                // highlights active howto list item
                $scope.activeItem = $scope.videos[key].name;
                // sets video source for active list item
                $scope.vidsrc = $scope.videos[key].video;
            };
        }).catch(function (err) {
            console.log(err+"10");
        });
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
                console.err(err+"11");
            });
        };
    })

    .controller('FeedbackCtrl', function ($scope, UtilFactory, QuestionDBService, $ionicModal) {
        $scope.util = UtilFactory;
        //$scope.questions = Apps.allQuestions();
        var questiondb = QuestionDBService.getQuestionDB();
        questiondb.allDocs({
            include_docs: true
        }).then(function (result) {
            $scope.questions = result.rows.map(function (row) { return row.doc; });
        }).catch(function (err) {
            console.log(err+"12");
        });

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
