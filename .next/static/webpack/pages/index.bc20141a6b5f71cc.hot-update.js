"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Menu.module.css */ \"./styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Menu(pizzas) {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        id: pizzas.id,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"OUR MENU\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Food that Always\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Make you fall in love\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                children: pizzas.pizzas.map(function(pizza, id) {\n                    var src = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(pizza.image).url();\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().pizza),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"./pizza/\".concat(pizza.slug.current),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        loader: function() {\n                                            return src;\n                                        },\n                                        src: src,\n                                        alt: \"\",\n                                        objectFit: \"cover\",\n                                        layout: \"fill\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 37\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: pizza.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"var(--themeRed)\"\n                                        },\n                                        children: \"\\u20B9\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 40\n                                    }, _this),\n                                    \" \",\n                                    pizza.price[1]\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, id, true, {\n                        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJECTS PART 3\\\\PIZZA_STORE\\\\components\\\\Menu.jsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n};\n_c = Menu;\n;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNiO0FBQ1E7QUFDVjtBQUVkLFNBQVNJLElBQUksQ0FBQ0MsTUFBTSxFQUFFOztJQUVqQyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVQLDBFQUFhO1FBQUVTLEVBQUUsRUFBRUosTUFBTSxDQUFDSSxFQUFFOzswQkFDeEMsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAsd0VBQVc7O2tDQUN2Qiw4REFBQ1csTUFBSTtrQ0FBQyxVQUFROzs7Ozs0QkFBTztrQ0FDckIsOERBQUNBLE1BQUk7a0NBQUMsa0JBQWdCOzs7Ozs0QkFBTztrQ0FDN0IsOERBQUNBLE1BQUk7a0NBQUMsdUJBQXFCOzs7Ozs0QkFBTzs7Ozs7O29CQUNoQzswQkFLTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFFUCxxRUFBUTswQkFDbkJLLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDUSxHQUFHLENBQUUsU0FBQ0MsS0FBSyxFQUFFTCxFQUFFLEVBQUk7b0JBQzlCLElBQU1NLEdBQUcsR0FBR2IsbURBQU0sQ0FBQ1ksS0FBSyxDQUFDRSxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO29CQUNyQyxxQkFDSSw4REFBQ1gsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFUCxzRUFBUzs7MENBQ3JCLDhEQUFDRyxrREFBSTtnQ0FBQ2UsSUFBSSxFQUFHLFVBQVMsQ0FBcUIsT0FBbkJKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxPQUFPLENBQUU7MENBQ3hDLDRFQUFDZCxLQUFHO29DQUFDQyxTQUFTLEVBQUVQLDZFQUFnQjs4Q0FDNUIsNEVBQUNDLG1EQUFLO3dDQUNOcUIsTUFBTSxFQUFJO21EQUFLUCxHQUFHO3lDQUFBO3dDQUNsQkEsR0FBRyxFQUFFQSxHQUFHO3dDQUFFUSxHQUFHLEVBQUMsRUFBRTt3Q0FDaEJDLFNBQVMsRUFBQyxPQUFPO3dDQUNqQkMsTUFBTSxFQUFDLE1BQU07Ozs7OzZDQUNYOzs7Ozt5Q0FDQTs7Ozs7cUNBQ0g7MENBQ0gsOERBQUNkLE1BQUk7MENBQUVHLEtBQUssQ0FBQ1ksSUFBSTs7Ozs7cUNBQVE7MENBQ3pCLDhEQUFDZixNQUFJOztvQ0FBQyxHQUFDO2tEQUFBLDhEQUFDQSxNQUFJO3dDQUFDZ0IsS0FBSyxFQUFFOzRDQUFDQyxLQUFLLEVBQUcsaUJBQWlCO3lDQUFDO2tEQUFFLFFBQUM7Ozs7OzZDQUFPO29DQUFBLEdBQUM7b0NBQUNkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7O3FDQUFROzt1QkFaeERwQixFQUFFOzs7OzZCQWE3QixDQUNUO2lCQUNKLENBQUM7Ozs7O29CQUNBOzs7Ozs7WUFFSixDQUNSO0NBQ0w7QUFyQ3VCTCxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVudS5qc3g/Yjg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvTWVudS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vbGliL2NsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KHBpenphcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jb250YWluZXJ9IGlkPXtwaXp6YXMuaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+T1VSIE1FTlU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Gb29kIHRoYXQgQWx3YXlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TWFrZSB5b3UgZmFsbCBpbiBsb3ZlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQaXp6YXMgKi99XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tZW51fT5cclxuICAgICAgICAgICAgICAgIHtwaXp6YXMucGl6emFzLm1hcCggKHBpenphLCBpZCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdXJsRm9yKHBpenphLmltYWdlKS51cmwoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBpenphfSBrZXkgPXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPSB7YC4vcGl6emEvJHtwaXp6YS5zbHVnLmN1cnJlbnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbWFnZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyID0geygpPT4gc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY30gYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGl6emEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3IgOiBcInZhcigtLXRoZW1lUmVkKVwifX0+4oK5PC9zcGFuPiB7cGl6emEucHJpY2VbMV19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNzcyIsIkltYWdlIiwidXJsRm9yIiwiTGluayIsIk1lbnUiLCJwaXp6YXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpZCIsImhlYWRpbmciLCJzcGFuIiwibWVudSIsIm1hcCIsInBpenphIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJocmVmIiwic2x1ZyIsImN1cnJlbnQiLCJpbWFnZVdyYXBwZXIiLCJsb2FkZXIiLCJhbHQiLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJuYW1lIiwic3R5bGUiLCJjb2xvciIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});