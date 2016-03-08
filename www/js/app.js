// Ionic AppDock App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'AppDock' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'AppDock.services' is found in services.js
// 'AppDock.controllers' is found in controllers.js
angular.module('AppDock', [
        'ionic',
        'pouchdb', // database
        'pascalprecht.translate', // for translation
        'ngIdle', // for timeout
        // 'KeepaliveProvider'
        'ionic.rating', // for rating stars
        'ngCordova'
    ])

    .run(function ($ionicPlatform, $rootScope, $state, Idle) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            //var appdb = DBService.getAppDB();
            //var remoteApps = DBService.getRemoteAppDB();
            //appdb.sync(remoteApps, {live: true, retry: true});
        });

        Idle.watch();
        $rootScope.$on('IdleTimeout', function () {

            $state.go('home');
        });
    })

    .config(function ($stateProvider,
                      $urlRouterProvider,
                      $translateProvider,
                      IdleProvider,
                      // KeepaliveProvider
                      $compileProvider,
                      $ionicConfigProvider
    ) {

        $ionicConfigProvider.tabs.position('bottom');

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })

            //setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            // Apps Tab

            .state('tab.apps', {
                url: '/apps',
                views: {
                    'tab-apps': {
                        templateUrl: 'templates/apps-tab.html',
                        controller: 'AppsCtrl'
                    }
                }
            })

            .state('tab.app-detail', {
                url: '/apps/:appId',
                views: {
                    'tab-apps': {
                        templateUrl: 'templates/app-detail.html',
                        controller: 'AppDetailCtrl'
                    }
                }
            })

            .state('tab.app-download', {
                url: '/apps/download/:appId',
                views: {
                    'tab-apps': {
                        templateUrl: 'templates/app-download.html',
                        controller: 'AppDownloadCtrl'
                    }
                }
            })

            // Developer Tab

            .state('tab.developers', {
                url: '/developers',
                views: {
                    'tab-developers': {
                        templateUrl: 'templates/developers-tab.html',
                        controller: 'DevelopersCtrl'
                    }
                }
            })

            .state('tab.dev-template', {
                url: '/developer/:devId',
                views: {
                    'tab-developers': {
                        templateUrl: 'templates/dev-template.html',
                        controller: 'DevTemplateCtrl'
                    }
                }
            })

            .state('tab.dev-template.dev-profile', {
                url: '/profile/:devId',
                views: {
                    'dev-profile': {
                        templateUrl: 'templates/dev-profile.html',
                        controller: 'DevProfileCtrl'
                    }
                }
            })

            .state('tab.dev-template.dev-apps', {
                url: '/apps/:devId',
                views: {
                    'dev-apps': {
                        templateUrl: 'templates/dev-apps.html',
                        controller: 'DevAppsCtrl'
                    }
                }
            })

            .state('tab.dev-template.dev-apps/app', {
                url: '/app/:appId',
                views: {
                    'dev-app': {
                        templateUrl: 'templates/app-detail.html',
                        controller: 'AppDetailCtrl'
                    }
                }
            })

            .state('tab.dev-template.dev-feedback', {
                url: '/feedback/:devId',
                views: {
                    'dev-feedback': {
                        templateUrl: 'templates/dev-feedback.html',
                        controller: 'DevFeedbackCtrl'
                    }
                }
            })

            // How To Tab

            .state('tab.howto', {
                url: '/howto',
                views: {
                    'tab-howto': {
                        templateUrl: 'templates/howto-tab.html',
                        controller: 'HowToCtrl'
                    }
                }
            })

            // Social Tab

            .state('tab.social', {
                url: '/social',
                views: {
                    'tab-social': {
                        templateUrl: 'templates/social-tab.html',
                        controller: 'SocialCtrl'
                    }
                }
            })

            // Appdock Feedback Tab

            .state('tab.feedback', {
                url: '/feedback',
                views: {
                    'tab-feedback': {
                        templateUrl: 'templates/feedback-tab.html',
                        controller: 'FeedbackCtrl'
                    }
                }
            })

            // Donate Tab

            .state('tab.donate', {
                url: '/donate',
                views: {
                    'tab-donate': {
                        templateUrl: 'templates/donate-tab.html',
                        controller: 'DonateCtrl'
                    }
                }
            })

            // About Tab

            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'templates/about-tab.html',
                        controller: 'AboutCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');

        // Translation

        $translateProvider.useStaticFilesLoader({
                prefix: 'lang/locale-',
                suffix: '.json'
            })
            //$translateProvider.uses('en_US');

            //$translateProvider.translations('en', {
            //  language_type: "en",
            //  goodbye_message: "Goodbye"
            //});
            //$translateProvider.translations('fr', {
            //  language_type: "fr",
            //  goodbye_message: "Adios"
            //});
            .preferredLanguage("en")
            .fallbackLanguage("fr")
            // cs:register my available languages
            .registerAvailableLanguageKeys(['en', 'fr', 'wo'], {
                'en': 'en',
                'en_GB': 'en',
                'en_US': 'en',
                'en_AU': 'en',
                'en_CA': 'en',
                'en_IN': 'en',
                'en_IE': 'en',
                'en_MT': 'en',
                'en_NZ': 'en',
                'en_PH': 'en',
                'en_SG': 'en',
                'en_ZA': 'en',
                'en_UK': 'en',
                'fr': 'fr',
                'fr_BE': 'fr',
                'fr_CA': 'fr',
                'fr_FR': 'fr',
                'fr_LU': 'fr',
                'fr_CH': 'fr',
                'wo': 'wo'
            })

            // cs: user language detection
            .determinePreferredLanguage()
            .useSanitizeValueStrategy('escape');

        // ng-idle for timeout

        IdleProvider.idle(600); // 1 minutes idle
        IdleProvider.timeout(10); // after 10 seconds idle, time the user out
        // KeepaliveProvider.interval(10); //

        // camera file whitelist
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

    });
