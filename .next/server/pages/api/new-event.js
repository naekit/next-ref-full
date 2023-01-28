"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-event";
exports.ids = ["pages/api/new-event"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-event.js":
/*!********************************!*\
  !*** ./pages/api/new-event.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// /api/new-event\n// POST\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://natkha:potemkin99@cluster0.mqi9zgw.mongodb.net/nextref?retryWrites=true&w=majority`);\n        const db = client.db();\n        const meetupsCollection = db.collection(\"events\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Event inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LWV2ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUNyQyxpQkFBaUI7QUFDakIsT0FBTztBQUVQLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQzFCLE1BQU1DLE9BQU9ILElBQUlJLElBQUk7UUFFckIsTUFBTUMsU0FBUyxNQUFNUCx3REFBbUIsQ0FDdkMsQ0FBQyxnR0FBZ0csQ0FBQztRQUVuRyxNQUFNUyxLQUFLRixPQUFPRSxFQUFFO1FBQ3BCLE1BQU1DLG9CQUFvQkQsR0FBR0UsVUFBVSxDQUFDO1FBRXhDLE1BQU1DLFNBQVMsTUFBTUYsa0JBQWtCRyxTQUFTLENBQUNSO1FBRWpEUyxRQUFRQyxHQUFHLENBQUNIO1FBQ1pMLE9BQU9TLEtBQUs7UUFFWmIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWtCO0lBQ25ELENBQUM7QUFDRjtBQUVBLGlFQUFlbEIsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LWV2ZW50LmpzP2FkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG4vLyAvYXBpL25ldy1ldmVudFxuLy8gUE9TVFxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuXHRcdGNvbnN0IGRhdGEgPSByZXEuYm9keVxuXG5cdFx0Y29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcblx0XHRcdGBtb25nb2RiK3NydjovL25hdGtoYTpwb3RlbWtpbjk5QGNsdXN0ZXIwLm1xaTl6Z3cubW9uZ29kYi5uZXQvbmV4dHJlZj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXG5cdFx0KVxuXHRcdGNvbnN0IGRiID0gY2xpZW50LmRiKClcblx0XHRjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJldmVudHNcIilcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKVxuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KVxuXHRcdGNsaWVudC5jbG9zZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiRXZlbnQgaW5zZXJ0ZWQhXCIgfSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-event.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-event.js"));
module.exports = __webpack_exports__;

})();