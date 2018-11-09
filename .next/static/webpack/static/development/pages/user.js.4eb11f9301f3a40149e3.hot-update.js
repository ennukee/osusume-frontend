webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./components/RecItem.js":
/*!*******************************!*\
  !*** ./components/RecItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
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
    css: "#rec-item.__jsx-style-dynamic-selector{display:none;position:relative;width:30%;min-width:125px;height:250px;border:2px solid black;margin:0 3px 15px 3px;}#rec-item.__jsx-style-dynamic-selector:nth-child(-n+".concat(REC_LIMIT, "){display:block;}#title-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;height:40px;background-color:rgba(255,255,255,0.4);}#footer.__jsx-style-dynamic-selector{background-color:rgba(255,255,255,0.4);height:15px;width:100%;float:down;position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;opacity:0;-webkit-transition:opacity 0.75s,height 0.4s;-webkit-transition:opacity 0.75s,height 0.4s;transition:opacity 0.75s,height 0.4s;}#rec-item.__jsx-style-dynamic-selector:hover #footer.__jsx-style-dynamic-selector{height:60px;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHc0IsQUFZQyxBQUlELEFBUzZCLEFBbUI5QixZQUNGLENBNUNPLENBWW5CLFFBaUNBLFNBM0NZLFFBdUJFLEVBdEJJLFVBdUJMLE1BdEJFLEtBdUJGLFFBdEJZLEdBd0JOLENBYkUsaUJBY1YsRUF2QmEsT0F5QlQsZUF4QmYsb0RBU3lCLE9BZ0JKLDRGQWZELENBZ0JLLGlCQWZYLFlBQzhCLHVDQUM1QywrQkFjb0Isa0JBRVIsVUFDb0MsNkNBQ1Isa0ZBQ3hDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFJFQ19MSU1JVCA9IDlcclxuXHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3NpbXBsZS1mbGV4Ym94JztcclxuXHJcbmNvbnN0IFJlY0l0ZW0gPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGlkPVwicmVjLWl0ZW1cIj5cclxuICAgIDxkaXYgaWQ9XCJ0aXRsZS1oZWFkZXJcIj5cclxuICAgICAgeyBwcm9wcy5yZWMuZGF0YS50aXRsZS51c2VyUHJlZmVycmVkLnN1YnN0cmluZygwLDM0KX0ge3Byb3BzLnJlYy5kYXRhLnRpdGxlLnVzZXJQcmVmZXJyZWQubGVuZ3RoID4gMzQgPyBcIiguLi4pXCIgOiBcIlwifVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgIHNvbWUga2luZCBvZiBjb250ZW50XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJlcGlzb2RlLWNvdW50XCI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPGRpdiBpZD1cImVwaXNvZGUtbnVtXCI+eyBwcm9wcy5yZWMuZGF0YS5lcGlzb2RlcyB9PC9kaXY+IDxkaXYgaWQ9XCJlcGlzb2RlLWVwXCI+ZXB7cHJvcHMucmVjLmRhdGEuZXBpc29kZXMgPiAxID8gXCJzXCIgOiBcIlwifTwvZGl2PlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cImF2Zy1zY29yZVwiPlxyXG4gICAgICB7IHByb3BzLnJlYy5kYXRhLmF2ZXJhZ2VTY29yZSB9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgI3JlYy1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDNweCAxNXB4IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JlYy1pdGVtOm50aC1jaGlsZCgtbiske1JFQ19MSU1JVH0pIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgI3RpdGxlLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjZm9vdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBkb3duO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCBoZWlnaHQgMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCBoZWlnaHQgMC40cztcclxuICAgICAgfVxyXG5cclxuICAgICAgI3JlYy1pdGVtOmhvdmVyICNmb290ZXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY0l0ZW1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\RecItem.js */"),
    dynamic: [REC_LIMIT]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RecItem);

/***/ })

})
//# sourceMappingURL=user.js.4eb11f9301f3a40149e3.hot-update.js.map