(window["webpackJsonp_sprayloc_blocks"] = window["webpackJsonp_sprayloc_blocks"] || []).push([["style-index"],{

/***/ "./src/image-float/style.scss":
/*!************************************!*\
  !*** ./src/image-float/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/slanted-container/style.scss":
/*!******************************************!*\
  !*** ./src/slanted-container/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_sprayloc_blocks"] = window["webpackJsonp_sprayloc_blocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/color-test/index.js":
/*!*********************************!*\
  !*** ./src/color-test/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var name = "sprayloc/color-test";
var settings = {
  title: "Color test",
  description: "a test to understand Color settings inspector control",
  category: "design",
  icon: "edit",
  attributes: {
    minHeight: {
      type: "number",
      default: 150
    },
    color: {
      type: "string",
      default: "hotpink"
    },
    colors: {
      type: "array",
      default: [{
        name: "color 1",
        color: "#ff0000"
      }, {
        name: "color 2",
        color: "#00ff00"
      }]
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        minHeight = _props$attributes.minHeight,
        color = _props$attributes.color,
        colors = _props$attributes.colors,
        setAttributes = props.setAttributes;

    var onHeightChange = function onHeightChange(value) {
      setAttributes({
        minHeight: value
      });
    };

    var onColorChange = function onColorChange(clr) {
      console.log(color);
      setAttributes({
        color: clr
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
      header: "Slanted Controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Misc",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Height",
      value: minHeight,
      max: 500,
      onChange: onHeightChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Color",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: color,
      colors: colors,
      onChange: onColorChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorIndicator"], {
      colorValue: color
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      style: {
        color: color
      }
    }, "Color test")];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        minHeight = _props$attributes2.minHeight,
        color = _props$attributes2.color;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      style: {
        color: color
      }
    }, "Color test");
  }
};

/***/ }),

/***/ "./src/en-avant/index.js":
/*!*******************************!*\
  !*** ./src/en-avant/index.js ***!
  \*******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var BLOCKS_TEMPLATE = [['sprayloc/slanted-container', {}, [['core/heading', {
  placeholder: 'Enter Title',
  fontSize: "180px",
  level: 1
}]]], ['core/image', {
  align: 'right'
}], ['core/paragraph', {
  placeholder: 'Image Details'
}]];
var name = 'sprayloc/en-avant';
var settings = {
  title: 'En-Avant',
  category: 'widgets',
  supports: {
    fontSize: true
  },
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: BLOCKS_TEMPLATE,
      templateLock: false
    });
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
};

/***/ }),

/***/ "./src/image-float/index.js":
/*!**********************************!*\
  !*** ./src/image-float/index.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/image-float/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





var withSelect = wp.data.withSelect;
var name = "sprayloc/image-float";

var BlockEdit = function BlockEdit(props) {
  var _props$attributes = props.attributes,
      mediaID = _props$attributes.mediaID,
      mediaURL = _props$attributes.mediaURL,
      backgroundURL = _props$attributes.backgroundURL,
      setAttributes = props.setAttributes,
      className = props.className;

  var onSelectImage = function onSelectImage(media) {
    // console.log("media ID : ", media.id);
    props.setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
      backgroundURL: media.url
    });
  };

  var onRemoveBgImage = function onRemoveBgImage(event) {
    console.log(event);
    setAttributes({
      mediaURL: "",
      mediaID: undefined,
      backgroundURL: ""
    });
  };

  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: "background",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "button button-large",
        onClick: open
      }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Upload Image", "gutenberg-examples") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Change Image", "gutenberg-examples")), mediaID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "button button-alert",
        onClick: onRemoveBgImage
      }, "Remove") : "");
    }
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: mediaURL
  }))];
};

var settings = {
  apiVersion: 2,
  title: "Sprayloc Image Float",
  description: "Image Float Block",
  category: "design",
  icon: "edit",
  attributes: {
    mediaURL: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    mediaID: {
      type: "string"
    },
    backgroundURL: {
      type: "string"
    }
  },
  edit: withSelect(function (select, props) {
    return {
      media: props.attributes.mediaID ? select('core').getMedia(props.attributes.mediaID) : undefined
    };
  })(BlockEdit),
  save: function save(props) {
    var mediaURL = props.attributes.mediaURL,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: mediaURL
    }));
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ "./src/title/index.js");
/* harmony import */ var _slanted_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slanted-container */ "./src/slanted-container/index.js");
/* harmony import */ var _color_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-test */ "./src/color-test/index.js");
/* harmony import */ var _image_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-float */ "./src/image-float/index.js");
/* harmony import */ var _en_avant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en-avant */ "./src/en-avant/index.js");
 // registerBlockType("myguten/test-block", {
//   title: "Basic Example",
//   icon: "smiley",
//   category: "design",
//   edit: () => <div>Hola, mundo!</div>,
//   save: () => <div>Hola, mundo!</div>,
// });






var blocks = [_title__WEBPACK_IMPORTED_MODULE_1__, _slanted_container__WEBPACK_IMPORTED_MODULE_2__, _color_test__WEBPACK_IMPORTED_MODULE_3__, _image_float__WEBPACK_IMPORTED_MODULE_4__, _en_avant__WEBPACK_IMPORTED_MODULE_5__];

function registerBlock(block) {
  var name = block.name,
      settings = block.settings;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, settings);
}

blocks.forEach(registerBlock);

/***/ }),

/***/ "./src/slanted-container/index.js":
/*!****************************************!*\
  !*** ./src/slanted-container/index.js ***!
  \****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/slanted-container/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var name = "sprayloc/slanted-container";
var blockStyle = {
  backgroundColor: "#900",
  color: "#fff",
  padding: "20px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center"
};
var settings = {
  title: "Sprayloc Slanted Container",
  description: "Slanted container",
  category: "design",
  icon: "edit",
  supports: {
    // Hey WP, I want to use your alignment toolbar!
    align: true
  },
  attributes: {
    clipPath: {
      type: "string",
      default: "polygon(-1px 0, -1px calc(100% - 50px), 101% 100%, 101% 0)"
    },
    slantHeight: {
      type: "number",
      default: 150
    },
    slantInvert: {
      type: "boolean",
      default: false
    },
    minHeight: {
      type: "number",
      default: 500
    },
    paddingTop: {
      type: "number",
      default: 150
    },
    paddingBottom: {
      type: "number",
      default: 150
    },
    backgroundColor: {
      type: "string",
      default: "hotpink"
    },
    overlayColor: {
      type: "string",
      default: "orangered"
    },
    overlayColors: {
      type: "array",
      default: [{
        name: "color 1",
        color: "#ff0000"
      }, {
        name: "color 2",
        color: "#00ff00"
      }]
    },
    overlayOpacity: {
      type: "number",
      default: 0.2
    },
    mediaID: {
      type: "number"
    },
    mediaURL: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    backgroundURL: {
      type: "string",
      default: ""
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        clipPath = _props$attributes.clipPath,
        slantInvert = _props$attributes.slantInvert,
        slantHeight = _props$attributes.slantHeight,
        minHeight = _props$attributes.minHeight,
        paddingTop = _props$attributes.paddingTop,
        paddingBottom = _props$attributes.paddingBottom,
        backgroundColor = _props$attributes.backgroundColor,
        overlayColor = _props$attributes.overlayColor,
        overlayColors = _props$attributes.overlayColors,
        overlayOpacity = _props$attributes.overlayOpacity,
        mediaID = _props$attributes.mediaID,
        mediaURL = _props$attributes.mediaURL,
        backgroundURL = _props$attributes.backgroundURL,
        setAttributes = props.setAttributes,
        className = props.className;

    var onHeightChange = function onHeightChange(value) {
      // console.log(value);
      setAttributes({
        minHeight: value
      });
    };

    var onSlantHeightChange = function onSlantHeightChange(value) {
      setAttributes({
        slantHeight: value
      }); // console.log(value);
      // setAttributes({slantInvert : value})

      var str_temp;

      if (!slantInvert) {
        str_temp = "polygon(-1px 0, -1px calc(100% - ".concat(slantHeight, "px), 101% 100%, 100% 0)");
      } else {
        str_temp = "polygon(-1px 0, -1px 100%, 100% calc(100% - ".concat(slantHeight, "px), 101% 0)");
      }

      setAttributes({
        clipPath: str_temp
      });
    };

    var onInvertChange = function onInvertChange(value) {
      console.log(value);
      setAttributes({
        slantInvert: value
      });
      var str_temp;

      if (!value) {
        str_temp = "polygon(-10px 0, -10px calc(100% - ".concat(slantHeight, "px), 100% 100%, 100% 0)");
      } else {
        str_temp = "polygon(-10px 0, -10px 100%, 100% calc(100% - ".concat(slantHeight, "px), 100% 0)");
      }

      setAttributes({
        clipPath: str_temp
      });
    };

    var onPaddingTopChange = function onPaddingTopChange(value) {
      setAttributes({
        paddingTop: value
      });
    };

    var onPaddingBottomChange = function onPaddingBottomChange(value) {
      setAttributes({
        paddingBottom: value
      });
    };

    var onBackgroundColorChange = function onBackgroundColorChange(clr) {
      //   console.log(clr);
      setAttributes({
        backgroundColor: clr
      });
    };

    var onOverlayColorChange = function onOverlayColorChange(clr) {
      //   console.log(clr);
      setAttributes({
        overlayColor: clr
      });
    };

    var onOverlayOpacityChange = function onOverlayOpacityChange(value) {
      setAttributes({
        overlayOpacity: value
      });
    };

    var onSelectImage = function onSelectImage(media) {
      // console.log("media ID : ", media.id);
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id,
        backgroundURL: media.url
      });
    };

    var onRemoveBgImage = function onRemoveBgImage(event) {
      console.log(event);
      setAttributes({
        mediaURL: "",
        mediaID: undefined,
        backgroundURL: ""
      });
    }; // setStyle();


    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      header: "Slanted Controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Misc",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Height",
      value: minHeight,
      max: 500,
      onChange: onHeightChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Slant Height",
      value: slantHeight,
      max: 500,
      onChange: onSlantHeightChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["CheckboxControl"], {
      label: "invert",
      checked: slantInvert,
      onChange: onInvertChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "background",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          className: "button button-large",
          onClick: open
        }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Upload Image", "gutenberg-examples") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Change Image", "gutenberg-examples")), mediaID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          className: "button button-alert",
          onClick: onRemoveBgImage
        }, "Remove") : "");
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Padding",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Padding Top",
      value: paddingTop,
      max: 500,
      onChange: onPaddingTopChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Padding Bottom",
      value: paddingBottom,
      max: 500,
      onChange: onPaddingBottomChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Colors"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      title: "backgroundColor",
      value: backgroundColor,
      onChange: onBackgroundColorChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Overlay Color",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Overlay Opacity",
      value: overlayOpacity,
      max: 1.0,
      step: 0.01,
      onChange: onOverlayOpacityChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: overlayColor,
      colors: overlayColors,
      onChange: onOverlayColorChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorIndicator"], {
      colorValue: overlayColor
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: _objectSpread(_objectSpread({
        zIndex: 10
      }, blockStyle), {}, {
        minHeight: minHeight,
        backgroundColor: backgroundColor,
        backgroundImage: "url(" + backgroundURL + ")",
        clipPath: clipPath,
        marginTop: "".concat(-slantHeight, "px"),
        transform: "translateY(".concat(slantHeight, "px)"),
        paddingTop: paddingTop,
        paddingBottom: paddingBottom
      }),
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "overlay",
      style: {
        backgroundColor: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], null)))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        clipPath = _props$attributes2.clipPath,
        slantInvert = _props$attributes2.slantInvert,
        slantHeight = _props$attributes2.slantHeight,
        minHeight = _props$attributes2.minHeight,
        paddingTop = _props$attributes2.paddingTop,
        paddingBottom = _props$attributes2.paddingBottom,
        backgroundColor = _props$attributes2.backgroundColor,
        backgroundURL = _props$attributes2.backgroundURL,
        overlayColor = _props$attributes2.overlayColor,
        overlayOpacity = _props$attributes2.overlayOpacity,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: _objectSpread(_objectSpread({
        zIndex: 10
      }, blockStyle), {}, {
        position: "relative",
        minHeight: minHeight,
        backgroundColor: backgroundColor,
        backgroundImage: "url(" + backgroundURL + ")",
        clipPath: clipPath,
        marginTop: "".concat(-slantHeight, "px"),
        transform: "translateY(".concat(slantHeight, "px) translateZ(0)"),
        paddingTop: paddingTop,
        paddingBottom: paddingBottom
      }),
      className: (className, "alignwide")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "overlay",
      style: {
        backgroundColor: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null)));
  }
};

/***/ }),

/***/ "./src/title/index.js":
/*!****************************!*\
  !*** ./src/title/index.js ***!
  \****************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

// import edit from './edit';
// import save from './save';

var name = "sprayloc/title";
var settings = {
  apiVersion: 2,
  title: "Sprayloc Title",
  description: "Title Block",
  category: "design",
  icon: "edit",
  attributes: {
    content: {
      type: "array",
      source: "children",
      selector: "p",
      default: ["Hello"]
    },
    title_str: {
      type: "string",
      value: "hello",
      default: "haaaa !!!!"
    }
  },
  edit: function edit(props) {
    var onChangeContent = function onChangeContent(value) {
      props.setAttributes({
        content: value
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      class: "title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
      value: props.attributes.content,
      onChange: onChangeContent,
      tagName: "p"
    }));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      class: "title"
    }, props.attributes.content);
  }
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map