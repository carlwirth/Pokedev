/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/master.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/art.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/art.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Solway&display=swap);\", \"\"]);\nexports.push([module.i, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Teko:500&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \".normal {\\n  background-color: #dde0ab; }\\n\\n.fire {\\n  background-color: #ffa259; }\\n\\n.water {\\n  background-color: #46b3e6; }\\n\\n.grass {\\n  background-color: #42b883; }\\n\\n.electric {\\n  background-color: #ffd369; }\\n\\n.ice {\\n  background-color: #96d1c7; }\\n\\n.ground {\\n  background-color: #e3c4a8; }\\n\\n.flying {\\n  background-color: #baabda; }\\n\\n.poison {\\n  background-color: #8d448b; }\\n\\n.fighting {\\n  background-color: #b22222; }\\n\\n.psychic {\\n  background-color: #fd7792; }\\n\\n.dark {\\n  background-color: #5c4d4d; }\\n\\n.rock {\\n  background-color: #cb9b42; }\\n\\n.bug {\\n  background-color: #94aa2a; }\\n\\n.ghost {\\n  background-color: #58508d; }\\n\\n.steel {\\n  background-color: #c6cbef; }\\n\\n.dragon {\\n  background-color: #421b9b; }\\n\\n.fairy {\\n  background-color: #fff1e9; }\\n\\n.unknown {\\n  background-color: #12e6c8; }\\n\\n.shadow {\\n  background-color: #393e46; }\\n\\nbody {\\n  background: #ebf0f6;\\n  font-family: 'Solway', serif; }\\n\\n/* width */\\n::-webkit-scrollbar {\\n  width: 0.6em; }\\n\\n/* Track */\\n::-webkit-scrollbar-track {\\n  background: #414141; }\\n\\n/* Handle */\\n::-webkit-scrollbar-thumb {\\n  background: #888; }\\n\\n/* Handle on hover */\\n::-webkit-scrollbar-thumb:hover {\\n  background: #555; }\\n\\n.data {\\n  position: absolute;\\n  width: 36em;\\n  height: 87%;\\n  left: 4.5%;\\n  top: 5%;\\n  overflow: auto;\\n  color: #f6f6f6;\\n  border-radius: 0.3em;\\n  border: 0.6em solid #414141;\\n  border-right: none;\\n  display: none;\\n  background: rgba(0, 0, 0, 0.4); }\\n  .data.open {\\n    display: block; }\\n\\n.info {\\n  padding: 1.5em;\\n  position: absolute;\\n  width: 20em;\\n  height: 47.8%;\\n  right: 19.7%;\\n  top: 14.5em;\\n  color: #f6f6f6;\\n  border-top-right-radius: 0.3em;\\n  border-bottom-right-radius: 0.3em;\\n  border: 0.6em solid #414141;\\n  border-left: 0;\\n  display: none;\\n  background: rgba(0, 0, 0, 0.4);\\n  z-index: -10; }\\n  .info.open {\\n    display: block; }\\n  .info .more {\\n    cursor: pointer;\\n    color: #414141;\\n    font-size: 1em;\\n    text-align: center;\\n    border: none;\\n    background: white;\\n    padding: 0.5em;\\n    border-radius: 0.3em;\\n    transition: all 0.5s ease;\\n    z-index: 10; }\\n    .info .more:hover {\\n      color: white;\\n      background: #46b5d1; }\\n  .info div span {\\n    text-align: center;\\n    font-size: 1.5em;\\n    padding: 0.1em 0.5em;\\n    padding-bottom: 0.3em;\\n    margin: 0 0.3em;\\n    border-radius: 0.3em; }\\n  .info progress {\\n    background-color: green;\\n    float: right; }\\n\\n.pokeball {\\n  border: 1em solid #414141;\\n  border-radius: 3%;\\n  margin: 0 auto;\\n  position: relative; }\\n  .pokeball.top, .pokeball.bottom {\\n    z-index: 2;\\n    height: 12em;\\n    width: 24em; }\\n  .pokeball.top {\\n    cursor: pointer;\\n    background-color: #f66767;\\n    background: linear-gradient(90deg, #f36464 49.5%, #f66767 0%);\\n    background-repeat: no-repeat;\\n    border-top-left-radius: 24em;\\n    border-top-right-radius: 24em; }\\n    .pokeball.top::before {\\n      content: '';\\n      display: block;\\n      position: absolute; }\\n    .pokeball.top::before {\\n      position: absolute;\\n      background: #f9f9f9;\\n      border: 0.8em solid #414141;\\n      border-bottom: transparent;\\n      border-top-left-radius: 24em;\\n      border-top-right-radius: 24em;\\n      height: 1.5em;\\n      width: 3em;\\n      left: calc(50% - 2.4em);\\n      top: calc(89%);\\n      z-index: 2; }\\n  .pokeball.bottom {\\n    background-color: #f9f9f9;\\n    background: linear-gradient(90deg, #f6f6f6 49.5%, #f9f9f9 0%);\\n    background-repeat: no-repeat;\\n    border-bottom-left-radius: 24em;\\n    border-bottom-right-radius: 24em; }\\n    .pokeball.bottom::before {\\n      content: '';\\n      display: block;\\n      position: absolute; }\\n    .pokeball.bottom::before {\\n      position: absolute;\\n      background: #eae7e7;\\n      border: 0.8em solid #414141;\\n      border-top: transparent;\\n      border-bottom-left-radius: 24em;\\n      border-bottom-right-radius: 24em;\\n      height: 1.5em;\\n      width: 3em;\\n      left: calc(50% - 2.4em);\\n      top: calc(-8.5%);\\n      z-index: 1; }\\n\\n.frame {\\n  display: relative;\\n  background: #c1c0b9;\\n  padding-top: 0.7em;\\n  width: 24em;\\n  display: none;\\n  margin: 0 auto;\\n  border: 0.6em solid #414141;\\n  border-top: 0.1em solid #414141;\\n  border-bottom: 0.1em solid #414141;\\n  transition: display 3s ease; }\\n  .frame.open {\\n    display: block; }\\n  .frame .screen {\\n    background: #ccc;\\n    position: relative;\\n    padding: 1em;\\n    overflow: hidden; }\\n    .frame .screen div span .left, .frame .screen div span .right {\\n      cursor: pointer;\\n      font-size: 2.5em;\\n      color: #414141;\\n      background: #52d681;\\n      padding: 0.01em 0.3em;\\n      border-radius: 0.3em;\\n      color: #efefef;\\n      position: absolute;\\n      top: 87.3%;\\n      transition: all 0.5s ease; }\\n      .frame .screen div span .left:hover, .frame .screen div span .right:hover {\\n        background: #39BD68;\\n        color: #f0f0f0; }\\n    .frame .screen div span .right {\\n      right: 0.5em; }\\n    .frame .screen div span .left {\\n      left: 0.5em; }\\n    .frame .screen div span .center {\\n      cursor: pointer;\\n      color: #414141;\\n      font-size: 1.5em;\\n      position: relative;\\n      display: block;\\n      margin: 0 auto;\\n      width: 50%;\\n      text-align: center;\\n      border: none;\\n      background: white;\\n      padding: 0.5em;\\n      border-radius: 0.3em;\\n      transition: all 0.5s ease; }\\n      .frame .screen div span .center:hover {\\n        color: white;\\n        background: #46b5d1; }\\n    .frame .screen div span .more {\\n      cursor: pointer;\\n      color: #414141;\\n      font-size: 1em;\\n      position: relative;\\n      display: block;\\n      margin: 0 auto;\\n      margin-bottom: 1em;\\n      text-align: center;\\n      border: none;\\n      padding: 0.5em;\\n      border-radius: 0.3em;\\n      transition: all 0.5s ease;\\n      z-index: 100; }\\n      .frame .screen div span .more:hover {\\n        color: white;\\n        background: #52d681; }\\n    .frame .screen ul {\\n      display: block;\\n      padding-left: 0; }\\n      .frame .screen ul li {\\n        color: #414141;\\n        cursor: pointer;\\n        list-style: none;\\n        border-radius: 0.3em;\\n        margin: 0.3em 0;\\n        padding: 0.5em 0;\\n        text-align: center;\\n        background: white;\\n        font-size: 3em;\\n        transition: background 0.8s ease; }\\n        .frame .screen ul li:hover {\\n          background: #f0d879; }\\n    .frame .screen .pokedex div {\\n      position: relative;\\n      background: #bdc3c7;\\n      width: 10em;\\n      height: 10em;\\n      margin: 0 auto;\\n      border-radius: 50%;\\n      z-index: 0; }\\n      .frame .screen .pokedex div span {\\n        position: absolute;\\n        color: #b3b9bd;\\n        font-family: 'Teko', sans-serif;\\n        font-size: 15em;\\n        top: -0.35em;\\n        left: -0.25em;\\n        z-index: 1; }\\n      .frame .screen .pokedex div img {\\n        display: block;\\n        position: relative;\\n        margin: 0 auto;\\n        top: 2.5em;\\n        z-index: 10; }\\n    .frame .screen .pokedex p {\\n      font-size: 3em;\\n      color: #414141;\\n      text-align: center;\\n      font-size: 4em;\\n      z-index: 1; }\\n    .frame .screen .credits p {\\n      text-align: center;\\n      font-size: 2em;\\n      color: #414141;\\n      border-radius: 0.3em;\\n      margin: 0.3em 0;\\n      padding: 0.5em 0;\\n      background: white;\\n      transition: background 0.8s ease; }\\n      .frame .screen .credits p:hover {\\n        background: #f0d879; }\\n      .frame .screen .credits p span {\\n        display: block;\\n        font-size: 0.5em; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/art.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/art.scss":
/*!**********************!*\
  !*** ./src/art.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./art.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/art.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/art.scss?");

/***/ }),

/***/ "./src/lib/dataRefactoring.js":
/*!************************************!*\
  !*** ./src/lib/dataRefactoring.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const minifyJSON = json => {\n  const moves = json.moves.reduce((moves, obj) => {\n    const name = obj.move.name;\n    const url = obj.move.url;\n    const method = obj.version_group_details[0].move_learn_method.name;\n    const move = {\n      name,\n      url,\n      method\n    };\n    moves.push(move);\n    return moves;\n  },[]);\n\n  const abilities = json.abilities.reduce((abilities, obj) => {\n    abilities.push(obj.ability.name);\n    return abilities;\n  },[]);\n\n  // stats?\n  // encounters?\n\n  return {\n    id: json.id,\n    height: json.height,\n    weight: json.weight,\n    form: json.forms.url,\n    specie: json.species.url,\n    abilities: abilities,\n    moves: moves\n  }\n};\n\n\n//  EXPORTS\nmodule.exports = {\n    minifyJSON\n};\n\n\n//# sourceURL=webpack:///./src/lib/dataRefactoring.js?");

/***/ }),

/***/ "./src/lib/graphicEngine.js":
/*!**********************************!*\
  !*** ./src/lib/graphicEngine.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//  IMPORTS\nconst IS = __webpack_require__(/*! ./interactionSystem */ \"./src/lib/interactionSystem.js\");\nconst RF = __webpack_require__(/*! ./requestFilter */ \"./src/lib/requestFilter.js\");\nconst DR = __webpack_require__(/*! ./dataRefactoring */ \"./src/lib/dataRefactoring.js\");\n\n//  GLOBAL VARIABLES\nlet current = 1;\n\n//  CREATE MENU ELEMENTS\nconst setMenu = (container) => {\n  container = IS.select(container);\n  const menu = [ \"pokedex\", \"favorites\", \"credits\" ];\n  const ul = document.createElement('ul');\n  menu.forEach((item, id) => {\n    const li = document.createElement('li');\n    const txt = document.createTextNode(item);\n    li.appendChild(txt);\n    li.setAttribute(\"id\", id);\n    ul.appendChild(li);\n  });\n  container.appendChild(ul);\n  loadMenu(ul);\n}; // - end setMenu\n\n//  LINK MENU ITEMS\nconst loadMenu = (menu) => {\n  menu = menu.childNodes;\n  menu.forEach((li, id) => {\n    li.addEventListener(\"click\", e => {\n      RF.requestState(`/${e.target.textContent}`).then(content => {\n        console.log(content);\n        IS.select('.screen').innerHTML = content;\n        if(id === 0){\n          RF.requestPokemon(current).then(res => {                    //  explore observer pattern\n            loadPokemon(res, IS.select(\".pokedex\"));                  //\n          });\n          const uiButtons = [\".right\",\".left\",\".center\",\".more\"];     //\n          IS.select(uiButtons).forEach(btn => {                       //\n            btn.addEventListener(\"click\", e => {                      //\n              if(e.target.classList.value === 'right'){               //\n                IS.info(false);                                       //\n                if(current < 809 ) current++;                         //\n              }                                                       //\n              if(e.target.classList.value === 'left'){                //\n                IS.info(false);                                       //\n                if(current > 1) current--;                            //\n              }                                                       //\n              RF.requestPokemon(current).then(res => {                //\n                loadPokemon(res, IS.select(\".pokedex\"));              //\n              });                                                     //\n              if(e.target.classList.value === 'center'){              //\n                RF.requestPokemon(current).then(res => {              //\n                  loadInfo(res, IS.select(\".info\"));                  //\n                });                                                   //\n                IS.info(true);                                        //\n              }                                                       //\n              if(e.target.classList.value === 'more'){\n                IS.select(\".data\").classList.toggle('open');\n                IS.select(\".pokedex > div > img\").setAttribute(\"width\", \"200%\");\n                RF.requestPokemon(current).then(res => {\n                  const data = DR.minifyJSON(res);\n                  const abilities = data.abilities.reduce((html, ability) => {\n                    html += `<span>${ability}</span>`;\n                    return html;\n                  }, \"\");\n                  const moves = data.moves.reduce((html, move) => {\n                    html += `<span>${move.name}</span>`;\n                    return html;\n                  }, \"\");\n\n                  IS.select(\".data\").innerHTML = `\n                  <div>\n                    <p><span>${data.weight}g</span><span>${data.height}cm</span></p>\n                    <p>${abilities}</p>\n                    <p>${moves}</p>\n                  </div>\n                  `;\n                });\n              }\n\n            }); // - end eventListener                                //\n          }); // - end forEach                                        //  ---\n        } // -  end if\n      }); // -  end fetch\n    }); // -  end eventListener\n  }); // -  end forEach\n};  // -  end loadMenu\n\n//  LOAD POKEMONS ON CONTAINER\nconst loadPokemon = (data, container) => {\n  const pokemon = RF.requestImage(data.id);\n  container.innerHTML = `\n  <div>\n    <img src=\"${pokemon.img}\" width=\"90%\">\n    <span>${pokemon.number}</span>\n  </div>\n  <p>${data.name}</p>\n  `;\n};  // - end loadPokemon\n\n//  LOAD POKEMON INFO\nconst loadInfo = (data, container) => {\n  const stats = data.stats.reverse().reduce((html, val) => {\n    html += `<p>${val.stat.name}<progress value=\"${val.base_stat}\" max=\"140\"></progress></p>`;\n    return html;\n  },\"\");\n  const type = data.types.reverse().reduce((html, val) => {\n    html += `<span class=\"${val.type.name}\">${val.type.name}</span>`;\n    return html;\n  },\"\");\n  fetch(data.species.url).then(prep=>prep.json()).then(specie=>{\n    const description = specie.flavor_text_entries.reduce((arr,txt) => {\n      if(txt.language.name === \"en\")\n        arr.push(txt.flavor_text);\n      return arr;\n    },[]);\n    container.innerHTML = `\n      <div style=\"text-align:center;\">${type}</div>\n      <br><br><br>\n      ${stats}\n      <br>\n      <p>${description[0]}</p>\n    `;\n  });\n};\n//  ---\n\n\n//  EXPORTS\nmodule.exports = {\n    setMenu\n};\n\n\n//# sourceURL=webpack:///./src/lib/graphicEngine.js?");

/***/ }),

/***/ "./src/lib/interactionSystem.js":
/*!**************************************!*\
  !*** ./src/lib/interactionSystem.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//  SELECT ELEMENT FUNCTION\nconst select = (str) => {\n  if(typeof(str) === 'string') return document.querySelector(str);\n  else if(Array.isArray(str)){\n    str = str.join(\",\");\n    return document.querySelectorAll(str);\n  }\n};\n//  ---\n\n//  ANIMATIONS  **need refactoring\nconst info = action => {\n  if(action){\n    if(select(\".info.open\")){\n      select(\".info\").classList.remove('fadeInLeft');\n      select(\".info\").classList.add('fadeOutLeft');\n      setTimeout(() => select(\".info\").classList.toggle('open'), 180);\n    }else{\n      select(\".info\").classList.toggle('open');\n      select(\".info\").classList.remove('fadeOutLeft');\n      select(\".info\").classList.add('animated', 'fadeInLeft', 'faster');\n    }\n  }else{\n    if(select(\".info.open\")){\n      select(\".info\").classList.remove('fadeInLeft');\n      select(\".info\").classList.add('fadeOutLeft');\n      setTimeout(() => select(\".info\").classList.toggle('open'), 180);\n    }\n  }\n};\n//  ---\n\n//  CLICKABLE POKEBALL TOP & BOTTOM\nselect(\".top\").addEventListener(\"click\", () => {\n  const frame = select(\".frame\");\n  frame.classList.toggle(\"open\");\n  frame.classList.add(\"fadeIn\");\n  select(\".bottom\").classList.toggle(\"slideInDown\");\n\n  if(select(\".info.open\")){\n    select(\".info\").classList.remove('fadeInLeft');\n    select(\".info\").classList.toggle('open');\n  }\n\n});\n\nselect(\".bottom\").addEventListener(\"click\", () => { document.location.href=\"/\"; });\n// ---\n\n//  EXPORTS\nmodule.exports = {\n    select,\n    info\n};\n\n\n//# sourceURL=webpack:///./src/lib/interactionSystem.js?");

/***/ }),

/***/ "./src/lib/requestFilter.js":
/*!**********************************!*\
  !*** ./src/lib/requestFilter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const requestPokemon = data => {\n  return new Promise((resolve, reject) => {\n    if(typeof(data) === \"object\")\n      data = data.id;\n    const url = `https://pokeapi.co/api/v2/pokemon/${data}`;\n    fetch(url).then(prep => prep.json()).then(res => {\n        res\n          ? resolve(res)\n          : reject();\n    }); // - end fetch\n  }); // - end Promise\n}; // - end requestPokemon\n\nconst requestState = state => {\n  return new Promise((resolve, reject) => {\n    fetch(state, {mode: 'no-cors'}).then(prep => prep.text()).then(res => {\n      try{\n        resolve(res);\n      }catch(error){\n        reject(error);\n      }\n\n    });\n  });\n};\n\nconst requestImage = number => {\n  if(number < 10) number = '00'+number;\n  else if(number < 100) number = '0'+number;\n  return { img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`, number }\n};\n\n\nmodule.exports = {\n  requestPokemon,\n  requestImage,\n  requestState\n};\n\n\n//# sourceURL=webpack:///./src/lib/requestFilter.js?");

/***/ }),

/***/ "./src/master.js":
/*!***********************!*\
  !*** ./src/master.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _art_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./art.scss */ \"./src/art.scss\");\n/* harmony import */ var _art_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_art_scss__WEBPACK_IMPORTED_MODULE_0__);\n//  IMPORTS\n\nconst GE = __webpack_require__(/*! ./lib/graphicEngine */ \"./src/lib/graphicEngine.js\");\n\n//  LOAD MENU ON SCREEN\nGE.setMenu(\".screen\");\n//  ---\n\n\n//# sourceURL=webpack:///./src/master.js?");

/***/ })

/******/ });