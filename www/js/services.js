angular.module('AppDock')

    .service('AppDBService', function (pouchDB) {
        var appdb = pouchDB('appdock_apps');
        var remoteApps = 'https://appdock.cloudant.com/appdock_apps';
        //https://twomenedivergandiardsied:63606a537d186c74f498377e255fdcfaa24ef25e@appdock.cloudant.com/appdock
        //opts = {
        //  continuous: true
        //};

        appdb.sync(remoteApps, {live: true, retry: true});
        return {
            getAppDB: function () {
                return appdb;
            },
            getApps: function(){

                 appdb.allDocs({
                    include_docs: true
                }).then(function (result) {
                  var ab= result.rows.map(function (row) {
                        return row.doc; }); console.log(ab);
                    return ab;
                }).catch(function (err) {
                    console.log(err+"1");
                });

            },
            getRemoteAppDB: function () {
                return remoteApps;
            }
        }
    })

    .service('DevDBService', function (pouchDB) {
        var developerdb = pouchDB('appdock_developers');
        var remoteDevelopers = 'https://appdock.cloudant.com/appdock_developers';
        //https://twomenedivergandiardsied:63606a537d186c74f498377e255fdcfaa24ef25e@appdock.cloudant.com/appdock
        //opts = {
        //  continuous: true
        //};

        developerdb.sync(remoteDevelopers, {live: true, retry: true});
        return {
            getDeveloperDB: function () {
                return developerdb;
            },
            getRemoteDeveloperDB: function () {
                return remoteDevelopers;
            }
        }
    })

    .service('VideoDBService', function (pouchDB) {
        var videodb = pouchDB('appdock_videos');
        var remoteVideos = 'https://appdock.cloudant.com/appdock_videos';
        //https://twomenedivergandiardsied:63606a537d186c74f498377e255fdcfaa24ef25e@appdock.cloudant.com/appdock
        //opts = {
        //  continuous: true
        //};

        videodb.sync(remoteVideos, {live: true, retry: true});
        return {
            getVideoDB: function () {
                return videodb;
            },
            getRemoteVideoDB: function () {
                return remoteVideos;
            }
        }
    })

    .service('QuestionDBService', function (pouchDB) {
        var questiondb = pouchDB('appdock_questions');
        var remoteQuestions = 'https://appdock.cloudant.com/appdock_questions';
        //https://twomenedivergandiardsied:63606a537d186c74f498377e255fdcfaa24ef25e@appdock.cloudant.com/appdock
        //opts = {
        //  continuous: true
        //};

        questiondb.sync(remoteQuestions, {live: true, retry: true});
        return {
            getQuestionDB: function () {
                return questiondb;
            },
            getRemoteQuestionDB: function () {
                return remoteQuestions;
            }
        }
    })


    //.factory('Apps', ['$state', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        //var apps = [{
        //    id: 0,
        //    name: 'Best App',
        //    developer: 'Adam Ale',
        //    description: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
        //    logo: 'http://images.freeimages.com/images/previews/7c9/globe-1238288.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtIAAALSAQMAAADKpKTpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOaSURBVHja7d1BbuJKEAbgRiyy5AgcJUfLHI2jcASWWSD6vRg3XdV2MkgjjRnp+zexwP7sZENRXXbKSj7qbfp5rN+kv/v/jm/TS7/Kc2Gz2Ww2m/1X7X067vxlL3IqpdZrKYf0agOPX5u79NaFzWaz2Wz2i9jz1lc9cJ5riJXSYJ9O02qIYH+WUWSz2Ww2m/2KdvmhNGCz2Ww2m/3P21Pudu4VTMe0psInm81ms9nsP7ZD8iHtk/x9Bi8lZrRD2Gw2m81mv4S9SOvbt3LikGqI0LdvhcNxaPD/EDabzWaz2X/Rrt9kURqEGqK9NBYOOSc2m81ms9kb2+NHfp7Dm3JJvYL3YU2gpv7ClP2yV8Bms9lsNntD+72GPMbrgp3W/ktfMbg3FUosJ67DRbPZbDabzd7WntL2K2MNUXqD4BR7/bd+A97ux/qEzWaz2Wz2Bnbfr6b96rxZ+oL/w+5zgbfx6qbKog0JsNlsNpvN3tZOeUv9/eOwun9vAbQ1gZoG+z6G/kJls9lsNpv9nJ267OFLfO3t+Evv6q+vz095fLWfpAObzWaz2exXsGvqzIc5vLZ5mI9e1BBTPlPhMF3P/V02m81ms9nb2+GQksbr6ry5AMsyob/AZrPZbDb71ezSa4g2Ox82w3NyWs6DHubwOshm+3uz2Wz25na7Xa7N4T0yPg8vHHNMOyZ7/5i3Z7PZbDabvaXdttrq/lhDlDQ7n0+z/pycdrUnNpvNZrPZG9vhLPWRvCawUkPcM9YQIZfhN2Cz2Ww2m72Bneb16lwP3Ma2wXtf8H9ilr+t/bPZbDabzX7GLv0bewN36TT3TC9dSky6iPA5f407sdlsNpvN3sz+3SElfZ9ffLWfMs7os9lsNpvNfhX7vtXW5+tcD3yOz81b2Wx33R37ZokXwWaz2Ww2e1s73Rb/lhoE7ZDWSQgDe9d53n433kzXrmdcn2ez2Ww2m72BXdfysEOvoCU9MueWwOVzcthsNpvNZm9pr2T8PzahcGjZLy9i1++rq2w2m81ms1/EXpnlr70FsKvf5NzPFGqIIWw2m81msze324zfW7oVry0PHFbX/s/libDZbDabzX45+zaeps6t/rz2X+cdV3Jhs9lsNpv9Z/Y9H2G/rxzmQ6/jony45z6uz7PZbDabzd7cDgk1RO3r8yFhDm/8pzSln7HXEGw2m81msze0Fxl7BYv92kVMab2Chx1rCDabzfb3ZrM3s+vpP3EfAd17+DRXAAAAAElFTkSuQmCC',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}, {
        //    id: 1,
        //    name: 'Second App',
        //    developer: 'Adam Ale',
        //    description: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
        //    logo: 'http://images.freeimages.com/images/previews/a41/mixer-1416094.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtIAAALSAQMAAADKpKTpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAObSURBVHja7d1BbuM4EAVQNbLopY/go8zRMkfzUXwEL70wwulQolglqY0A3Qg9wPubKBb5ZGTjcpFSpoO8l4/681zWXJZTp/pbP/tr4M/60r/T18Jms9lsNvtb7bcSc/20d/ll719cwfPn4Y906sZms9lsNvtF7OXosx64LjXErjQo5VFriMty2GqIYN+nrchms9lsNvsV7WlfGjzSZdhsNpvNZv+f7ZrZzr2COqc1Fe5sNpvNZrP/2A7JU9on+T8LeJtitnYIm81ms9nsl7B3aX37Vk6EZn3u27fC4Zwa/E/DZrPZbDb7G+3ym9yf9u3nbAuHnAubzWaz2ezBdkh9Je/Dq7ktvYKQsCZQUn+hnd32CthsNpvNZo+1O7hur0v2vHjQSoO2YjA3FabDYoPNZrPZbPZQO81u46ZtDVHz1gb2rMXG4R4/NpvNZrPZY+2a9pi7n/spU1/wn3NZZreBObWyWDcJsNlsNpvNHmq3b/ap6//j+dp/s8PGvvdNf6Gw2Ww2m83+ql22X9Mb2Nrx4Wz4ah/W52vW2qAOOLHZbDabzR5vh2X31njfTjkth6EF8NYH3FPhcJ2iyGaz2Ww2e6hdf8ylQW8QrGktgIN9eDnhkTlsNpvNZrNfx17XBLY1RNhGXyuMRy8nSt+w1xL24bWw2f7ebDabPdaun/it1R/2zrd89H14j3SYi41kd5HNZrPZbPZYe066ry7XA6feIAj2lIqN8JyctHjAZrPZbDZ7qJ0/8fM6/vb59tMye862hgjZ1ydsNpvNZrO/3d5XE0cJd/S1bQDXXkPUhL38ae2fzWaz2Wz2UzslPMBmTtuHNy0f7qkdP4WH1f/uRns2m81ms9kD7RIT9uHt+vZtTP5qX1N7AOtl2Gw2m81mv459MG5O6AZcDi/Tnk177odT7Naz2Ww2m80ea7cO/ha89yl5xaDegPdY9tvvbqZrb62v/bPZbDabzR5ml6N8pPGnVEOUvrqfaoj1/cR9BWw2m81ms0faBwlb92qVcFsKh9Kn7OxQTqSBbDabzWazh9rHvYLSb6WfU+ed0sCWUENswmaz2Ww2e7gdnoeX7XT//Jx2eJ2+EDabzWaz2S9nf/R9+WvawLD2Xw4H1tzYbDabzWb/NbudXZfdu13aonz6v/J9fZ7NZrPZbPZwO6TZU58y2weXOXigzjm/HzabzWaz2WPtXZ7UEOEyrW/fBq52rCHYbDbb35vNHmaXy38xgxF8L40WYAAAAABJRU5ErkJggg==',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}, {
        //    id: 2,
        //    name: 'Third Place',
        //    developer: 'Adam Ale',
        //    description: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
        //    logo: 'http://images.freeimages.com/images/previews/661/team-ii-1238320.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtIAAALSAQMAAADKpKTpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOwSURBVHja7dxBjuIwEIVhIxZZcoQchaPRR+MoOQJLFoga5NipV06YbvVIOCP9tTId+0sWM6Jc5ZA24mKvuJcPB9O4pXT2T19+9Sv9LLCxsbGxsbE/ah/D6qnYccnZ7VeYPVIaG3v1ENjY2NjY2Ni7sMsoDW5LDlGvvuKUFyaNwe265oiNjY2NjY29X/tZh1IrkIn58+T8iI2NjY2Njf0f2nn4ShyuzcQZtDLRsLGxsbGxsf/Nloj7+YvFuJUS/qMov+sJYGNjY2NjY3/KXsV2DpFBGcomfvRG/neBjY2NjY2N/UHb3sTdqwGn9dVHAMdN4YqNjY2NjY3d2c5xcjDHwWsFz43Dd3W15BCyHBsbGxsbG3s/9rGW+vOV0ev7k/cEpFZg5UhePYcnRYVUbrMUFbCxsbGxsbG72nlybelL4pC8GhBzCOn910MCtaiQQtkAGxsbGxsbu7cdcoih/PnZvlfX9v7nyHce2mE9NYiNjY2NjY3d2w4lgGHzLP98Ln/jjJ+ViaPbU7kalmBjY2NjY2O/t/Ubf/09H/rzywt4dWW78cfGxsbGxsbel50n3/xX5qUpL0Nr6vYWdvvSn0+abGBjY2NjY2P3tcMS2fcnb7ufiiZLajqxgDmkbh9+JwcbGxsbGxu7o11Xm+cDUjaQq9IeyA+xyiHG5iGwsbH5N4iNjd3VXnoCphF7/+dSK5hv48ryEHKbzX4DNjY2NjY2dgfbyuocQ8gh6lAKBDd/nsnXiF3jho2NjY2Njb0H+xGqATmeaYmDFwgkNmoFVoeelWBjY2NjY2P3tXPUEsAQUoOp2BLxNvV3b1Ox7+/7DdjY2NjY2Nhv7WOozMdyfP3KPzfH647FTu1EbGxsbGxs7L3Zc4QcYo62P5/8vToLxXrZ2ufAxsbGxsbG3qFtJTVInk5U8OFFhZhDTKGnr3V7bGxsbGxs7L528tUWegJymxQO1fnzSCN/NREbGxsbGxu7t21bIfV9axsBps0D84a/1WMAvgYbGxsbGxu7r70RlyY1kFzj5PeX5sFYegL3zTXY2NjY2NjY/eyjaUyNPbf0r55sXEs1QDoGMYfQwMbGxsbGxu5u15197eMvkXsCkjjc/BjARuKQVvUFbGxsbGxs7J3a01/LBmM4GSDv5ut8bGxsbGxs7N/a6715mXhuzttjY2NjY2Nj79uWiImDDGVO/lz38xZa9SJesbGxsbGxsbvbq5B34fOwFghWOYTpQ0g8vjnjh42NjY2Nzf/LD9h2/QPLQTpvLn6SgQAAAABJRU5ErkJggg==',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}, {
        //    id: 3,
        //    name: 'It\'s good',
        //    developer: 'Adam Ale',
        //    description: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,',
        //    logo: 'http://images.freeimages.com/images/previews/12f/connect-the-world-1170685.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtIAAALSAQMAAADKpKTpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOtSURBVHja7d1BjtswDEBRBllk2SP4KDlaczQfJUfw0gvDKiKLJqloMsEUjVzgc1MnkV60GGBokuNKI36nPW72bn49iVz9p6fGwpeBjY2NjY2N/VH7nHzczb6XBb9SGs3OX7OIDJV9CsyEjY2NjY2NfRC7XMnF7Lns3m13CPFxMXuWWsTGxsbGxsY+nL3qpTy2TFJF1u72esDGxsbGxsb+D+18KaURsIQvGB5vrX+RQ2BjY2NjY2PvVy7uVX9+K8ePVX9ev+bHPQFsbGxsbGzsj9hPUecQ2p9fwqW7idcC/xuBjY2NjY2N/UE7fRGzLYl2KjmEA4emMGJjY2NjY2N3tnV3AE/Bfgrd7XIItx0bGxsbGxv7KHb+Zyv1509cPuBqBenxqZu3P9scXhwSyNu1qICNjY2NjY3d295L/WHI3qUGro/vygZShgR04VofDRsbGxsbG7u3rdHIIVLZ0ugJbHEr54mXmmxgY2NjY2NjH8Kuc4gYCi7ha/QQWw5xs+2aYQg2NjY2Njb2W/b+W9nWnerb9GtVt9/CFeuxsbGxsbGxD2mL7g7Dd5e0x2SH2C7zu1rgT6E/LxI7AdjY2NjY2NgdbQVGD66aD7hH5oSFZ1so9XnsENjY2NjY2Nh97dBNjz0BrfrHZ9vp8/C0qJBCDjGUT0t+go2Nzc8gNjZ2X1tC719jKxu45+GFhWIdg22P+5qv5wqwsbGxsbGxP2vndzRLcAUCbQ9sW0KB4Onv552tMWFjY2NjY2MfxNZwc/lbNJ6TM5Ysoa4VJL20hdjY2NjY2Ni97UV327rY+2/P+CUb+hfLO0JPABsbGxsbG/t7O4faszXlZ6vMS23rb3L3AJv0qj+PjY2NjY2N3cvey/FWrN9Db9NHe+tqy12x3t3a62mxsbGxsbGxD2G7ifo6h3Cx1CV893AcV19wBX5sbGxsbGzszvbr2LOE/Cra9d/Pb1HVIbCxsbGxsbG72akVa2OMXm09TiPZmIudWvP22NjY2NjY2B+3GxFm/FYDz2HG724bhjDuVx8CGxsbGxsbu599DumDq++7UFtjCROAMYfAxsbGxsbGPpStd/aaOCQtAeTUYLLBvun5ubdxLnCI58HGxsbGxsY+qC0lnZDy/9JKrYQH6uzn8TN+2NjY2NjY2D+1t9Dd1+Yc3gu7iNjY2NjY2NjdbReubl/3550tdj+fQqveiSM2NjY2NjZ2d/spgh1jKumEnme1PS6WN2f8sLGxsbH5GcT+h3Ya/wA7lFpk3ECZCgAAAABJRU5ErkJggg==',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}, {
        //    id: 4,
        //    name: 'Not too shabby',
        //    developer: 'Adam Ale',
        //    description: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,.',
        //    logo: 'http://images.freeimages.com/images/previews/d49/illuminated-keyboard-1242287.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyoAAAMqAQMAAABXByeEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAASRSURBVHja7d1Bbts6EABQGVl4mSP4KDmafTQfRUfwMgsjLEKL4oykBP8DsVKgbzZVXA4fW3QxmKHcYSPO5aP+eiox6kevpVynVa/Tp8e+5L3mXIb/FhgMBoPBYDA/z7yk3cZPZhXjtPBWM0q5J3GYchpzSLk3DAaDwWAwmD2Z6enzcZwKqEddlIqhlyV+/RTbIQ6JeR+Wm2MwGAwGg8H8GjOsi6F78zYKqBrtaBgMBoPBYDB/HVNjrotCtJy3zx/ypOuEwWAwGAwG88tMiDENsMrUJRqnJlBZXufpG86V1v+arWEwGAwGg/lXmFWc+97nyMyNmvT4nsqZ02KC9U1gMBgMBoPB/DRTvoj3Zf8lFEONKbHSKhvNnV50YTAYDAaDwezAhKifjOkGccvOe4dp1MZV43PPSaMuDAaDwWAwmOcz4c7MvU+6hmUxVD967Y8hcmuo9FO2idoVg8FgMBgMZg+mvfL0Nu02fv4w94PO8dNwnjIfco5wbTjHKwaDwWAwGMxuTE45TW2eVccn3WgOQ68vj1Z6D2nAYDAYDAaD2YOpEWZZ42JqdVjufe3idTrPuKi0Dmno1f8MGAwGg8FgMM9l6i/tak4okR6RZlml7527ROPwZaQ6DYPBYDAYDOa5THhq868h7r39tTnb5ym9gCqrHAwGg8H4l4b555kW917DtMnSfJk4NWrC0QIT7tmEV6t6ZYPBYDAYDAbzXKZXTXMsJ0s5rl/k5DfFH1F/K11UxmAwGAwGg3ki055KnEaFlPwC+LKHNLTGUYtT7xLVSOfBYDAYDAaDeS4Tsisz9hvEp/SaVIpH9ltfGM6T7uZgMBgMBoPB/ALzNjVyWkoooB6P0/r5K/16x2e1d2nzr74Qg8FgMBgMZgemxmuZI0+6Ln2jJTOkL+3b+N8VTqvzYDAYDAaDwTybmS8qt8fwOlW7qFzjJVVabVB27Dnvy/qrLcRgMBgMBoPZn2lxaL2dFq3jc+tV023IkVtD5euXyzEYDAaDwWCexYTstOFG5ElXeBz6K1ihs1QfXzAYDAaDwWBCZXOdPhynvGPv2RyXKc0NTNp7VRgNGAwGg8FgMHswpUdo3/SUWUwFVF5Y0j2bFqHPg8FgMBgMBrMTk28Dj4vF85ApVVpDE3uptH03py3EYDAYDAaD2YGp2eHOTCt7Hntf1gOsMok5Jy3MO00LMRgMBoPBYJ7OtNQ0wArrwtDrEW/xqvEc7VXvnN5/wGAwGAwGg9mRSfHRr/M8Igy9atz7W98tDundqCa+rGdrGH9pGAwGg8E8i9mIsPd5kVKmSde9rW0LA3OJg7JvAoPBYDAYDObnmXmWlfbO2cN67xZt70fkAirkYDAYDAaDwezE3PpjYEpKWZ7nNl1uzlVTiCrety4qYzAYDAaDwezIfPR1cywX3qabPceUUyPPv9b3oTEYDAaDwWBSSmrfhMqmFyzTeS7xMfR5HnHFYDAYDAaD2Y0J0Zhj/WnjC/hatMvErVFzSNvkPg8Gg8FgMBjMTswqQmvoErPv/ev5SstOI6jjcpg1fBcYDAaDwWAwP8oMwx/idemZS6nmkgAAAABJRU5ErkJggg==',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}, {
        //    id: 5,
        //    name: 'Hanging in there',
        //    developer: 'Adam Ale',
        //    description: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,!',
        //    logo: 'http://images.freeimages.com/images/previews/8d7/globe-world-ippnw-light-nuclear-peace-1170656.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyoAAAMqAQMAAABXByeEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR/SURBVHja7d1BciI5EABATfTBR57gp/hp9tN4Ck/gyMFh7VggVCUaz+6GaW/EZl2mgZZSYc+hoqoal5V4rR/p8qnWw+eLpdZje7d+xu/Ll1rHp+d4rvWt/L3AYDAYDAaD+X5mqTEOE/M7Tm11re+l7GrdXz46X6a1pwvzK717xGAwGAwGg9mSuVx9Xh6mrOlXx1MC9d7PMfY+R2dOZd4cg8FgMBgM5seYMidD7a2eQC3j3ZXSEAaDwWAwGMx/iMlxTpEC09493m96YTAYDAaDwfwgEyKUhuqo+JRRD2p7L6NKVMfR/kVvDYPBYDAYzP+FuYnQjQqXYc4mXZ5SOvOcjvZlYDAYDAaDwXw3U+/EeUkduVQarrnmUmnvp3ub7TEYDAaDwWC2YFrs2ou+S+hGhc5Se3287H0VW8zn+Zh7VAWDwWAwGAxmC6avLrF8c1MaCocoozSUjvYxxNqP1jtqewwGg8FgMJgtmNVxnutli54MLSmB2l0rPlfmKa2p+UYMBoPBYDCYhzPtRZglDhnQcxo67je8TLlUnuEJVaJ7pSEMBoPBYDCYRzFzXpTjNfayar9xfgSrjnGenEBNpSEMBoPBYDCYxzJfjOb0KtE5RWqf7oZYLxuV2wSqjqZXuZaGMBgMBoPBYDZgchxus6aaml4lzSyvZE3paax3DAaDwfifhsGESZmXUWG511laxt5hTZnbVnWaOsZgMBgMBoPZjsl50SE957Ty1Hcp1zpP62Cdbs9TBnPdHIPBYDAYDObxTB3RE6gaS0NXsYzoYigNzeWk3MHaYzAYDAaDwWzMtDiM4ZoeocyzzoSjHabZnPPBMRgMBoPBYLZjjmOL5zSPs/LU99dMjnb3DoPBYDAYDGYzJjwbtcxNrxovr52u2DK7TaDK2tEwGAwGg8FgNmHWo0/p1Nsl1zXzdxCXseZPT31jMBgMBoPBPIo5pierWoQGVmd6A6us4PfGeeamFwaDwWAwGMwDmXj1Gc/T996Eis/SzxOOtpJpheVtxx0Gg8FgMBhMWDK6UXlJjyXdmGdz0nky0wKDwWAwGAxmA6ZHr9nkZKjP2XQmxEqdp6RuVLtc/Q5iDAaDwWAwmMcwacmSRoDvTQOXvrqOo6VyUv1D0wuDwWAwGAzmgUxN4zNvt8whPUQVjpbWnEaVqFyYMg0qYzAYDAaDwTyQ6Vctzhu9jgbW6ygNpT+pkMUe4YGoMiVQGAwGg8FgMBswdS0+UpmnjimdXcq02iGfxgjQKTW9SrwR03+U7Tfbf4nVDw2DwWAwmG9lViItCWWeMM4zDwOVMkpDqUqEwWAwGAwGsymT548PqTTUV+dIpaGcNeXL+KwWBoPBYDAYzDZMf1B8SZ2ukAyVS5nn+E+bXiMwGAwGg8FgfoYJ8bHyFThhsqd/+jZlWuf8K5wHg8FgMBgMZp0JNZtcf2mfHu99B076w93ngtAeg8FgMBgMZjMmRKjZhAhMrtn0T/v32eSST/t3h8FgMBgMBrMZcxOJWetGhXvTcM3dUxYMBoPBYDCYhzOl/AXIlO8H/ztkHwAAAABJRU5ErkJggg==',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}, {
        //    id: 6,
        //    name: 'Near the bottom',
        //    developer: 'Adam Ale',
        //    description: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,!',
        //    logo: 'http://images.freeimages.com/images/previews/714/team-1578041.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtIAAALSAQMAAADKpKTpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOgSURBVHja7d1BbuM4EAVQGV5k6SP4KD5a99F8FB/BSy+CcBJKFKtkeSaYBiI18P5KHYmPQtCAS0VaGVbyq3wMw1v5yu/ns5cy5/dw6IffC5vNZrPZ7B+1jyXm9mV/5jFN85l7PSzlfTkm2YfE3NlsNpvNZu/Eno6+Codmt2k+lmDN+zRzKDYO7X6iyGaz2Ww2e6d2zefoUynXVEO0mVvObDabzWaz/yr70Yfc+5BSp0nlxBg2m81ms9l/YoesP89fFtT683wIm81ms9nsXdhPaUOaHZ7nw2F4iK+H3wubzWaz2ewftMtaZntYlAZjWt3RwPMqcmWz2Ww2m72xXXOajvKawDDZ96lX8LTfvkwXnv+tV8Bms9lsNnszO8ySTj6m0mBtTaDat2mat7R4cJ5u4jTXJ2w2m81mszeza1ZqiNJ7BW3mcUjpZwMY1gTC3bLZbDabzd7Ubke1Sni5jt9qiPvzdr8xaUzb9M9ms9lsNntbOyWvCayUBiXt8SuLC8fhafGAzWaz2Wz2f9j1/PjxXU/WhB78y4Tn+SHt0e83wWaz2Ww2e2t7/MRv9m26eJwm1RBh2f2YGvztfthsNpvNZu/NnlOJZd/+MF2XLzx2MOStn+3r82w2m81ms7e1w/r8sCgNSrff+3tyxoSFgJDVNQE2m+3/IJvN3sDun/hhyCGNzkMusdg4pDHtu3hsNpvNZrP3YS+HDH2PX838vbqWy9QNWC4erL4nh81ms9ls9pZ2+BZc+3loAbT324dc+5hlDVGWbQM2m81ms9mb2q3VX/NIk9bn/o90E/d0P23M+qb/K5vNZrPZ7G/Yacjb9OPwdbn5utjqnz/nn8a0vv2JzWaz2Wz2ruxlDTH05/nr9O9WbLz3jfnNnhPHs9lsNpvN3twui7794VUL4N7X50Nag3+oY4LIZrPZbDZ7Y3tIVULOrwkc0mJ7tz9WxsReAZvNZrPZ7C3tspbQ3w+9guPqtaHYeLDZbDabzd6VvZK24H9La//Broe5QdD6C0O/kM1ms9ls9vb2Sn+/tOvCX6opfZq29p+KjcJms9lsNnuXdtjLf0tgzam8SHoR/tBvom/6Z7PZbDabvWd7fhNOunBYFg6hvxDDZrPZbDb7f9nzdWma43K/fficbz2A84vv7LHZbDabzd7KDglgW3a/T39x7inpxfO5B8Bms9lsNnsX9lOWvYJ7+ks0l2gP7SZqwtb78nKPH5vNZvt9s9k/Y5frPyCdg0l+ZdSmAAAAAElFTkSuQmCC',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}, {
        //    id: 7,
        //    name: 'Bringing up the Rear',
        //    developer: 'Ben Brewer',
        //    description: '8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,!',
        //    logo: 'http://images.freeimages.com/images/previews/bb0/alesia-1431382.jpg',
        //    qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtIAAALSAQMAAADKpKTpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOnSURBVHja7dxBbtswEABABj742Cf4KXla+jQ/xU/w0QfDaktpzSWjtEELRCowe4kSkyOi6GG1u3JZibfpGd/bX6fpXn++5k9fVhb+NthsNpvNZn+pfZhyXBb71m5zXcB7d5vTYL90zJXNZrPZbPZO7OWqHJsd8agfhP2t/q3kODb7VkaRzWaz2Wz27uxHbKn2T/DccfWDS/v9xGaz2Ww2+7+y5y015lpBtzA+ffxVDsFms9lsNnuwU1ze9+fjIf4Qt2kl/L/rCbDZbDabzf4q+13E83ykE/PzfNTtz0N//rZcfi7YbDabzWZ/oT19HLUyP6cGyZ6WHCKBp9XtZzabzWaz2RvbNWJLFPVTapBKAHOBYHyv7tbseTubzWaz2ez92Ie4Gp/765a1WkHdE3N4K/MCbSGbzWaz2ewt7ZQalGfMiUM/BpBG92JPvGgfhyhd2YDNZrPZbPZe7Boxl1/aupRDxJbn5fdhz7Edgs1ms9ls9i7sfks0/PuyQY009H9v2UJaOJcN2mnZbDabzWZ/0k7vz6/EtWvKn9vNUrGezWaz2Wz2Du0a8xzeR1vKUNXvk42p68+Xxf72PASbzWaz2ezN7PphZAn9kH3sXskhomzwKDlS3f76PAObzWaz2ewN7ZRNHFs+EG339F7d1M3h9Yf4eN6ezfbvzWaz2ZvZqaXfwNLWpSwhLUyf9ocYegJsNpvNZrO3tNNd4otuuu+3n7dEgeDabnNZLn+TbLDZbDabzd7WTqlBA58RJYC+J7BaK5jiMsQzm81ms9nsPdjX0kfKBx5tAvDQegJxiJcu77it9QTYbDabzWZ/1h5fmj8txHWZt++f56dl4bEdorDZbDabzd6fPXVzeOP35LT3735FerRPxfr0aF/SHjabzWaz2TuxpyHiNu9izCEubUZ/tSfAZrPZbDZ7K7u0qv+x9dpTqT8qCfeuPVAjTeM/o3tTj81ms9ls9ob2tBapvt/vTmWD6BjcusuypCLX5xWbzWaz2ezN7JVI35OTItn190vbcFp6ArfVQ7DZbDabzd7OPnTEZbDnHOK12TXuXYbR5xB5GJDNZrPZbPbmdjzZ9z2B2N3nGq/NHhOHdBs2m81ms9n7tstyOUcZ4rTM+JW2cD5PXsRms9lsNvsf7PTEnha+tjk8NpvNZrPZ/4GdItXtawc+vVd3H+fwxpfme/HMZrPZbDZ7c/tdvOXEoURTfiWHSBnGWz7f/Q8zfmw2m832f5D9BfZ0/gFDQy7gKcdDNgAAAABJRU5ErkJggg==',
        //    platforms: {
        //        ios: 'IOS 2.0  +',
        //        android: 'Android OS 2.0 +'
        //    },
        //    size: '3MB',
        //    comments: 'Username: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
        //}];

        //var howtovideos = [{
        //    name: 'howtosearch',
        //    video: '../img/2240368631.mp4'
        //}, {
        //    name: 'howtoinstall',
        //    video: '../img/224036863.mp4'
        //}, {
        //    name: 'howtodelete',
        //    video: '../img/224036863.mp4'
        //}];

        //var developers = [{
        //    id: 0,
        //    name: 'Adam Ale',
        //    image: '../img/adam.jpg',
        //    description: 'Android Developer'
        //}, {
        //    id: 1,
        //    name: 'Ben Brewer',
        //    image: '../img/ben.png',
        //    description: 'Android Developer'
        //}, {
        //    id: 2,
        //    name: 'Max Cocktail',
        //    image: '../img/Max.png',
        //    description: 'Android and IOS Developer'
        //}, {
        //    id: 3,
        //    name: 'Mike Dunkel',
        //    image: '../img/Mike.png',
        //    description: 'Android and IOS Developer'
        //}, {
        //    id: 4,
        //    name: 'Perry Ethanol',
        //    image: '../img/Perry.png',
        //    description: 'IOS Developer'
        //}];

    //    var questions = [{
    //        id: 0,
    //        name: 'Age',
    //        options: [
    //            {name: '<12'},
    //            {name: '12-15'},
    //            {name: '16-18'},
    //            {name: '19-24'},
    //            {name: '25+'}
    //        ]
    //    }, {
    //        id: 1,
    //        name: 'Gender',
    //        options: [
    //            {name: 'Male'},
    //            {name: 'Female'},
    //            {name: 'Other'}
    //        ]
    //    }, {
    //        id: 2,
    //        name: 'Profession',
    //        options: [
    //            {name: 'Student'},
    //            {name: 'Teacher'},
    //            {name: 'Farmer'},
    //            {name: 'Engineer'},
    //            {name: 'Financial'}
    //        ]
    //    }, {
    //        id: 3,
    //        name: 'Is this your first time using AppDock?',
    //        options: [
    //            {name: 'Yes'},
    //            {name: 'No'}
    //        ]
    //    }, {
    //        id: 4,
    //        name: 'How long did you spend on AppDock?',
    //        options: [
    //            {name: '<30 min'},
    //            {name: '30-60 min'},
    //            {name: '60-120 min'},
    //            {name: '120+ min'}
    //        ]
    //    }];
    //
    //    return {
    //        all: function () {
    //            return apps;
    //        },
    //        remove: function (app) {
    //            apps.splice(apps.indexOf(app), 1);
    //        },
    //        get: function (appId) {
    //            for (var i = 0; i < apps.length; i++) {
    //                if (apps[i].id === parseInt(appId)) {
    //                    return apps[i];
    //                }
    //            }
    //            return null;
    //        },
    //        getByDeveloper: function (devName) {
    //            var appsByDev = [];
    //            for (var i = 0; i < apps.length; i++) {
    //                if (apps[i].developer === devName) {
    //                    appsByDev.push(apps[i]);
    //                }
    //            }
    //            return appsByDev;
    //        },
    //        getVideos: function () {
    //            return howtovideos;
    //        },
    //        allDevelopers: function () {
    //            return developers;
    //        },
    //        getDeveloper: function (devId) {
    //            for (var i = 0; i < developers.length; i++) {
    //                if (developers[i].id === parseInt(devId)) {
    //                    return developers[i];
    //                }
    //            }
    //            return null;
    //        },
    //        allQuestions: function () {
    //            return questions;
    //        }
    //    };
    //}])

    // factory for button to go to state (home button)
    .factory('UtilFactory', ['$state', function ($state) {
        return {
            linkTo: function (link) {
                $state.go(link);
            }
        };
    }])

    // factory for camera
    .factory('Camera', ['$q', function ($q) {

        return {
            getPicture: function (options) {
                var q = $q.defer();

                navigator.camera.getPicture(function (result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        };
    }]);
