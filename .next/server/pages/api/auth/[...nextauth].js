(function() {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

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

/***/ 5809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _nextauth_; }
});

;// CONCATENATED MODULE: external "next-auth"
var external_next_auth_namespaceObject = require("next-auth");;
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
var providers_namespaceObject = require("next-auth/providers");;
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: external "@next-auth/firebase-adapter"
var firebase_adapter_namespaceObject = require("@next-auth/firebase-adapter");;
// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__(8616);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




/* harmony default export */ var _nextauth_ = (external_next_auth_default()({
  // Configure one or more authentication providers
  providers: [providers_default().Google({
    clientId: process.env.GOOGLE_ClientID,
    clientSecret: process.env.GOOGLE_SECRET
  }) // ...add more providers here
  ],
  adapter: (0,firebase_adapter_namespaceObject.FirebaseAdapter)(firebase.db)
}));

/***/ }),

/***/ 7005:
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5809));
module.exports = __webpack_exports__;

})();