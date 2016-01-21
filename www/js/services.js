angular.module('AppDock.services', [])

.factory('Apps', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var apps = [{
    id: 0,
    name: 'Best App',
    description: '1You on your way?',
    logo: '../img/appimage.png'
  }, {
    id: 1,
    name: 'Second App',
    description: '2Hey, it\'s me',
    logo: '../img/appimage.png'
  }, {
    id: 2,
    name: 'Third Place',
    description: '3I should buy a boat',
    logo: '../img/appimage.png'
  }, {
    id: 3,
    name: "It's good",
    description: '4Look at my mukluks!',
    logo: '../img/appimage.png'
  }, {
    id: 4,
    name: 'Not too shabby',
    description: '5This is wicked good ice cream.',
    logo: '../img/appimage.png'
  }, {
    id: 5,
    name: 'Hanging in there',
    description: '6Look at my mukluks!',
    logo: '../img/appimage.png'
  }, {
    id: 6,
    name: 'Near the bottom',
    description: '7Look at my mukluks!',
    logo: '../img/appimage.png'
  }, {
    id: 7,
    name: 'Bringing up the Rear',
    description: '8Look at my mukluks!',
    logo: '../img/appimage.png'
  }];

  return {
    all: function() {
      return apps;
    },
    remove: function(app) {
      apps.splice(apps.indexOf(app), 1);
    },
    get: function(appId) {
      for (var i = 0; i < apps.length; i++) {
        if (apps[i].id === parseInt(appId)) {
          return apps[i];
        }
      }
      return null;
    }
  };
});
