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

/***/ "./components/TopTrendingList/index.tsx":
/*!**********************************************!*\
  !*** ./components/TopTrendingList/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopTrendingList.module.scss */ \"./components/TopTrendingList/TopTrendingList.module.scss\");\n/* harmony import */ var _TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar TopTrendingList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), width = ref[0], setWidth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWidth(window.innerWidth);\n        console.log(width);\n    }, [\n        width\n    ]);\n    var TrendingItem = [\n        {\n            id: 1,\n            name: \"Bored Ape Yatch Club\",\n            stat: \"516,879\",\n            image: \"/top-trending-list-1.png\"\n        },\n        {\n            id: 2,\n            name: \"DeGods\",\n            stat: \"494,909\",\n            image: \"/top-trending-list-2.png\"\n        },\n        {\n            id: 3,\n            name: \"Azuki\",\n            stat: \"467,020\",\n            image: \"/top-trending-list-3.png\"\n        },\n        {\n            id: 4,\n            name: \"Finiliar\",\n            stat: \"398,929\",\n            image: \"/top-trending-list-4.png\"\n        },\n        {\n            id: 5,\n            name: \"Projectcrak\",\n            stat: \"389,383\",\n            image: \"/top-trending-list-5.png\"\n        },\n        {\n            id: 6,\n            name: \"MoonPudgy\",\n            stat: \"350,020\",\n            image: \"/top-trending-list-6.png\"\n        },\n        {\n            id: 7,\n            name: \"Lady Ape Club\",\n            stat: \"330,202\",\n            image: \"/top-trending-list-7.png\"\n        },\n        {\n            id: 8,\n            name: \"Mutant Ape Yatch Club\",\n            stat: \"321,020\",\n            image: \"/top-trending-list-8.png\"\n        },\n        {\n            id: 9,\n            name: \"Art Blocks Curated\",\n            stat: \"315,302\",\n            image: \"/top-trending-list-9.png\"\n        }, \n    ];\n    var TopTrendingItem = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n            container: true,\n            children: width <= 425 ? TrendingItem.slice(0, 3).map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    item: true,\n                    xs: 12,\n                    sm: 6,\n                    md: 4,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().topTrendingContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                children: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image\n                            }, void 0, false, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 41\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().stat),\n                                        children: item.stat\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 41\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 37\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 33\n                    }, _this)\n                }, item.id, false, {\n                    fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 29\n                }, _this);\n            }) : width <= 768 ? TrendingItem.slice(0, 6).map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    item: true,\n                    xs: 12,\n                    sm: 6,\n                    md: 4,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().topTrendingContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                children: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image\n                            }, void 0, false, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 41\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().stat),\n                                        children: item.stat\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 41\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 37\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 33\n                    }, _this)\n                }, item.id, false, {\n                    fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 29\n                }, _this);\n            }) : TrendingItem.map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    item: true,\n                    xs: 12,\n                    sm: 6,\n                    md: 4,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().topTrendingContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                children: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image\n                            }, void 0, false, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 37\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().stat),\n                                        children: item.stat\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 37\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 29\n                    }, _this)\n                }, item.id, false, {\n                    fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 25\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n            lineNumber: 73,\n            columnNumber: 13\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_TopTrendingList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mainHeading),\n                    children: \"Top Trending Collections Over Last 7 Days\"\n                }, void 0, false, {\n                    fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TopTrendingItem, {}, void 0, false, {\n                    fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n            lineNumber: 126,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/phoommilintanush/Documents/GitHub/bitproject/components/TopTrendingList/index.tsx\",\n        lineNumber: 125,\n        columnNumber: 9\n    }, _this);\n};\n_s(TopTrendingList, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = TopTrendingList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopTrendingList);\nvar _c;\n$RefreshReg$(_c, \"TopTrendingList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcFRyZW5kaW5nTGlzdC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQWlEO0FBQ0U7QUFDZDtBQUVyQyxJQUFNSyxlQUFlLEdBQUcsV0FBTTs7SUFFMUIsSUFBMEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJLLEtBQUssR0FBY0wsR0FBVyxHQUF6QixFQUFFTSxRQUFRLEdBQUlOLEdBQVcsR0FBZjtJQUV0QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pLLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztRQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUssQ0FBQyxDQUFDO0tBQ3RCLEVBQUU7UUFBQ0EsS0FBSztLQUFDLENBQUM7SUFFWCxJQUFNTSxZQUFZLEdBQUc7UUFDakI7WUFDSUMsRUFBRSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QkMsSUFBSSxFQUFFLFNBQVM7WUFDZkMsS0FBSyxFQUFFLDBCQUEwQjtTQUNwQztRQUNEO1lBQ0lILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxRQUFRO1lBQ2RDLElBQUksRUFBRSxTQUFTO1lBQ2ZDLEtBQUssRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNJSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxJQUFJLEVBQUUsT0FBTztZQUNiQyxJQUFJLEVBQUUsU0FBUztZQUNmQyxLQUFLLEVBQUUsMEJBQTBCO1NBQ3BDO1FBQ0Q7WUFDSUgsRUFBRSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFLFVBQVU7WUFDaEJDLElBQUksRUFBRSxTQUFTO1lBQ2ZDLEtBQUssRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNJSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsSUFBSSxFQUFFLFNBQVM7WUFDZkMsS0FBSyxFQUFFLDBCQUEwQjtTQUNwQztRQUNEO1lBQ0lILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxXQUFXO1lBQ2pCQyxJQUFJLEVBQUUsU0FBUztZQUNmQyxLQUFLLEVBQUUsMEJBQTBCO1NBQ3BDO1FBQ0Q7WUFDSUgsRUFBRSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFLGVBQWU7WUFDckJDLElBQUksRUFBRSxTQUFTO1lBQ2ZDLEtBQUssRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNJSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxJQUFJLEVBQUUsdUJBQXVCO1lBQzdCQyxJQUFJLEVBQUUsU0FBUztZQUNmQyxLQUFLLEVBQUUsMEJBQTBCO1NBQ3BDO1FBQ0Q7WUFDSUgsRUFBRSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQkMsSUFBSSxFQUFFLFNBQVM7WUFDZkMsS0FBSyxFQUFFLDBCQUEwQjtTQUNwQztLQUNKO0lBRUQsSUFBTUMsZUFBZSxHQUFHLFdBQU07UUFDMUIscUJBQ0ksOERBQUNiLCtDQUFJO1lBQUNjLFNBQVM7c0JBQ1RaLEtBQUssSUFBSSxHQUFHLEdBQ1ZNLFlBQVksQ0FBQ08sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQVMsRUFBSztnQkFDeEMscUJBQ0ksOERBQUNqQiwrQ0FBSTtvQkFBQ2lCLElBQUk7b0JBQUNDLEVBQUUsRUFBRSxFQUFFO29CQUFFQyxFQUFFLEVBQUUsQ0FBQztvQkFBRUMsRUFBRSxFQUFFLENBQUM7OEJBQzNCLDRFQUFDQyxLQUFHO3dCQUFDQyxTQUFTLEVBQUV2QiwwRkFBMkI7OzBDQUN2Qyw4REFBQ3NCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRXZCLDRFQUFhOzBDQUFHa0IsSUFBSSxDQUFDUixFQUFFOzs7OztxQ0FBTzswQ0FDOUMsOERBQUNnQixLQUFHO2dDQUFDQyxHQUFHLEVBQUVULElBQUksQ0FBQ0wsS0FBSzs7Ozs7cUNBQUk7MENBQ3hCLDhEQUFDUyxLQUFHO2dDQUFDQyxTQUFTLEVBQUV2QiwwRUFBVzs7a0RBQ3ZCLDhEQUFDc0IsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFdkIsMkVBQVk7a0RBQUdrQixJQUFJLENBQUNQLElBQUk7Ozs7OzZDQUFPO2tEQUMvQyw4REFBQ1csS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFdkIsMEVBQVc7a0RBQUdrQixJQUFJLENBQUNOLElBQUk7Ozs7OzZDQUFPOzs7Ozs7cUNBQzVDOzs7Ozs7NkJBQ0o7bUJBUjRCTSxJQUFJLENBQUNSLEVBQUU7Ozs7eUJBU3RDLENBQ1Y7YUFDSixDQUFDLEdBQ0pQLEtBQUssSUFBSSxHQUFHLEdBQ1ZNLFlBQVksQ0FBQ08sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQVMsRUFBSztnQkFDeEMscUJBQ0ksOERBQUNqQiwrQ0FBSTtvQkFBQ2lCLElBQUk7b0JBQUNDLEVBQUUsRUFBRSxFQUFFO29CQUFFQyxFQUFFLEVBQUUsQ0FBQztvQkFBRUMsRUFBRSxFQUFFLENBQUM7OEJBQzNCLDRFQUFDQyxLQUFHO3dCQUFDQyxTQUFTLEVBQUV2QiwwRkFBMkI7OzBDQUN2Qyw4REFBQ3NCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRXZCLDRFQUFhOzBDQUFHa0IsSUFBSSxDQUFDUixFQUFFOzs7OztxQ0FBTzswQ0FDOUMsOERBQUNnQixLQUFHO2dDQUFDQyxHQUFHLEVBQUVULElBQUksQ0FBQ0wsS0FBSzs7Ozs7cUNBQUk7MENBQ3hCLDhEQUFDUyxLQUFHO2dDQUFDQyxTQUFTLEVBQUV2QiwwRUFBVzs7a0RBQ3ZCLDhEQUFDc0IsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFdkIsMkVBQVk7a0RBQUdrQixJQUFJLENBQUNQLElBQUk7Ozs7OzZDQUFPO2tEQUMvQyw4REFBQ1csS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFdkIsMEVBQVc7a0RBQUdrQixJQUFJLENBQUNOLElBQUk7Ozs7OzZDQUFPOzs7Ozs7cUNBQzVDOzs7Ozs7NkJBQ0o7bUJBUjRCTSxJQUFJLENBQUNSLEVBQUU7Ozs7eUJBU3RDLENBQ1Y7YUFDSixDQUFDLEdBRU5ELFlBQVksQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLElBQVMsRUFBSztnQkFDNUIscUJBQ0ksOERBQUNqQiwrQ0FBSTtvQkFBQ2lCLElBQUk7b0JBQUNDLEVBQUUsRUFBRSxFQUFFO29CQUFFQyxFQUFFLEVBQUUsQ0FBQztvQkFBRUMsRUFBRSxFQUFFLENBQUM7OEJBQzNCLDRFQUFDQyxLQUFHO3dCQUFDQyxTQUFTLEVBQUV2QiwwRkFBMkI7OzBDQUN2Qyw4REFBQ3NCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRXZCLDRFQUFhOzBDQUFHa0IsSUFBSSxDQUFDUixFQUFFOzs7OztxQ0FBTzswQ0FDOUMsOERBQUNnQixLQUFHO2dDQUFDQyxHQUFHLEVBQUVULElBQUksQ0FBQ0wsS0FBSzs7Ozs7cUNBQUk7MENBQ3hCLDhEQUFDUyxLQUFHO2dDQUFDQyxTQUFTLEVBQUV2QiwwRUFBVzs7a0RBQ3ZCLDhEQUFDc0IsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFdkIsMkVBQVk7a0RBQUdrQixJQUFJLENBQUNQLElBQUk7Ozs7OzZDQUFPO2tEQUMvQyw4REFBQ1csS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFdkIsMEVBQVc7a0RBQUdrQixJQUFJLENBQUNOLElBQUk7Ozs7OzZDQUFPOzs7Ozs7cUNBQzVDOzs7Ozs7NkJBQ0o7bUJBUjRCTSxJQUFJLENBQUNSLEVBQUU7Ozs7eUJBU3RDLENBQ1Y7YUFDSixDQUFDOzs7OztpQkFFQyxDQUNWO0tBRUo7SUFDRCxxQkFDSSw4REFBQ1ksS0FBRztRQUFDQyxTQUFTLEVBQUV2QiwrRUFBZ0I7a0JBQzVCLDRFQUFDc0IsS0FBRztZQUFDQyxTQUFTLEVBQUV2Qiw2RUFBYzs7OEJBQzFCLDhEQUFDc0IsS0FBRztvQkFBQ0MsU0FBUyxFQUFFdkIsaUZBQWtCOzhCQUFFLDJDQUF5Qzs7Ozs7eUJBQU07OEJBQ25GLDhEQUFDYyxlQUFlOzs7O3lCQUFHOzs7Ozs7aUJBQ2pCOzs7OzthQUNKLENBQ1Q7Q0FDSjtHQS9IS1osZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBaUlyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcFRyZW5kaW5nTGlzdC9pbmRleC50c3g/Y2U3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9wVHJlbmRpbmdMaXN0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuY29uc3QgVG9wVHJlbmRpbmdMaXN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2cod2lkdGgpO1xuICAgIH0sIFt3aWR0aF0pXG5cbiAgICBjb25zdCBUcmVuZGluZ0l0ZW0gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0JvcmVkIEFwZSBZYXRjaCBDbHViJyxcbiAgICAgICAgICAgIHN0YXQ6ICc1MTYsODc5JyxcbiAgICAgICAgICAgIGltYWdlOiAnL3RvcC10cmVuZGluZy1saXN0LTEucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIG5hbWU6ICdEZUdvZHMnLFxuICAgICAgICAgICAgc3RhdDogJzQ5NCw5MDknLFxuICAgICAgICAgICAgaW1hZ2U6ICcvdG9wLXRyZW5kaW5nLWxpc3QtMi5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgbmFtZTogJ0F6dWtpJyxcbiAgICAgICAgICAgIHN0YXQ6ICc0NjcsMDIwJyxcbiAgICAgICAgICAgIGltYWdlOiAnL3RvcC10cmVuZGluZy1saXN0LTMucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6ICdGaW5pbGlhcicsXG4gICAgICAgICAgICBzdGF0OiAnMzk4LDkyOScsXG4gICAgICAgICAgICBpbWFnZTogJy90b3AtdHJlbmRpbmctbGlzdC00LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBuYW1lOiAnUHJvamVjdGNyYWsnLFxuICAgICAgICAgICAgc3RhdDogJzM4OSwzODMnLFxuICAgICAgICAgICAgaW1hZ2U6ICcvdG9wLXRyZW5kaW5nLWxpc3QtNS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgbmFtZTogJ01vb25QdWRneScsXG4gICAgICAgICAgICBzdGF0OiAnMzUwLDAyMCcsXG4gICAgICAgICAgICBpbWFnZTogJy90b3AtdHJlbmRpbmctbGlzdC02LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICBuYW1lOiAnTGFkeSBBcGUgQ2x1YicsXG4gICAgICAgICAgICBzdGF0OiAnMzMwLDIwMicsXG4gICAgICAgICAgICBpbWFnZTogJy90b3AtdHJlbmRpbmctbGlzdC03LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICBuYW1lOiAnTXV0YW50IEFwZSBZYXRjaCBDbHViJyxcbiAgICAgICAgICAgIHN0YXQ6ICczMjEsMDIwJyxcbiAgICAgICAgICAgIGltYWdlOiAnL3RvcC10cmVuZGluZy1saXN0LTgucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgIG5hbWU6ICdBcnQgQmxvY2tzIEN1cmF0ZWQnLFxuICAgICAgICAgICAgc3RhdDogJzMxNSwzMDInLFxuICAgICAgICAgICAgaW1hZ2U6ICcvdG9wLXRyZW5kaW5nLWxpc3QtOS5wbmcnXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgY29uc3QgVG9wVHJlbmRpbmdJdGVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHsgd2lkdGggPD0gNDI1ID9cbiAgICAgICAgICAgICAgICAgICAgVHJlbmRpbmdJdGVtLnNsaWNlKDAsIDMpLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wVHJlbmRpbmdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PntpdGVtLmlkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0fT57aXRlbS5zdGF0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHdpZHRoIDw9IDc2OCA/XG4gICAgICAgICAgICAgICAgICAgIFRyZW5kaW5nSXRlbS5zbGljZSgwLCA2KS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcFRyZW5kaW5nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT57aXRlbS5pZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aXRlbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdH0+e2l0ZW0uc3RhdH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICBUcmVuZGluZ0l0ZW0ubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BUcmVuZGluZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT57aXRlbS5pZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aXRlbS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0fT57aXRlbS5zdGF0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5IZWFkaW5nfT5Ub3AgVHJlbmRpbmcgQ29sbGVjdGlvbnMgT3ZlciBMYXN0IDcgRGF5czwvZGl2PlxuICAgICAgICAgICAgICAgIDxUb3BUcmVuZGluZ0l0ZW0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFRyZW5kaW5nTGlzdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiR3JpZCIsIlRvcFRyZW5kaW5nTGlzdCIsIndpZHRoIiwic2V0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsIlRyZW5kaW5nSXRlbSIsImlkIiwibmFtZSIsInN0YXQiLCJpbWFnZSIsIlRvcFRyZW5kaW5nSXRlbSIsImNvbnRhaW5lciIsInNsaWNlIiwibWFwIiwiaXRlbSIsInhzIiwic20iLCJtZCIsImRpdiIsImNsYXNzTmFtZSIsInRvcFRyZW5kaW5nQ29udGFpbmVyIiwibnVtYmVyIiwiaW1nIiwic3JjIiwidGl0bGUiLCJ3cmFwcGVyIiwibWFpbkhlYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopTrendingList/index.tsx\n"));

/***/ })

});