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
    css: "#rec-item.__jsx-style-dynamic-selector{display:none;position:relative;width:30%;min-width:125px;height:250px;border:2px solid black;margin:0 3px 15px 3px;}#rec-item.__jsx-style-dynamic-selector:nth-child(-n+".concat(REC_LIMIT, "){display:block;}#title-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;height:40px;background-color:rgba(255,255,255,0.4);}#footer.__jsx-style-dynamic-selector{background-color:rgba(255,255,255,0.4);height:15px;width:100%;float:down;position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;opacity:0;-webkit-transition:opacity 0.75s,height 0.4s;-webkit-transition:opacity 0.75s,height 0.4s;transition:opacity 0.75s,height 0.4s;}#rec-item.__jsx-style-dynamic-selector:hover #footer.__jsx-style-dynamic-selector{height:60px;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHc0IsQUFZQyxBQUlELEFBUzZCLEFBbUI5QixZQUNGLENBNUNPLENBWW5CLFFBaUNBLFNBM0NZLFFBdUJFLEVBdEJJLFVBdUJMLE1BdEJFLEtBdUJGLFFBdEJZLEdBd0JOLENBYkUsaUJBY1YsRUF2QmEsT0F5QlQsZUF4QmYsb0RBU3lCLE9BZ0JKLDRGQWZELENBZ0JLLGlCQWZYLFlBQzhCLHVDQUM1QywrQkFjb0Isa0JBRVIsVUFDb0MsNkNBQ1Isa0ZBQ3hDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRHlsYW5cXERvY3VtZW50c1xcR2l0SHViXFxvc3VzdW1lLWZyb250ZW5kXFxjb21wb25lbnRzXFxSZWNJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFJFQ19MSU1JVCA9IDlcclxuXHJcbmltcG9ydCB7IENvbHVtbiwgUm93IH0gZnJvbSAnc2ltcGxlLWZsZXhib3gnO1xyXG5cclxuY29uc3QgUmVjSXRlbSA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgaWQ9XCJyZWMtaXRlbVwiPlxyXG4gICAgPGRpdiBpZD1cInRpdGxlLWhlYWRlclwiPlxyXG4gICAgICB7IHByb3BzLnJlYy5kYXRhLnRpdGxlLnVzZXJQcmVmZXJyZWQuc3Vic3RyaW5nKDAsMzQpfSB7cHJvcHMucmVjLmRhdGEudGl0bGUudXNlclByZWZlcnJlZC5sZW5ndGggPiAzNCA/IFwiKC4uLilcIiA6IFwiXCJ9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cclxuICAgICAgc29tZSBraW5kIG9mIGNvbnRlbnRcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cImVwaXNvZGUtY291bnRcIj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8ZGl2IGlkPVwiZXBpc29kZS1udW1cIj57IHByb3BzLnJlYy5kYXRhLmVwaXNvZGVzIH08L2Rpdj4gPGRpdiBpZD1cImVwaXNvZGUtZXBcIj5lcHtwcm9wcy5yZWMuZGF0YS5lcGlzb2RlcyA+IDEgPyBcInNcIiA6IFwiXCJ9PC9kaXY+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiYXZnLXNjb3JlXCI+XHJcbiAgICAgIHsgcHJvcHMucmVjLmRhdGEuYXZlcmFnZVNjb3JlIH1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAjcmVjLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgICAgICBtYXJnaW46IDAgM3B4IDE1cHggM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcmVjLWl0ZW06bnRoLWNoaWxkKC1uKyR7UkVDX0xJTUlUfSkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjdGl0bGUtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNmb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGRvd247XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC43NXMsIGhlaWdodCAwLjRzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC43NXMsIGhlaWdodCAwLjRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcmVjLWl0ZW06aG92ZXIgI2Zvb3RlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjSXRlbVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Dylan\\Documents\\GitHub\\osusume-frontend\\components\\RecItem.js */"),
    dynamic: [REC_LIMIT]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RecItem);

/***/ })

})
//# sourceMappingURL=user.js.136aa4cdd044d7a8163e.hot-update.js.map