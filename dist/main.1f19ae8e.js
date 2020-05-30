// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var app = angular.module('myApp', ['ngSanitize']);
app.config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**']);
});
app.controller('myCtrl', function ($scope) {
  //Data model for the stream
  $scope.stream = [//Start of image example
  {
    id: 0,
    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    user: {
      firstName: "Patrick",
      lastName: "Swayze"
    },
    timestamp: 1443554687982,
    imgURL: "https://yousufnewyork.files.wordpress.com/2013/02/surfer2.jpg",
    sweet: [{
      id: 2
    }, {
      id: 1,
      firstName: "Patrick",
      lastName: "Swayze"
    }],
    comments: [{
      textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      user: {
        firstName: "Patrick",
        lastName: "Swayze"
      },
      timestamp: "11:21am July 20th 2015"
    }, {
      textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      user: {
        firstName: "Andrew",
        lastName: "Sheffield"
      },
      timestamp: "11:25am July 20th 2015"
    }]
  }, //Start of Comment only example
  {
    id: 1,
    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    user: {
      firstName: "Patrick",
      lastName: "Swayze"
    },
    timestamp: 1443554687981,
    sweet: [{
      id: 1
    }, {
      id: 2
    }],
    comments: [{
      textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      user: {
        firstName: "Patrick",
        lastName: "Swayze"
      },
      timestamp: "11:21am July 20th 2015"
    }, {
      textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      user: {
        firstName: "Andrew",
        lastName: "Sheffield"
      },
      timestamp: "11:25am July 20th 2015"
    }]
  }, //Start of youtube video post
  {
    id: 2,
    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    user: {
      firstName: "Patrick",
      lastName: "Swayze"
    },
    timestamp: 1443554687980,
    youtubeURL: "https://www.youtube.com/embed/GiXwNLesmN0",
    sweet: [{
      id: 2
    }],
    comments: [{
      textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      user: {
        firstName: "Patrick",
        lastName: "Swayze"
      },
      timestamp: "11:21am July 20th 2015"
    }, {
      textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      user: {
        firstName: "Andrew",
        lastName: "Sheffield"
      },
      timestamp: "11:25am July 20th 2015"
    }]
  }]; //Data model for the user data

  $scope.data = {
    user: {
      id: 1,
      firstName: "Patrick",
      lastName: "Swayze",
      imgURL: "http://home.comcast.net/~patrick.swayze/pbfight.jpg"
    },
    friends: [],
    status: "Broseidon",
    settings: {
      receiveEmailsNotifications: true,
      recieveEmailNews: true
    }
  }; //Data model for new post

  $scope.newPost = {}; //Data model for posting new image

  $scope.newimg = {}; //Data model for selected image for modal

  $scope.modalImg = {}; //Holds the data for temporary settings

  $scope.tempData = {}; //searchable users

  $scope.usersSearchResults = [];
  $scope.pendingFriendRequests = [];
  /*************************
  start of angular functions
  *************************/
  //detect if enter is pressed and create post

  $scope.createNewPostOnEnter = function (event) {
    if (event.which == 13 || event.keyCode == 13) {
      createNewPost();
    }
  }; //create a new post


  var createNewPost = function createNewPost() {
    $('.upload-photo').hide();
    var postText = "";
    if ($scope.newPost.text) postText = $scope.formatLinks($scope.newPost.text);
    var newPost = {
      id: $scope.stream.length,
      textBody: postText,
      user: $scope.data.user,
      timestamp: Date.now(),
      sweet: [],
      comments: []
    };

    if ($scope.newimg.src) {
      newPost.imgURL = $scope.newimg.src;
    }

    $scope.stream.push(newPost);
    console.log($scope.stream);
    $scope.newPost.text = "";
    var ta = document.querySelector('textarea');
    autosize(ta);
    ta.value = ""; // Dispatch a 'autosize:update' event to trigger a resize:

    var evt = document.createEvent('Event');
    evt.initEvent('autosize:update', true, false);
    ta.dispatchEvent(evt);
    $scope.newimg.src = "";
    $("#imginputpreview").attr('src', "");
    return false;
  }; //format string with URL's


  $scope.formatLinks = function (string) {
    var stringArray = string.split(" ");
    var i;

    for (i = 0; i < stringArray.length; i++) {
      if (stringArray[i].indexOf("http") == 0 || stringArray[i].indexOf("https") == 0 || stringArray[i].indexOf("HTTP") == 0 || stringArray[i].indexOf("HTTPS") == 0) {
        var newString = "<a href='" + stringArray[i] + "' target='_blank'>" + stringArray[i] + "</a>";
        stringArray[i] = newString;
      }
    }

    return stringArray.join(" ");
  }; //Create new REPLY


  $scope.createNewReply = function (event, post) {
    if (event.which == 13 || event.keyCode == 13) {
      var newReply = {
        id: post.comments.length,
        textBody: post.newReply.text,
        user: $scope.data.user,
        timestamp: Date.now()
      };
      post.comments.push(newReply);
      var ta = $("#post" + post.id + " textarea");
      ta.val("");
      autosize.update(ta);
      return false;
    }
  }; //Searches through post for img URL to post
  //**NEEDS DEBUG**


  $scope.getImgURL = function (string) {
    string = string.toLowerCase();
    var imgExtArray = ["jpg", "bmp", "jpeg", "gif", "png"];
    var beginLinkIndex = string.indexOf("http");
    var endLinkIndex = 0;

    for (i = 0; i < imgExtArray.length; i++) {
      var ext = imgExtArray[i];
      var extIndex = string.indexOf(ext);

      if (extIndex > 0) {
        endLinkIndex = extIndex + ext.length;
        break;
      }
    }

    if (beginLinkIndex < endLinkIndex) {
      return string.substring(beginLinkIndex, endLinkIndex);
    }

    return "";
  }; //Searches through post of youtube URL


  $scope.getYoutubeURL = function (string) {
    //https://www.youtube.com/embed/IdneKLhsWOQ
    //https://www.youtube.com/watch?v=IdneKLhsWOQ
    if (string.indexOf("youtube.com") >= 0) {
      var stringArray = string.split("watch?v=");
      return "https://www.youtube.com/embed/" + stringArray[1];
    } else {
      return "";
    }
  }; //Toggle upvote on post


  $scope.upvote = function (post) {
    var index = $scope.indexOfSweet(post);

    if (index < 0) {
      post.sweet.push($scope.data.user);
    } else {
      post.sweet.splice(index, 1);
    }
  };
  /**
    Takes a post
    searches the sweets for the user
    if user exists it returns the index
    else return -1
  */


  $scope.indexOfSweet = function (post) {
    for (i = 0; i < post.sweet.length; i++) {
      if (post.sweet[i].id == $scope.data.user.id) return i;
    }

    return -1;
  }; //Boolean function to check if post is upvoted


  $scope.isUpvoted = function (post) {
    for (i = 0; i < post.sweet.length; i++) {
      if (post.sweet[i].id == $scope.data.user.id) return true;
    }

    return false;
  }; //Toggle the comments open for post


  $scope.openComments = function (post) {
    $scope.setAutoResize(post);
    $("#post" + post.id + " .comments").toggle('ease');
    $("#post" + post.id + " .comments").find('textarea').focus();
  };

  $scope.setAutoResize = function (post) {
    var ta = $("#post" + post.id + " textarea");
    ta.val("");
    autosize(ta);
  };

  $scope.openImgModal = function (post) {
    $scope.modalImg = post;
  }; //Settings Functions


  $scope.setSettings = function () {
    $scope.data = angular.copy($scope.tempData);
  };

  $scope.cancelSettings = function () {
    $scope.tempData = angular.copy($scope.data);
  }; //Canceling an Image Post


  $scope.cancelImgPost = function () {
    $('.upload-photo').hide();
    $scope.newimg.src = "";
    $("#imginputpreview").attr('src', "");
  }; //delete a post


  $scope.deletePost = function (post) {
    for (i = 0; i < $scope.stream.length; i++) {
      if (post.id == $scope.stream[i].id) {
        $scope.stream.splice(i, 1);
      }
    }
  };
  /**
    This activate the file input when the picture icon is clicked
  */
  //Engage the open file input


  $(".picture-btn").on('click', function () {
    $("#imginput").click();
    $(".picture-btn").toggle();
    $(".post-picture-btn").toggle();
  });
  $(".post-picture-btn").on('click', function () {
    $(".picture-btn").toggle();
    $(".post-picture-btn").toggle();
    createNewPost();
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.upload-photo').show();
        $scope.newimg.src = e.target.result;
        $("#imginputpreview").attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imginput").change(function () {
    readURL(this);
    $('.post-textarea').focus();
  }); //Upload new profile picture

  $scope.newProfileImg = function () {
    $("#profileImgInput").click();
  };

  $("#profileImgInput").change(function () {
    var input = this;

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $scope.data.user.imgURL = e.target.result;
        $("#profile-img").attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }); //initialize temp data for settings on open

  $scope.initTempData = function () {
    $scope.tempData = angular.copy($scope.data);
  }; //Search for friends


  $scope.searchUsers = function () {
    $scope.usersSearchResults = [];
    var inputText = $scope.friendSearchInput.text.toLowerCase();
    var inputTextArray = inputText.split(" ");
    var inputTextFirst = inputTextArray[0];
    var inputTextSecond = inputTextArray[1];
    var i;

    for (i = 0; i < worldUserList.length; i++) {
      var friend = worldUserList[i];
      var firstName = friend.firstName.toLowerCase();
      var lastName = friend.lastName.toLowerCase();
      var iOfFirst = firstName.indexOf(inputTextFirst);
      var iOfLast = lastName.indexOf(inputTextFirst);
      var iOfLastSecond = lastName.indexOf(inputTextSecond);
      var areFriends = $scope.userIsFriend(worldUserList[i]);

      if (iOfFirst == 0 && !inputTextSecond && !areFriends || //checks first name is no last is present
      iOfLast == 0 && !inputTextSecond && !areFriends //checks last name against last name
      || iOfFirst == 0 && iOfLastSecond == 0 && !areFriends //checks first and last
      ) {
          $scope.usersSearchResults.push(worldUserList[i]);
        }
    }
  };

  $scope.userIsFriend = function (user) {
    var i;

    for (i = 0; i < $scope.pendingFriendRequests.length; i++) {
      if (user.id == $scope.pendingFriendRequests[i].id) return true;
    }

    for (i = 0; i < $scope.data.friends.length; i++) {
      if (user.id == $scope.data.friends[i].id) return true;
    }

    return false;
  };

  $scope.sendFriendRequest = function (friend) {
    $scope.pendingFriendRequests.push(friend);
    $scope.usersSearchResults = [];
    $scope.friendSearchInput = "";
  };

  $scope.approveFriendRequest = function (friend) {
    var indexOfFriend = $scope.pendingFriendRequests.indexOf(friend);
    $scope.pendingFriendRequests.splice(indexOfFriend, 1);
    $scope.data.friends.push(friend);
  };

  $scope.removeFriend = function (friend) {
    var i;

    for (i = 0; i < $scope.data.friends.length; i++) {
      if (friend.id == $scope.data.friends[i].id) {
        $scope.data.friends.splice(i, 1);
      }
    }
  };
});
/**
BEGIN UX JAVASCRIPT GROUP

**/

/* Resize the text area for the post and reply when large amounts of text is entered.  This only initializes currently visable textareas
 */

autosize($('textarea'));
/*
The following javascript group takes a profile picture and places it in the profile div.  It looks to see if the image is wider or larger and adjusts the attribute to make it center in the profile img div
*/

/*$(document).ready(function() {
  var imgContainer = $("profile-pic");
  var img = getProfileImage("http://home.comcast.net/~patrick.swayze/pbfight.jpg");
  loadImg(imgContainer, img);
});*/

function getProfileImage(imgSrc) {
  var img = new Image();
  img.src = imgSrc;

  img.onload = function () {
    if (img.width <= img.height) img.style.width = '100%';else img.style.height = '100%';
  };

  return img;
}

function loadImg(imgContainer, img) {
  imgContainer.append(img);
}
/**
  Prevent a new line when enter is pressed
*/


$("textarea").keydown(function (e) {
  // Enter was pressed without shift key
  if (e.keyCode == 13 && !e.shiftKey) {
    // prevent default behavior
    e.preventDefault();
  }
}); //$('.post-textarea').focus();

var worldUserList = [{
  id: 0,
  firstName: "Jessica",
  lastName: "Alba",
  friendsInCommon: 12,
  imgURL: "https://pmcvariety.files.wordpress.com/2014/01/jessica-alba.jpg?w=670&h=377&crop=1"
}, {
  id: 1,
  firstName: "Jessica",
  lastName: "Biel",
  friendsInCommon: 4,
  imgURL: "http://images.fanpop.com/images/image_uploads/Jessica-jessica-biel-134885_1280_1024.jpg"
}, {
  id: 2,
  firstName: "Keanu",
  lastName: "Reeves",
  friendsInCommon: 7,
  imgURL: "http://wereblog.com/wp-content/uploads/2014/10/keanu-reeves.jpg"
}, {
  id: 3,
  firstName: "Gary",
  lastName: "Busey",
  friendsInCommon: 2,
  imgURL: "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2012/12/03/gary-busey-emerges-bankruptcy.jpg"
}];
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40711" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map