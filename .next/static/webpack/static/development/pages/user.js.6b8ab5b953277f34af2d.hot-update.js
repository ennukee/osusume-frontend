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
    css: "#recommendations.jsx-1800982304{width:50%;height:100%;background-color:#ff9c3caa;}#recommendations-data.jsx-1800982304{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}#recommendations-data.jsx-1800982304 #rec-item.jsx-1800982304{background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNvbW1lbmRhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUdtQixBQU1HLEFBT1EsVUFaVCxXQWFkLENBWjZCLDJCQUM3Qix5QkFJcUIscUVBQ0oseURBQ2MsMkhBQy9CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNvbW1lbmRhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgZHVtbXlkYXRhID0gcmVxdWlyZSgnLi4vZHVtbXlkYXRhLmpzb24nKVxyXG4vLyBjb25zb2xlLmxvZyh7IGR1bW15ZGF0YSB9KVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vRGVmYXVsdExheW91dCdcclxuaW1wb3J0IFJlY0l0ZW0gZnJvbSAnLi9SZWNJdGVtJ1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uLCBSb3cgfSBmcm9tICdzaW1wbGUtZmxleGJveCc7XHJcblxyXG4vLyB0YmQ6IHRha2UgcHJvcHMucmVjX2RhdGEgYW5kIG1ha2UgYSBuZXcgY29tcG9uZW50IDxSZWNJdGVtIC8+IGZvciBlYWNoIGl0ZW0gaW4gdGhhdCBsaXN0XHJcblxyXG5jb25zdCBSZWNvbW1lbmRhdGlvbnMgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGlkPVwicmVjb21tZW5kYXRpb25zXCI+XHJcbiAgICA8Q29sdW1uPlxyXG4gICAgICA8ZGl2IGlkPVwicmVjb21tZW5kYXRpb25zLXRpdGxlXCI+UmVjb21tZW5kZWQgZm9yIHlvdTwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwicmVjb21tZW5kYXRpb25zLWRhdGFcIj5cclxuICAgICAgICB7cHJvcHMucmVjX2RhdGEubWFwKChyZWMpID0+IChcclxuICAgICAgICAgIDxSZWNJdGVtIGlkPXtyZWMuZGF0YS5pZH0gcmVjPXtyZWN9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db2x1bW4+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICNyZWNvbW1lbmRhdGlvbnMge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjljM2NhYTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JlY29tbWVuZGF0aW9ucy1kYXRhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcmVjb21tZW5kYXRpb25zLWRhdGEgI3JlYy1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcblxyXG4vLyBSZWNvbW1lbmRhdGlvbnMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKVxyXG4vLyAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vXHJcbi8vICAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YClcclxuLy9cclxuLy8gICByZXR1cm4geyBzaG93IH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjb21tZW5kYXRpb25zXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\Recommendations.js */"
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
//# sourceMappingURL=user.js.6b8ab5b953277f34af2d.hot-update.js.map