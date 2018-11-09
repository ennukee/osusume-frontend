module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DefaultLayout.js":
/*!*************************************!*\
  !*** ./components/DefaultLayout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2671920622" + " " + "layout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "".concat(props.pad_inner == "0" ? '' : 'page-content'),
    className: "jsx-2671920622" + " " + "layout"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1793215916",
    css: "#page-content.jsx-2671920622{padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxEZWZhdWx0TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQixBQUdxQixZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxEZWZhdWx0TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICA8ZGl2IGlkPXtgJHtwcm9wcy5wYWRfaW5uZXIgPT0gXCIwXCIgPyAnJyA6ICdwYWdlLWNvbnRlbnQnfWB9ICBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICNwYWdlLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LmxheW91dCB7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM5Yzk5YztcclxuICAgICAgfVxyXG5cclxuICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\DefaultLayout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4180607755",
    css: "body{margin:0;height:100vh;background-color:#ffc9c99c;}#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxEZWZhdWx0TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCdUIsQUFHa0IsQUFNRyxTQUxDLEdBTWYsVUFMNkIsMkJBQzdCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxEZWZhdWx0TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICA8ZGl2IGlkPXtgJHtwcm9wcy5wYWRfaW5uZXIgPT0gXCIwXCIgPyAnJyA6ICdwYWdlLWNvbnRlbnQnfWB9ICBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICNwYWdlLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LmxheW91dCB7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM5Yzk5YztcclxuICAgICAgfVxyXG5cclxuICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\DefaultLayout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "header",
    className: "jsx-990569465"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-990569465"
  }, "wow!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "990569465",
    css: "#header.jsx-990569465{position:fixed;top:0;width:100%;height:45px;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2dCLEFBR3dCLGVBQ1QsTUFDSyxXQUNDLFlBQ1MscUJBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgPGRpdj53b3chPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICNoZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MainContent.js":
/*!***********************************!*\
  !*** ./components/MainContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_OtherInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OtherInformation */ "./components/OtherInformation.js");
/* harmony import */ var _components_Recommendations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Recommendations */ "./components/Recommendations.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_4__);






var MainContent = function MainContent(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "main-content-container",
    className: "jsx-1860475553"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "main-content",
    className: "jsx-1860475553"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_OtherInformation__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Recommendations__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rec_data: props.rec_data
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1860475553",
    css: "#main-content-container.jsx-1860475553{height:100%;width:100%;min-width:1050px;margin-top:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#main-content.jsx-1860475553{width:70%;height:100%;background-color:#ff3c9c9c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxNYWluQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHcUIsQUFVRixVQUNFLEVBVkQsVUFXZ0IsQ0FWVixpQkFFRCxTQVNsQixPQVJlLDBFQUNVLG1HQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXER5bGFuXFxEb2N1bWVudHNcXEdpdEh1Ylxcb3N1c3VtZS1mcm9udGVuZFxcY29tcG9uZW50c1xcTWFpbkNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3RoZXJJbmZvcm1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL090aGVySW5mb3JtYXRpb24nXHJcbmltcG9ydCBSZWNvbW1lbmRhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMnXHJcblxyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdzaW1wbGUtZmxleGJveCc7XHJcblxyXG5jb25zdCBNYWluQ29udGVudCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPE90aGVySW5mb3JtYXRpb24gLz5cclxuICAgICAgICA8UmVjb21tZW5kYXRpb25zIHJlY19kYXRhPXtwcm9wcy5yZWNfZGF0YX0vPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAjbWFpbi1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTA1MHB4O1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNjOWM5YztcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\MainContent.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./components/OtherInformation.js":
/*!****************************************!*\
  !*** ./components/OtherInformation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var OtherInformation = function OtherInformation() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3270082570"
  }, "oi", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3270082570",
    css: ".jsx-3270082570{width:50%;height:100%;background-color:#9cff33;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxPdGhlckluZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUVpQixVQUNFLFlBQ2EseUJBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxPdGhlckluZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT3RoZXJJbmZvcm1hdGlvbiA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgb2lcclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNmZjMzO1xyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdGhlckluZm9ybWF0aW9uXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\OtherInformation.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherInformation);

/***/ }),

/***/ "./components/RecItem.js":
/*!*******************************!*\
  !*** ./components/RecItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_2__);



var REC_LIMIT = 9;

var RecItem = function RecItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "rec-item",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3241802504", [REC_LIMIT]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "title-header",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3241802504", [REC_LIMIT]]])
  }, props.rec.data.title.userPreferred.substring(0, 34), " ", props.rec.data.title.userPreferred.length > 34 ? "(...)" : ""), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "footer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3241802504", [REC_LIMIT]]])
  }, "some kind of content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "episode-count",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3241802504", [REC_LIMIT]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "episode-num",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3241802504", [REC_LIMIT]]])
  }, props.rec.data.episodes), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "episode-ep",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3241802504", [REC_LIMIT]]])
  }, "ep", props.rec.data.episodes > 1 ? "s" : ""))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "avg-score",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3241802504", [REC_LIMIT]]])
  }, props.rec.data.averageScore), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3241802504",
    css: "#rec-item.__jsx-style-dynamic-selector{display:none;position:relative;width:30%;min-width:125px;height:250px;border:2px solid black;margin:0 3px 15px 3px;}#rec-item.__jsx-style-dynamic-selector:nth-child(-n+".concat(REC_LIMIT, "){display:block;}#title-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;height:40px;background-color:rgba(255,255,255,0.4);}#footer.__jsx-style-dynamic-selector{background-color:rgba(255,255,255,0.4);height:15px;width:100%;float:down;position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;opacity:0;-webkit-transition:opacity 0.75s,height 0.4s;-webkit-transition:opacity 0.75s,height 0.4s;transition:opacity 0.75s,height 0.4s;}#rec-item.__jsx-style-dynamic-selector:hover #footer.__jsx-style-dynamic-selector{height:60px;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHc0IsQUFZQyxBQUlELEFBUzZCLEFBbUI5QixZQUNGLENBNUNPLENBWW5CLFFBaUNBLFNBM0NZLFFBdUJFLEVBdEJJLFVBdUJMLE1BdEJFLEtBdUJGLFFBdEJZLEdBd0JOLENBYkUsaUJBY1YsRUF2QmEsT0F5QlQsZUF4QmYsb0RBU3lCLE9BZ0JKLDRGQWZELENBZ0JLLGlCQWZYLFlBQzhCLHVDQUM1QywrQkFjb0Isa0JBRVIsVUFDb0MsNkNBQ1Isa0ZBQ3hDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93IH0gZnJvbSAnc2ltcGxlLWZsZXhib3gnO1xyXG5cclxubGV0IFJFQ19MSU1JVCA9IDlcclxuXHJcbmNvbnN0IFJlY0l0ZW0gPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGlkPVwicmVjLWl0ZW1cIj5cclxuICAgIDxkaXYgaWQ9XCJ0aXRsZS1oZWFkZXJcIj5cclxuICAgICAgeyBwcm9wcy5yZWMuZGF0YS50aXRsZS51c2VyUHJlZmVycmVkLnN1YnN0cmluZygwLDM0KX0ge3Byb3BzLnJlYy5kYXRhLnRpdGxlLnVzZXJQcmVmZXJyZWQubGVuZ3RoID4gMzQgPyBcIiguLi4pXCIgOiBcIlwifVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgIHNvbWUga2luZCBvZiBjb250ZW50XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJlcGlzb2RlLWNvdW50XCI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPGRpdiBpZD1cImVwaXNvZGUtbnVtXCI+eyBwcm9wcy5yZWMuZGF0YS5lcGlzb2RlcyB9PC9kaXY+IDxkaXYgaWQ9XCJlcGlzb2RlLWVwXCI+ZXB7cHJvcHMucmVjLmRhdGEuZXBpc29kZXMgPiAxID8gXCJzXCIgOiBcIlwifTwvZGl2PlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cImF2Zy1zY29yZVwiPlxyXG4gICAgICB7IHByb3BzLnJlYy5kYXRhLmF2ZXJhZ2VTY29yZSB9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgI3JlYy1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDNweCAxNXB4IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JlYy1pdGVtOm50aC1jaGlsZCgtbiske1JFQ19MSU1JVH0pIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgI3RpdGxlLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjZm9vdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBkb3duO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCBoZWlnaHQgMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCBoZWlnaHQgMC40cztcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JlYy1pdGVtOmhvdmVyICNmb290ZXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY0l0ZW1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\RecItem.js */"),
    dynamic: [REC_LIMIT]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RecItem);

/***/ }),

/***/ "./components/Recommendations.js":
/*!***************************************!*\
  !*** ./components/Recommendations.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultLayout */ "./components/DefaultLayout.js");
/* harmony import */ var _RecItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecItem */ "./components/RecItem.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_5__);


// let dummydata = require('../dummydata.json')
// console.log({ dummydata })



 // tbd: take props.rec_data and make a new component <RecItem /> for each item in that list

var Recommendations = function Recommendations(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "recommendations",
    className: "jsx-1800982304"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_5__["Column"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "recommendations-title",
    className: "jsx-1800982304"
  }, "Recommended for you"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "recommendations-data",
    className: "jsx-1800982304"
  }, props.rec_data.map(function (rec) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RecItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: rec.data.id,
      rec: rec
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1800982304",
    css: "#recommendations.jsx-1800982304{width:50%;height:100%;background-color:#ff9c3caa;}#recommendations-data.jsx-1800982304{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}#recommendations-data.jsx-1800982304 #rec-item.jsx-1800982304{background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNvbW1lbmRhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUdtQixBQU1HLEFBT1EsVUFaVCxXQWFkLENBWjZCLDJCQUM3Qix5QkFJcUIscUVBQ0oseURBQ2MsMkhBQy9CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNvbW1lbmRhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgZHVtbXlkYXRhID0gcmVxdWlyZSgnLi4vZHVtbXlkYXRhLmpzb24nKVxyXG4vLyBjb25zb2xlLmxvZyh7IGR1bW15ZGF0YSB9KVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vRGVmYXVsdExheW91dCdcclxuaW1wb3J0IFJlY0l0ZW0gZnJvbSAnLi9SZWNJdGVtJ1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnc2ltcGxlLWZsZXhib3gnO1xyXG5cclxuLy8gdGJkOiB0YWtlIHByb3BzLnJlY19kYXRhIGFuZCBtYWtlIGEgbmV3IGNvbXBvbmVudCA8UmVjSXRlbSAvPiBmb3IgZWFjaCBpdGVtIGluIHRoYXQgbGlzdFxyXG5cclxuY29uc3QgUmVjb21tZW5kYXRpb25zID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBpZD1cInJlY29tbWVuZGF0aW9uc1wiPlxyXG4gICAgPENvbHVtbj5cclxuICAgICAgPGRpdiBpZD1cInJlY29tbWVuZGF0aW9ucy10aXRsZVwiPlJlY29tbWVuZGVkIGZvciB5b3U8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInJlY29tbWVuZGF0aW9ucy1kYXRhXCI+XHJcbiAgICAgICAge3Byb3BzLnJlY19kYXRhLm1hcCgocmVjKSA9PiAoXHJcbiAgICAgICAgICA8UmVjSXRlbSBrZXk9e3JlYy5kYXRhLmlkfSByZWM9e3JlY30gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbHVtbj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgI3JlY29tbWVuZGF0aW9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWMzY2FhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcmVjb21tZW5kYXRpb25zLWRhdGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNyZWNvbW1lbmRhdGlvbnMtZGF0YSAjcmVjLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuXHJcbi8vIFJlY29tbWVuZGF0aW9ucy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApXHJcbi8vICAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcclxuLy9cclxuLy8gICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKVxyXG4vL1xyXG4vLyAgIHJldHVybiB7IHNob3cgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmRhdGlvbnNcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\Recommendations.js */"
  }));
}; // Recommendations.getInitialProps = async function (context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }


/* harmony default export */ __webpack_exports__["default"] = (Recommendations);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "sidebar",
    className: "jsx-465322511"
  }, "a", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "465322511",
    css: "#sidebar.jsx-465322511{width:100px;height:100%;background-color:#ff9c9c3c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUdxQixZQUNBLFlBQ2UsMkJBQzdCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2lkZWJhciA9ICgpID0+IChcclxuICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG4gICAgYVxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAjc2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YzljM2M7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\Sidebar.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DefaultLayout */ "./components/DefaultLayout.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_MainContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainContent */ "./components/MainContent.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_7__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var User = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pad_inner: "0"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    rec_data: props.rec_data
  })));
}); // access token: { props.router.query.access_token }

User.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var res, dummydata;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:8888/dummydata");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            dummydata = _context.sent;
            console.log(dummydata);
            return _context.abrupt("return", {
              rec_data: dummydata
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/user.js */"./pages/user.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "simple-flexbox":
/*!*********************************!*\
  !*** external "simple-flexbox" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-flexbox");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=user.js.map