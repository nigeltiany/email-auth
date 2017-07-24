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

var EmailAuth = function () {
  function EmailAuth() {
    _classCallCheck(this, EmailAuth);
  }

  _createClass(EmailAuth, [{
    key: "emailSignIn",
    value: function emailSignIn(_ref, email, password, action) {
      var firebase = _ref.firebase,
          _mutations = _ref._mutations;

      if (typeof action === "function") {
        firebase.auth().signInWithEmailAndPassword(email, password).then(action(null, firebase.auth().currentUser)).catch(action(error));
      } else if ((typeof action === "undefined" ? "undefined" : _typeof(action)) === "object" && action.mutate) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
          try {
            _mutations[action.mutation][0](firebase.auth().currentUser);
          } catch (e) {
            var namespace = action.split('/')[0];
            var mutation = action.split('/')[1] || action.mutate;
            throw new Error('No mutation named ' + mutation + 'in the ' + (action.split('/')[1] ? namespace : 'global') + ' vuex namespace');
          }
        }).catch(function (error) {
          return Promise.reject(error);
        });
      } else {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      }
    }
  }, {
    key: "emailSignUp",
    value: function emailSignUp(_ref2, email, password, action) {
      var firebase = _ref2.firebase,
          _mutations = _ref2._mutations;

      if (typeof action === "function") {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(action(null, firebase.auth().currentUser)).catch(action(error));
      } else if ((typeof action === "undefined" ? "undefined" : _typeof(action)) === "object" && action.mutate) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
          try {
            _mutations[action.mutation][0](firebase.auth().currentUser);
          } catch (e) {
            var namespace = action.split('/')[0];
            var mutation = action.split('/')[1] || action.mutate;
            throw new Error('No mutation named ' + mutation + 'in the ' + (action.split('/')[1] ? namespace : 'global') + ' vuex namespace');
          }
        }).catch(function (error) {
          return Promise.reject(error);
        });
      } else {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
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