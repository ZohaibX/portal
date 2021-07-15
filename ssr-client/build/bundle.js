/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.css */ \"./src/client/css/main.css\");\n/* harmony import */ var _Store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store/actions */ \"./src/client/Store/actions/index.tsx\");\n\n\n // import Header from './components/header';\n// import { fetchCurrentUser } from './Store/actions';\n\n\n\n\nvar App = function App(_ref) {\n  var route = _ref.route,\n      currentUser = _ref.currentUser;\n  console.log(currentUser);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes));\n};\n\nfunction mapStateToProps(_ref2) {\n  var currentUser = _ref2.currentUser;\n  return {\n    currentUser: currentUser\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(App),\n  loadData: function loadData(_ref3) {\n    var dispatch = _ref3.dispatch;\n    return dispatch((0,_Store_actions__WEBPACK_IMPORTED_MODULE_4__.fetchCurrentUser)());\n  }\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/Store/actions/index.tsx":
/*!********************************************!*\
  !*** ./src/client/Store/actions/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_USERS_SUCCESS\": () => (/* binding */ FETCH_USERS_SUCCESS),\n/* harmony export */   \"FETCH_CURRENT_USER\": () => (/* binding */ FETCH_CURRENT_USER),\n/* harmony export */   \"fetchCurrentUser\": () => (/* binding */ fetchCurrentUser),\n/* harmony export */   \"FETCH_ALL_ACCOUNTS\": () => (/* binding */ FETCH_ALL_ACCOUNTS),\n/* harmony export */   \"fetchAllAccountRequests\": () => (/* binding */ fetchAllAccountRequests)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';\nvar FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'; //? async requests - way\n\nvar fetchCurrentUser = function fetchCurrentUser() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return api.get('users/current-user');\n\n            case 3:\n              data = _context.sent;\n              _context.next = 9;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              throw new Error(_context.t0);\n\n            case 9:\n              dispatch({\n                type: FETCH_CURRENT_USER,\n                payload: data.data.currentUser\n              });\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar FETCH_ALL_ACCOUNTS = \"FETCH_ALL_ACCOUNTS\";\nvar fetchAllAccountRequests = function fetchAllAccountRequests() {\n  return /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var studentRequests, teacherRequests, allAccounts;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return api.get(\"/accounts/get-all-students-requests\");\n\n            case 3:\n              studentRequests = _context2.sent;\n              _context2.next = 9;\n              break;\n\n            case 6:\n              _context2.prev = 6;\n              _context2.t0 = _context2[\"catch\"](0);\n              throw new Error(_context2.t0);\n\n            case 9:\n              _context2.prev = 9;\n              _context2.next = 12;\n              return api.get(\"/accounts/get-all-teachers-requests\");\n\n            case 12:\n              teacherRequests = _context2.sent;\n              _context2.next = 18;\n              break;\n\n            case 15:\n              _context2.prev = 15;\n              _context2.t1 = _context2[\"catch\"](9);\n              throw new Error(_context2.t1);\n\n            case 18:\n              allAccounts = [].concat(_toConsumableArray(studentRequests.data), _toConsumableArray(teacherRequests.data));\n              dispatch({\n                type: FETCH_ALL_ACCOUNTS,\n                payload: allAccounts\n              });\n\n            case 20:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 6], [9, 15]]);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n}; // export const IMAGE_UPLOAD = 'IMAGE_UPLOAD';\n// export const uploadImage = (file) => async (dispatch, getState, api) => {\n//   const urlData = await api.get('/image-upload/get-url');\n//   // urlData.data contains {key , url} from our backend\n//   console.log(`File  is ${file} and url is ${urlData.data.url}`);\n//   const response = await axios.put(urlData.data.url, file, {\n//     headers: { 'Content-Type': file.type },\n//   });\n//   console.log('response is: ', response);\n//   // key is the name of the image, we save in s3 -- and url - I know what it is -- coming from urlData\n//   // url contains the filename (key) in itself ,\n//   // so we could send key to the backend database\n//   const { data } = await api.post('/image-upload', {\n//     imageUrl: urlData.data.key, // i can add more data here like -- ...data\n//   });\n//   dispatch({ type: IMAGE_UPLOAD, payload: data });\n// };\n//? sync reducer action\n// Setting search text in a state\n// export const setUserToken = (token) => ({\n//   // we wanna recieve text here\n//   type: UserToken,\n//   payload: token,\n// });\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/actions/index.tsx?");

/***/ }),

/***/ "./src/client/Store/reducers/current-user.tsx":
/*!****************************************************!*\
  !*** ./src/client/Store/reducers/current-user.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FetchCurrentUserReducer\": () => (/* binding */ FetchCurrentUserReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ \"./src/client/Store/actions/index.tsx\");\n //? async reducer function\n\nvar FetchCurrentUserReducer = function FetchCurrentUserReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__.FETCH_CURRENT_USER:\n      return action.payload || false;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/reducers/current-user.tsx?");

/***/ }),

/***/ "./src/client/Store/reducers/fetch-all-accounts.tsx":
/*!**********************************************************!*\
  !*** ./src/client/Store/reducers/fetch-all-accounts.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FetchAllAccounts\": () => (/* binding */ FetchAllAccounts)\n/* harmony export */ });\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ \"./src/client/Store/actions/index.tsx\");\n //? async reducer function\n\nvar FetchAllAccounts = function FetchAllAccounts() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__.FETCH_ALL_ACCOUNTS:\n      return action.payload || false;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/reducers/fetch-all-accounts.tsx?");

/***/ }),

/***/ "./src/client/Store/reducers/index.tsx":
/*!*********************************************!*\
  !*** ./src/client/Store/reducers/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-user */ \"./src/client/Store/reducers/current-user.tsx\");\n/* harmony import */ var _fetch_all_accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-all-accounts */ \"./src/client/Store/reducers/fetch-all-accounts.tsx\");\n\n\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  currentUser: _current_user__WEBPACK_IMPORTED_MODULE_1__.FetchCurrentUserReducer,\n  fetchAllAccounts: _fetch_all_accounts__WEBPACK_IMPORTED_MODULE_2__.FetchAllAccounts\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/reducers/index.tsx?");

/***/ }),

/***/ "./src/client/hooks/use-request.tsx":
/*!******************************************!*\
  !*** ./src/client/hooks/use-request.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar useRequest = function useRequest(url, body, method) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var doRequest = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var props,\n          _yield$axios$method,\n          data,\n          _args = arguments;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              props = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};\n              setError('');\n              _context.prev = 2;\n\n              if (!(method === 'post' || method === 'get' || method === 'delete' || method === 'put')) {\n                _context.next = 10;\n                break;\n              }\n\n              _context.next = 6;\n              return (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, _objectSpread(_objectSpread({}, body), props));\n\n            case 6:\n              _yield$axios$method = _context.sent;\n              data = _yield$axios$method.data;\n              // console.log(data);\n              if (method === 'post' && props.redirectPath) window.location = props.redirectPath;\n              return _context.abrupt(\"return\", data);\n\n            case 10:\n              _context.next = 16;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](2);\n              // console.log(e.response.data);\n              if (_context.t0.response.data.errors[0]) setError(_context.t0.response.data.errors[0].message.toUpperCase());else setError(_context.t0.response.data.message);\n              return _context.abrupt(\"return\", {\n                error: {\n                  message: \"couldn't make the request\"\n                }\n              });\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 12]]);\n    }));\n\n    return function doRequest() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return {\n    doRequest: doRequest,\n    error: error\n  }; // it is better to be in this format , rather than [doRequest , error]\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);\n\n//# sourceURL=webpack://react-ssr/./src/client/hooks/use-request.tsx?");

/***/ }),

/***/ "./src/client/pages/Accounts/accounts.tsx":
/*!************************************************!*\
  !*** ./src/client/pages/Accounts/accounts.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Portal_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal/navbar */ \"./src/client/pages/Portal/navbar.tsx\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Store_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Store/actions/index */ \"./src/client/Store/actions/index.tsx\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination */ \"./src/client/pages/Accounts/pagination.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-request */ \"./src/client/hooks/use-request.tsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faCaretDown */ \"@fortawesome/fontawesome-free-solid/faCaretDown\");\n/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretDown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faCaretDown__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faCaretUp */ \"@fortawesome/fontawesome-free-solid/faCaretUp\");\n/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretUp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faCaretUp__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Table */ \"@material-ui/core/Table\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"@material-ui/core/TableBody\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"@material-ui/core/TableCell\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"@material-ui/core/TableContainer\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"@material-ui/core/TableHead\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"@material-ui/core/TableRow\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _searchField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./searchField */ \"./src/client/pages/Accounts/searchField.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_21__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Navbar = _Portal_navbar__WEBPACK_IMPORTED_MODULE_2__.default.component;\n\n\n\n\n\n // font-awesome \n\n\n\n // css\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__.makeStyles)({\n  table: {\n    borderRadius: \"20px\"\n  },\n  tableHeading: {\n    // width: 650,\n    fontWeight: \"bold\",\n    fontSize: \"20px\",\n    fontFamily: \"Sans-Serif\",\n    paddingLeft: \"23px\"\n  },\n  tableHeading2: {\n    fontWeight: \"bold\",\n    fontSize: \"20px\",\n    fontFamily: \"Sans-Serif\",\n    paddingLeft: \"23px\",\n    paddingTop: \"25px\"\n  },\n  pagination: {\n    backgroundColor: \"white\",\n    paddingLeft: \"25%\"\n  },\n  tableCell: {\n    paddingRight: \"90px\"\n  }\n});\n\nvar head = function head() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, \"Approve Your Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"https://project-1-bucket.s3.amazonaws.com/logo-1.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    property: \"og:title\",\n    content: \"Approve Your Account\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    property: \"og:image\",\n    content: \"https://project-1-bucket.s3.amazonaws.com/logo-1.png\"\n  }));\n};\n\nvar Profile = function Profile(props) {\n  var classes = useStyles();\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {// props.fetchAllAccountRequests() calling it in loadData \n  }, []);\n\n  var _useRequest = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_8__.default)('/api/accounts/create-account', {}, 'post'),\n      doRequest = _useRequest.doRequest,\n      error = _useRequest.error; // searching \n\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\"),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      searchField = _React$useState2[0],\n      changeSearchField = _React$useState2[1];\n\n  var rows;\n\n  try {\n    rows = props.fetchAllAccounts.fetchAllAccounts.map(function (item) {\n      return item.email;\n    });\n  } catch (_unused) {\n    // make this request on page reload -- not on server side and cover it with HOC - if necessary\n    console.log(\"error coming from accounts.tsx - line around 95\");\n  } // filtering starts\n\n\n  var searchedEmails = searchField ? rows.filter(function (row) {\n    return row.toLowerCase().startsWith(searchField.toLowerCase());\n  }) : rows; // filtering ends\n  // Sorting  Starts\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      sort = _React$useState4[0],\n      changeSort = _React$useState4[1];\n\n  var sortRows = function sortRows() {\n    return sort ? searchedEmails.sort(function (a, b) {\n      return a.localeCompare(b);\n    }) : searchedEmails; // will even compare letters with different styles\n  };\n\n  var sortedRows = sortRows(); // for sorting array of objects -- we use lodash\n  // Sorting Ends \n  // pagination STARTS\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(3),\n      _React$useState6 = _slicedToArray(_React$useState5, 2),\n      rowsInSinglePage = _React$useState6[0],\n      setRowsInSinglePage = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(1),\n      _React$useState8 = _slicedToArray(_React$useState7, 2),\n      currentPage = _React$useState8[0],\n      updateCurrentPage = _React$useState8[1];\n\n  var paginationProps = {\n    singlePageRows: rowsInSinglePage,\n    rowsLength: sortedRows.length,\n    updateCurrentPage: updateCurrentPage,\n    currentPage: currentPage,\n    rows: sortedRows\n  }; // pagination-props\n  // paginating actual rows -- start\n\n  var paginate = function paginate(emails) {\n    var index = (currentPage - 1) * rowsInSinglePage;\n    return lodash__WEBPACK_IMPORTED_MODULE_4___default()(emails).slice(index).take(rowsInSinglePage).value();\n  };\n\n  var paginatedEmails = paginate(sortedRows); // paginating actual rows -- end\n  // now some work of pagination is in pagination component\n\n  var searchFieldProps = {\n    rows: rows,\n    searchField: searchField,\n    changeSearchField: changeSearchField,\n    updateCurrentPage: updateCurrentPage\n  };\n\n  var handleSortIcon = function handleSortIcon() {\n    updateCurrentPage(1);\n    changeSort(sort ? false : true);\n  };\n\n  var approve = function approve(email) {\n    if (error) alert(error);else {\n      doRequest({\n        redirectPath: '',\n        email: email\n      }); // piece of body sending from here\n    }\n    ;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \" profile-page-background accounts\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"text-center py-5 font-weight-bold\"\n  }, \"Approve Your Account Yourself - Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"accounts-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_16___default()), {\n    component: (_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19___default())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_13___default()), {\n    className: classes.table,\n    \"aria-label\": \"simple table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_17___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {\n    className: classes.tableHeading2\n  }, \"Emails \\xA0 \\xA0 \\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"sort-btn\",\n    onClick: handleSortIcon\n  }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {\n    className: \"sort-btn-icon\",\n    icon: sort ? (_fortawesome_fontawesome_free_solid_faCaretDown__WEBPACK_IMPORTED_MODULE_10___default()) : (_fortawesome_fontawesome_free_solid_faCaretUp__WEBPACK_IMPORTED_MODULE_11___default())\n  }), \" \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {\n    className: classes.tableHeading\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_searchField__WEBPACK_IMPORTED_MODULE_20__.default.component, searchFieldProps)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_14___default()), null, paginatedEmails.map(function (email) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), {\n      key: email\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {\n      component: \"th\",\n      scope: \"row\"\n    }, email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {\n      align: \"right\",\n      className: classes.tableCell\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"form__group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      className: \"btn btn-green  form-btn\",\n      onClick: function onClick() {\n        return approve(email);\n      }\n    }, \"Approve \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"accounts-table__btn-decoration\"\n    }, \" \\u2192 \")))));\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pagination__WEBPACK_IMPORTED_MODULE_6__.default.component, paginationProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"alert alert-primary alert-manual\",\n    role: \"alert\"\n  }, \"After Approving Your Account - You may Go and Sign In by \\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {\n    to: \"/portal\",\n    className: \"alert-manual-link\"\n  }, \"clicking here\"))));\n};\n\nvar mapStateToProps = function mapStateToProps(fetchAllAccounts) {\n  return {\n    fetchAllAccounts: fetchAllAccounts\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps)(Profile),\n  loadData: function loadData(_ref) {\n    var dispatch = _ref.dispatch;\n    return dispatch((0,_Store_actions_index__WEBPACK_IMPORTED_MODULE_5__.fetchAllAccountRequests)());\n  }\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Accounts/accounts.tsx?");

/***/ }),

/***/ "./src/client/pages/Accounts/pagination.tsx":
/*!**************************************************!*\
  !*** ./src/client/pages/Accounts/pagination.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"@material-ui/lab/Pagination\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n\n\n/// css\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createStyles)({\n    root: {\n      marginTop: theme.spacing(2),\n      backgroundColor: \"white\",\n      paddingLeft: \"50px\"\n    }\n  });\n});\n\nvar PaginationComponent = function PaginationComponent(_ref) {\n  var singlePageRows = _ref.singlePageRows,\n      rowsLength = _ref.rowsLength,\n      updateCurrentPage = _ref.updateCurrentPage,\n      currentPage = _ref.currentPage,\n      rows = _ref.rows;\n  var classes = useStyles(); // css\n\n  var pages = Math.ceil(rowsLength / singlePageRows); // const range = _.range(1, pages + 1); // if we have 2 pages , we will get [1,2]\n\n  var handleChange = function handleChange(event, value) {\n    updateCurrentPage(value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"accounts-pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2___default()), {\n    className: classes.root,\n    onChange: handleChange,\n    count: pages,\n    variant: \"outlined\",\n    shape: \"rounded\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: PaginationComponent\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Accounts/pagination.tsx?");

/***/ }),

/***/ "./src/client/pages/Accounts/searchField.tsx":
/*!***************************************************!*\
  !*** ./src/client/pages/Accounts/searchField.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n\n\n\nvar SearchField = function SearchField(_ref) {\n  var rows = _ref.rows,\n      searchField = _ref.searchField,\n      changeSearchField = _ref.changeSearchField,\n      updateCurrentPage = _ref.updateCurrentPage;\n\n  var handleChange = function handleChange(e) {\n    updateCurrentPage(1);\n    changeSearchField(e.currentTarget.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    action: \"\",\n    className: \"search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    value: searchField,\n    onChange: handleChange,\n    type: \"text\",\n    className: \"search__input\",\n    placeholder: \"Search Your  Mail\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: SearchField\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Accounts/searchField.tsx?");

/***/ }),

/***/ "./src/client/pages/Home/home.tsx":
/*!****************************************!*\
  !*** ./src/client/pages/Home/home.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n\n\n\n\n\nvar Home = function Home() {\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, \"ZohaibX\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"ZohaibX\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"home\"\n  }, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", {\n    className: \"image-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: 'https://project-1-bucket.s3.amazonaws.com/figure.jpg',\n    alt: \"Zohaib Butt X\",\n    className: \"image-box__image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figcaption\", {\n    className: \"image-box__caption\"\n  }, \"Zohaib Butt\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"intro\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://github.com/ZohaibX\",\n    className: \"intro__h1\"\n  }, \"Zohaib Butt\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"intro__h4\"\n  }, \"Full Stack Web Developer\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container about row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-1-of-3 about-all about-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"about-all__h4\"\n  }, \"Skills\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"CSS JavaScript TypeScript React Redux\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"Server Side Rendering With React (With Webpack) and NextJS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"NodeJS (Express) MongoDB Postgres Redis REST GraphQL Testing With Jest \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"CI/CD Docker Kubernetes Microservices (Deployment especially in GKE)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"AWS S3 Storage Sendgrid Mailing and Stripe API\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-1-of-3 about-all about-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"about-all__h4\"\n  }, \"Experience\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"Don't have working Experience for a Company\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"I've made a Portfolio Project of Education Portal, combining all of the skills\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/portal\"\n  }, \"Click Here\"), \" for Portfolio Project \"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-1-of-3 about-all about-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"about-all__h4\"\n  }, \"Education\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"Have Done BS Computer ( 4 Years )\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"Comsats University Islamabad\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"Lahore Pakistan\")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: Home // this styling is for Routes file specially\n\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Home/home.tsx?");

/***/ }),

/***/ "./src/client/pages/Not-Found/index.tsx":
/*!**********************************************!*\
  !*** ./src/client/pages/Not-Found/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"text-center font-weight-bolder my-5\"\n  }, \"Page Not Found\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: NotFound\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Not-Found/index.tsx?");

/***/ }),

/***/ "./src/client/pages/Portal/form.tsx":
/*!******************************************!*\
  !*** ./src/client/pages/Portal/form.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./src/client/hooks/use-request.tsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Form = function Form() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"\"),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      email = _React$useState2[0],\n      setEmail = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"\"),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      password = _React$useState4[0],\n      setPassword = _React$useState4[1];\n\n  var _useRequest = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default)('/api/users/sign-in', {\n    email: email,\n    password: password\n  }, 'post'),\n      doRequest = _useRequest.doRequest,\n      error = _useRequest.error;\n\n  var submit = function submit(e) {\n    e.preventDefault();\n    doRequest({\n      redirectPath: \"\"\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: \"booking\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"book\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"book__form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    action: \"\",\n    className: \"form\",\n    onSubmit: submit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"heading-secondary form__heading\"\n  }, \"Login to your account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form__group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"email\",\n    className: \"form__input\",\n    placeholder: \"Your Email\",\n    required: true,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.currentTarget.value);\n    },\n    id: \"name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"name\",\n    className: \"form__label\"\n  }, \"Your Email\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form__group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"password\",\n    className: \"form__input\",\n    placeholder: \"Your Password\",\n    required: true,\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.currentTarget.value);\n    },\n    id: \"email\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"email\",\n    className: \"form__label\"\n  }, \"Your Password\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form__group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"btn btn-green margin-bottom-2 form-btn\"\n  }, \"Go to your account \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"form-btn__decoration\"\n  }, \" \\u2192 \"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"create-account\"\n  }, \"If u don't have an account. Create your Account \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"create-account__link\",\n    to: \"/portal/profile-setup\"\n  }, \"Here\"))))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: Form\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Portal/form.tsx?");

/***/ }),

/***/ "./src/client/pages/Portal/home.tsx":
/*!******************************************!*\
  !*** ./src/client/pages/Portal/home.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ \"./src/client/pages/Portal/navbar.tsx\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/client/pages/Portal/form.tsx\");\n\n\n\n\n\nvar Form = _form__WEBPACK_IMPORTED_MODULE_4__.default.component;\nvar Navbar = _navbar__WEBPACK_IMPORTED_MODULE_3__.default.component;\n\nvar head = function head() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, \"CUI Portal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"https://project-1-bucket.s3.amazonaws.com/logo-1.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    property: \"og:title\",\n    content: \"CUI Portal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    property: \"og:image\",\n    content: \"https://project-1-bucket.s3.amazonaws.com/logo-1.png\"\n  }));\n};\n\nvar PortalHome = function PortalHome() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Website is under constructions -- we are working on mobile view -- some components may not work-- please bear with us\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: PortalHome\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Portal/home.tsx?");

/***/ }),

/***/ "./src/client/pages/Portal/navbar.tsx":
/*!********************************************!*\
  !*** ./src/client/pages/Portal/navbar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_free_solid_faSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faSearch */ \"@fortawesome/fontawesome-free-solid/faSearch\");\n/* harmony import */ var _fortawesome_fontawesome_free_solid_faSearch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faSearch__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Navbar = function Navbar() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\"),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      searchField = _React$useState2[0],\n      changeSearchField = _React$useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"logo-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: 'https://project-1-bucket.s3.amazonaws.com/logo-1.png',\n    alt: \"\",\n    className: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"logo-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"logo-text__h3\"\n  }, \"University\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"logo-text__p\"\n  }, \"Portal\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    action: \"\",\n    className: \"search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    value: searchField,\n    onChange: function onChange(e) {\n      return changeSearchField(e.currentTarget.value);\n    },\n    type: \"text\",\n    className: \"search__input\",\n    placeholder: \"Search Departments\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"search__button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n    className: \"search__icon\",\n    icon: (_fortawesome_fontawesome_free_solid_faSearch__WEBPACK_IMPORTED_MODULE_3___default())\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: Navbar\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Portal/navbar.tsx?");

/***/ }),

/***/ "./src/client/pages/Profile/profile.tsx":
/*!**********************************************!*\
  !*** ./src/client/pages/Profile/profile.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Portal_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal/navbar */ \"./src/client/pages/Portal/navbar.tsx\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/main.css */ \"./src/client/css/main.css\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"@material-ui/core/InputLabel\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ \"@material-ui/core/Select\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-request */ \"./src/client/hooks/use-request.tsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Navbar = _Portal_navbar__WEBPACK_IMPORTED_MODULE_2__.default.component;\n // css\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createStyles)({\n    formControl: {\n      margin: theme.spacing(1),\n      minWidth: 120\n    },\n    selectEmpty: {\n      marginTop: theme.spacing(2)\n    }\n  });\n});\n\nvar head = function head() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, \"Setup Your Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"https://project-1-bucket.s3.amazonaws.com/logo-1.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    property: \"og:title\",\n    content: \"Setup Your Account\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    property: \"og:image\",\n    content: \"https://project-1-bucket.s3.amazonaws.com/logo-1.png\"\n  }));\n};\n\nvar Profile = function Profile(props) {\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\"),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      rollNo = _React$useState2[0],\n      setRollNo = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\"),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      section = _React$useState4[0],\n      setSection = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\"),\n      _React$useState6 = _slicedToArray(_React$useState5, 2),\n      department = _React$useState6[0],\n      setDepartment = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\"),\n      _React$useState8 = _slicedToArray(_React$useState7, 2),\n      email = _React$useState8[0],\n      setEmail = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"\"),\n      _React$useState10 = _slicedToArray(_React$useState9, 2),\n      phone = _React$useState10[0],\n      setPhone = _React$useState10[1];\n\n  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),\n      _React$useState12 = _slicedToArray(_React$useState11, 2),\n      goAccountsDpt = _React$useState12[0],\n      changeGoAccountsDpt = _React$useState12[1];\n\n  var _useRequest = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_9__.default)('/api/accounts/request-for-registration', {\n    email: email,\n    department: department,\n    section: section,\n    phone: phone,\n    rollNo: rollNo\n  }, 'post'),\n      doRequest = _useRequest.doRequest,\n      error = _useRequest.error;\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    console.log(props);\n  }, []);\n\n  var submit = function submit(e) {\n    e.preventDefault();\n    if (error) alert(error);else {\n      doRequest({\n        redirectPath: ''\n      });\n      changeGoAccountsDpt(true);\n    }\n    ;\n  };\n\n  var rollNoFakeArray = [3, 6, 9, 12, 15, 18, 21, 90, 39, 108, 120, 123, 126, 129, 132];\n\n  var convertNumberInto3Digits = function convertNumberInto3Digits(number) {\n    if (number < 10) return \"00\".concat(number);\n    if (number < 100) return \"0\".concat(number);\n    return number;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \" profile-page-background\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    action: \"\",\n    className: \"form\",\n    onSubmit: submit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form__group profile-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"email\",\n    className: \"form__input profile-form__email\",\n    placeholder: \"Your Email\",\n    required: true,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.currentTarget.value);\n    },\n    id: \"name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"name\",\n    className: \"form__label profile-form__email-label\"\n  }, \"Your Email\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"profile-select\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {\n    className: classes.formControl\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"demo-simple-select-label\"\n  }, \"Departments\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default()), {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: department,\n    onChange: function onChange(e) {\n      return setDepartment(e.target.value);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n    value: 'CS'\n  }, \"BS Computer Science\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n    value: 'SE'\n  }, \"BS Software Engineering\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n    value: 'EE'\n  }, \"BS Electrical Engineering\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n    value: 'BBA'\n  }, \"Business Administration\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {\n    className: classes.formControl\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"demo-simple-select-label-1\"\n  }, \"Sections\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default()), {\n    labelId: \"demo-simple-select-label-1\",\n    id: \"demo-simple-select\",\n    value: section,\n    onChange: function onChange(e) {\n      return setSection(e.target.value);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n    value: 'A'\n  }, \"Section A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n    value: 'B'\n  }, \"Section B\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n    value: 'C'\n  }, \"Section C\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {\n    className: classes.formControl\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"demo-simple-select-label-2\"\n  }, \"Roll No\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default()), {\n    labelId: \"demo-simple-select-label-2\",\n    id: \"demo-simple-select\",\n    value: rollNo,\n    onChange: function onChange(e) {\n      return setRollNo(e.target.value);\n    }\n  }, rollNoFakeArray.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n      key: item,\n      value: item\n    }, convertNumberInto3Digits(item));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form__group profile-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"tel\" // pattern=\"[0-4]{4}-[0-9]{7}\"\n    ,\n    className: \"form__input profile-form__phone\",\n    placeholder: \"0123-3456789\",\n    required: true,\n    value: phone,\n    onChange: function onChange(e) {\n      return setPhone(e.currentTarget.value);\n    },\n    id: \"phone\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"phone\",\n    className: \"form__label profile-form__phone-label\"\n  }, \"Your Phone Number\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form__group profile-form profile-form-btn \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-green profile-form-btn-style \"\n  }, \"Submit \\u2192\")), goAccountsDpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"alert alert-primary alert-manual\",\n    role: \"alert\"\n  }, \"Go to Accounts Department by Yourself -\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"/portal/accounts-approval-administration\",\n    className: \"alert-manual-link\",\n    onClick: function onClick() {\n      return changeGoAccountsDpt(false);\n    }\n  }, \"to approve your account\")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: Profile\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Profile/profile.tsx?");

/***/ }),

/***/ "./src/client/routes/routes.tsx":
/*!**************************************!*\
  !*** ./src/client/routes/routes.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_Home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home/home */ \"./src/client/pages/Home/home.tsx\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./src/client/App.tsx\");\n/* harmony import */ var _pages_Portal_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Portal/home */ \"./src/client/pages/Portal/home.tsx\");\n/* harmony import */ var _pages_Not_Found_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Not-Found/index */ \"./src/client/pages/Not-Found/index.tsx\");\n/* harmony import */ var _pages_Profile_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Profile/profile */ \"./src/client/pages/Profile/profile.tsx\");\n/* harmony import */ var _pages_Accounts_accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Accounts/accounts */ \"./src/client/pages/Accounts/accounts.tsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import Test from '../pages/test';\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_1__.default), {}, {\n  routes: [_objectSpread(_objectSpread({\n    path: '/'\n  }, _pages_Home_home__WEBPACK_IMPORTED_MODULE_0__.default), {}, {\n    exact: true\n  }), _objectSpread(_objectSpread({\n    path: '/portal'\n  }, _pages_Portal_home__WEBPACK_IMPORTED_MODULE_2__.default), {}, {\n    exact: true\n  }), // {path: '/portal/student/:id' , ...StudentHome , exact: true  } ,\n  _objectSpread({\n    path: \"/portal/profile-setup\"\n  }, _pages_Profile_profile__WEBPACK_IMPORTED_MODULE_4__.default), _objectSpread({\n    path: \"/portal/accounts-approval-administration\"\n  }, _pages_Accounts_accounts__WEBPACK_IMPORTED_MODULE_5__.default), _objectSpread({}, _pages_Not_Found_index__WEBPACK_IMPORTED_MODULE_3__.default) // this is how we use not-found page -- by not providing path\n  // { path: `/test`, ...Test },\n  // { path: `/image-upload`, ...Upload },\n  // { path: '/signUp', ...SignUp, exact: true },\n  // { path: '/signIn', ...SignIn },\n  // { path: '/signOut', ...SignOut },\n  ]\n})]);\n\n//# sourceURL=webpack://react-ssr/./src/client/routes/routes.tsx?");

/***/ }),

/***/ "./src/helpers-for-server/renderer.jsx":
/*!*********************************************!*\
  !*** ./src/helpers-for-server/renderer.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/routes/routes */ \"./src/client/routes/routes.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar renderer = function renderer(req, store, context) {\n  // context, we are providing in context prop, it will send data into the renderer page on the browser\n  // here , we are using it in NotFound Page\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n    location: req.path,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(_client_routes_routes__WEBPACK_IMPORTED_MODULE_3__.default)))));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet.renderStatic(); //? to pull all the tags, we have provided to the components/pages\n  // have added bootstrap,Materialize css cdn here\n\n  return \"\\n  <html>\\n  <head>\\n    \".concat(helmet.title.toString(), \"\\n    \").concat(helmet.meta.toString(), \"\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\\\" integrity=\\\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\\\" crossorigin=\\\"anonymous\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"/main.css\\\">\\n  </head>\\n  <body>\\n  <div id=\\\"root\\\">\").concat(content, \"</div>\\n  <script> window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(store.getState()), \" </script>\\n  <script src=\\\"/bundle.js\\\" ></script>\\n  </body>\\n  </html>\\n  \"); /// \"/bundle.js\" must be same.. not something like \"./bundle\" or \"bundle\" -- for fine routing \n  /// same with \"/main.css\"\n}; // note -- all the meta tags for image, desc will be pull by ${helmet.meta.toString()}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n//# sourceURL=webpack://react-ssr/./src/helpers-for-server/renderer.jsx?");

/***/ }),

/***/ "./src/helpers-for-server/server-redux-store.tsx":
/*!*******************************************************!*\
  !*** ./src/helpers-for-server/server-redux-store.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Store_reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../client/Store/reducers/index */ \"./src/client/Store/reducers/index.tsx\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_5__);\n// server side redux file\n\n\n\n\n // from store \n\n\nvar logger = (0,redux_logger__WEBPACK_IMPORTED_MODULE_5__.createLogger)();\n\nvar CreateStore = function CreateStore(req) {\n  var serverAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default().create({\n    baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api',\n    headers: req.headers\n  });\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_client_Store_reducers_index__WEBPACK_IMPORTED_MODULE_4__.default, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default().withExtraArgument(serverAxiosInstance))) // add (thunkMiddleware , logger ) if wish -- logger\n  );\n  return store;\n}; // that's how we use store on the server side\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateStore);\n\n//# sourceURL=webpack://react-ssr/./src/helpers-for-server/server-redux-store.tsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/routes/routes */ \"./src/client/routes/routes.tsx\");\n/* harmony import */ var _helpers_for_server_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-for-server/renderer */ \"./src/helpers-for-server/renderer.jsx\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_for_server_server_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-for-server/server-redux-store */ \"./src/helpers-for-server/server-redux-store.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n//? serving as a root file for the server\n // to use async await\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // this middleware will convert routes like '/portal/' to '/portal' -- and this is too much important \n\napp.use(function (req, res, next) {\n  console.log(req.url);\n\n  if (req.path.length > 1 && /\\/$/.test(req.path)) {\n    console.log(\"req path is: \", req.path);\n    var query = req.url.slice(req.path.length);\n    res.redirect(301, req.path.slice(0, -1) + query);\n  } else {\n    next();\n  }\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().static('public'));\napp.get('/*', function (req, res) {\n  var store = (0,_helpers_for_server_server_redux_store__WEBPACK_IMPORTED_MODULE_6__.default)(req);\n  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(_client_routes_routes__WEBPACK_IMPORTED_MODULE_3__.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve)[\"catch\"](resolve);\n      });\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0,_helpers_for_server_renderer__WEBPACK_IMPORTED_MODULE_4__.default)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    } // will handle redirection\n    // this is how i may redirect to the url, user was already redirected from\n\n\n    if (context.notFound) res.status(404); // this setting is for notFoundPage\n\n    res.send(content);\n  });\n});\napp.listen(3000, function () {\n  console.log('Server Side of SSR running on port -- 3000');\n});\n\n//# sourceURL=webpack://react-ssr/./src/index.jsx?");

/***/ }),

/***/ "./src/client/css/main.css":
/*!*********************************!*\
  !*** ./src/client/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-ssr/./src/client/css/main.css?");

/***/ }),

/***/ "@fortawesome/fontawesome-free-solid/faCaretDown":
/*!******************************************************************!*\
  !*** external "@fortawesome/fontawesome-free-solid/faCaretDown" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/fontawesome-free-solid/faCaretDown");

/***/ }),

/***/ "@fortawesome/fontawesome-free-solid/faCaretUp":
/*!****************************************************************!*\
  !*** external "@fortawesome/fontawesome-free-solid/faCaretUp" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/fontawesome-free-solid/faCaretUp");

/***/ }),

/***/ "@fortawesome/fontawesome-free-solid/faSearch":
/*!***************************************************************!*\
  !*** external "@fortawesome/fontawesome-free-solid/faSearch" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/fontawesome-free-solid/faSearch");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Pagination":
/*!**********************************************!*\
  !*** external "@material-ui/lab/Pagination" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/lab/Pagination");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.jsx");
/******/ 	
/******/ })()
;