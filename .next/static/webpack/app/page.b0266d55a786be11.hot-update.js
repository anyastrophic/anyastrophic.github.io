"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-tilt */ \"(app-pages-browser)/./node_modules/vanilla-tilt/lib/vanilla-tilt.js\");\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ \"(app-pages-browser)/./node_modules/react-tooltip/dist/react-tooltip.min.mjs\");\n/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst logos = {\n    discord: \"https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg\",\n    roblox: \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Roblox_Logo.svg/1200px-Roblox_Logo.svg.png\",\n    github: \"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png\",\n    spotify: \"https://anyas.me/spotify.png\"\n};\nfunction openInNewTab(href) {\n    Object.assign(document.createElement(\"a\"), {\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        href: href\n    }).click();\n}\nfunction onGithubClick() {\n    openInNewTab(\"https://github.com/anyastrophic\");\n}\nfunction onRobloxClick() {\n    openInNewTab(\"https://roblox.com/users/2947401001/profile\");\n}\nfunction onDiscordClick() {\n    openInNewTab(\"https://discord.com/users/804066391614423061\");\n}\nfunction onSpotifyClick() {\n    openInNewTab(\"https://open.spotify.com/user/31cet4a7zb4ec4w3vpz6qxvtmyde\");\n}\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize vanilla-tilt on the box element\n        vanilla_tilt__WEBPACK_IMPORTED_MODULE_2___default().init(document.querySelector(\".tilt-box\"), {\n            max: 2\n        });\n    }, []);\n    setInterval(async ()=>{\n        const data = await fetch(\"http://127.0.0.1:8000/spotify/get_current_track\");\n        const json = await data.json();\n        console.log();\n        document.getElementById(\"artist\").innerHTML = data;\n    }, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"tilt-box profilebg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"abc\",\n                                className: \"pfp\",\n                                src: \"https://anyas.me/compressy.png\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-white text-4xl mt-3 ml-2 font-bold\",\n                                        children: \"Anya\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-400 text-sm ml-2\",\n                                        children: [\n                                            \"Hi! I'm anya. I code in JS, PY and Lua. I suck at \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 36\n                                            }, this),\n                                            \"HTML and CSS, so good luck if you're viewing\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 33\n                                            }, this),\n                                            \"the source of this on my github.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 29\n                                    }, this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"image-gallery\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: logos.discord,\n                                                id: \"tooltip\",\n                                                className: \"w-[40px] hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer\",\n                                                onClick: onDiscordClick\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                                                anchorSelect: \"#tooltip\",\n                                                clickable: true,\n                                                children: \"@49tt\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: logos.roblox,\n                                                alt: \"Image 1\",\n                                                className: \"w-[40px] ml-8 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer\",\n                                                onClick: onRobloxClick\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: logos.github,\n                                                alt: \"Image 1\",\n                                                className: \"w-[40px] rounded-full ml-8 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer\",\n                                                onClick: onGithubClick\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: logos.spotify,\n                                                alt: \"Image 1\",\n                                                className: \"w-[40px] ml-8 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer\",\n                                                onClick: onSpotifyClick\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"status\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[100px] m-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://i.scdn.co/image/ab67616d0000b2733d03c883a4e7367279d5a274\",\n                                    alt: \"Album Cover\",\n                                    className: \"rounded-xl\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-2/3 p-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl font-bold\",\n                                        id: \"songName\",\n                                        children: \"paranoia\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-600 text-lg\",\n                                        id: \"artist\",\n                                        children: \"by shiey\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"progress\", {\n                                        className: \"h-2 rounded-full w-[113%] mt-6\",\n                                        id: \"songProgress\",\n                                        max: \"100\",\n                                        value: \"70\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 119,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 110,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Code\\\\portfolio\\\\src\\\\app\\\\page.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVmFuaWxsYVRpbHQgZnJvbSBcInZhbmlsbGEtdGlsdFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5cbmNvbnN0IGxvZ29zID0ge1xuICAgIGRpc2NvcmQ6XG4gICAgICAgIFwiaHR0cHM6Ly9hc3NldHMtZ2xvYmFsLndlYnNpdGUtZmlsZXMuY29tLzYyNTdhZGVmOTM4NjdlNTBkODRkMzBlMi82MzZlMGE2Y2E4MTQyODJlY2E3MTcyYzZfaWNvbl9jbHlkZV93aGl0ZV9SR0Iuc3ZnXCIsXG4gICAgcm9ibG94OiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNi82Yy9Sb2Jsb3hfTG9nby5zdmcvMTIwMHB4LVJvYmxveF9Mb2dvLnN2Zy5wbmdcIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuZ2l0aHViYXNzZXRzLmNvbS9pbWFnZXMvbW9kdWxlcy9sb2dvc19wYWdlL0dpdEh1Yi1NYXJrLnBuZ1wiLFxuICAgIHNwb3RpZnk6IFwiaHR0cHM6Ly9hbnlhcy5tZS9zcG90aWZ5LnBuZ1wiLFxufTtcblxuZnVuY3Rpb24gb3BlbkluTmV3VGFiKGhyZWYpIHtcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICB9KS5jbGljaygpO1xufVxuXG5mdW5jdGlvbiBvbkdpdGh1YkNsaWNrKCkge1xuICAgIG9wZW5Jbk5ld1RhYihcImh0dHBzOi8vZ2l0aHViLmNvbS9hbnlhc3Ryb3BoaWNcIik7XG59XG5cbmZ1bmN0aW9uIG9uUm9ibG94Q2xpY2soKSB7XG4gICAgb3BlbkluTmV3VGFiKFwiaHR0cHM6Ly9yb2Jsb3guY29tL3VzZXJzLzI5NDc0MDEwMDEvcHJvZmlsZVwiKTtcbn1cblxuZnVuY3Rpb24gb25EaXNjb3JkQ2xpY2soKSB7XG4gICAgb3BlbkluTmV3VGFiKFwiaHR0cHM6Ly9kaXNjb3JkLmNvbS91c2Vycy84MDQwNjYzOTE2MTQ0MjMwNjFcIik7XG59XG5cbmZ1bmN0aW9uIG9uU3BvdGlmeUNsaWNrKCkge1xuICAgIG9wZW5Jbk5ld1RhYihcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS91c2VyLzMxY2V0NGE3emI0ZWM0dzN2cHo2cXh2dG15ZGVcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB2YW5pbGxhLXRpbHQgb24gdGhlIGJveCBlbGVtZW50XG4gICAgICAgIFZhbmlsbGFUaWx0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aWx0LWJveFwiKSwge1xuICAgICAgICAgICAgbWF4OiAyLFxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Nwb3RpZnkvZ2V0X2N1cnJlbnRfdHJhY2tcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJ0aXN0XCIpLmlubmVySFRNTCA9IGRhdGE7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbHQtYm94IHByb2ZpbGViZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImFiY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGZwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FueWFzLm1lL2NvbXByZXNzeS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIG10LTMgbWwtMiBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW55YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc20gbWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaSEgSSdtIGFueWEuIEkgY29kZSBpbiBKUywgUFkgYW5kIEx1YS4gSSBzdWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0IDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVE1MIGFuZCBDU1MsIHNvIGdvb2QgbHVjayBpZiB5b3UncmUgdmlld2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNvdXJjZSBvZiB0aGlzIG9uIG15IGdpdGh1Yi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtZ2FsbGVyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ29zLmRpc2NvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNDBweF0gaG92ZXI6ZHJvcC1zaGFkb3ctZ2xvdyBob3ZlcjpvcGFjaXR5LTYwIGhvdmVyOnJvdGF0ZS0zNjAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi03MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EaXNjb3JkQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGFuY2hvclNlbGVjdD1cIiN0b29sdGlwXCIgY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQDQ5dHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ29zLnJvYmxveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNDBweF0gbWwtOCBob3Zlcjpkcm9wLXNoYWRvdy1nbG93IGhvdmVyOm9wYWNpdHktNjAgaG92ZXI6cm90YXRlLTM2MCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTcwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJvYmxveENsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ29zLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNDBweF0gcm91bmRlZC1mdWxsIG1sLTggaG92ZXI6ZHJvcC1zaGFkb3ctZ2xvdyBob3ZlcjpvcGFjaXR5LTYwIGhvdmVyOnJvdGF0ZS0zNjAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi03MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25HaXRodWJDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvcy5zcG90aWZ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSW1hZ2UgMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0MHB4XSBtbC04IGhvdmVyOmRyb3Atc2hhZG93LWdsb3cgaG92ZXI6b3BhY2l0eS02MCBob3Zlcjpyb3RhdGUtMzYwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNzAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3BvdGlmeUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxMDBweF0gbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczM2QwM2M4ODNhNGU3MzY3Mjc5ZDVhMjc0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQWxidW0gQ292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCIgaWQ9XCJzb25nTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbm9pYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbGdcIiBpZD1cImFydGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSBzaGlleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIgcm91bmRlZC1mdWxsIHctWzExMyVdIG10LTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNvbmdQcm9ncmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3Byb2dyZXNzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJWYW5pbGxhVGlsdCIsIlRvb2x0aXAiLCJsb2dvcyIsImRpc2NvcmQiLCJyb2Jsb3giLCJnaXRodWIiLCJzcG90aWZ5Iiwib3BlbkluTmV3VGFiIiwiaHJlZiIsIk9iamVjdCIsImFzc2lnbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRhcmdldCIsInJlbCIsImNsaWNrIiwib25HaXRodWJDbGljayIsIm9uUm9ibG94Q2xpY2siLCJvbkRpc2NvcmRDbGljayIsIm9uU3BvdGlmeUNsaWNrIiwiSG9tZSIsImluaXQiLCJxdWVyeVNlbGVjdG9yIiwibWF4Iiwic2V0SW50ZXJ2YWwiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0Iiwic3JjIiwicCIsImJyIiwiaWQiLCJvbkNsaWNrIiwiYW5jaG9yU2VsZWN0IiwiY2xpY2thYmxlIiwicHJvZ3Jlc3MiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});