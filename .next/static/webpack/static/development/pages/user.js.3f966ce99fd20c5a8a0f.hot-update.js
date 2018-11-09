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
      id: rec.data.id,
      rec: rec
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1800982304",
    css: "#recommendations.jsx-1800982304{width:50%;height:100%;background-color:#ff9c3caa;}#recommendations-data.jsx-1800982304{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}#recommendations-data.jsx-1800982304 #rec-item.jsx-1800982304{background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNvbW1lbmRhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUdtQixBQU1HLEFBT1EsVUFaVCxXQWFkLENBWjZCLDJCQUM3Qix5QkFJcUIscUVBQ0oseURBQ2MsMkhBQy9CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNvbW1lbmRhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgZHVtbXlkYXRhID0gcmVxdWlyZSgnLi4vZHVtbXlkYXRhLmpzb24nKVxyXG4vLyBjb25zb2xlLmxvZyh7IGR1bW15ZGF0YSB9KVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vRGVmYXVsdExheW91dCdcclxuaW1wb3J0IFJlY0l0ZW0gZnJvbSAnLi9SZWNJdGVtJ1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnc2ltcGxlLWZsZXhib3gnO1xyXG5cclxuLy8gdGJkOiB0YWtlIHByb3BzLnJlY19kYXRhIGFuZCBtYWtlIGEgbmV3IGNvbXBvbmVudCA8UmVjSXRlbSAvPiBmb3IgZWFjaCBpdGVtIGluIHRoYXQgbGlzdFxyXG5cclxuY29uc3QgUmVjb21tZW5kYXRpb25zID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBpZD1cInJlY29tbWVuZGF0aW9uc1wiPlxyXG4gICAgPENvbHVtbj5cclxuICAgICAgPGRpdiBpZD1cInJlY29tbWVuZGF0aW9ucy10aXRsZVwiPlJlY29tbWVuZGVkIGZvciB5b3U8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInJlY29tbWVuZGF0aW9ucy1kYXRhXCI+XHJcbiAgICAgICAge3Byb3BzLnJlY19kYXRhLm1hcCgocmVjKSA9PiAoXHJcbiAgICAgICAgICA8UmVjSXRlbSBpZD17cmVjLmRhdGEuaWR9IHJlYz17cmVjfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29sdW1uPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAjcmVjb21tZW5kYXRpb25zIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YzNjYWE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNyZWNvbW1lbmRhdGlvbnMtZGF0YSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JlY29tbWVuZGF0aW9ucy1kYXRhICNyZWMtaXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5cclxuLy8gUmVjb21tZW5kYXRpb25zLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeVxyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YClcclxuLy8gICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4vL1xyXG4vLyAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXHJcbi8vXHJcbi8vICAgcmV0dXJuIHsgc2hvdyB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGF0aW9uc1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\Recommendations.js */"
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
//# sourceMappingURL=user.js.3f966ce99fd20c5a8a0f.hot-update.js.map