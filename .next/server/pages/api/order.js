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
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url/":
/*!*************************************!*\
  !*** external "@sanity/image-url/" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url/");

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url/ */ \"@sanity/image-url/\");\n/* harmony import */ var _sanity_image_url___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url___WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"7bt0im84\",\n    dataset: \"production\",\n    apiVersion: \"2023-01-17\",\n    useCdn: true,\n    token: \"skAv7kZGaWLCUbMH0yUM7IADuhlnZYSUz5mcSILVnhAkvVQOArUbsBioGc6G1AVeL9eD9toxdTrBFGXGWWDAABpZHxUgqaO8VbiBVI75aU0NdQhu1nKdJg5whzKJGjBt9iM8MashbioOWS4VcNvGVmGK1W3wdk2CnRLw0zHnHDG5idjntyIv\"\n});\nconst builder = _sanity_image_url___WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = (source)=>builder.image(source);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNPO0FBRTFDLE1BQU1FLE1BQU0sR0FBR0YscURBQVksQ0FBQztJQUMvQkcsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFLElBQUk7SUFDWkMsS0FBSyxFQUFFLHNMQUFzTDtDQUNoTSxDQUFDLENBQUM7QUFFSCxNQUFNQyxPQUFPLEdBQUdQLHlEQUFlLENBQUNDLE1BQU0sQ0FBQztBQUVoQyxNQUFNTyxNQUFNLEdBQUcsQ0FBQ0MsTUFBTSxHQUFLRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YXNob3AvLi9saWIvY2xpZW50LmpzP2U2OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiQHNhbml0eS9jbGllbnRcIjtcclxuaW1wb3J0IEltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmwvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcclxuICAgIHByb2plY3RJZDogXCI3YnQwaW04NFwiLFxyXG4gICAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXHJcbiAgICBhcGlWZXJzaW9uOiBcIjIwMjMtMDEtMTdcIixcclxuICAgIHVzZUNkbjogdHJ1ZSxcclxuICAgIHRva2VuOiBcInNrQXY3a1pHYVdMQ1ViTUgweVVNN0lBRHVobG5aWVNVejVtY1NJTFZuaEFrdlZRT0FyVWJzQmlvR2M2RzFBVmVMOWVEOXRveGRUckJGR1hHV1dEQUFCcFpIeFVncWFPOFZiaUJWSTc1YVUwTmRRaHUxbktkSmc1d2h6S0pHakJ0OWlNOE1hc2hiaW9PV1M0VmNOdkdWbUdLMVczd2RrMkNuUkx3MHpIbkhERzVpZGpudHlJdlwiXHJcbn0pO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IEltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVybEZvciA9IChzb3VyY2UpID0+IGJ1aWxkZXIuaW1hZ2Uoc291cmNlKTsiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiSW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJ0b2tlbiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/order.js":
/*!****************************!*\
  !*** ./pages/api/order.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            const newOrder = await JSON.parse(req.body);\n            try {\n                await _lib_client__WEBPACK_IMPORTED_MODULE_0__.client.create({\n                    _type: \"order\",\n                    name: newOrder.name,\n                    address: newOrder.address,\n                    phone: newOrder.phone,\n                    total: newOrder.total,\n                    method: newOrder.PaymentMethod,\n                    status: 1\n                }).then((data)=>{\n                    res.status(200).json(data._id);\n                });\n            } catch (error) {\n                console.log(error);\n                res.status(500).json({\n                    msg: \"Error check console\"\n                });\n            }\n            break;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFFekIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUMzQyxPQUFPRCxHQUFHLENBQUNFLE1BQU07UUFDYixLQUFLLE1BQU07WUFDUCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1lBQzNDLElBQUk7Z0JBQ0EsTUFBTVIsc0RBQWEsQ0FBQztvQkFDaEJVLEtBQUssRUFBRyxPQUFPO29CQUNmQyxJQUFJLEVBQUdOLFFBQVEsQ0FBQ00sSUFBSTtvQkFDcEJDLE9BQU8sRUFBR1AsUUFBUSxDQUFDTyxPQUFPO29CQUMxQkMsS0FBSyxFQUFHUixRQUFRLENBQUNRLEtBQUs7b0JBQ3RCQyxLQUFLLEVBQUdULFFBQVEsQ0FBQ1MsS0FBSztvQkFDdEJWLE1BQU0sRUFBR0MsUUFBUSxDQUFDVSxhQUFhO29CQUMvQkMsTUFBTSxFQUFHLENBQUM7aUJBQ2IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO29CQUNkZixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQztpQkFDakMsQ0FBQzthQUNMLENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7Z0JBQ25CbEIsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQztvQkFBRUssR0FBRyxFQUFHLHFCQUFxQjtpQkFBQyxDQUFDLENBQUM7YUFDeEQ7WUFDRCxNQUFNO0tBQ2I7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bpenphc2hvcC8uL3BhZ2VzL2FwaS9vcmRlci5qcz8zOTk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2xpZW50fSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XHJcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICBjb25zdCBuZXdPcmRlciA9IGF3YWl0IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgX3R5cGUgOiAnb3JkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiBuZXdPcmRlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgOiBuZXdPcmRlci5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lIDogbmV3T3JkZXIucGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgOiBuZXdPcmRlci50b3RhbCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgOiBuZXdPcmRlci5QYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA6IDFcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLl9pZClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZyA6IFwiRXJyb3IgY2hlY2sgY29uc29sZVwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5ld09yZGVyIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZSIsIl90eXBlIiwibmFtZSIsImFkZHJlc3MiLCJwaG9uZSIsInRvdGFsIiwiUGF5bWVudE1ldGhvZCIsInN0YXR1cyIsInRoZW4iLCJkYXRhIiwianNvbiIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order.js"));
module.exports = __webpack_exports__;

})();