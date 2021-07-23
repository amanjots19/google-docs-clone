(function() {
var exports = {};
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 9492:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-tailwind/react/Button"
var Button_ = __webpack_require__(5351);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@material-tailwind/react/Icon"
var Icon_ = __webpack_require__(2195);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: ./components/login.js
var login = __webpack_require__(5624);
// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__(8616);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(4651);
;// CONCATENATED MODULE: external "next/dist/next-server/server/router"
var server_router_namespaceObject = require("next/dist/next-server/server/router");;
// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__(9030);
;// CONCATENATED MODULE: external "next/dynamic"
var dynamic_namespaceObject = require("next/dynamic");;
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "draft-js"
var external_draft_js_namespaceObject = require("draft-js");;
;// CONCATENATED MODULE: ./components/TextEditor.js










const Editor = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6441, 23)).then(module => module.Editor), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6441)],
    modules: ["..\\components\\TextEditor.js -> " + "react-draft-wysiwyg"]
  }
});

function TextEditor() {
  const [session] = (0,client_.useSession)();
  const {
    0: editorState,
    1: setEditorState
  } = (0,external_react_.useState)(external_draft_js_namespaceObject.EditorState.createEmpty());
  const router = (0,client_router.useRouter)();
  const {
    id
  } = router.query;
  const [snapshot] = (0,firestore_.useDocumentOnce)(firebase.db.collection("userDocs").doc(session.user.email).collection("docs").doc(id));
  (0,external_react_.useEffect)(() => {
    var _snapshot$data;

    if (snapshot !== null && snapshot !== void 0 && (_snapshot$data = snapshot.data()) !== null && _snapshot$data !== void 0 && _snapshot$data.editorState) {
      var _snapshot$data2;

      setEditorState(external_draft_js_namespaceObject.EditorState.createWithContent((0,external_draft_js_namespaceObject.convertFromRaw)(snapshot === null || snapshot === void 0 ? void 0 : (_snapshot$data2 = snapshot.data()) === null || _snapshot$data2 === void 0 ? void 0 : _snapshot$data2.editorState)));
    }
  }, [snapshot]);

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
    firebase.db.collection("userDocs").doc(session.user.email).collection("docs").doc(id).set({
      editorState: (0,external_draft_js_namespaceObject.convertToRaw)(editorState.getCurrentContent())
    }, {
      merge: true
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-[#F8F9FA] min-h-screen pb-16",
    children: /*#__PURE__*/jsx_runtime_.jsx(Editor, {
      editorState: editorState,
      onEditorStateChange: onEditorStateChange,
      toolbarClassName: "flex sticky top-0 z-50 !justify-center mx-auto",
      editorClassName: "mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
    })
  });
}

/* harmony default export */ var components_TextEditor = (TextEditor);
;// CONCATENATED MODULE: ./pages/doc/[id].js












function Doc() {
  var _snapshot$data, _snapshot$data2;

  const [session] = (0,client_.useSession)();
  const router = (0,client_router.useRouter)();
  const {
    id
  } = router.query;
  const [snapshot, loadingSnapshot] = (0,firestore_.useDocumentOnce)(firebase.db.collection('userDocs').doc(session.user.email).collection('docs').doc(id));
  if (!session) return /*#__PURE__*/jsx_runtime_.jsx(login/* default */.Z, {});

  if (!loadingSnapshot && !(snapshot !== null && snapshot !== void 0 && (_snapshot$data = snapshot.data()) !== null && _snapshot$data !== void 0 && _snapshot$data.filename)) {
    router.replace("/");
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "flex justify-between items-center p-3 pb-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        onClick: () => router.push('/'),
        className: "cursor-pointer",
        children: /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
          name: "description",
          size: "5xl",
          color: "blue"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-grow px-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: snapshot === null || snapshot === void 0 ? void 0 : (_snapshot$data2 = snapshot.data()) === null || _snapshot$data2 === void 0 ? void 0 : _snapshot$data2.filename
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "option",
            children: "File"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "option",
            children: "Edit"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "option",
            children: "View"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "option",
            children: "Insert"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "option",
            children: "Format"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "option",
            children: "Tools"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Button_default()), {
        color: "lightBlue",
        buttonType: "filled",
        size: "regular",
        className: "hidden md:inline-flex h-10",
        rounded: false,
        block: false,
        iconOnly: false,
        ripple: "light",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
          name: "people",
          size: "md"
        }), " SHARE"]
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "cursor-pointer rounded-full h-10 w-10 ml-3",
        src: session.user.image
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_TextEditor, {})]
  });
}

/* harmony default export */ var _id_ = (Doc);
async function getServerSideProps(context) {
  const session = await (0,client_.getSession)(context);
  return {
    props: {
      session
    }
  };
}

/***/ }),

/***/ 5351:
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Button");;

/***/ }),

/***/ 2195:
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Icon");;

/***/ }),

/***/ 4755:
/***/ (function(module) {

"use strict";
module.exports = require("@material-tailwind/react/Image");;

/***/ }),

/***/ 7005:
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ 8104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6441:
/***/ (function(module) {

"use strict";
module.exports = require("react-draft-wysiwyg");;

/***/ }),

/***/ 9030:
/***/ (function(module) {

"use strict";
module.exports = require("react-firebase-hooks/firestore");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [920,44], function() { return __webpack_exec__(9492); });
module.exports = __webpack_exports__;

})();