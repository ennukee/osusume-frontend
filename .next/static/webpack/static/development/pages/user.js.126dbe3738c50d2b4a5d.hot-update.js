webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./components/Recommendations.js":
/*!***************************************!*\
  !*** ./components/Recommendations.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultLayout */ "./components/DefaultLayout.js");
/* harmony import */ var _RecItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecItem */ "./components/RecItem.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
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

/***/ })

})
//# sourceMappingURL=user.js.126dbe3738c50d2b4a5d.hot-update.js.map