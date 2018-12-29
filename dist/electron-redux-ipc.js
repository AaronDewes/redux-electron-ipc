(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("electron-redux-ipc", [], factory);
	else if(typeof exports === 'object')
		exports["electron-redux-ipc"] = factory();
	else
		root["electron-redux-ipc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = createIpc;
	exports.send = send;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function createIpc() {
	  var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) !== 'object') {
	    throw new TypeError('createIpc expects an events object as its first parameter, you passed type "' + (typeof events === 'undefined' ? 'undefined' : _typeof(events)) + '"');
	  }

	  Object.keys(events).forEach(function (key) {
	    if (typeof events[key] !== 'function') {
	      throw new TypeError('Each key in createIpc\'s events object must be a dispatch-able function, key "' + key + '" is of type "' + _typeof(events[key]) + '"');
	    }
	  });

	  return function (_ref) {
	    var dispatch = _ref.dispatch;

	    Object.keys(events).forEach(function (key) {
	      window.ipcRenderer.on(key, function () {
	        dispatch(events[key].apply(events, arguments));
	      });
	    });

	    return function (next) {
	      return function (action) {
	        if (action.type.startsWith('@@IPC')) {
	          var _window$ipcRenderer;

	          (_window$ipcRenderer = window.ipcRenderer).send.apply(_window$ipcRenderer, [action.channel].concat(_toConsumableArray(action.args || [])));
	        }

	        return next(action);
	      };
	    };
	  };
	}

	function send(channel) {
	  return {
	    type: '@@IPC',
	    channel: channel,
	    args: Array.prototype.slice.call(arguments, 1)
	  };
	}

/***/ })
/******/ ])
});
;