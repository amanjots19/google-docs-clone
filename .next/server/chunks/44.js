exports.id = 44;
exports.ids = [44];
exports.modules = {

/***/ 5624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5351);
/* harmony import */ var _material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2195);
/* harmony import */ var _material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4755);
/* harmony import */ var _material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);







function Login() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_tailwind_react_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
      src: "https://links.papareact.com/1ui",
      height: "200",
      width: "380",
      objectfir: "contain"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_tailwind_react_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "w-44 mt-10",
      color: "blue",
      buttonType: "filled",
      ripple: "light",
      onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signIn,
      children: "SignIn"
    })]
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (Login);

/***/ }),

/***/ 8616:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": function() { return /* binding */ db; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7005);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyArzNq-wB19erXebRvUC5iS4kOQxL07kh4",
  authDomain: "docs-clone-9eae2.firebaseapp.com",
  projectId: "docs-clone-9eae2",
  storageBucket: "docs-clone-9eae2.appspot.com",
  messagingSenderId: "542733692894",
  appId: "1:542733692894:web:51f7dcc506669d4a04774f"
};
const app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();
const db = app.firestore();


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;