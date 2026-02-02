/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/test.js */ \"./src/js/test.js\");\n/* harmony import */ var _js_test_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_test_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://publick-baner/./src/index.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/***/ (() => {

eval("(function (wp) {\n  // cd art.loc/wp-content/plugins/lightsoles\n\n  const {\n    registerBlockType\n  } = wp.blocks;\n  const {\n    RichText\n  } = wp.blockEditor || wp.editor;\n  const {\n    apiFetch\n  } = wp;\n  const {\n    InspectorControls,\n    MediaUpload\n  } = wp.blockEditor;\n  const {\n    TextControl,\n    PanelBody,\n    PanelRow,\n    Button,\n    SelectControl\n  } = wp.components;\n  const {\n    useState,\n    useEffect\n  } = wp.element;\n  const catIcon = /*#__PURE__*/React.createElement(\"svg\", {\n    version: \"1.0\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"512.000000pt\",\n    height: \"512.000000pt\",\n    viewBox: \"0 0 512.000000 512.000000\",\n    preserveAspectRatio: \"xMidYMid meet\"\n  }, /*#__PURE__*/React.createElement(\"g\", {\n    transform: \"translate(0.000000,512.000000) scale(0.100000,-0.100000)\",\n    fill: \"#000000\",\n    stroke: \"none\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M2330 5110 c-481 -43 -952 -231 -1350 -538 -109 -84 -348 -323 -432 -432 -213 -276 -366 -580 -453 -897 -217 -790 -54 -1606 453 -2263 84 -109 323 -348 432 -432 343 -264 731 -437 1140 -508 718 -125 1432 55 2020 508 109 84 348 323 432 432 213 276 366 580 453 897 217 791 54 1606 -453 2263 -84 109 -323 348 -432 432 -526 406 -1165 595 -1810 538z m468 -271 c680 -73 1290 -444 1672 -1016 386 -577 484 -1320 263 -1987 -108 -326 -287 -617 -533 -870 -196 -201 -382 -337 -629 -460 -638 -316 -1384 -316 -2022 0 -247 123 -433 259 -629 460 -185 190 -296 347 -414 585 -316 636 -315 1382 1 2021 227 458 584 815 1042 1042 232 114 507 196 756 224 114 13 379 14 493 1z\"\n  }), /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M1895 3674 l-25 -27 0 -1059 c0 -740 3 -1065 11 -1080 20 -38 68 -48 234 -48 166 0 214 10 234 48 7 14 11 142 11 382 0 402 2 418 60 439 23 7 158 11 422 11 260 0 396 4 410 11 37 20 48 69 48 214 0 145 -11 194 -48 214 -14 7 -150 11 -410 11 -264 0 -399 4 -422 11 -50 18 -60 55 -60 217 0 77 5 153 11 171 21 61 23 61 504 61 l437 0 29 29 29 29 0 170 c0 166 0 170 -25 196 l-24 26 -701 0 -701 0 -24 -26z\"\n  })));\n  registerBlockType('fv/test-block', {\n    title: 'Test Block',\n    icon: catIcon,\n    category: 'common',\n    keywords: ['Test Block', 'фке', 'art'],\n    attributes: {\n      title: {\n        type: 'string',\n        default: ''\n      }\n    },\n    edit: Edit,\n    save: Save\n  });\n  function Edit(props) {\n    const {\n      attributes: {\n        title\n      },\n      className,\n      isSelected,\n      setAttributes\n    } = props;\n    return [/*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n      title: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438 \\u0431\\u043B\\u043E\\u043A\\u0430\",\n      initialOpen: true\n    })), /*#__PURE__*/React.createElement(\"div\", {\n      className: className\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: 'wrapper'\n    }, /*#__PURE__*/React.createElement(RichText, {\n      tagName: \"h2\",\n      onChange: value => setAttributes({\n        title: value\n      }),\n      value: title,\n      placeholder: \"\\u0423\\u043A\\u0430\\u0436\\u0438\\u0442\\u0435 \\u0437\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A...\"\n      // allowedFormats={['core/text-color']}\n    })))];\n  }\n\n  function Save(props) {\n    const {\n      attributes: {\n        title\n      },\n      className\n    } = props;\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: className\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: 'wrapper'\n    }, /*#__PURE__*/React.createElement(RichText.Content, {\n      tagName: \"h2\",\n      value: title\n    })));\n  }\n  ;\n})(window.wp);\n\n//# sourceURL=webpack://publick-baner/./src/js/test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;