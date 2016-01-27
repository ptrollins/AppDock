angular.module('AppDock')

.factory('Apps',['$state', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var apps = [{
    id: 0,
    name: 'Best App',
    description: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }, {
    id: 1,
    name: 'Second App',
    description: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }, {
    id: 2,
    name: 'Third Place',
    description: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }, {
    id: 3,
    name: 'It\'s good',
    description: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }, {
    id: 4,
    name: 'Not too shabby',
    description: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,.',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }, {
    id: 5,
    name: 'Hanging in there',
    description: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,!',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }, {
    id: 6,
    name: 'Near the bottom',
    description: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,!',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }, {
    id: 7,
    name: 'Bringing up the Rear',
    description: '8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,!',
    logo: '../img/appimage.png',
    qrcode: '../img/qrcode.png',
    platforms: {
      ios: 'IOS 2.0  +',
      android: 'Android OS 2.0 +'
    },
    size: '3MB',
    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  }];

  var howtovideos = [{
    name:'howtosearch',
    video: '../img/2240368631.mp4'
  }, {
    name:'howtoinstall',
    video: '../img/224036863.mp4'
  }, {
    name:'howtodelete',
    video: '../img/224036863.mp4'
  }];

  var developers = [{
    id:0,
    name:'Abby Ale',
    description:'Android Developer'
  },{
    id:1,
    name:'Bobby Brewer',
    description:'Android Developer'
  },{
    id:2,
    name:'Cathrine Cocktail',
    description:'Android and IOS Developer'
  },{
    id:3,
    name:'Derik Dunkel',
    description:'Android and IOS Developer'
  },{
    id:4,
    name:'Erin Ethanol',
    description:'IOS Developer'
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
    },
    getVideos: function(){
      return howtovideos;
    },
    allDevelopers: function(){
      return developers;
    },
    getDeveloper: function(devId) {
      for (var i = 0; i < developers.length; i++) {
        if (apps[i].id === parseInt(devId)) {
          return developers[i];
        }
      }
      return null;
    }
  };
}]);
