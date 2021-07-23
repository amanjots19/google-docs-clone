(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1947:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-tailwind/react/Button"
var Button_ = __webpack_require__(5351);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@material-tailwind/react/Icon"
var Icon_ = __webpack_require__(2195);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
;// CONCATENATED MODULE: ./components/header.js






function Header() {
  var _session$user;

  const [session] = (0,client_.useSession)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "sticky top-0 z-40 flex items-center px-4 py-2 shadow-md bg-white",
    children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      color: "gray",
      buttonType: "outline",
      rounded: true,
      iconOnly: true,
      ripple: "dark",
      className: "h-15 w-15 mr-3 border-0",
      children: /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
        name: "menu",
        size: "2xl"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
      name: "description",
      size: "4xl",
      color: "blue"
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: " ml-2 text-gray-700 text-2xl",
      children: "Docs"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md focus-within:bg-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
        name: "search",
        size: "2xl",
        color: "gray"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        placeholder: "Search",
        className: "flex-grow px-5 text-base bg-transparent outline-none"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      color: "gray",
      buttonType: "outline",
      rounded: true,
      iconOnly: true,
      ripple: "dark",
      className: "ml-5 md:ml-20 h-15 w-15 mr-3 border-0",
      children: /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
        name: "apps",
        size: "2xl",
        color: "gray"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      onClick: client_.signOut,
      loading: "lazy",
      className: "cursor-pointer h-8 w-8 rounded-full mx-2",
      src: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.image
    })]
  });
}

/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: external "@material-tailwind/react/Image"
var Image_ = __webpack_require__(4755);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);
;// CONCATENATED MODULE: ./components/section.js






const Section = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "bg-[#F8F9FA] pb-10 px-10",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-3xl mx-auto",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between pt-6 pb-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-gray-700  pt-2",
          children: "Start a new Document"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          color: "gray",
          buttonType: "outline",
          rounded: true,
          iconOnly: true,
          ripple: "dark",
          className: "h-15 w-15 mr-3 border-0",
          children: /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
            name: "more_vert",
            size: "2xl"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => props.fun(true),
          className: "relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700",
          children: /*#__PURE__*/jsx_runtime_.jsx((Image_default()), {
            src: "https://links.papareact.com/pju",
            layout: "fill"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "mt-2 ml-2 font-semibold text-sm text-gray-700",
          children: "Blank"
        })]
      })]
    })
  });
};

/* harmony default export */ var section = (Section);
// EXTERNAL MODULE: ./components/login.js
var login = __webpack_require__(5624);
;// CONCATENATED MODULE: external "@material-tailwind/react/Modal"
var Modal_namespaceObject = require("@material-tailwind/react/Modal");;
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: external "@material-tailwind/react/ModalBody"
var ModalBody_namespaceObject = require("@material-tailwind/react/ModalBody");;
var ModalBody_default = /*#__PURE__*/__webpack_require__.n(ModalBody_namespaceObject);
;// CONCATENATED MODULE: external "@material-tailwind/react/ModalFooter"
var ModalFooter_namespaceObject = require("@material-tailwind/react/ModalFooter");;
var ModalFooter_default = /*#__PURE__*/__webpack_require__.n(ModalFooter_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(7005);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);
// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__(8616);
// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__(9030);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(4651);
;// CONCATENATED MODULE: ./components/DocumentRow.js






function DocumentRow({
  id,
  fileName,
  date
}) {
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: () => router.push(`/doc/${id}`),
    className: "flex item-center p-4 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700",
    children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
      name: "article",
      size: "3xl",
      color: "blue"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "flex-grow pl-5 w-10 pr-10 truncate",
      children: fileName
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "pr-5 text-sm",
      children: date === null || date === void 0 ? void 0 : date.toDate().toLocaleDateString()
    }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
      color: "gray",
      buttonType: "outline",
      rounded: true,
      iconOnly: true,
      ripple: "dark",
      className: "border-0",
      children: /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
        name: "more_vert",
        size: "3xl"
      })
    })]
  });
}

/* harmony default export */ var components_DocumentRow = (DocumentRow);
;// CONCATENATED MODULE: ./pages/index.js

















function Home() {
  const [session] = (0,client_.useSession)();
  const {
    0: showModal,
    1: setshowModal
  } = (0,external_react_.useState)(false);
  const {
    0: input,
    1: setInput
  } = (0,external_react_.useState)('');
  const [snapshot] = (0,firestore_.useCollectionOnce)(firebase.db.collection('userDocs').doc(session.user.email).collection('docs').orderBy('timestamp', 'desc'));
  if (!session) return /*#__PURE__*/jsx_runtime_.jsx(login/* default */.Z, {});

  const createDocument = () => {
    if (!input) return;
    firebase.db.collection("userDocs").doc(session.user.email).collection("docs").add({
      filename: input,
      timestamp: external_firebase_default().firestore.FieldValue.serverTimestamp()
    });
    setInput('');
    setshowModal(false);
  };

  const modal = /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()), {
    size: "sm",
    active: showModal,
    toggler: () => setshowModal(false),
    children: [/*#__PURE__*/jsx_runtime_.jsx((ModalBody_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
        value: input,
        onChange: e => setInput(e.target.value),
        type: "text",
        className: "outline-nonde w-full",
        placeholder: "Enter name of document...",
        onKeyDown: e => e.key === "Enter" && CreateDocument()
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ModalFooter_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        color: "blue",
        buttonType: "link",
        onClick: e => setshowModal(false),
        ripple: "dark",
        children: "Cancel"
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        color: "blue",
        onClick: createDocument,
        ripple: "light",
        children: "Create"
      })]
    })]
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Google Docs By Amansky"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(header, {}), modal, /*#__PURE__*/jsx_runtime_.jsx(section, {
      fun: setshowModal
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "bg-white px-10 md:px-0",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "max-w-3xl mx-auto py-8 text-sm text-gray-700",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex justify-between items-center pb-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "pt-1 font-medium flex-grow",
            children: "My Documents"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: " pt-1 flex items-center mr-12",
            children: "Date Created"
          }), /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
            className: "pt-1",
            name: "folder",
            size: "3xl",
            color: "gray"
          })]
        }), snapshot === null || snapshot === void 0 ? void 0 : snapshot.docs.map(doc => /*#__PURE__*/jsx_runtime_.jsx(components_DocumentRow, {
          id: doc.id,
          fileName: doc.data().filename,
          date: doc.data().timestamp
        }, doc.id))]
      })
    })]
  });
}
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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [920,44], function() { return __webpack_exec__(1947); });
module.exports = __webpack_exports__;

})();