/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createIpc),\n/* harmony export */   \"send\": () => (/* binding */ send)\n/* harmony export */ });\nfunction createIpc (events = {}) {\n  if (typeof events !== 'object') {\n    throw new TypeError(`createIpc expects an events object as its first parameter, you passed type \"${typeof events}\"`);\n  }\n\n  Object.keys(events).forEach(key => {\n    if (typeof events[key] !== 'function') {\n      throw new TypeError(`Each key in createIpc's events object must be a dispatch-able function, key \"${key}\" is of type \"${typeof events[key]}\"`);\n    }\n  });\n\n  return ({ dispatch }) => {\n    Object.keys(events).forEach((key) => {\n      window.ipcRenderer.on(key, function () {\n        dispatch(events[key](...arguments));\n      });\n    });\n\n    return function (next) {\n      return function (action) {\n        if (action.type.startsWith('@@IPC')) {\n          window.ipcRenderer.send(action.channel, ...(action.args || []));\n        }\n\n        return next(action);\n      };\n    };\n  };\n}\n\nfunction send (channel) {\n  return {\n    type: '@@IPC',\n    channel,\n    args: Array.prototype.slice.call(arguments, 1)\n  };\n}\n\n\n//# sourceURL=webpack://@aarondewes/redux-electron-ipc/./src/index.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = {};
/******/ __webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ var __webpack_exports__send = __webpack_exports__.send;
/******/ export { __webpack_exports__default as default, __webpack_exports__send as send };
/******/ 
