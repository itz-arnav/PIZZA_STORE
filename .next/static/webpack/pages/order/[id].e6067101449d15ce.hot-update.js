"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order/[id]",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Logo.png */ \"./assets/Logo.png\");\n/* harmony import */ var _iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconscout/react-unicons */ \"./node_modules/@iconscout/react-unicons/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), Order = ref[0], setOrder = ref[1];\n    useEffect(function() {\n        setOrder(localStorage.getItem(\"order\"));\n    });\n    var items = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__.useStore)(function(state) {\n        return state.cart.pizzas.length;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _assets_Logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"\",\n                        width: \"50\",\n                        height: \"50\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"FOOD WEBSITE\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/#menu\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"../cart\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().cart),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().bag),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__.UilShoppingBag, {\n                                size: \"35\",\n                                color: \"2E2E2E\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().badge),\n                                children: items\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Header.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(Header, \"sOtep3/Kynf+bxyCz8corNtVTJ4=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_4__.useStore\n    ];\n});\n_c = Header;\n;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNmO0FBQ087QUFDa0I7QUFDM0I7QUFDYTtBQUNUOztBQUVsQixTQUFTTyxNQUFNLEdBQUc7O0lBQzdCLElBQTBCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CRSxLQUFLLEdBQWNGLEdBQVksR0FBMUIsRUFBRUcsUUFBUSxHQUFJSCxHQUFZLEdBQWhCO0lBRXRCSSxTQUFTLENBQUMsV0FBTTtRQUNaRCxRQUFRLENBQUNFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDM0MsQ0FBQztJQUVGLElBQU1DLEtBQUssR0FBR1Isc0RBQVEsQ0FBQyxTQUFDUyxLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLE1BQU07S0FBQSxDQUFDO0lBQzNELHFCQUNBLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRW5CLHlFQUFVOzswQkFHdEIsOERBQUNrQixLQUFHO2dCQUFDQyxTQUFTLEVBQUVuQix1RUFBUTs7a0NBQ3BCLDhEQUFDQyxtREFBSzt3QkFBQ29CLEdBQUcsRUFBRW5CLHdEQUFJO3dCQUFFb0IsR0FBRyxFQUFDLEVBQUU7d0JBQUNDLEtBQUssRUFBQyxJQUFJO3dCQUFDQyxNQUFNLEVBQUMsSUFBSTs7Ozs7NEJBQVM7a0NBQ3hELDhEQUFDQyxNQUFJO2tDQUFDLGNBQVk7Ozs7OzRCQUFPOzs7Ozs7b0JBQ3ZCOzBCQUlOLDhEQUFDQyxJQUFFO2dCQUFDUCxTQUFTLEVBQUVuQix1RUFBUTs7a0NBQ25CLDhEQUFDSSxrREFBSTt3QkFBQ3dCLElBQUksRUFBSSxHQUFDO2tDQUNmLDRFQUFDQyxJQUFFO3NDQUFDLE1BQUk7Ozs7O2dDQUFLOzs7Ozs0QkFDTjtrQ0FDUCw4REFBQ3pCLGtEQUFJO3dCQUFDd0IsSUFBSSxFQUFJLFFBQU07a0NBQ3BCLDRFQUFDQyxJQUFFO3NDQUFDLE1BQUk7Ozs7O2dDQUFLOzs7Ozs0QkFDTjtrQ0FDUCw4REFBQ0EsSUFBRTtrQ0FBQyxTQUFPOzs7Ozs0QkFBSzs7Ozs7O29CQUNmOzBCQUdMLDhEQUFDekIsa0RBQUk7Z0JBQUN3QixJQUFJLEVBQUUsU0FBUzswQkFDckIsNEVBQUNWLEtBQUc7b0JBQUNDLFNBQVMsRUFBRW5CLHVFQUFROzhCQUNwQiw0RUFBQ2tCLEtBQUc7d0JBQUNDLFNBQVMsRUFBRW5CLHNFQUFPOzswQ0FDbkIsOERBQUNHLG9FQUFjO2dDQUFDNEIsSUFBSSxFQUFDLElBQUk7Z0NBQUNDLEtBQUssRUFBQyxRQUFROzs7OztvQ0FBRTswQ0FDMUMsOERBQUNkLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRW5CLHdFQUFTOzBDQUFHYSxLQUFLOzs7OztvQ0FBTzs7Ozs7OzRCQUN0Qzs7Ozs7d0JBQ0o7Ozs7O29CQUNDOzs7Ozs7WUFDTCxDQUNKO0NBQ0w7R0F4Q3VCTixNQUFNOztRQU9aRixrREFBUTs7O0FBUEZFLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4PzU2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9hc3NldHMvTG9nby5wbmdcIjtcclxuaW1wb3J0IHtVaWxTaG9wcGluZ0JhZ30gZnJvbSBcIkBpY29uc2NvdXQvcmVhY3QtdW5pY29uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtPcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRPcmRlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmNhcnQucGl6emFzLmxlbmd0aClcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmhlYWRlcn0+XHJcbiAgICAgICAgey8qIExPR08gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubG9nb30+IFxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICA8c3Bhbj5GT09EIFdFQlNJVEU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBNRU5VICovfVxyXG5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjc3MubWVudX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL2B9PlxyXG4gICAgICAgICAgICA8bGk+SG9tZTwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0ge2AvI21lbnVgfT5cclxuICAgICAgICAgICAgPGxpPk1lbnU8L2xpPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICB7LyogQ0FSVCAqL31cclxuICAgICAgICA8TGluayBocmVmPSBcIi4uL2NhcnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNhcnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJhZ30+XHJcbiAgICAgICAgICAgICAgICA8VWlsU2hvcHBpbmdCYWcgc2l6ZT1cIjM1XCIgY29sb3I9XCIyRTJFMkVcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJhZGdlfT57aXRlbXN9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNzcyIsIkltYWdlIiwibG9nbyIsIlVpbFNob3BwaW5nQmFnIiwiTGluayIsInVzZVN0b3JlIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJPcmRlciIsInNldE9yZGVyIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1zIiwic3RhdGUiLCJjYXJ0IiwicGl6emFzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwidWwiLCJtZW51IiwiaHJlZiIsImxpIiwiYmFnIiwic2l6ZSIsImNvbG9yIiwiYmFkZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});