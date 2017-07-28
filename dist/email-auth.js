(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["email-auth"] = factory();
	else
		root["email-auth"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var saveUser = function saveUser() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'users/';
  var user = arguments[1];

  database().ref(path).set(user);
};

var invokeMutation = function invokeMutation(mutation) {
  try {
    _mutations[mutation][0](firebase.auth().currentUser);
  } catch (e) {
    var namespace = _mutation.split('/')[0];
    var _mutation = _mutation.split('/')[1] || _mutation;
    throw new Error('No mutation named ' + _mutation + 'in the ' + (_mutation.split('/')[1] ? namespace : 'global') + ' vuex namespace');
  }
};

var EmailAuth = function () {
  function EmailAuth() {
    _classCallCheck(this, EmailAuth);
  }

  _createClass(EmailAuth, [{
    key: 'emailSignIn',
    value: function emailSignIn(_ref, user, password, action) {
      var firebase = _ref.firebase,
          database = _ref.database,
          _mutations = _ref._mutations;

      if (typeof action === "function") {
        firebase.auth().signInWithEmailAndPassword(user, password).then(action(null, firebase.auth().currentUser)).catch(action(error));
      } else if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === "object") {
        firebase.auth().signInWithEmailAndPassword(user, password).then(function () {
          if (action.mutate) {
            invokeMutation(action.mutate);
          }
        }).catch(function (error) {
          return Promise.reject(error);
        });
      } else {
        // For Vuex
        if ((typeof user === 'undefined' ? 'undefined' : _typeof(user)) === "object") {
          firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function () {
            if (user.mutate) {
              invokeMutation(user.mutate);
            }
          }).catch(function (error) {
            return Promise.reject(error);
          });
        } else {
          return new Promise(function (resolve, reject) {
            firebase.auth().signInWithEmailAndPassword(user, password).then(resolve(firebase.auth().currentUser)).catch(function (error) {
              reject(error);
            });
          });
        }
      }
    }
  }, {
    key: 'emailSignUp',
    value: function emailSignUp(_ref2, user, password, action) {
      var firebase = _ref2.firebase,
          _mutations = _ref2._mutations;

      if (typeof action === "function") {
        firebase.auth().createUserWithEmailAndPassword(user, password).then(action(null, firebase.auth().currentUser)).catch(action(error));
      } else if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === "object") {
        firebase.auth().createUserWithEmailAndPassword(user, password).then(function () {
          if (action.mutate) {
            invokeMutation(action.mutate);
          }
        }).catch(function (error) {
          return Promise.reject(error);
        });
      } else {
        // For Vuex
        if ((typeof user === 'undefined' ? 'undefined' : _typeof(user)) === "object") {
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function () {
            if (user.mutate) {
              invokeMutation(user.mutate);
            }
            console.log(firebase.auth().currentUser);
            //saveUser(Object.create(user, ))
          }).catch(function (error) {
            return Promise.reject(error);
          });
        } else {
          return new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(user, password).then(resolve(firebase.auth().currentUser)).catch(function (error) {
              reject(error);
            });
          });
        }
      }
    }
  }]);

  return EmailAuth;
}();

exports.default = EmailAuth;

/***/ })
/******/ ]);
});
//# sourceMappingURL=email-auth.js.map