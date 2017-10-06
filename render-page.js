(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("stream"), require("fs"), require("assert"), require("tty"), require("util"), require("net"));
	else if(typeof define === 'function' && define.amd)
		define(["stream", "fs", "assert", "tty", "util", "net"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("stream"), require("fs"), require("assert"), require("tty"), require("util"), require("net")) : factory(root["stream"], root["fs"], root["assert"], root["tty"], root["util"], root["net"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_131__, __WEBPACK_EXTERNAL_MODULE_227__, __WEBPACK_EXTERNAL_MODULE_390__, __WEBPACK_EXTERNAL_MODULE_403__, __WEBPACK_EXTERNAL_MODULE_404__, __WEBPACK_EXTERNAL_MODULE_405__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _isString2 = __webpack_require__(1);
	
	var _isString3 = _interopRequireDefault(_isString2);
	
	var _isArray2 = __webpack_require__(8);
	
	var _isArray3 = _interopRequireDefault(_isArray2);
	
	var _merge2 = __webpack_require__(10);
	
	var _merge3 = _interopRequireDefault(_merge2);
	
	var _get2 = __webpack_require__(98);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _kebabCase2 = __webpack_require__(110);
	
	var _kebabCase3 = _interopRequireDefault(_kebabCase2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(126);
	
	var _reactRouterDom = __webpack_require__(132);
	
	var _apiRunnerSsr = __webpack_require__(173);
	
	var _apiRunnerSsr2 = _interopRequireDefault(_apiRunnerSsr);
	
	var _pages = __webpack_require__(237);
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _syncRequires = __webpack_require__(238);
	
	var _syncRequires2 = _interopRequireDefault(_syncRequires);
	
	var _testRequireError = __webpack_require__(451);
	
	var _testRequireError2 = _interopRequireDefault(_testRequireError);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Html = void 0;
	try {
	  Html = __webpack_require__(452);
	} catch (err) {
	  if ((0, _testRequireError2.default)("../src/html", err)) {
	    Html = __webpack_require__(455);
	  } else {
	    console.log("\n\nThere was an error requiring \"src/html.js\"\n\n", err, "\n\n");
	    process.exit();
	  }
	}
	
	var pathChunkName = function pathChunkName(path) {
	  var name = path === "/" ? "index" : (0, _kebabCase3.default)(path);
	  return "path---" + name;
	};
	
	var getPage = function getPage(path) {
	  return _pages2.default.find(function (page) {
	    return page.path === path;
	  });
	};
	var defaultLayout = function defaultLayout(props) {
	  return _react2.default.createElement(
	    "div",
	    null,
	    props.children()
	  );
	};
	
	var getLayout = function getLayout(page) {
	  var layout = _syncRequires2.default.layouts[page.layoutComponentChunkName];
	  return layout ? layout : defaultLayout;
	};
	
	var createElement = _react2.default.createElement;
	
	module.exports = function (locals, callback) {
	  var pathPrefix = "/";
	  if ((undefined)) {
	    pathPrefix = ("/gatsby-blog") + "/";
	  }
	
	  var bodyHTML = "";
	  var headComponents = [];
	  var preBodyComponents = [];
	  var postBodyComponents = [];
	  var bodyProps = {};
	
	  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
	    bodyHTML = body;
	  };
	
	  var setHeadComponents = function setHeadComponents(components) {
	    headComponents = headComponents.concat(components);
	  };
	
	  var setPreBodyComponents = function setPreBodyComponents(components) {
	    preBodyComponents = preBodyComponents.concat(components);
	  };
	
	  var setPostBodyComponents = function setPostBodyComponents(components) {
	    postBodyComponents = postBodyComponents.concat(components);
	  };
	
	  var setBodyProps = function setBodyProps(props) {
	    bodyProps = (0, _merge3.default)({}, bodyProps, props);
	  };
	
	  var bodyComponent = createElement(_reactRouterDom.StaticRouter, {
	    location: {
	      pathname: locals.path
	    },
	    context: {}
	  }, createElement(_reactRouterDom.Route, {
	    render: function render(routeProps) {
	      var page = getPage(routeProps.location.pathname);
	      var layout = getLayout(page);
	      return createElement((0, _reactRouterDom.withRouter)(layout), {
	        children: function children(layoutProps) {
	          var props = layoutProps ? layoutProps : routeProps;
	          return createElement(_syncRequires2.default.components[page.componentChunkName], _extends({}, props, _syncRequires2.default.json[page.jsonName]));
	        }
	      });
	    }
	  }));
	
	  // Let the site or plugin render the page component.
	  (0, _apiRunnerSsr2.default)("replaceRenderer", {
	    bodyComponent: bodyComponent,
	    replaceBodyHTMLString: replaceBodyHTMLString,
	    setHeadComponents: setHeadComponents,
	    setPreBodyComponents: setPreBodyComponents,
	    setPostBodyComponents: setPostBodyComponents,
	    setBodyProps: setBodyProps
	  });
	
	  // If no one stepped up, we'll handle it.
	  if (!bodyHTML) {
	    bodyHTML = (0, _server.renderToString)(bodyComponent);
	  }
	
	  (0, _apiRunnerSsr2.default)("onRenderBody", {
	    setHeadComponents: setHeadComponents,
	    setPreBodyComponents: setPreBodyComponents,
	    setPostBodyComponents: setPostBodyComponents,
	    setBodyProps: setBodyProps,
	    pathname: locals.path
	  });
	
	  // Add the chunk-manifest as a head component.
	  var chunkManifest = __webpack_require__(456);
	
	  headComponents.unshift(_react2.default.createElement("script", {
	    id: "webpack-manifest",
	    key: "webpack-manifest",
	    dangerouslySetInnerHTML: {
	      __html: "\n            //<![CDATA[\n            window.webpackManifest = " + chunkManifest + "\n            //]]>\n            "
	    }
	  }));
	
	  var stats = void 0;
	  try {
	    stats = __webpack_require__(457);
	  } catch (e) {}
	  // ignore
	
	
	  // Create paths to scripts
	  var page = _pages2.default.find(function (page) {
	    return page.path === locals.path;
	  });
	  var scripts = ["commons", "app", pathChunkName(locals.path), page.componentChunkName, page.layoutComponentChunkName].map(function (s) {
	    var fetchKey = "assetsByChunkName[" + s + "]";
	
	    var fetchedScript = (0, _get3.default)(stats, fetchKey);
	
	    if (!fetchedScript) {
	      return null;
	    }
	
	    // If sourcemaps are enabled, then the entry will be an array with
	    // the script name as the first entry.
	    fetchedScript = (0, _isArray3.default)(fetchedScript) ? fetchedScript[0] : fetchedScript;
	    var prefixedScript = "" + pathPrefix + fetchedScript;
	
	    // Make sure we found a component.
	    if (prefixedScript === "/") {
	      return null;
	    }
	
	    return prefixedScript;
	  }).filter(function (s) {
	    return (0, _isString3.default)(s);
	  });
	
	  scripts.forEach(function (script) {
	    // Add preload <link>s for scripts.
	    headComponents.unshift(_react2.default.createElement("link", { rel: "preload", key: script, href: script, as: "script" }));
	  });
	
	  // Add script loader for page scripts to the head.
	  // Taken from https://www.html5rocks.com/en/tutorials/speed/script-loading/
	  var scriptsString = scripts.map(function (s) {
	    return "\"" + s + "\"";
	  }).join(",");
	  headComponents.push(_react2.default.createElement("script", {
	    key: "script-loader",
	    dangerouslySetInnerHTML: {
	      __html: "\n  !function(e,t,r){function n(){for(;d[0]&&\"loaded\"==d[0][f];)c=d.shift(),c[o]=!i.parentNode.insertBefore(c,i)}for(var s,a,c,d=[],i=e.scripts[0],o=\"onreadystatechange\",f=\"readyState\";s=r.shift();)a=e.createElement(t),\"async\"in i?(a.async=!1,e.head.appendChild(a)):i[f]?(d.push(a),a[o]=n):e.write(\"<\"+t+' src=\"'+s+'\" defer></'+t+\">\"),a.src=s}(document,\"script\",[\n  " + scriptsString + "\n])\n  "
	    }
	  }));
	
	  var html = "<!DOCTYPE html>\n " + (0, _server.renderToStaticMarkup)(_react2.default.createElement(Html, _extends({}, bodyProps, {
	    headComponents: headComponents,
	    preBodyComponents: preBodyComponents,
	    postBodyComponents: postBodyComponents,
	    body: bodyHTML,
	    path: locals.path
	  })));
	
	  callback(null, html);
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(2),
	    isArray = __webpack_require__(8),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}
	
	module.exports = isString;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(3),
	    getRawTag = __webpack_require__(6),
	    objectToString = __webpack_require__(7);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(5);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(3);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(11),
	    createAssigner = __webpack_require__(88);
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	module.exports = merge;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(12),
	    assignMergeValue = __webpack_require__(50),
	    baseFor = __webpack_require__(53),
	    baseMergeDeep = __webpack_require__(55),
	    isObject = __webpack_require__(30),
	    keysIn = __webpack_require__(82);
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}
	
	module.exports = baseMerge;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13),
	    stackClear = __webpack_require__(21),
	    stackDelete = __webpack_require__(22),
	    stackGet = __webpack_require__(23),
	    stackHas = __webpack_require__(24),
	    stackSet = __webpack_require__(25);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(14),
	    listCacheDelete = __webpack_require__(15),
	    listCacheGet = __webpack_require__(18),
	    listCacheHas = __webpack_require__(19),
	    listCacheSet = __webpack_require__(20);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(16);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(17);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(16);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(16);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(16);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13),
	    Map = __webpack_require__(26),
	    MapCache = __webpack_require__(35);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(28),
	    getValue = __webpack_require__(34);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(29),
	    isMasked = __webpack_require__(31),
	    isObject = __webpack_require__(30),
	    toSource = __webpack_require__(33);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(2),
	    isObject = __webpack_require__(30);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(32);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(36),
	    mapCacheDelete = __webpack_require__(44),
	    mapCacheGet = __webpack_require__(47),
	    mapCacheHas = __webpack_require__(48),
	    mapCacheSet = __webpack_require__(49);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(37),
	    ListCache = __webpack_require__(13),
	    Map = __webpack_require__(26);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(38),
	    hashDelete = __webpack_require__(40),
	    hashGet = __webpack_require__(41),
	    hashHas = __webpack_require__(42),
	    hashSet = __webpack_require__(43);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(39);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(39);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(39);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(39);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(45);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(46);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(45);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(45);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(45);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(51),
	    eq = __webpack_require__(17);
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignMergeValue;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(52);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(54);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(50),
	    cloneBuffer = __webpack_require__(56),
	    cloneTypedArray = __webpack_require__(58),
	    copyArray = __webpack_require__(61),
	    initCloneObject = __webpack_require__(62),
	    isArguments = __webpack_require__(67),
	    isArray = __webpack_require__(8),
	    isArrayLikeObject = __webpack_require__(69),
	    isBuffer = __webpack_require__(72),
	    isFunction = __webpack_require__(29),
	    isObject = __webpack_require__(30),
	    isPlainObject = __webpack_require__(74),
	    isTypedArray = __webpack_require__(75),
	    toPlainObject = __webpack_require__(79);
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
	
	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	module.exports = baseMergeDeep;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(59);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(60);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(63),
	    getPrototype = __webpack_require__(64),
	    isPrototype = __webpack_require__(66);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());
	
	module.exports = baseCreate;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(65);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(68),
	    isObjectLike = __webpack_require__(9);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(2),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(70),
	    isObjectLike = __webpack_require__(9);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(29),
	    isLength = __webpack_require__(71);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4),
	    stubFalse = __webpack_require__(73);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(2),
	    getPrototype = __webpack_require__(64),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(76),
	    baseUnary = __webpack_require__(77),
	    nodeUtil = __webpack_require__(78);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(2),
	    isLength = __webpack_require__(71),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(5);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(80),
	    keysIn = __webpack_require__(82);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(81),
	    baseAssignValue = __webpack_require__(51);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(51),
	    eq = __webpack_require__(17);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(83),
	    baseKeysIn = __webpack_require__(86),
	    isArrayLike = __webpack_require__(70);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(84),
	    isArguments = __webpack_require__(67),
	    isArray = __webpack_require__(8),
	    isBuffer = __webpack_require__(72),
	    isIndex = __webpack_require__(85),
	    isTypedArray = __webpack_require__(75);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30),
	    isPrototype = __webpack_require__(66),
	    nativeKeysIn = __webpack_require__(87);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(89),
	    isIterateeCall = __webpack_require__(97);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(90),
	    overRest = __webpack_require__(91),
	    setToString = __webpack_require__(93);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(92);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(94),
	    shortOut = __webpack_require__(96);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(95),
	    defineProperty = __webpack_require__(52),
	    identity = __webpack_require__(90);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(17),
	    isArrayLike = __webpack_require__(70),
	    isIndex = __webpack_require__(85),
	    isObject = __webpack_require__(30);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(99);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(100),
	    toKey = __webpack_require__(109);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(8),
	    isKey = __webpack_require__(101),
	    stringToPath = __webpack_require__(103),
	    toString = __webpack_require__(106);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(8),
	    isSymbol = __webpack_require__(102);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(2),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(104);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(105);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(35);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(107);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(3),
	    arrayMap = __webpack_require__(108),
	    isArray = __webpack_require__(8),
	    isSymbol = __webpack_require__(102);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(102);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var createCompounder = __webpack_require__(111);
	
	/**
	 * Converts `string` to
	 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the kebab cased string.
	 * @example
	 *
	 * _.kebabCase('Foo Bar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('fooBar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('__FOO_BAR__');
	 * // => 'foo-bar'
	 */
	var kebabCase = createCompounder(function(result, word, index) {
	  return result + (index ? '-' : '') + word.toLowerCase();
	});
	
	module.exports = kebabCase;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(112),
	    deburr = __webpack_require__(113),
	    words = __webpack_require__(116);
	
	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";
	
	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');
	
	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}
	
	module.exports = createCompounder;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var deburrLetter = __webpack_require__(114),
	    toString = __webpack_require__(106);
	
	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	
	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
	
	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';
	
	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');
	
	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}
	
	module.exports = deburr;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(115);
	
	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};
	
	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = basePropertyOf(deburredLetters);
	
	module.exports = deburrLetter;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = basePropertyOf;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var asciiWords = __webpack_require__(117),
	    hasUnicodeWord = __webpack_require__(118),
	    toString = __webpack_require__(106),
	    unicodeWords = __webpack_require__(119);
	
	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString(string);
	  pattern = guard ? undefined : pattern;
	
	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}
	
	module.exports = words;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	
	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}
	
	module.exports = asciiWords;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	
	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}
	
	module.exports = hasUnicodeWord;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	
	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
	    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
	
	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');
	
	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}
	
	module.exports = unicodeWords;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(121);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 React v16.0.0
	 react.production.min.js
	
	 Copyright (c) 2013-present, Facebook, Inc.
	
	 This source code is licensed under the MIT license found in the
	 LICENSE file in the root directory of this source tree.
	*/
	'use strict';var f=__webpack_require__(122),p=__webpack_require__(123);__webpack_require__(124);var r=__webpack_require__(125);
	function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++)d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
	var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
	function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}function x(){}x.prototype=v.prototype;var y=w.prototype=new x;y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}var A=z.prototype=new x;A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children};
	var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g}}
	G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b)D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++)h[n]=arguments[n+2];c.children=h}if(a&&a.defaultProps)for(e in l=a.defaultProps,l)void 0===c[e]&&(c[e]=l[e]);return G(a,g,k,m,q,C.current,c)};
	G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};
	G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b)D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++)l[n]=arguments[n+2];e.children=l}return G(a.type,c,g,k,m,q,e)};
	G.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===E};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var J=/\/+/g,K=[];
	function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:e,count:0}}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a)}
	function N(a,b,d,e){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e)}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;)c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+
	Object.keys(a).join(", ")+"}":d,""));return g}function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function P(a,b){a.func.call(a.context,b,a.count++)}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a))}
	function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b)}var S={forEach:function(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b)},map:function(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e},count:function(a){return null==a?0:N(a,"",r.thatReturnsNull,null)},toArray:function(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b}};
	module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(a){G.isValidElement(a)?void 0:t("143");return a}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (false) {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(127);
	} else {
	  module.exports = require('./cjs/react-dom-server.node.development.js');
	}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 React v16.0.0
	 react-dom-server.node.production.min.js
	
	 Copyright (c) 2013-present, Facebook, Inc.
	
	 This source code is licensed under the MIT license found in the
	 LICENSE file in the root directory of this source tree.
	*/
	'use strict';var k=__webpack_require__(122);__webpack_require__(124);var m=__webpack_require__(120),p=__webpack_require__(123),aa=__webpack_require__(128),ba=__webpack_require__(130),ca=__webpack_require__(131);
	function w(a){for(var b=arguments.length-1,g="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)g+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
	function x(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
	var y={Namespaces:{html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},getIntrinsicNamespace:x,getChildNamespace:function(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?x(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}},da={children:!0,dangerouslySetInnerHTML:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,style:!0};
	function z(a,b){return(a&b)===b}
	var C={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=C,g=a.Properties||{},c=a.DOMAttributeNamespaces||{},h=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in g){D.properties.hasOwnProperty(f)?w("48",f):void 0;var e=f.toLowerCase(),d=g[f];e={attributeName:e,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:z(d,b.MUST_USE_PROPERTY),
	hasBooleanValue:z(d,b.HAS_BOOLEAN_VALUE),hasNumericValue:z(d,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:z(d,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:z(d,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:z(d,b.HAS_STRING_BOOLEAN_VALUE)};1>=e.hasBooleanValue+e.hasNumericValue+e.hasOverloadedBooleanValue?void 0:w("50",f);h.hasOwnProperty(f)&&(e.attributeName=h[f]);c.hasOwnProperty(f)&&(e.attributeNamespace=c[f]);a.hasOwnProperty(f)&&(e.mutationMethod=a[f]);D.properties[f]=e}}},D=
	{ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ATTRIBUTE_NAME_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
	properties:{},shouldSetAttribute:function(a,b){if(D.isReservedProp(a)||!("o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return D.shouldAttributeAcceptBooleanValue(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}},getPropertyInfo:function(a){return D.properties.hasOwnProperty(a)?D.properties[a]:null},shouldAttributeAcceptBooleanValue:function(a){if(D.isReservedProp(a))return!0;var b=D.getPropertyInfo(a);
	if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a},isReservedProp:function(a){return da.hasOwnProperty(a)},injection:C},E=D,ea=/["'&<>]/;
	function F(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ea.exec(a);if(b){var g="",c,h=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="\x26quot;";break;case 38:b="\x26amp;";break;case 39:b="\x26#x27;";break;case 60:b="\x26lt;";break;case 62:b="\x26gt;";break;default:continue}h!==c&&(g+=a.substring(h,c));h=c+1;g+=b}a=h!==c?g+a.substring(h,c):g}return a}var fa=new RegExp("^["+E.ATTRIBUTE_NAME_START_CHAR+"]["+E.ATTRIBUTE_NAME_CHAR+"]*$"),G={},H={};
	function ha(a){if(H.hasOwnProperty(a))return!0;if(G.hasOwnProperty(a))return!1;if(fa.test(a))return H[a]=!0;G[a]=!0;return!1}
	var I={createMarkupForID:function(a){return E.ID_ATTRIBUTE_NAME+"\x3d"+('"'+F(a)+'"')},createMarkupForRoot:function(){return E.ROOT_ATTRIBUTE_NAME+'\x3d""'},createMarkupForProperty:function(a,b){var g=E.getPropertyInfo(a);if(g){if(null==b||g.hasBooleanValue&&!b||g.hasNumericValue&&isNaN(b)||g.hasPositiveNumericValue&&1>b||g.hasOverloadedBooleanValue&&!1===b)return"";var c=g.attributeName;if(g.hasBooleanValue||g.hasOverloadedBooleanValue&&!0===b)return c+'\x3d""';if("boolean"!==typeof b||E.shouldAttributeAcceptBooleanValue(a))return c+
	"\x3d"+('"'+F(b)+'"')}else if(E.shouldSetAttribute(a,b))return null==b?"":a+"\x3d"+('"'+F(b)+'"');return null},createMarkupForCustomAttribute:function(a,b){return ha(a)&&null!=b?a+"\x3d"+('"'+F(b)+'"'):""}},J={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ia=k({menuitem:!0},J),K={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,
	columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ja=["Webkit","ms","Moz","O"];
	Object.keys(K).forEach(function(a){ja.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);K[b]=K[a]})});var L=y.Namespaces,ka=y.getIntrinsicNamespace,la=y.getChildNamespace,M=m.Children.toArray,ma={listing:!0,pre:!0,textarea:!0};function N(a){return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}var na=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,O={},oa=ba(function(a){return aa(a)});
	function pa(a){var b="";m.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function qa(a,b){if(a=a.contextTypes){var g={},c;for(c in a)g[c]=b[c];b=g}else b=p;return b}var ra={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null};function P(a,b){void 0===a&&w("152",N(b)||"Component")}
	function sa(a,b){for(;m.isValidElement(a);){var g=a.type;if("function"!==typeof g)break;var c=qa(g,b),h=[],f=!1,e={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===h)return null},enqueueReplaceState:function(a,b){f=!0;h=[b]},enqueueSetState:function(a,b){if(null===h)return null;h.push(b)}};if(g.prototype&&g.prototype.isReactComponent)var d=new g(a.props,c,e);else if(d=g(a.props,c,e),null==d||null==d.render){a=d;P(a,g);continue}d.props=a.props;d.context=c;d.updater=e;e=d.state;
	void 0===e&&(d.state=e=null);if(d.componentWillMount)if(d.componentWillMount(),h.length){e=h;var q=f;h=null;f=!1;if(q&&1===e.length)d.state=e[0];else{var r=q?e[0]:d.state,l=!0;for(q=q?1:0;q<e.length;q++){var n=e[q];if(n="function"===typeof n?n.call(d,r,a.props,c):n)l?(l=!1,r=k({},r,n)):k(r,n)}d.state=r}}else h=null;a=d.render();P(a,g);if("function"===typeof d.getChildContext){c=g.childContextTypes;"object"!==typeof c?w("107",N(g)||"Unknown"):void 0;var B=d.getChildContext();for(var A in B)A in c?
	void 0:w("108",N(g)||"Unknown",A)}B&&(b=k({},b,B))}return{child:a,context:b}}
	var Q=function(){function a(b,g){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");b=m.isValidElement(b)?[b]:M(b);this.stack=[{domNamespace:L.html,children:b,childIndex:0,context:p,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=g}a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=!0;break}var c=this.stack[this.stack.length-1];if(c.childIndex>=
	c.children.length)b+=c.footer,this.previousWasTextNode=!1,this.stack.pop(),"select"===c.tag&&(this.currentSelectValue=null);else{var h=c.children[c.childIndex++];b+=this.render(h,c.context,c.domNamespace)}}return b};a.prototype.render=function(a,g,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return F(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+F(c);this.previousWasTextNode=!0;return F(c)}g=sa(a,g);a=g.child;g=g.context;if(null===a||!1===
	a)return"";if(m.isValidElement(a))return this.renderDOM(a,g,c);a=M(a);this.stack.push({domNamespace:c,children:a,childIndex:0,context:g,footer:""});return""};a.prototype.renderDOM=function(a,g,c){var b=a.type.toLowerCase();c===L.html&&ka(b);O.hasOwnProperty(b)||(na.test(b)?void 0:w("65",b),O[b]=!0);var f=a.props;if("input"===b)f=k({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===
	b){var e=f.value;if(null==e){e=f.defaultValue;var d=f.children;null!=d&&(null!=e?w("92"):void 0,Array.isArray(d)&&(1>=d.length?void 0:w("93"),d=d[0]),e=""+d);null==e&&(e="")}f=k({},f,{value:void 0,children:""+e})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=k({},f,{value:void 0});else if("option"===b){d=this.currentSelectValue;var q=pa(f.children);if(null!=d){var r=null!=f.value?f.value+"":q;e=!1;if(Array.isArray(d))for(var l=0;l<d.length;l++){if(""+d[l]===r){e=
	!0;break}}else e=""+d===r;f=k({selected:void 0,children:void 0},f,{selected:e,children:q})}}if(e=f)ia[b]&&(null!=e.children||null!=e.dangerouslySetInnerHTML?w("137",b,""):void 0),null!=e.dangerouslySetInnerHTML&&(null!=e.children?w("60"):void 0,"object"===typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML?void 0:w("61")),null!=e.style&&"object"!==typeof e.style?w("62",""):void 0;e=f;d=this.makeStaticMarkup;q=1===this.stack.length;r="\x3c"+a.type;for(t in e)if(e.hasOwnProperty(t)){var n=
	e[t];if(null!=n){if("style"===t){l=void 0;var B="",A="";for(l in n)if(n.hasOwnProperty(l)){var u=0===l.indexOf("--"),v=n[l];null!=v&&(B+=A+oa(l)+":",A=l,u=null==v||"boolean"===typeof v||""===v?"":u||"number"!==typeof v||0===v||K.hasOwnProperty(A)&&K[A]?(""+v).trim():v+"px",B+=u,A=";")}n=B||null}l=null;b:if(u=b,v=e,-1===u.indexOf("-"))u="string"===typeof v.is;else switch(u){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":u=
	!1;break b;default:u=!0}u?ra.hasOwnProperty(t)||(l=I.createMarkupForCustomAttribute(t,n)):l=I.createMarkupForProperty(t,n);l&&(r+=" "+l)}}d||q&&(r+=" "+I.createMarkupForRoot());var t=r;e="";J.hasOwnProperty(b)?t+="/\x3e":(t+="\x3e",e="\x3c/"+a.type+"\x3e");a:{d=f.dangerouslySetInnerHTML;if(null!=d){if(null!=d.__html){d=d.__html;break a}}else if(d=f.children,"string"===typeof d||"number"===typeof d){d=F(d);break a}d=null}null!=d?(f=[],ma[b]&&"\n"===d.charAt(0)&&(t+="\n"),t+=d):f=M(f.children);a={domNamespace:la(c,
	a.type),tag:b,children:f,childIndex:0,context:g,footer:e};this.stack.push(a);return t};return a}(),R={renderToString:function(a){return(new Q(a,!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new Q(a,!0)).read(Infinity)}};
	function ta(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
	var S=function(a){function b(g,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var h=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");h=!h||"object"!==typeof h&&"function"!==typeof h?this:h;h.partialRenderer=new Q(g,c);return h}ta(b,a);b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.emit("error",c)}};return b}(ca.Readable),ua={renderToNodeStream:function(a){return new S(a,
	!1)},renderToStaticNodeStream:function(a){return new S(a,!0)}},T=E.injection.MUST_USE_PROPERTY,U=E.injection.HAS_BOOLEAN_VALUE,va=E.injection.HAS_NUMERIC_VALUE,V=E.injection.HAS_POSITIVE_NUMERIC_VALUE,W=E.injection.HAS_STRING_BOOLEAN_VALUE,wa={Properties:{allowFullScreen:U,allowTransparency:W,async:U,autoPlay:U,capture:U,checked:T|U,cols:V,contentEditable:W,controls:U,"default":U,defer:U,disabled:U,download:E.injection.HAS_OVERLOADED_BOOLEAN_VALUE,draggable:W,formNoValidate:U,hidden:U,loop:U,multiple:T|
	U,muted:T|U,noValidate:U,open:U,playsInline:U,readOnly:U,required:U,reversed:U,rows:V,rowSpan:va,scoped:U,seamless:U,selected:T|U,size:V,start:va,span:V,spellCheck:W,style:0,itemScope:U,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:W},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",
	""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+b)}}},X=E.injection.HAS_STRING_BOOLEAN_VALUE,Y={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Z={Properties:{autoReverse:X,externalResourcesRequired:X,preserveAlpha:X},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:Y.xlink,xlinkArcrole:Y.xlink,xlinkHref:Y.xlink,
	xlinkRole:Y.xlink,xlinkShow:Y.xlink,xlinkTitle:Y.xlink,xlinkType:Y.xlink,xmlBase:Y.xml,xmlLang:Y.xml,xmlSpace:Y.xml}},xa=/[\-\:]([a-z])/g;function ya(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(xa,
	ya);Z.Properties[b]=0;Z.DOMAttributeNames[b]=a});E.injection.injectDOMPropertyConfig(wa);E.injection.injectDOMPropertyConfig(Z);module.exports={renderToString:R.renderToString,renderToStaticMarkup:R.renderToStaticMarkup,renderToNodeStream:ua.renderToNodeStream,renderToStaticNodeStream:ua.renderToStaticNodeStream,version:"16.0.0"};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(129);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */
	
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	
	module.exports = memoizeStringOnly;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports = require("stream");

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;
	
	var _BrowserRouter2 = __webpack_require__(133);
	
	var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);
	
	var _HashRouter2 = __webpack_require__(160);
	
	var _HashRouter3 = _interopRequireDefault(_HashRouter2);
	
	var _Link2 = __webpack_require__(162);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	var _MemoryRouter2 = __webpack_require__(163);
	
	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);
	
	var _NavLink2 = __webpack_require__(164);
	
	var _NavLink3 = _interopRequireDefault(_NavLink2);
	
	var _Prompt2 = __webpack_require__(165);
	
	var _Prompt3 = _interopRequireDefault(_Prompt2);
	
	var _Redirect2 = __webpack_require__(166);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	var _Route2 = __webpack_require__(167);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _Router2 = __webpack_require__(168);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _StaticRouter2 = __webpack_require__(169);
	
	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);
	
	var _Switch2 = __webpack_require__(170);
	
	var _Switch3 = _interopRequireDefault(_Switch2);
	
	var _matchPath2 = __webpack_require__(171);
	
	var _matchPath3 = _interopRequireDefault(_matchPath2);
	
	var _withRouter2 = __webpack_require__(172);
	
	var _withRouter3 = _interopRequireDefault(_withRouter2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.BrowserRouter = _BrowserRouter3.default;
	exports.HashRouter = _HashRouter3.default;
	exports.Link = _Link3.default;
	exports.MemoryRouter = _MemoryRouter3.default;
	exports.NavLink = _NavLink3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createBrowserHistory = __webpack_require__(137);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _reactRouter = __webpack_require__(146);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */
	var BrowserRouter = function (_React$Component) {
	  _inherits(BrowserRouter, _React$Component);
	
	  function BrowserRouter() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, BrowserRouter);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createBrowserHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  BrowserRouter.prototype.render = function render() {
	    return _react2.default.createElement(_reactRouter.Router, { history: this.history, children: this.props.children });
	  };
	
	  return BrowserRouter;
	}(_react2.default.Component);
	
	BrowserRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  forceRefresh: _propTypes2.default.bool,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = BrowserRouter;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(135)();
	}


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(125);
	var invariant = __webpack_require__(124);
	var ReactPropTypesSecret = __webpack_require__(136);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(138);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(139);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _LocationUtils = __webpack_require__(140);
	
	var _PathUtils = __webpack_require__(143);
	
	var _createTransitionManager = __webpack_require__(144);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _DOMUtils = __webpack_require__(145);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';
	
	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	};
	
	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');
	
	  var globalHistory = window.history;
	  var canUseHistory = (0, _DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();
	
	  var _props$forceRefresh = props.forceRefresh,
	      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
	      _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
	
	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';
	
	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;
	
	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;
	
	
	    var path = pathname + search + hash;
	
	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
	
	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);
	
	    return (0, _LocationUtils.createLocation)(path, state, key);
	  };
	
	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };
	
	  var transitionManager = (0, _createTransitionManager2.default)();
	
	  var setState = function setState(nextState) {
	    _extends(history, nextState);
	
	    history.length = globalHistory.length;
	
	    transitionManager.notifyListeners(history.location, history.action);
	  };
	
	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;
	
	    handlePop(getDOMLocation(event.state));
	  };
	
	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };
	
	  var forceNextPop = false;
	
	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };
	
	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;
	
	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.
	
	    var toIndex = allKeys.indexOf(toLocation.key);
	
	    if (toIndex === -1) toIndex = 0;
	
	    var fromIndex = allKeys.indexOf(fromLocation.key);
	
	    if (fromIndex === -1) fromIndex = 0;
	
	    var delta = toIndex - fromIndex;
	
	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };
	
	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];
	
	  // Public interface
	
	  var createHref = function createHref(location) {
	    return basename + (0, _PathUtils.createPath)(location);
	  };
	
	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	
	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;
	
	
	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, href);
	
	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
	
	          nextKeys.push(location.key);
	          allKeys = nextKeys;
	
	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
	
	        window.location.href = href;
	      }
	    });
	  };
	
	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	
	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;
	
	
	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, href);
	
	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	
	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
	
	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
	
	        window.location.replace(href);
	      }
	    });
	  };
	
	  var go = function go(n) {
	    globalHistory.go(n);
	  };
	
	  var goBack = function goBack() {
	    return go(-1);
	  };
	
	  var goForward = function goForward() {
	    return go(1);
	  };
	
	  var listenerCount = 0;
	
	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;
	
	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);
	
	      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);
	
	      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };
	
	  var isBlocked = false;
	
	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    var unblock = transitionManager.setPrompt(prompt);
	
	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }
	
	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }
	
	      return unblock();
	    };
	  };
	
	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };
	
	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	
	  return history;
	};
	
	exports.default = createBrowserHistory;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var __DEV__ = ("production") !== 'production';
	
	var warning = function() {};
	
	if (__DEV__) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var NODE_ENV = ("production");
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _resolvePathname = __webpack_require__(141);
	
	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);
	
	var _valueEqual = __webpack_require__(142);
	
	var _valueEqual2 = _interopRequireDefault(_valueEqual);
	
	var _PathUtils = __webpack_require__(143);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);
	
	    if (location.pathname === undefined) location.pathname = '';
	
	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }
	
	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }
	
	    if (state !== undefined && location.state === undefined) location.state = state;
	  }
	
	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }
	
	  if (key) location.key = key;
	
	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }
	
	  return location;
	};
	
	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';
	
	var isAbsolute = function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	};
	
	// About 1.5x faster than the two-arg version of Array#splice()
	var spliceOne = function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }list.pop();
	};
	
	// This implementation is based heavily on node's url.parse
	var resolvePathname = function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];
	
	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;
	
	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }
	
	  if (!fromParts.length) return '/';
	
	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }
	
	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];
	
	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }
	
	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
	
	  var result = fromParts.join('/');
	
	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
	
	  return result;
	};
	
	module.exports = resolvePathname;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var valueEqual = function valueEqual(a, b) {
	  if (a === b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	    return valueEqual(item, b[index]);
	  });
	
	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
	
	  if (aType !== bType) return false;
	
	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();
	
	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
	
	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	
	    if (aKeys.length !== bKeys.length) return false;
	
	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }
	
	  return false;
	};
	
	exports.default = valueEqual;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};
	
	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};
	
	var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
	  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
	};
	
	var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	};
	
	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};
	
	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }
	
	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};
	
	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;
	
	
	  var path = pathname || '/';
	
	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;
	
	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
	
	  return path;
	};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _warning = __webpack_require__(138);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;
	
	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');
	
	    prompt = nextPrompt;
	
	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };
	
	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;
	
	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
	
	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };
	
	  var listeners = [];
	
	  var appendListener = function appendListener(fn) {
	    var isActive = true;
	
	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };
	
	    listeners.push(listener);
	
	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };
	
	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };
	
	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};
	
	exports.default = createTransitionManager;

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};
	
	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};
	
	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert
	
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;
	
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
	
	  return window.history && 'pushState' in window.history;
	};
	
	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};
	
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};
	
	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = undefined;
	
	var _MemoryRouter2 = __webpack_require__(147);
	
	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);
	
	var _Prompt2 = __webpack_require__(150);
	
	var _Prompt3 = _interopRequireDefault(_Prompt2);
	
	var _Redirect2 = __webpack_require__(151);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	var _Route2 = __webpack_require__(152);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _Router2 = __webpack_require__(149);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _StaticRouter2 = __webpack_require__(156);
	
	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);
	
	var _Switch2 = __webpack_require__(157);
	
	var _Switch3 = _interopRequireDefault(_Switch2);
	
	var _matchPath2 = __webpack_require__(153);
	
	var _matchPath3 = _interopRequireDefault(_matchPath2);
	
	var _withRouter2 = __webpack_require__(158);
	
	var _withRouter3 = _interopRequireDefault(_withRouter2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MemoryRouter = _MemoryRouter3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createMemoryHistory = __webpack_require__(148);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _Router = __webpack_require__(149);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for a <Router> that stores location in memory.
	 */
	var MemoryRouter = function (_React$Component) {
	  _inherits(MemoryRouter, _React$Component);
	
	  function MemoryRouter() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MemoryRouter);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createMemoryHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  MemoryRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };
	
	  return MemoryRouter;
	}(_react2.default.Component);
	
	MemoryRouter.propTypes = {
	  initialEntries: _propTypes2.default.array,
	  initialIndex: _propTypes2.default.number,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = MemoryRouter;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(138);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _PathUtils = __webpack_require__(143);
	
	var _LocationUtils = __webpack_require__(140);
	
	var _createTransitionManager = __webpack_require__(144);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};
	
	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
	
	
	  var transitionManager = (0, _createTransitionManager2.default)();
	
	  var setState = function setState(nextState) {
	    _extends(history, nextState);
	
	    history.length = history.entries.length;
	
	    transitionManager.notifyListeners(history.location, history.action);
	  };
	
	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };
	
	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
	  });
	
	  // Public interface
	
	  var createHref = _PathUtils.createPath;
	
	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	
	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;
	
	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }
	
	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };
	
	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	
	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      history.entries[history.index] = location;
	
	      setState({ action: action, location: location });
	    });
	  };
	
	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
	
	    var action = 'POP';
	    var location = history.entries[nextIndex];
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };
	
	  var goBack = function goBack() {
	    return go(-1);
	  };
	
	  var goForward = function goForward() {
	    return go(1);
	  };
	
	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };
	
	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };
	
	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };
	
	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };
	
	  return history;
	};
	
	exports.default = createMemoryHistory;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(138);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(139);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for putting history on context.
	 */
	var Router = function (_React$Component) {
	  _inherits(Router, _React$Component);
	
	  function Router() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Router);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props.history.location.pathname)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Router.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        history: this.props.history,
	        route: {
	          location: this.props.history.location,
	          match: this.state.match
	        }
	      })
	    };
	  };
	
	  Router.prototype.computeMatch = function computeMatch(pathname) {
	    return {
	      path: '/',
	      url: '/',
	      params: {},
	      isExact: pathname === '/'
	    };
	  };
	
	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    var _props = this.props,
	        children = _props.children,
	        history = _props.history;
	
	
	    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');
	
	    // Do this here so we can setState when a <Redirect> changes the
	    // location in componentWillMount. This happens e.g. when doing
	    // server rendering using a <StaticRouter>.
	    this.unlisten = history.listen(function () {
	      _this2.setState({
	        match: _this2.computeMatch(history.location.pathname)
	      });
	    });
	  };
	
	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
	  };
	
	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unlisten();
	  };
	
	  Router.prototype.render = function render() {
	    var children = this.props.children;
	
	    return children ? _react2.default.Children.only(children) : null;
	  };
	
	  return Router;
	}(_react2.default.Component);
	
	Router.propTypes = {
	  history: _propTypes2.default.object.isRequired,
	  children: _propTypes2.default.node
	};
	Router.contextTypes = {
	  router: _propTypes2.default.object
	};
	Router.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Router;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */
	var Prompt = function (_React$Component) {
	  _inherits(Prompt, _React$Component);
	
	  function Prompt() {
	    _classCallCheck(this, Prompt);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Prompt.prototype.enable = function enable(message) {
	    if (this.unblock) this.unblock();
	
	    this.unblock = this.context.router.history.block(message);
	  };
	
	  Prompt.prototype.disable = function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  };
	
	  Prompt.prototype.componentWillMount = function componentWillMount() {
	    if (this.props.when) this.enable(this.props.message);
	  };
	
	  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  };
	
	  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.disable();
	  };
	
	  Prompt.prototype.render = function render() {
	    return null;
	  };
	
	  return Prompt;
	}(_react2.default.Component);
	
	Prompt.propTypes = {
	  when: _propTypes2.default.bool,
	  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
	};
	Prompt.defaultProps = {
	  when: true
	};
	Prompt.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      block: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Prompt;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for updating the location programatically
	 * with a component.
	 */
	var Redirect = function (_React$Component) {
	  _inherits(Redirect, _React$Component);
	
	  function Redirect() {
	    _classCallCheck(this, Redirect);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Redirect.prototype.isStatic = function isStatic() {
	    return this.context.router && this.context.router.staticContext;
	  };
	
	  Redirect.prototype.componentWillMount = function componentWillMount() {
	    if (this.isStatic()) this.perform();
	  };
	
	  Redirect.prototype.componentDidMount = function componentDidMount() {
	    if (!this.isStatic()) this.perform();
	  };
	
	  Redirect.prototype.perform = function perform() {
	    var history = this.context.router.history;
	    var _props = this.props,
	        push = _props.push,
	        to = _props.to;
	
	
	    if (push) {
	      history.push(to);
	    } else {
	      history.replace(to);
	    }
	  };
	
	  Redirect.prototype.render = function render() {
	    return null;
	  };
	
	  return Redirect;
	}(_react2.default.Component);
	
	Redirect.propTypes = {
	  push: _propTypes2.default.bool,
	  from: _propTypes2.default.string,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};
	Redirect.defaultProps = {
	  push: false
	};
	Redirect.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired
	    }).isRequired,
	    staticContext: _propTypes2.default.object
	  }).isRequired
	};
	exports.default = Redirect;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(138);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _matchPath = __webpack_require__(153);
	
	var _matchPath2 = _interopRequireDefault(_matchPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for matching a single path and rendering.
	 */
	var Route = function (_React$Component) {
	  _inherits(Route, _React$Component);
	
	  function Route() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Route);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props, _this.context.router)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Route.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        route: {
	          location: this.props.location || this.context.router.route.location,
	          match: this.state.match
	        }
	      })
	    };
	  };
	
	  Route.prototype.computeMatch = function computeMatch(_ref, _ref2) {
	    var computedMatch = _ref.computedMatch,
	        location = _ref.location,
	        path = _ref.path,
	        strict = _ref.strict,
	        exact = _ref.exact;
	    var route = _ref2.route;
	
	    if (computedMatch) return computedMatch; // <Switch> already computed the match for us
	
	    var pathname = (location || route.location).pathname;
	
	    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact }) : route.match;
	  };
	
	  Route.prototype.componentWillMount = function componentWillMount() {
	    var _props = this.props,
	        component = _props.component,
	        render = _props.render,
	        children = _props.children;
	
	
	    (0, _warning2.default)(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');
	
	    (0, _warning2.default)(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');
	
	    (0, _warning2.default)(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
	  };
	
	  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
	
	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	
	    this.setState({
	      match: this.computeMatch(nextProps, nextContext.router)
	    });
	  };
	
	  Route.prototype.render = function render() {
	    var match = this.state.match;
	    var _props2 = this.props,
	        children = _props2.children,
	        component = _props2.component,
	        render = _props2.render;
	    var _context$router = this.context.router,
	        history = _context$router.history,
	        route = _context$router.route,
	        staticContext = _context$router.staticContext;
	
	    var location = this.props.location || route.location;
	    var props = { match: match, location: location, history: history, staticContext: staticContext };
	
	    return component ? // component prop gets first priority, only called if there's a match
	    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
	    match ? render(props) : null : children ? // children come last, always called
	    typeof children === 'function' ? children(props) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
	    _react2.default.Children.only(children) : null : null;
	  };
	
	  return Route;
	}(_react2.default.Component);
	
	Route.propTypes = {
	  computedMatch: _propTypes2.default.object, // private, from <Switch>
	  path: _propTypes2.default.string,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  component: _propTypes2.default.func,
	  render: _propTypes2.default.func,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
	  location: _propTypes2.default.object
	};
	Route.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.object.isRequired,
	    route: _propTypes2.default.object.isRequired,
	    staticContext: _propTypes2.default.object
	  })
	};
	Route.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Route;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _pathToRegexp = __webpack_require__(154);
	
	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;
	
	var compilePath = function compilePath(pattern, options) {
	  var cacheKey = '' + options.end + options.strict;
	  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
	
	  if (cache[pattern]) return cache[pattern];
	
	  var keys = [];
	  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
	  var compiledPattern = { re: re, keys: keys };
	
	  if (cacheCount < cacheLimit) {
	    cache[pattern] = compiledPattern;
	    cacheCount++;
	  }
	
	  return compiledPattern;
	};
	
	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  if (typeof options === 'string') options = { path: options };
	
	  var _options = options,
	      _options$path = _options.path,
	      path = _options$path === undefined ? '/' : _options$path,
	      _options$exact = _options.exact,
	      exact = _options$exact === undefined ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === undefined ? false : _options$strict;
	
	  var _compilePath = compilePath(path, { end: exact, strict: strict }),
	      re = _compilePath.re,
	      keys = _compilePath.keys;
	
	  var match = re.exec(pathname);
	
	  if (!match) return null;
	
	  var url = match[0],
	      values = match.slice(1);
	
	  var isExact = pathname === url;
	
	  if (exact && !isExact) return null;
	
	  return {
	    path: path, // the path pattern used to match
	    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
	    isExact: isExact, // whether or not we matched exactly
	    params: keys.reduce(function (memo, key, index) {
	      memo[key.name] = values[index];
	      return memo;
	    }, {})
	  };
	};
	
	exports.default = matchPath;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(155)
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }
	
	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'
	
	      keys.push(token)
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }
	
	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ }),
/* 155 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _invariant = __webpack_require__(139);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PathUtils = __webpack_require__(143);
	
	var _Router = __webpack_require__(149);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var normalizeLocation = function normalizeLocation(object) {
	  var _object$pathname = object.pathname,
	      pathname = _object$pathname === undefined ? '/' : _object$pathname,
	      _object$search = object.search,
	      search = _object$search === undefined ? '' : _object$search,
	      _object$hash = object.hash,
	      hash = _object$hash === undefined ? '' : _object$hash;
	
	
	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};
	
	var addBasename = function addBasename(basename, location) {
	  if (!basename) return location;
	
	  return _extends({}, location, {
	    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
	  });
	};
	
	var stripBasename = function stripBasename(basename, location) {
	  if (!basename) return location;
	
	  var base = (0, _PathUtils.addLeadingSlash)(basename);
	
	  if (location.pathname.indexOf(base) !== 0) return location;
	
	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	};
	
	var createLocation = function createLocation(location) {
	  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
	};
	
	var createURL = function createURL(location) {
	  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
	};
	
	var staticHandler = function staticHandler(methodName) {
	  return function () {
	    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
	  };
	};
	
	var noop = function noop() {};
	
	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */
	
	var StaticRouter = function (_React$Component) {
	  _inherits(StaticRouter, _React$Component);
	
	  function StaticRouter() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, StaticRouter);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
	      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
	    }, _this.handlePush = function (location) {
	      var _this$props = _this.props,
	          basename = _this$props.basename,
	          context = _this$props.context;
	
	      context.action = 'PUSH';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleReplace = function (location) {
	      var _this$props2 = _this.props,
	          basename = _this$props2.basename,
	          context = _this$props2.context;
	
	      context.action = 'REPLACE';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleListen = function () {
	      return noop;
	    }, _this.handleBlock = function () {
	      return noop;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  StaticRouter.prototype.getChildContext = function getChildContext() {
	    return {
	      router: {
	        staticContext: this.props.context
	      }
	    };
	  };
	
	  StaticRouter.prototype.render = function render() {
	    var _props = this.props,
	        basename = _props.basename,
	        context = _props.context,
	        location = _props.location,
	        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);
	
	    var history = {
	      createHref: this.createHref,
	      action: 'POP',
	      location: stripBasename(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler('go'),
	      goBack: staticHandler('goBack'),
	      goForward: staticHandler('goForward'),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };
	
	    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
	  };
	
	  return StaticRouter;
	}(_react2.default.Component);
	
	StaticRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  context: _propTypes2.default.object.isRequired,
	  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};
	StaticRouter.defaultProps = {
	  basename: '',
	  location: '/'
	};
	StaticRouter.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = StaticRouter;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(138);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _matchPath = __webpack_require__(153);
	
	var _matchPath2 = _interopRequireDefault(_matchPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for rendering the first <Route> that matches.
	 */
	var Switch = function (_React$Component) {
	  _inherits(Switch, _React$Component);
	
	  function Switch() {
	    _classCallCheck(this, Switch);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
	
	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };
	
	  Switch.prototype.render = function render() {
	    var route = this.context.router.route;
	    var children = this.props.children;
	
	    var location = this.props.location || route.location;
	
	    var match = void 0,
	        child = void 0;
	    _react2.default.Children.forEach(children, function (element) {
	      if (!_react2.default.isValidElement(element)) return;
	
	      var _element$props = element.props,
	          pathProp = _element$props.path,
	          exact = _element$props.exact,
	          strict = _element$props.strict,
	          from = _element$props.from;
	
	      var path = pathProp || from;
	
	      if (match == null) {
	        child = element;
	        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
	      }
	    });
	
	    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
	  };
	
	  return Switch;
	}(_react2.default.Component);
	
	Switch.contextTypes = {
	  router: _propTypes2.default.shape({
	    route: _propTypes2.default.object.isRequired
	  }).isRequired
	};
	Switch.propTypes = {
	  children: _propTypes2.default.node,
	  location: _propTypes2.default.object
	};
	exports.default = Switch;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _hoistNonReactStatics = __webpack_require__(159);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _Route = __webpack_require__(152);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A public higher-order component to access the imperative API
	 */
	var withRouter = function withRouter(Component) {
	  var C = function C(props) {
	    var wrappedComponentRef = props.wrappedComponentRef,
	        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);
	
	    return _react2.default.createElement(_Route2.default, { render: function render(routeComponentProps) {
	        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
	      } });
	  };
	
	  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
	  C.WrappedComponent = Component;
	  C.propTypes = {
	    wrappedComponentRef: _propTypes2.default.func
	  };
	
	  return (0, _hoistNonReactStatics2.default)(C, Component);
	};
	
	exports.default = withRouter;

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createHashHistory = __webpack_require__(161);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _reactRouter = __webpack_require__(146);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */
	var HashRouter = function (_React$Component) {
	  _inherits(HashRouter, _React$Component);
	
	  function HashRouter() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, HashRouter);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createHashHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  HashRouter.prototype.render = function render() {
	    return _react2.default.createElement(_reactRouter.Router, { history: this.history, children: this.props.children });
	  };
	
	  return HashRouter;
	}(_react2.default.Component);
	
	HashRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  getUserConfirmation: _propTypes2.default.func,
	  hashType: _propTypes2.default.oneOf(['hashbang', 'noslash', 'slash']),
	  children: _propTypes2.default.node
	};
	exports.default = HashRouter;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(138);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(139);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _LocationUtils = __webpack_require__(140);
	
	var _PathUtils = __webpack_require__(143);
	
	var _createTransitionManager = __webpack_require__(144);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _DOMUtils = __webpack_require__(145);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HashChangeEvent = 'hashchange';
	
	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: _PathUtils.stripLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  },
	  slash: {
	    encodePath: _PathUtils.addLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  }
	};
	
	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};
	
	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};
	
	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');
	
	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};
	
	var createHashHistory = function createHashHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');
	
	  var globalHistory = window.history;
	  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();
	
	  var _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$hashType = props.hashType,
	      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
	
	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';
	
	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;
	
	
	  var getDOMLocation = function getDOMLocation() {
	    var path = decodePath(getHashPath());
	
	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
	
	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);
	
	    return (0, _LocationUtils.createLocation)(path);
	  };
	
	  var transitionManager = (0, _createTransitionManager2.default)();
	
	  var setState = function setState(nextState) {
	    _extends(history, nextState);
	
	    history.length = globalHistory.length;
	
	    transitionManager.notifyListeners(history.location, history.action);
	  };
	
	  var forceNextPop = false;
	  var ignorePath = null;
	
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);
	
	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;
	
	      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.
	
	      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.
	
	      ignorePath = null;
	
	      handlePop(location);
	    }
	  };
	
	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };
	
	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;
	
	    // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.
	
	    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));
	
	    if (toIndex === -1) toIndex = 0;
	
	    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));
	
	    if (fromIndex === -1) fromIndex = 0;
	
	    var delta = toIndex - fromIndex;
	
	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };
	
	  // Ensure the hash is encoded properly before doing anything else.
	  var path = getHashPath();
	  var encodedPath = encodePath(path);
	
	  if (path !== encodedPath) replaceHashPath(encodedPath);
	
	  var initialLocation = getDOMLocation();
	  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];
	
	  // Public interface
	
	  var createHref = function createHref(location) {
	    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
	  };
	
	  var push = function push(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');
	
	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;
	
	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);
	
	        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
	
	        nextPaths.push(path);
	        allPaths = nextPaths;
	
	        setState({ action: action, location: location });
	      } else {
	        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
	
	        setState();
	      }
	    });
	  };
	
	  var replace = function replace(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');
	
	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;
	
	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }
	
	      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));
	
	      if (prevIndex !== -1) allPaths[prevIndex] = path;
	
	      setState({ action: action, location: location });
	    });
	  };
	
	  var go = function go(n) {
	    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
	
	    globalHistory.go(n);
	  };
	
	  var goBack = function goBack() {
	    return go(-1);
	  };
	
	  var goForward = function goForward() {
	    return go(1);
	  };
	
	  var listenerCount = 0;
	
	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;
	
	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };
	
	  var isBlocked = false;
	
	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    var unblock = transitionManager.setPrompt(prompt);
	
	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }
	
	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }
	
	      return unblock();
	    };
	  };
	
	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };
	
	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	
	  return history;
	};
	
	exports.default = createHashHistory;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var isModifiedEvent = function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	};
	
	/**
	 * The public API for rendering a history-aware <a>.
	 */
	
	var Link = function (_React$Component) {
	  _inherits(Link, _React$Component);
	
	  function Link() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Link);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) _this.props.onClick(event);
	
	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && // ignore right clicks
	      !_this.props.target && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();
	
	          var history = _this.context.router.history;
	          var _this$props = _this.props,
	              replace = _this$props.replace,
	              to = _this$props.to;
	
	
	          if (replace) {
	            history.replace(to);
	          } else {
	            history.push(to);
	          }
	        }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Link.prototype.render = function render() {
	    var _props = this.props,
	        replace = _props.replace,
	        to = _props.to,
	        props = _objectWithoutProperties(_props, ['replace', 'to']); // eslint-disable-line no-unused-vars
	
	    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);
	
	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href }));
	  };
	
	  return Link;
	}(_react2.default.Component);
	
	Link.propTypes = {
	  onClick: _propTypes2.default.func,
	  target: _propTypes2.default.string,
	  replace: _propTypes2.default.bool,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};
	Link.defaultProps = {
	  replace: false
	};
	Link.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired,
	      createHref: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Link;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.MemoryRouter;
	  }
	});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(146);
	
	var _Link = __webpack_require__(162);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */
	var NavLink = function NavLink(_ref) {
	  var to = _ref.to,
	      exact = _ref.exact,
	      strict = _ref.strict,
	      location = _ref.location,
	      activeClassName = _ref.activeClassName,
	      className = _ref.className,
	      activeStyle = _ref.activeStyle,
	      style = _ref.style,
	      getIsActive = _ref.isActive,
	      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);
	
	  return _react2.default.createElement(_reactRouter.Route, {
	    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
	    exact: exact,
	    strict: strict,
	    location: location,
	    children: function children(_ref2) {
	      var location = _ref2.location,
	          match = _ref2.match;
	
	      var isActive = !!(getIsActive ? getIsActive(match, location) : match);
	
	      return _react2.default.createElement(_Link2.default, _extends({
	        to: to,
	        className: isActive ? [activeClassName, className].filter(function (i) {
	          return i;
	        }).join(' ') : className,
	        style: isActive ? _extends({}, style, activeStyle) : style
	      }, rest));
	    }
	  });
	};
	
	NavLink.propTypes = {
	  to: _Link2.default.propTypes.to,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  location: _propTypes2.default.object,
	  activeClassName: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  activeStyle: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  isActive: _propTypes2.default.func
	};
	
	NavLink.defaultProps = {
	  activeClassName: 'active'
	};
	
	exports.default = NavLink;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.Prompt;
	  }
	});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.Redirect;
	  }
	});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.Route;
	  }
	});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.Router;
	  }
	});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.StaticRouter;
	  }
	});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.Switch;
	  }
	});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.matchPath;
	  }
	});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reactRouter = __webpack_require__(146);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _reactRouter.withRouter;
	  }
	});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var plugins = [{
	  plugin: __webpack_require__(174),
	  options: { "plugins": [] }
	}, {
	  plugin: __webpack_require__(184),
	  options: { "plugins": [] }
	}, {
	  plugin: __webpack_require__(185),
	  options: { "plugins": [], "trackingId": "UA-25065548-2" }
	}, {
	  plugin: __webpack_require__(186),
	  options: { "plugins": [] }
	}, {
	  plugin: __webpack_require__(187),
	  options: { "plugins": [] }
	}, {
	  plugin: __webpack_require__(229),
	  options: { "plugins": [], "name": "Irfan Maulana's Blog", "short_name": "Irfan Maulana's Blog", "description": "A GatsbyJS stater with Advanced design in mind.", "start_url": "/gatsby-blog", "background_color": "#fff", "theme_color": "#9b4dca", "display": "minimal-ui", "icons": [{ "src": "/logos/logo-192x192.png", "sizes": "192x192", "type": "image/png" }, { "src": "/logos/logo-512x512.png", "sizes": "512x512", "type": "image/png" }] }
	}, {
	  plugin: __webpack_require__(230),
	  options: { "plugins": [], "query": "\n        {\n          site {\n            siteMetadata {\n              rssMetadata {\n                site_url\n                feed_url\n                title\n                description\n                image_url\n                author\n                copyright\n              }\n            }\n          }\n        }\n      ", "feeds": [{ "query": "\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [frontmatter___date] },\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    timeToRead\n                    fields { slug }\n                    frontmatter {\n                      title\n                      cover\n                      date\n                      category\n                      tags\n                    }\n                  }\n                }\n              }\n            }\n          ", "output": "/rss.xml" }] }
	}];
	// During bootstrap, we write requires at top of this file which looks like:
	// var plugins = [
	//   require('/path/to/plugin1/gatsby-ssr.js'),
	//   require('/path/to/plugin2/gatsby-ssr.js'),
	// ]
	
	var apis = __webpack_require__(236);
	
	module.exports = function (api, args, defaultReturn) {
	  if (!apis[api]) {
	    console.log('This API doesn\'t exist', api);
	  }
	  // Run each plugin in series.
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  });
	
	  // Filter out undefined results.
	  results = results.filter(function (result) {
	    return typeof result !== 'undefined';
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else {
	    return [defaultReturn];
	  }
	};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactHelmet = __webpack_require__(175);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onRenderBody = function (_ref, pluginOptions) {
	  var setHeadComponents = _ref.setHeadComponents;
	
	  var helmet = _reactHelmet2.default.renderStatic();
	  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
	};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__(176);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__(179);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__(182);
	
	var _HelmetConstants = __webpack_require__(183);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	             * @param {Object} bodyAttributes: {"className": "root"}
	             * @param {String} defaultTitle: "Default Title"
	             * @param {Boolean} encodeSpecialCharacters: true
	             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	             * @param {String} title: "Title"
	             * @param {Object} titleAttributes: {"itemprop": "name"}
	             * @param {String} titleTemplate: "MySite.com - %s"
	             */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__(177);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__(178);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),
/* 178 */
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(180);
	var isArguments = __webpack_require__(181);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),
/* 180 */
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),
/* 181 */
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.warn = exports.requestIdleCallback = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(122);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(183);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var requestIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.requestIdleCallback !== "undefined") {
	        return window.requestIdleCallback;
	    }
	
	    return function (cb) {
	        var start = Date.now();
	        return setTimeout(function () {
	            cb({
	                didTimeout: false,
	                timeRemaining: function timeRemaining() {
	                    return Math.max(0, 50 - (Date.now() - start));
	                }
	            });
	        }, 1);
	    };
	}();
	
	var cancelIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.cancelIdleCallback !== "undefined") {
	        return window.cancelIdleCallback;
	    }
	
	    return function (id) {
	        return clearTimeout(id);
	    };
	}();
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetIdleCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	
	    if (_helmetIdleCallback) {
	        cancelIdleCallback(_helmetIdleCallback);
	    }
	
	    _helmetIdleCallback = requestIdleCallback(function () {
	        updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	        updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	        updateTitle(title, titleAttributes);
	
	        var tagUpdates = {
	            baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	            linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	            metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	            noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	            scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	            styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	        };
	
	        var addedTags = {};
	        var removedTags = {};
	
	        Object.keys(tagUpdates).forEach(function (tagType) {
	            var _tagUpdates$tagType = tagUpdates[tagType],
	                newTags = _tagUpdates$tagType.newTags,
	                oldTags = _tagUpdates$tagType.oldTags;
	
	
	            if (newTags.length) {
	                addedTags[tagType] = newTags;
	            }
	            if (oldTags.length) {
	                removedTags[tagType] = tagUpdates[tagType].oldTags;
	            }
	        });
	
	        _helmetIdleCallback = null;
	        onChangeClientState(newState, addedTags, removedTags);
	    });
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = Array.isArray(title) ? title.join("") : title;
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(title, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestIdleCallback = requestIdleCallback;
	exports.warn = warn;

/***/ }),
/* 183 */
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    "accesskey": "accessKey",
	    "charset": "charSet",
	    "class": "className",
	    "contenteditable": "contentEditable",
	    "contextmenu": "contextMenu",
	    "http-equiv": "httpEquiv",
	    "itemprop": "itemProp",
	    "tabindex": "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onRenderBody = function (_ref, pluginOptions) {
	  var setHeadComponents = _ref.setHeadComponents;
	
	  var offsetY = 0;
	  if (pluginOptions.offsetY) {
	    offsetY = pluginOptions.offsetY;
	  }
	
	  var styles = "\n    .anchor {\n      float: left;\n      padding-right: 4px;\n      margin-left: -20px;\n    }\n    h1 .anchor svg,\n    h2 .anchor svg,\n    h3 .anchor svg,\n    h4 .anchor svg,\n    h5 .anchor svg,\n    h6 .anchor svg {\n      visibility: hidden;\n    }\n    h1:hover .anchor svg,\n    h2:hover .anchor svg,\n    h3:hover .anchor svg,\n    h4:hover .anchor svg,\n    h5:hover .anchor svg,\n    h6:hover .anchor svg {\n      visibility: visible;\n    }\n  ";
	
	  var script = "\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      var hash = location.hash.replace('#', '')\n      if (hash !== '') {\n        var element = document.getElementById(hash)\n        if (element) {\n          var offset = element.offsetTop\n          // Wait for the browser to finish rendering before scrolling.\n          setTimeout((function() {\n            window.scrollTo(0, offset - " + offsetY + ")\n          }), 0)\n        }\n      }\n    })\n  ";
	
	  return setHeadComponents([_react2.default.createElement(
	    "style",
	    { key: "gatsby-remark-autolink-headers-style", type: "text/css" },
	    styles
	  ), _react2.default.createElement("script", {
	    key: "gatsby-remark-autolink-headers-script",
	    dangerouslySetInnerHTML: { __html: script }
	  })]);
	};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onRenderBody = function (_ref, pluginOptions) {
	  var setPostBodyComponents = _ref.setPostBodyComponents;
	
	  if (true) {
	    return setPostBodyComponents([_react2.default.createElement("script", {
	      key: "gatsby-plugin-google-analytics",
	      dangerouslySetInnerHTML: {
	        __html: "\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n  ga('create', '" + pluginOptions.trackingId + "', 'auto');\n  ga('send', 'pageview');\n      "
	      }
	    })]);
	  }
	
	  return null;
	};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onRenderBody = function (_ref) {
	  var setPostBodyComponents = _ref.setPostBodyComponents;
	  return setPostBodyComponents([_react2.default.createElement("script", {
	    key: "gatsby-plugin-twitter",
	    dangerouslySetInnerHTML: {
	      __html: "\n          window.twttr = (function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0],\n    t = window.twttr || {};\n  if (d.getElementById(id)) return t;\n  js = d.createElement(s);\n  js.id = id;\n  js.src = \"https://platform.twitter.com/widgets.js\";\n  fjs.parentNode.insertBefore(js, fjs);\n\n  t._e = [];\n  t.ready = function(f) {\n    t._e.push(f);\n  };\n\n  return t;\n}(document, \"script\", \"twitter-wjs\"));\n      "
	    }
	  })]);
	};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends2 = __webpack_require__(188);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _internals = __webpack_require__(226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onRenderBody = function (_ref, pluginOptions) {
	  var setHeadComponents = _ref.setHeadComponents;
	
	  var _defaultOptions$plugi = (0, _extends3.default)({}, _internals.defaultOptions, pluginOptions),
	      output = _defaultOptions$plugi.output;
	
	  if (output.charAt(0) !== "/") {
	    output = "/" + output;
	  }
	
	  setHeadComponents([_react2.default.createElement("link", {
	    key: "gatsby-plugin-sitemap",
	    rel: "sitemap",
	    type: "application/xml",
	    href: output
	  })]);
	};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(189);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(191);
	module.exports = __webpack_require__(194).Object.assign;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(192);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(207)});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(193)
	  , core      = __webpack_require__(194)
	  , ctx       = __webpack_require__(195)
	  , hide      = __webpack_require__(197)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 193 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(196);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 196 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(198)
	  , createDesc = __webpack_require__(206);
	module.exports = __webpack_require__(202) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(199)
	  , IE8_DOM_DEFINE = __webpack_require__(201)
	  , toPrimitive    = __webpack_require__(205)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(202) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(200);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 200 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(202) && !__webpack_require__(203)(function(){
	  return Object.defineProperty(__webpack_require__(204)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(203)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 203 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(200)
	  , document = __webpack_require__(193).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(200);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 206 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(208)
	  , gOPS     = __webpack_require__(223)
	  , pIE      = __webpack_require__(224)
	  , toObject = __webpack_require__(225)
	  , IObject  = __webpack_require__(212)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(203)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(209)
	  , enumBugKeys = __webpack_require__(222);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(210)
	  , toIObject    = __webpack_require__(211)
	  , arrayIndexOf = __webpack_require__(215)(false)
	  , IE_PROTO     = __webpack_require__(219)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 210 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(212)
	  , defined = __webpack_require__(214);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(213);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 213 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(211)
	  , toLength  = __webpack_require__(216)
	  , toIndex   = __webpack_require__(218);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(217)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(217)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(220)('keys')
	  , uid    = __webpack_require__(221);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(193)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 221 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 222 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 223 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 224 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(214);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.defaultOptions = exports.runQuery = exports.writeFile = undefined;
	
	var _fs = __webpack_require__(227);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _pify = __webpack_require__(228);
	
	var _pify2 = _interopRequireDefault(_pify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var writeFile = exports.writeFile = (0, _pify2.default)(_fs2.default.writeFile);
	
	var runQuery = exports.runQuery = function runQuery(handler, query) {
	  return handler(query).then(function (r) {
	    if (r.errors) {
	      throw new Error(r.errors.join(", "));
	    }
	
	    return r.data;
	  });
	};
	
	var defaultOptions = exports.defaultOptions = {
	  query: "\n    {\n      site {\n        siteMetadata {\n          siteUrl\n        }\n      }\n      \n      allSitePage(\n        filter: {\n          path: {ne: \"/dev-404-page/\"}\n        }\n      ) {\n        edges {\n          node {\n            path\n          }\n        }\n      }\n  }",
	  output: "/sitemap.xml",
	  serialize: function serialize(_ref) {
	    var site = _ref.site,
	        allSitePage = _ref.allSitePage;
	    return allSitePage.edges.map(function (edge) {
	      return {
	        url: site.siteMetadata.siteUrl + edge.node.path,
	        changefreq: "daily",
	        priority: 0.7
	      };
	    });
	  }
	};

/***/ }),
/* 227 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 228 */
/***/ (function(module, exports) {

	'use strict';
	
	var processFn = function (fn, P, opts) {
		return function () {
			var that = this;
			var args = new Array(arguments.length);
	
			for (var i = 0; i < arguments.length; i++) {
				args[i] = arguments[i];
			}
	
			return new P(function (resolve, reject) {
				args.push(function (err, result) {
					if (err) {
						reject(err);
					} else if (opts.multiArgs) {
						var results = new Array(arguments.length - 1);
	
						for (var i = 1; i < arguments.length; i++) {
							results[i - 1] = arguments[i];
						}
	
						resolve(results);
					} else {
						resolve(result);
					}
				});
	
				fn.apply(that, args);
			});
		};
	};
	
	var pify = module.exports = function (obj, P, opts) {
		if (typeof P !== 'function') {
			opts = P;
			P = Promise;
		}
	
		opts = opts || {};
		opts.exclude = opts.exclude || [/.+Sync$/];
	
		var filter = function (key) {
			var match = function (pattern) {
				return typeof pattern === 'string' ? key === pattern : pattern.test(key);
			};
	
			return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
		};
	
		var ret = typeof obj === 'function' ? function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}
	
			return processFn(obj, P, opts).apply(this, arguments);
		} : {};
	
		return Object.keys(obj).reduce(function (ret, key) {
			var x = obj[key];
	
			ret[key] = typeof x === 'function' && filter(key) ? processFn(x, P, opts) : x;
	
			return ret;
		}, ret);
	};
	
	pify.all = pify;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onRenderBody = function (_ref, pluginOptions) {
	  var setHeadComponents = _ref.setHeadComponents;
	
	  setHeadComponents([_react2.default.createElement("link", {
	    key: "gatsby-plugin-manifest-link",
	    rel: "manifest",
	    href: "/manifest.json"
	  }), _react2.default.createElement("meta", {
	    key: "gatsby-plugin-manifest-meta",
	    name: "theme-color",
	    content: pluginOptions.theme_color
	  })]);
	};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends2 = __webpack_require__(231);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _internals = __webpack_require__(233);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.onRenderBody = function (_ref, pluginOptions) {
	  var setHeadComponents = _ref.setHeadComponents;
	
	  var _defaultOptions$plugi = (0, _extends3.default)({}, _internals.defaultOptions, pluginOptions),
	      feeds = _defaultOptions$plugi.feeds;
	
	  var links = feeds.map(function (_ref2, i) {
	    var output = _ref2.output;
	
	    if (output.charAt(0) !== "/") {
	      output = "/" + output;
	    }
	
	    return _react2.default.createElement("link", {
	      key: "gatsby-plugin-feed-" + i,
	      rel: "alternate",
	      type: "application/rss+xml",
	      href: output
	    });
	  });
	
	  setHeadComponents(links);
	};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(232);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.defaultOptions = exports.runQuery = exports.writeFile = undefined;
	
	var _extends2 = __webpack_require__(231);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(234);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _fs = __webpack_require__(227);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _pify = __webpack_require__(235);
	
	var _pify2 = _interopRequireDefault(_pify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var writeFile = exports.writeFile = (0, _pify2.default)(_fs2.default.writeFile);
	
	var runQuery = exports.runQuery = function runQuery(handler, query) {
	  return handler(query).then(function (r) {
	    if (r.errors) {
	      throw new Error(r.errors.join(", "));
	    }
	
	    return r.data;
	  });
	};
	
	var defaultOptions = {
	  // Override if you want to manually specify the RSS "generator" tag.
	  generator: "GatsbyJS",
	
	  // Run a default query to gather some information about the site.
	  query: "\n    {\n      site {\n        siteMetadata {\n          title\n          description\n          siteUrl\n          site_url: siteUrl\n        }\n      }\n    }\n  ",
	
	  // Setup an RSS object, merging on various feed-specific options.
	  setup: function setup(_ref) {
	    var _ref$query = _ref.query,
	        siteMetadata = _ref$query.site.siteMetadata,
	        rest = (0, _objectWithoutProperties3.default)(_ref$query, ["site"]);
	
	    return (0, _extends3.default)({}, siteMetadata, rest);
	  },
	
	  // Create a default RSS feed. Others may be added by using the format below.
	  feeds: [{
	    query: "\n      {\n        allMarkdownRemark(\n          limit: 1000,\n          sort: {\n            order: DESC,\n            fields: [frontmatter___date]\n          },\n          filter: {\n            frontmatter: {\n              draft: { ne: true }\n            }\n          }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                title\n                date\n              }\n              fields {\n                slug\n              }\n              excerpt\n              html\n            }\n          }\n        }\n      }\n    ",
	
	    // Where we will save the feed generated by this query.
	    output: "rss.xml"
	  }]
	};
	exports.defaultOptions = defaultOptions;

/***/ }),
/* 234 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 235 */
/***/ (function(module, exports) {

	'use strict';
	
	const processFn = (fn, opts) => function () {
		const P = opts.promiseModule;
		const args = new Array(arguments.length);
	
		for (let i = 0; i < arguments.length; i++) {
			args[i] = arguments[i];
		}
	
		return new P((resolve, reject) => {
			if (opts.errorFirst) {
				args.push(function (err, result) {
					if (opts.multiArgs) {
						const results = new Array(arguments.length - 1);
	
						for (let i = 1; i < arguments.length; i++) {
							results[i - 1] = arguments[i];
						}
	
						if (err) {
							results.unshift(err);
							reject(results);
						} else {
							resolve(results);
						}
					} else if (err) {
						reject(err);
					} else {
						resolve(result);
					}
				});
			} else {
				args.push(function (result) {
					if (opts.multiArgs) {
						const results = new Array(arguments.length - 1);
	
						for (let i = 0; i < arguments.length; i++) {
							results[i] = arguments[i];
						}
	
						resolve(results);
					} else {
						resolve(result);
					}
				});
			}
	
			fn.apply(this, args);
		});
	};
	
	module.exports = (obj, opts) => {
		opts = Object.assign({
			exclude: [/.+(Sync|Stream)$/],
			errorFirst: true,
			promiseModule: Promise
		}, opts);
	
		const filter = key => {
			const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
			return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
		};
	
		let ret;
		if (typeof obj === 'function') {
			ret = function () {
				if (opts.excludeMain) {
					return obj.apply(this, arguments);
				}
	
				return processFn(obj, opts).apply(this, arguments);
			};
		} else {
			ret = Object.create(Object.getPrototypeOf(obj));
		}
	
		for (const key in obj) { // eslint-disable-line guard-for-in
			const x = obj[key];
			ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
		}
	
		return ret;
	};


/***/ }),
/* 236 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Replace the default server renderer. This is useful for integration with
	 * Redux, css-in-js libraries, etc. that need custom setups for server
	 * rendering.
	 * @param {Object} $0
	 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
	 * you render. **WARNING** if multiple plugins implement this API it's the
	 * last plugin that "wins". TODO implement an automated warning against this.
	 * @param {function} $0.setHeadComponents Takes an array of components as its
	 * first argument which are added to the `headComponents` array which is passed
	 * to the `html.js` component.
	 * @param {function} $0.setPreBodyComponents Takes an array of components as its
	 * first argument which are added to the `preBodyComponents` array which is passed
	 * to the `html.js` component.
	 * @param {function} $0.setPostBodyComponents Takes an array of components as its
	 * first argument which are added to the `postBodyComponents` array which is passed
	 * to the `html.js` component.
	 * @param {function} $0.setBodyProps Takes an object of data which
	 * is merged with other body props and passed to `html.js` as `bodyProps`.
	 * @param {Object} pluginOptions
	 * @example
	 * // From gatsby-plugin-glamor
	 * import { renderToString } from "react-dom/server"
	 * import inline from "glamor-inline"
	 *
	 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
	 *   const bodyHTML = renderToString(bodyComponent)
	 *   const inlinedHTML = inline(bodyHTML)
	 *
	 *   replaceBodyHTMLString(inlinedHTML)
	 * }
	 */
	exports.replaceRenderer = true;
	
	/**
	 * Called after every page Gatsby server renders while building HTML so you can
	 * set head and body components to be rendered in your `html.js`.
	 *
	 * Gatsby does a two-pass render for HTML. It loops through your pages first
	 * rendering only the body and then takes the result body HTML string and
	 * passes it as the `body` prop to your `html.js` to complete the render.
	 *
	 * It's often handy to be able to send custom components to your `html.js`.
	 * For example, it's a very common pattern for React.js libraries that
	 * support server rendering to pull out data generated during the render to
	 * add to your HTML.
	 *
	 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
	 * multiple plugins can implement this API where only one plugin can take
	 * over server rendering. However, if your plugin requires taking over server
	 * rendering then that's the one to
	 * use
	 * @param {Object} $0
	 * @param {string} $0.pathname The pathname of the page currently being rendered.
	 * @param {function} $0.setHeadComponents Takes an array of components as its
	 * first argument which are added to the `headComponents` array which is passed
	 * to the `html.js` component.
	 * @param {function} $0.setPreBodyComponents Takes an array of components as its
	 * first argument which are added to the `preBodyComponents` array which is passed
	 * to the `html.js` component.
	 * @param {function} $0.setPostBodyComponents Takes an array of components as its
	 * first argument which are added to the `postBodyComponents` array which is passed
	 * to the `html.js` component.
	 * @param {function} $0.setBodyProps Takes an object of data which
	 * is merged with other body props and passed to `html.js` as `bodyProps`.
	 * @param {Object} pluginOptions
	 * @example
	 * import helmet from "react-helmet"
	 *
	 * exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
	 *   setHeadComponents([
	 *     helmet.title.toComponent(),
	 *     helmet.meta.toComponent(),
	 *     helmet.link.toComponent(),
	 *   ])
	 * }
	 */
	exports.onRenderBody = true;

/***/ }),
/* 237 */
/***/ (function(module, exports) {

	module.exports = [
		{
			"componentChunkName": "component---node-modules-gatsby-plugin-offline-app-shell-js",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "offline-plugin-app-shell-fallback.json",
			"path": "/offline-plugin-app-shell-fallback/"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "the-butterfly-of-the-edge.json",
			"path": "/the-butterfly-of-the-edge"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "the-fairys-witches.json",
			"path": "/the-fairys-witches"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "birch-in-the-roses.json",
			"path": "/birch-in-the-roses"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "big-test.json",
			"path": "/big-test"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "angels-of-mist.json",
			"path": "/angels-of-mist"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "bold-mage.json",
			"path": "/bold-mage"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "the-fallen-time.json",
			"path": "/the-fallen-time"
		},
		{
			"componentChunkName": "component---src-templates-post-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "random-project-4-with-super-long-title-phase-one.json",
			"path": "/random-project-4-with-super-long-title-phase-one"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-programming.json",
			"path": "/tags/programming/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-more-tags.json",
			"path": "/tags/more-tags/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-testing.json",
			"path": "/tags/testing/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-another-one.json",
			"path": "/tags/another-one/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-stuff.json",
			"path": "/tags/stuff/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-other.json",
			"path": "/tags/other/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-tag.json",
			"path": "/tags/tag/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-test.json",
			"path": "/tags/test/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-huge.json",
			"path": "/tags/huge/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-cheese.json",
			"path": "/tags/cheese/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-something.json",
			"path": "/tags/something/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-tagging.json",
			"path": "/tags/tagging/"
		},
		{
			"componentChunkName": "component---src-templates-tag-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "tags-say-hi.json",
			"path": "/tags/say-hi/"
		},
		{
			"componentChunkName": "component---src-templates-category-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "categories-tech.json",
			"path": "/categories/tech/"
		},
		{
			"componentChunkName": "component---src-templates-category-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "categories-something.json",
			"path": "/categories/something/"
		},
		{
			"componentChunkName": "component---src-templates-category-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "categories-moar.json",
			"path": "/categories/moar/"
		},
		{
			"componentChunkName": "component---src-templates-category-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "categories-test-3.json",
			"path": "/categories/test-3/"
		},
		{
			"componentChunkName": "component---src-templates-category-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "categories-another-one.json",
			"path": "/categories/another-one/"
		},
		{
			"componentChunkName": "component---src-templates-category-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "categories-random.json",
			"path": "/categories/random/"
		},
		{
			"componentChunkName": "component---src-pages-about-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "about.json",
			"path": "/about/"
		},
		{
			"componentChunkName": "component---src-pages-index-jsx",
			"layout": "index",
			"layoutComponentChunkName": "component---src-layouts-index-jsx",
			"jsonName": "index.json",
			"path": "/"
		}
	];

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _exports$json;
	
	// prefer default export if available
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	
	exports.components = {
	  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(__webpack_require__(239)),
	  "component---src-templates-post-jsx": preferDefault(__webpack_require__(285)),
	  "component---src-templates-tag-jsx": preferDefault(__webpack_require__(410)),
	  "component---src-templates-category-jsx": preferDefault(__webpack_require__(412)),
	  "component---src-pages-about-jsx": preferDefault(__webpack_require__(413)),
	  "component---src-pages-index-jsx": preferDefault(__webpack_require__(416))
	};
	
	exports.json = (_exports$json = {
	  "layout-index.json": __webpack_require__(417),
	  "offline-plugin-app-shell-fallback.json": __webpack_require__(418)
	}, _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["the-butterfly-of-the-edge.json"] = __webpack_require__(419), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["the-fairys-witches.json"] = __webpack_require__(420), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["birch-in-the-roses.json"] = __webpack_require__(421), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["big-test.json"] = __webpack_require__(422), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["angels-of-mist.json"] = __webpack_require__(423), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["bold-mage.json"] = __webpack_require__(424), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["the-fallen-time.json"] = __webpack_require__(425), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["random-project-4-with-super-long-title-phase-one.json"] = __webpack_require__(426), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-programming.json"] = __webpack_require__(427), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-more-tags.json"] = __webpack_require__(428), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-testing.json"] = __webpack_require__(429), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-another-one.json"] = __webpack_require__(430), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-stuff.json"] = __webpack_require__(431), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-other.json"] = __webpack_require__(432), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-tag.json"] = __webpack_require__(433), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-test.json"] = __webpack_require__(434), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-huge.json"] = __webpack_require__(435), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-cheese.json"] = __webpack_require__(436), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-something.json"] = __webpack_require__(437), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-tagging.json"] = __webpack_require__(438), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["tags-say-hi.json"] = __webpack_require__(439), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["categories-tech.json"] = __webpack_require__(440), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["categories-something.json"] = __webpack_require__(441), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["categories-moar.json"] = __webpack_require__(442), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["categories-test-3.json"] = __webpack_require__(443), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["categories-another-one.json"] = __webpack_require__(444), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["categories-random.json"] = __webpack_require__(445), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["about.json"] = __webpack_require__(446), _exports$json["layout-index.json"] = __webpack_require__(417), _exports$json["index.json"] = __webpack_require__(447), _exports$json);
	
	exports.layouts = {
	  "component---src-layouts-index-jsx": preferDefault(__webpack_require__(448))
	};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _classCallCheck2 = __webpack_require__(240);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(241);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(277);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AppShell = function (_React$Component) {
	  (0, _inherits3.default)(AppShell, _React$Component);
	
	  function AppShell() {
	    (0, _classCallCheck3.default)(this, AppShell);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }
	
	  AppShell.prototype.render = function render() {
	    return _react2.default.createElement("div", null);
	  };
	
	  return AppShell;
	}(_react2.default.Component);
	
	exports.default = AppShell;

/***/ }),
/* 240 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(242);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(243);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(263);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(245);
	__webpack_require__(258);
	module.exports = __webpack_require__(262).f('iterator');

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(246)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(247)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(217)
	  , defined   = __webpack_require__(214);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(248)
	  , $export        = __webpack_require__(192)
	  , redefine       = __webpack_require__(249)
	  , hide           = __webpack_require__(197)
	  , has            = __webpack_require__(210)
	  , Iterators      = __webpack_require__(250)
	  , $iterCreate    = __webpack_require__(251)
	  , setToStringTag = __webpack_require__(255)
	  , getPrototypeOf = __webpack_require__(257)
	  , ITERATOR       = __webpack_require__(256)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 248 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(197);

/***/ }),
/* 250 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(252)
	  , descriptor     = __webpack_require__(206)
	  , setToStringTag = __webpack_require__(255)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(197)(IteratorPrototype, __webpack_require__(256)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(199)
	  , dPs         = __webpack_require__(253)
	  , enumBugKeys = __webpack_require__(222)
	  , IE_PROTO    = __webpack_require__(219)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(204)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(254).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(198)
	  , anObject = __webpack_require__(199)
	  , getKeys  = __webpack_require__(208);
	
	module.exports = __webpack_require__(202) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(193).document && document.documentElement;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(198).f
	  , has = __webpack_require__(210)
	  , TAG = __webpack_require__(256)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(220)('wks')
	  , uid        = __webpack_require__(221)
	  , Symbol     = __webpack_require__(193).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(210)
	  , toObject    = __webpack_require__(225)
	  , IE_PROTO    = __webpack_require__(219)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(259);
	var global        = __webpack_require__(193)
	  , hide          = __webpack_require__(197)
	  , Iterators     = __webpack_require__(250)
	  , TO_STRING_TAG = __webpack_require__(256)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(260)
	  , step             = __webpack_require__(261)
	  , Iterators        = __webpack_require__(250)
	  , toIObject        = __webpack_require__(211);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(247)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 260 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 261 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(256);

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(265);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	module.exports = __webpack_require__(194).Symbol;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(193)
	  , has            = __webpack_require__(210)
	  , DESCRIPTORS    = __webpack_require__(202)
	  , $export        = __webpack_require__(192)
	  , redefine       = __webpack_require__(249)
	  , META           = __webpack_require__(266).KEY
	  , $fails         = __webpack_require__(203)
	  , shared         = __webpack_require__(220)
	  , setToStringTag = __webpack_require__(255)
	  , uid            = __webpack_require__(221)
	  , wks            = __webpack_require__(256)
	  , wksExt         = __webpack_require__(262)
	  , wksDefine      = __webpack_require__(267)
	  , keyOf          = __webpack_require__(268)
	  , enumKeys       = __webpack_require__(269)
	  , isArray        = __webpack_require__(270)
	  , anObject       = __webpack_require__(199)
	  , toIObject      = __webpack_require__(211)
	  , toPrimitive    = __webpack_require__(205)
	  , createDesc     = __webpack_require__(206)
	  , _create        = __webpack_require__(252)
	  , gOPNExt        = __webpack_require__(271)
	  , $GOPD          = __webpack_require__(273)
	  , $DP            = __webpack_require__(198)
	  , $keys          = __webpack_require__(208)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(272).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(224).f  = $propertyIsEnumerable;
	  __webpack_require__(223).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(248)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(197)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(221)('meta')
	  , isObject = __webpack_require__(200)
	  , has      = __webpack_require__(210)
	  , setDesc  = __webpack_require__(198).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(203)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(193)
	  , core           = __webpack_require__(194)
	  , LIBRARY        = __webpack_require__(248)
	  , wksExt         = __webpack_require__(262)
	  , defineProperty = __webpack_require__(198).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(208)
	  , toIObject = __webpack_require__(211);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(208)
	  , gOPS    = __webpack_require__(223)
	  , pIE     = __webpack_require__(224);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(213);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(211)
	  , gOPN      = __webpack_require__(272).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(209)
	  , hiddenKeys = __webpack_require__(222).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(224)
	  , createDesc     = __webpack_require__(206)
	  , toIObject      = __webpack_require__(211)
	  , toPrimitive    = __webpack_require__(205)
	  , has            = __webpack_require__(210)
	  , IE8_DOM_DEFINE = __webpack_require__(201)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(202) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 274 */
/***/ (function(module, exports) {



/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(267)('asyncIterator');

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(267)('observable');

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(278);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(282);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(242);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(279), __esModule: true };

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(280);
	module.exports = __webpack_require__(194).Object.setPrototypeOf;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(192);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(281).set});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(200)
	  , anObject = __webpack_require__(199);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(195)(Function.call, __webpack_require__(273).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(284);
	var $Object = __webpack_require__(194).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(192)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(252)});

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(286);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _UserInfo = __webpack_require__(289);
	
	var _UserInfo2 = _interopRequireDefault(_UserInfo);
	
	var _Disqus = __webpack_require__(344);
	
	var _Disqus2 = _interopRequireDefault(_Disqus);
	
	var _PostTags = __webpack_require__(348);
	
	var _PostTags2 = _interopRequireDefault(_PostTags);
	
	var _SocialLinks = __webpack_require__(365);
	
	var _SocialLinks2 = _interopRequireDefault(_SocialLinks);
	
	var _SEO = __webpack_require__(407);
	
	var _SEO2 = _interopRequireDefault(_SEO);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	__webpack_require__(408);
	
	__webpack_require__(409);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PostTemplate = function (_React$Component) {
	  _inherits(PostTemplate, _React$Component);
	
	  function PostTemplate() {
	    _classCallCheck(this, PostTemplate);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  PostTemplate.prototype.render = function render() {
	    var slug = this.props.pathContext.slug;
	
	    var postNode = this.props.data.markdownRemark;
	    var post = postNode.frontmatter;
	    if (!post.id) {
	      post.id = slug;
	    }
	    if (!post.id) {
	      post.category_id = _SiteConfig2.default.postDefaultCategoryID;
	    }
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        _reactHelmet2.default,
	        null,
	        _react2.default.createElement(
	          "title",
	          null,
	          post.title + " | " + _SiteConfig2.default.siteTitle
	        )
	      ),
	      _react2.default.createElement(_SEO2.default, { postPath: slug, postNode: postNode, postSEO: true }),
	      _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          null,
	          post.title
	        ),
	        _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: postNode.html } }),
	        _react2.default.createElement(
	          "div",
	          { className: "post-meta" },
	          _react2.default.createElement(_PostTags2.default, { tags: post.tags }),
	          _react2.default.createElement(_SocialLinks2.default, { postPath: slug, postNode: postNode })
	        ),
	        _react2.default.createElement(_UserInfo2.default, { config: _SiteConfig2.default }),
	        _react2.default.createElement(_Disqus2.default, { postNode: postNode })
	      )
	    );
	  };
	
	  return PostTemplate;
	}(_react2.default.Component);
	
	/* eslint no-undef: "off"*/
	
	
	exports.default = PostTemplate;
	var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__(176);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__(179);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__(287);
	
	var _HelmetConstants = __webpack_require__(288);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	            * @param {Object} bodyAttributes: {"className": "root"}
	            * @param {String} defaultTitle: "Default Title"
	            * @param {Boolean} defer: true
	            * @param {Boolean} encodeSpecialCharacters: true
	            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	            * @param {String} title: "Title"
	            * @param {Object} titleAttributes: {"itemprop": "name"}
	            * @param {String} titleTemplate: "MySite.com - %s"
	            */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(122);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(288);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;

/***/ }),
/* 288 */
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactTwitterWidgets = __webpack_require__(290);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserInfo = function (_Component) {
	  _inherits(UserInfo, _Component);
	
	  function UserInfo() {
	    _classCallCheck(this, UserInfo);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  UserInfo.prototype.render = function render() {
	    var userTwitter = this.props.config.userTwitter;
	    var expanded = this.props.expanded;
	
	    return _react2.default.createElement(_reactTwitterWidgets.Follow, {
	      username: userTwitter,
	      options: { count: expanded ? true : "none" }
	    });
	  };
	
	  return UserInfo;
	}(_react.Component);
	
	exports.default = UserInfo;
	module.exports = exports["default"];

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tweet = exports.Timeline = exports.Share = exports.Mention = exports.Hashtag = exports.Follow = undefined;
	
	var _exenv = __webpack_require__(177);
	
	var _Follow2 = __webpack_require__(291);
	
	var _Follow3 = _interopRequireDefault(_Follow2);
	
	var _Hashtag2 = __webpack_require__(339);
	
	var _Hashtag3 = _interopRequireDefault(_Hashtag2);
	
	var _Mention2 = __webpack_require__(340);
	
	var _Mention3 = _interopRequireDefault(_Mention2);
	
	var _Share2 = __webpack_require__(341);
	
	var _Share3 = _interopRequireDefault(_Share2);
	
	var _Timeline2 = __webpack_require__(342);
	
	var _Timeline3 = _interopRequireDefault(_Timeline2);
	
	var _Tweet2 = __webpack_require__(343);
	
	var _Tweet3 = _interopRequireDefault(_Tweet2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (_exenv.canUseDOM) {
	  var $script = __webpack_require__(338); // eslint-disable-line global-require
	  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
	}
	
	exports.Follow = _Follow3.default;
	exports.Hashtag = _Hashtag3.default;
	exports.Mention = _Mention3.default;
	exports.Share = _Share3.default;
	exports.Timeline = _Timeline3.default;
	exports.Tweet = _Tweet3.default;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(292);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(319);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(337);
	
	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Follow = function (_React$Component) {
	  _inherits(Follow, _React$Component);
	
	  function Follow() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Follow);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Follow.__proto__ || Object.getPrototypeOf(Follow)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          username = _this$props.username,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;
	
	      // Options must be cloned since Twitter Widgets modifies it directly
	
	      tw.widgets.createFollowButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Follow, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;
	
	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('username') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);
	
	  return Follow;
	}(_react2.default.Component);
	
	Follow.propTypes = {
	  username: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Follow.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Follow;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(293);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(294),
	    isObjectLike = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(12),
	    equalArrays = __webpack_require__(295),
	    equalByTag = __webpack_require__(301),
	    equalObjects = __webpack_require__(304),
	    getTag = __webpack_require__(314),
	    isArray = __webpack_require__(8),
	    isBuffer = __webpack_require__(72),
	    isTypedArray = __webpack_require__(75);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(296),
	    arraySome = __webpack_require__(299),
	    cacheHas = __webpack_require__(300);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(35),
	    setCacheAdd = __webpack_require__(297),
	    setCacheHas = __webpack_require__(298);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ }),
/* 297 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ }),
/* 298 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ }),
/* 299 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }),
/* 300 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(3),
	    Uint8Array = __webpack_require__(60),
	    eq = __webpack_require__(17),
	    equalArrays = __webpack_require__(295),
	    mapToArray = __webpack_require__(302),
	    setToArray = __webpack_require__(303);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ }),
/* 302 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ }),
/* 303 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(305);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(306),
	    getSymbols = __webpack_require__(308),
	    keys = __webpack_require__(311);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(307),
	    isArray = __webpack_require__(8);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ }),
/* 307 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(309),
	    stubArray = __webpack_require__(310);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ }),
/* 309 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ }),
/* 310 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(83),
	    baseKeys = __webpack_require__(312),
	    isArrayLike = __webpack_require__(70);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(66),
	    nativeKeys = __webpack_require__(313);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(65);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(315),
	    Map = __webpack_require__(26),
	    Promise = __webpack_require__(316),
	    Set = __webpack_require__(317),
	    WeakMap = __webpack_require__(318),
	    baseGetTag = __webpack_require__(2),
	    toSource = __webpack_require__(33);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(320);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;
	
	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}
	
	module.exports = cloneDeep;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(12),
	    arrayEach = __webpack_require__(321),
	    assignValue = __webpack_require__(81),
	    baseAssign = __webpack_require__(322),
	    baseAssignIn = __webpack_require__(323),
	    cloneBuffer = __webpack_require__(56),
	    copyArray = __webpack_require__(61),
	    copySymbols = __webpack_require__(324),
	    copySymbolsIn = __webpack_require__(325),
	    getAllKeys = __webpack_require__(305),
	    getAllKeysIn = __webpack_require__(327),
	    getTag = __webpack_require__(314),
	    initCloneArray = __webpack_require__(328),
	    initCloneByTag = __webpack_require__(329),
	    initCloneObject = __webpack_require__(62),
	    isArray = __webpack_require__(8),
	    isBuffer = __webpack_require__(72),
	    isObject = __webpack_require__(30),
	    keys = __webpack_require__(311);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;
	
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);
	
	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ }),
/* 321 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(80),
	    keys = __webpack_require__(311);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(80),
	    keysIn = __webpack_require__(82);
	
	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}
	
	module.exports = baseAssignIn;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(80),
	    getSymbols = __webpack_require__(308);
	
	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(80),
	    getSymbolsIn = __webpack_require__(326);
	
	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}
	
	module.exports = copySymbolsIn;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(307),
	    getPrototype = __webpack_require__(64),
	    getSymbols = __webpack_require__(308),
	    stubArray = __webpack_require__(310);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};
	
	module.exports = getSymbolsIn;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(306),
	    getSymbolsIn = __webpack_require__(326),
	    keysIn = __webpack_require__(82);
	
	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	
	module.exports = getAllKeysIn;


/***/ }),
/* 328 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(59),
	    cloneDataView = __webpack_require__(330),
	    cloneMap = __webpack_require__(331),
	    cloneRegExp = __webpack_require__(333),
	    cloneSet = __webpack_require__(334),
	    cloneSymbol = __webpack_require__(336),
	    cloneTypedArray = __webpack_require__(58);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	module.exports = initCloneByTag;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(59);
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	module.exports = cloneDataView;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(332),
	    arrayReduce = __webpack_require__(112),
	    mapToArray = __webpack_require__(302);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	module.exports = cloneMap;


/***/ }),
/* 332 */
/***/ (function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	module.exports = addMapEntry;


/***/ }),
/* 333 */
/***/ (function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	module.exports = cloneRegExp;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(335),
	    arrayReduce = __webpack_require__(112),
	    setToArray = __webpack_require__(303);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	module.exports = cloneSet;


/***/ }),
/* 335 */
/***/ (function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	module.exports = addSetEntry;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(3);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	module.exports = cloneSymbol;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AbstractWidget = function (_React$Component) {
	  _inherits(AbstractWidget, _React$Component);
	
	  function AbstractWidget() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AbstractWidget);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AbstractWidget.__proto__ || Object.getPrototypeOf(AbstractWidget)).call.apply(_ref, [this].concat(args))), _this), _this.loadWidget = function () {
	      var $script = __webpack_require__(338); // eslint-disable-line global-require
	
	      $script.ready('twitter-widgets', function () {
	        if (!window.twttr) {
	          // If the script tag fails to load, scriptjs.ready() will still trigger.
	          // Let's avoid the JS exceptions when that happens.
	          console.error('Failure to load window.twttr, aborting load.'); // eslint-disable-line no-console
	          return;
	        }
	
	        // Delete existing
	        AbstractWidget.removeChildren(_this.widgetWrapper);
	
	        // Create widget
	        _this.props.ready(window.twttr, _this.widgetWrapper, _this.done);
	      });
	    }, _this.done = function () {
	      if (_this.willUnmount) {
	        AbstractWidget.removeChildrenExceptLast(_this.widgetWrapper);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AbstractWidget, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.willUnmount = false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadWidget();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.loadWidget();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.willUnmount = true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement('div', {
	        ref: function ref(c) {
	          _this2.widgetWrapper = c;
	        }
	      });
	    }
	  }], [{
	    key: 'removeChildren',
	    value: function removeChildren(node) {
	      if (node) {
	        while (node.firstChild) {
	          node.removeChild(node.firstChild);
	        }
	      }
	    }
	  }, {
	    key: 'removeChildrenExceptLast',
	    value: function removeChildrenExceptLast(node) {
	      if (node) {
	        while (node.childNodes.length > 1) {
	          node.removeChild(node.firstChild);
	        }
	      }
	    }
	  }]);
	
	  return AbstractWidget;
	}(_react2.default.Component);
	
	AbstractWidget.propTypes = {
	  ready: _propTypes2.default.func.isRequired
	};
	exports.default = AbstractWidget;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */
	
	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	})('$script', function () {
	  var doc = document
	    , head = doc.getElementsByTagName('head')[0]
	    , s = 'string'
	    , f = false
	    , push = 'push'
	    , readyState = 'readyState'
	    , onreadystatechange = 'onreadystatechange'
	    , list = {}
	    , ids = {}
	    , delay = {}
	    , scripts = {}
	    , scriptpath
	    , urlArgs
	
	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
	    return 1
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el)
	    })
	  }
	
	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths]
	    var idOrDoneIsDone = idOrDone && idOrDone.call
	      , done = idOrDoneIsDone ? idOrDone : optDone
	      , id = idOrDoneIsDone ? paths.join('') : idOrDone
	      , queue = paths.length
	    function loopFn(item) {
	      return item.call ? item() : list[item]
	    }
	    function callback() {
	      if (!--queue) {
	        list[id] = 1
	        done && done()
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback()
	        
	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
	        }
	        
	        if (scripts[path]) {
	          if (id) ids[id] = 1
	          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
	        }
	
	        scripts[path] = 1
	        if (id) ids[id] = 1
	        create(path, callback)
	      })
	    }, 0)
	    return $script
	  }
	
	  function create(path, fn) {
	    var el = doc.createElement('script'), loaded
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
	      el.onload = el[onreadystatechange] = null
	      loaded = 1
	      scripts[path] = 2
	      fn()
	    }
	    el.async = 1
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild)
	  }
	
	  $script.get = create
	
	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift()
	      !scripts.length ? $script(s, id, done) : $script(s, callback)
	    }())
	  }
	
	  $script.path = function (p) {
	    scriptpath = p
	  }
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  }
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps]
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {return list[dep]}) ?
	      ready() : !function (key) {
	      delay[key] = delay[key] || []
	      delay[key][push](ready)
	      req && req(missing)
	    }(deps.join('|'))
	    return $script
	  }
	
	  $script.done = function (idOrDone) {
	    $script([null], idOrDone)
	  }
	
	  return $script
	});


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(292);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(319);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(337);
	
	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hashtag = function (_React$Component) {
	  _inherits(Hashtag, _React$Component);
	
	  function Hashtag() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Hashtag);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hashtag.__proto__ || Object.getPrototypeOf(Hashtag)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          hashtag = _this$props.hashtag,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;
	
	      // Options must be cloned since Twitter Widgets modifies it directly
	
	      tw.widgets.createHashtagButton(hashtag, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Hashtag, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;
	
	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('hashtag') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);
	
	  return Hashtag;
	}(_react2.default.Component);
	
	Hashtag.propTypes = {
	  hashtag: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Hashtag.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Hashtag;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(292);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(319);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(337);
	
	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mention = function (_React$Component) {
	  _inherits(Mention, _React$Component);
	
	  function Mention() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Mention);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mention.__proto__ || Object.getPrototypeOf(Mention)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          username = _this$props.username,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;
	
	      // Options must be cloned since Twitter Widgets modifies it directly
	
	      tw.widgets.createMentionButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Mention, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;
	
	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('username') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);
	
	  return Mention;
	}(_react2.default.Component);
	
	Mention.propTypes = {
	  username: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Mention.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Mention;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(292);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(319);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(337);
	
	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Share = function (_React$Component) {
	  _inherits(Share, _React$Component);
	
	  function Share() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Share);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          url = _this$props.url,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;
	
	      // Options must be cloned since Twitter Widgets modifies it directly
	
	      tw.widgets.createShareButton(url, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Share, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;
	
	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('url') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);
	
	  return Share;
	}(_react2.default.Component);
	
	Share.propTypes = {
	  url: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Share.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Share;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(292);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(319);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(337);
	
	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = function (_React$Component) {
	  _inherits(Timeline, _React$Component);
	
	  function Timeline() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Timeline);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          dataSource = _this$props.dataSource,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;
	
	      // Options and dataSource must be cloned since Twitter Widgets modifies it directly
	
	      tw.widgets.createTimeline((0, _cloneDeep2.default)(dataSource), element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Timeline, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;
	
	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('dataSource') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);
	
	  return Timeline;
	}(_react2.default.Component);
	
	Timeline.propTypes = {
	  dataSource: _propTypes2.default.object.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Timeline.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Timeline;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isEqual = __webpack_require__(292);
	
	var _isEqual2 = _interopRequireDefault(_isEqual);
	
	var _cloneDeep = __webpack_require__(319);
	
	var _cloneDeep2 = _interopRequireDefault(_cloneDeep);
	
	var _AbstractWidget = __webpack_require__(337);
	
	var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);
	
	  function Tweet() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Tweet);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tweet.__proto__ || Object.getPrototypeOf(Tweet)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
	      var _this$props = _this.props,
	          tweetId = _this$props.tweetId,
	          options = _this$props.options,
	          onLoad = _this$props.onLoad;
	
	      // Options must be cloned since Twitter Widgets modifies it directly
	
	      tw.widgets.createTweet(tweetId, element, (0, _cloneDeep2.default)(options)).then(function () {
	        // Widget is loaded
	        done();
	        onLoad();
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Tweet, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _this2 = this;
	
	      var changed = function changed(name) {
	        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
	      };
	      return changed('tweetId') || changed('options');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
	    }
	  }]);
	
	  return Tweet;
	}(_react2.default.Component);
	
	Tweet.propTypes = {
	  tweetId: _propTypes2.default.string.isRequired,
	  options: _propTypes2.default.object,
	  onLoad: _propTypes2.default.func
	};
	Tweet.defaultProps = {
	  options: {},
	  onLoad: function onLoad() {}
	};
	exports.default = Tweet;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDisqusComments = __webpack_require__(345);
	
	var _reactDisqusComments2 = _interopRequireDefault(_reactDisqusComments);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Disqus = function (_Component) {
	  _inherits(Disqus, _Component);
	
	  function Disqus(props) {
	    _classCallCheck(this, Disqus);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      toasts: []
	    };
	    _this.notifyAboutComment = _this.notifyAboutComment.bind(_this);
	    _this.onSnackbarDismiss = _this.onSnackbarDismiss.bind(_this);
	    return _this;
	  }
	
	  Disqus.prototype.onSnackbarDismiss = function onSnackbarDismiss() {
	    var _state$toasts = this.state.toasts,
	        toasts = _state$toasts.slice(1);
	
	    this.setState({ toasts: toasts });
	  };
	
	  Disqus.prototype.notifyAboutComment = function notifyAboutComment() {
	    var toasts = this.state.toasts.slice();
	    toasts.push({ text: "New comment available!" });
	    this.setState({ toasts: toasts });
	  };
	
	  Disqus.prototype.render = function render() {
	    var postNode = this.props.postNode;
	
	    if (!_SiteConfig2.default.disqusShortname) {
	      return null;
	    }
	    var post = postNode.frontmatter;
	    var url = _SiteConfig2.default.siteUrl + _SiteConfig2.default.pathPrefix + postNode.fields.slug;
	    return _react2.default.createElement(_reactDisqusComments2.default, {
	      shortname: _SiteConfig2.default.disqusShortname,
	      identifier: post.title,
	      title: post.title,
	      url: url,
	      category_id: post.category_id,
	      onNewComment: this.notifyAboutComment
	    });
	  };
	
	  return Disqus;
	}(_react.Component);
	
	exports.default = Disqus;
	module.exports = exports["default"];

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(346);

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var DISQUS_CONFIG = ['shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment', 'language'];
	var __disqusAdded = false;
	
	function copyProps(context, props) {
	    var onNewComment = props.onNewComment,
	        language = props.language,
	        rest = _objectWithoutProperties(props, ['onNewComment', 'language']);
	
	    for (var prop in rest) {
	        context.page[prop] = rest[prop];
	    }
	
	    // Setting the language - if none is provided, the default one is used
	    context.language = language;
	
	    if (onNewComment) {
	        context.callbacks = {
	            onNewComment: [onNewComment]
	        };
	    }
	}
	
	var DisqusThread = function (_React$Component) {
	    _inherits(DisqusThread, _React$Component);
	
	    function DisqusThread() {
	        _classCallCheck(this, DisqusThread);
	
	        return _possibleConstructorReturn(this, (DisqusThread.__proto__ || Object.getPrototypeOf(DisqusThread)).apply(this, arguments));
	    }
	
	    _createClass(DisqusThread, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadDisqus();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.loadDisqus();
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return nextProps.identifier !== this.props.identifier;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var props = Object.keys(this.props).reduce(function (memo, key) {
	                return DISQUS_CONFIG.some(function (config) {
	                    return config === key;
	                }) ? memo : _extends({}, memo, _defineProperty({}, key, _this2.props[key]));
	            }, {});
	
	            return _react2.default.createElement(
	                'div',
	                props,
	                _react2.default.createElement('div', { id: 'disqus_thread' })
	            );
	        }
	    }, {
	        key: 'addDisqusScript',
	        value: function addDisqusScript() {
	            if (__disqusAdded) {
	                return;
	            }
	
	            var child = this.disqus = document.createElement('script');
	            var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
	
	            child.async = true;
	            child.type = 'text/javascript';
	            child.src = '//' + this.props.shortname + '.disqus.com/embed.js';
	
	            parent.appendChild(child);
	            __disqusAdded = true;
	        }
	    }, {
	        key: 'loadDisqus',
	        value: function loadDisqus() {
	            var _this3 = this;
	
	            var props = {};
	
	            // Extract Disqus props that were supplied to this component
	            DISQUS_CONFIG.forEach(function (prop) {
	                // prop "shortname" is only necessary for loading the script, not for the config itself
	                if (prop !== 'shortname' && !!_this3.props[prop]) {
	                    props[prop] = _this3.props[prop];
	                }
	            });
	
	            // If Disqus has already been added, reset it
	            if (typeof DISQUS !== 'undefined') {
	                DISQUS.reset({
	                    reload: true,
	                    config: function config() {
	                        copyProps(this, props);
	
	                        // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
	                        this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
	                    }
	                });
	            } else {
	                // Otherwise add Disqus to the page
	                window.disqus_config = function () {
	                    copyProps(this, props);
	                };
	                this.addDisqusScript();
	            }
	        }
	    }]);
	
	    return DisqusThread;
	}(_react2.default.Component);
	
	DisqusThread.displayName = 'DisqusThread';
	
	DisqusThread.propTypes = {
	    id: _propTypes2.default.string,
	
	    /**
	     * `shortname` tells the Disqus service your forum's shortname,
	     * which is the unique identifier for your website as registered
	     * on Disqus. If undefined , the Disqus embed will not load.
	     */
	    shortname: _propTypes2.default.string.isRequired,
	
	    /**
	     * `identifier` tells the Disqus service how to identify the
	     * current page. When the Disqus embed is loaded, the identifier
	     * is used to look up the correct thread. If disqus_identifier
	     * is undefined, the page's URL will be used. The URL can be
	     * unreliable, such as when renaming an article slug or changing
	     * domains, so we recommend using your own unique way of
	     * identifying a thread.
	     */
	    identifier: _propTypes2.default.string,
	
	    /**
	     * `title` tells the Disqus service the title of the current page.
	     * This is used when creating the thread on Disqus for the first time.
	     * If undefined, Disqus will use the <title> attribute of the page.
	     * If that attribute could not be used, Disqus will use the URL of the page.
	     */
	    title: _propTypes2.default.string,
	
	    /**
	     * `url` tells the Disqus service the URL of the current page.
	     * If undefined, Disqus will take the window.location.href.
	     * This URL is used to look up or create a thread if disqus_identifier
	     * is undefined. In addition, this URL is always saved when a thread is
	     * being created so that Disqus knows what page a thread belongs to.
	     */
	    url: _propTypes2.default.string.isRequired,
	
	    /**
	     * `category_id` tells the Disqus service the category to be used for
	     * the current page. This is used when creating the thread on Disqus
	     * for the first time.
	     */
	    category_id: _propTypes2.default.string,
	
	    /**
	     * `onNewComment` function accepts one parameter `comment` which is a
	     * JavaScript object with comment `id` and `text`. This allows you to track
	     * user comments and replies and run a script after a comment is posted.
	     */
	    onNewComment: _propTypes2.default.func,
	
	    /**
	     * `language` tells the Disqus service which language should be used.
	     * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
	     * If undefined, English is used as default one
	     */
	    language: _propTypes2.default.string
	};
	
	// DisqusThread.defaultProps = {
	//     url: window.location.href
	// };
	
	exports.default = DisqusThread;

/***/ }),
/* 347 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	  blogPostDir: "sample-posts", // The name of directory that contains your posts.
	  siteTitle: "Irfan Maulana's Blog", // Site title.
	  siteTitleAlt: "Pelajari, Tulis, Kemudian Bagikan", // Alternative site title for SEO.
	  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
	  siteUrl: "https://mazipan.github.io", // Domain of your website without pathPrefix.
	  pathPrefix: "/gatsby-blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
	  siteRss: "/rss.xml", // Path to the RSS file.
	  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
	  googleAnalyticsID: "UA-25065548-2", // GA tracking ID.
	  disqusShortname: "mazipan-github-io", // Disqus shortname.
	  postDefaultCategoryID: "Tech", // Default category for posts.
	  userName: "Irfan Maulana", // Username to display in the author segment.
	  userTwitter: "Maz_Ipan", // Optionally renders "Follow Me" in the UserInfo segment.
	  userLocation: "Jakarta, Indonesia", // User location to display in the author segment.
	  userAvatar: "https://avatars1.githubusercontent.com/u/7221389?v=4&s=100", // User avatar to display in the author segment.
	  userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
	  // Links to social profiles/projects you want to display in the author segment/navigation bar.
	  userLinks: [{
	    label: "GitHub",
	    url: "https://github.com/mazipan/",
	    iconClassName: "fa fa-github"
	  }, {
	    label: "Twitter",
	    url: "https://twitter.com/Maz_Ipan",
	    iconClassName: "fa fa-twitter"
	  }, {
	    label: "Email",
	    url: "mailto:mazipanneh@gmail.com",
	    iconClassName: "fa fa-envelope"
	  }],
	  copyright: "Copyright © 2017. Irfan Maulana", // Copyright string for the footer of the website and RSS feed.
	  themeColor: "#9b4dca", // Used for setting manifest and progress theme colors.
	  backgroundColor: "#fff" // Used for setting manifest background color.
	};

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _kebabCase2 = __webpack_require__(110);
	
	var _kebabCase3 = _interopRequireDefault(_kebabCase2);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(349);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PostTags = function (_Component) {
	  _inherits(PostTags, _Component);
	
	  function PostTags() {
	    _classCallCheck(this, PostTags);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  PostTags.prototype.render = function render() {
	    var tags = this.props.tags;
	
	    return _react2.default.createElement(
	      "div",
	      { className: "post-tag-container" },
	      tags && tags.map(function (tag) {
	        return _react2.default.createElement(
	          _gatsbyLink2.default,
	          {
	            key: tag,
	            style: { textDecoration: "none" },
	            to: "/tags/" + (0, _kebabCase3.default)(tag)
	          },
	          _react2.default.createElement(
	            "button",
	            null,
	            tag
	          )
	        );
	      })
	    );
	  };
	
	  return PostTags;
	}(_react.Component);
	
	exports.default = PostTags;
	module.exports = exports["default"];

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.navigateTo = undefined;
	
	var _extends2 = __webpack_require__(350);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(352);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _objectWithoutProperties2 = __webpack_require__(356);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(357);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(358);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(362);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(132);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathPrefix = "/"; /*global __PREFIX_PATHS__, __PATH_PREFIX__ */
	
	if (false) {
	  pathPrefix = __PATH_PREFIX__;
	}
	
	function normalizePath(path) {
	  return path.replace(/^\/\//g, "/");
	}
	
	var NavLinkPropTypes = {
	  activeClassName: _propTypes2.default.string,
	  activeStyle: _propTypes2.default.object,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  isActive: _propTypes2.default.func,
	  location: _propTypes2.default.object
	};
	
	var GatsbyLink = function (_React$Component) {
	  (0, _inherits3.default)(GatsbyLink, _React$Component);
	
	  function GatsbyLink(props) {
	    (0, _classCallCheck3.default)(this, GatsbyLink);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));
	
	    _this.state = {
	      to: normalizePath(pathPrefix + props.to)
	    };
	    return _this;
	  }
	
	  GatsbyLink.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.to !== nextProps.to) {
	      this.setState({
	        to: normalizePath(pathPrefix + nextProps.to)
	      });
	      ___loader.enqueue(this.state.to);
	    }
	  };
	
	  GatsbyLink.prototype.componentDidMount = function componentDidMount() {
	    ___loader.enqueue(this.state.to);
	  };
	
	  GatsbyLink.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        _onClick = _props.onClick,
	        rest = (0, _objectWithoutProperties3.default)(_props, ["onClick"]);
	
	    var El = void 0;
	    if ((0, _keys2.default)(NavLinkPropTypes).some(function (propName) {
	      return _this2.props[propName];
	    })) {
	      El = _reactRouterDom.NavLink;
	    } else {
	      El = _reactRouterDom.Link;
	    }
	
	    return _react2.default.createElement(El, (0, _extends3.default)({
	      onClick: function onClick(e) {
	        // eslint-disable-line
	        _onClick && _onClick(e);
	
	        if (e.button === 0 && // ignore right clicks
	        !_this2.props.target && // let browser handle "target=_blank"
	        !e.defaultPrevented && // onClick prevented default
	        !e.metaKey && // ignore clicks with modifier keys...
	        !e.altKey && !e.ctrlKey && !e.shiftKey) {
	          // Is this link pointing to a hash on the same page? If so,
	          // just scroll there.
	          var pathname = _this2.state.to;
	          if (pathname.split("#").length > 1) {
	            pathname = pathname.split("#").slice(0, -1).join("");
	          }
	          if (pathname === window.location.pathname) {
	            var hashFragment = _this2.state.to.split("#").slice(1).join("#");
	            var element = document.getElementById(hashFragment);
	            if (element !== null) {
	              element.scrollIntoView();
	              return true;
	            }
	          }
	
	          // In production, make sure the necessary scripts are
	          // loaded before continuing.
	          if (true) {
	            e.preventDefault();
	            window.___navigateTo(_this2.state.to);
	          }
	        }
	
	        return true;
	      }
	    }, rest, {
	      to: this.state.to
	    }));
	  };
	
	  return GatsbyLink;
	}(_react2.default.Component);
	
	GatsbyLink.propTypes = (0, _extends3.default)({}, NavLinkPropTypes, {
	  to: _propTypes2.default.string.isRequired,
	  onClick: _propTypes2.default.func
	});
	
	GatsbyLink.contextTypes = {
	  router: _propTypes2.default.object
	};
	
	exports.default = GatsbyLink;
	var navigateTo = exports.navigateTo = function navigateTo(pathname) {
	  window.___navigateTo(normalizePath(pathPrefix + pathname));
	};

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(351);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(353), __esModule: true };

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(354);
	module.exports = __webpack_require__(194).Object.keys;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(225)
	  , $keys    = __webpack_require__(208);
	
	__webpack_require__(355)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(192)
	  , core    = __webpack_require__(194)
	  , fails   = __webpack_require__(203);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 356 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 357 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(359);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(360);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(361);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(363);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(364);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(359);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(279), __esModule: true };

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactShare = __webpack_require__(366);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	__webpack_require__(406);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialLinks = function (_Component) {
	  _inherits(SocialLinks, _Component);
	
	  function SocialLinks() {
	    _classCallCheck(this, SocialLinks);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  SocialLinks.prototype.render = function render() {
	    var _props = this.props,
	        postNode = _props.postNode,
	        postPath = _props.postPath,
	        mobile = _props.mobile;
	
	    var post = postNode.frontmatter;
	    var url = _SiteConfig2.default.siteUrl + _SiteConfig2.default.pathPrefix + postPath;
	    var FacebookShareButton = _reactShare.ShareButtons.FacebookShareButton,
	        GooglePlusShareButton = _reactShare.ShareButtons.GooglePlusShareButton,
	        LinkedinShareButton = _reactShare.ShareButtons.LinkedinShareButton,
	        TwitterShareButton = _reactShare.ShareButtons.TwitterShareButton,
	        TelegramShareButton = _reactShare.ShareButtons.TelegramShareButton,
	        RedditShareButton = _reactShare.ShareButtons.RedditShareButton;
	    var FacebookShareCount = _reactShare.ShareCounts.FacebookShareCount,
	        GooglePlusShareCount = _reactShare.ShareCounts.GooglePlusShareCount,
	        LinkedinShareCount = _reactShare.ShareCounts.LinkedinShareCount,
	        RedditShareCount = _reactShare.ShareCounts.RedditShareCount;
	
	
	    var FacebookIcon = (0, _reactShare.generateShareIcon)("facebook");
	    var TwitterIcon = (0, _reactShare.generateShareIcon)("twitter");
	    var TelegramIcon = (0, _reactShare.generateShareIcon)("telegram");
	    var GooglePlusIcon = (0, _reactShare.generateShareIcon)("google");
	    var LinkedinIcon = (0, _reactShare.generateShareIcon)("linkedin");
	    var RedditIcon = (0, _reactShare.generateShareIcon)("reddit");
	    var iconSize = mobile ? 36 : 48;
	    var filter = function filter(count) {
	      return count > 0 ? count : "";
	    };
	
	    return _react2.default.createElement(
	      "div",
	      { className: "social-links" },
	      _react2.default.createElement(
	        RedditShareButton,
	        { url: url, title: post.title },
	        _react2.default.createElement(RedditIcon, { round: true, size: iconSize }),
	        _react2.default.createElement(
	          RedditShareCount,
	          { url: url },
	          function (count) {
	            return _react2.default.createElement(
	              "div",
	              { className: "share-count" },
	              filter(count)
	            );
	          }
	        )
	      ),
	      _react2.default.createElement(
	        TwitterShareButton,
	        { url: url, title: post.title },
	        _react2.default.createElement(TwitterIcon, { round: true, size: iconSize })
	      ),
	      _react2.default.createElement(
	        GooglePlusShareButton,
	        { url: url },
	        _react2.default.createElement(GooglePlusIcon, { round: true, size: iconSize }),
	        _react2.default.createElement(
	          GooglePlusShareCount,
	          { url: url },
	          function (count) {
	            return _react2.default.createElement(
	              "div",
	              { className: "share-count" },
	              filter(count)
	            );
	          }
	        )
	      ),
	      _react2.default.createElement(
	        FacebookShareButton,
	        {
	          url: url,
	          title: post.title,
	          picture: post.cover,
	          description: postNode.excerpt
	        },
	        _react2.default.createElement(FacebookIcon, { round: true, size: iconSize }),
	        _react2.default.createElement(
	          FacebookShareCount,
	          { url: url },
	          function (count) {
	            return _react2.default.createElement(
	              "div",
	              { className: "share-count" },
	              filter(count)
	            );
	          }
	        )
	      ),
	      _react2.default.createElement(
	        LinkedinShareButton,
	        {
	          url: url,
	          title: post.title,
	          description: postNode.excerpt
	        },
	        _react2.default.createElement(LinkedinIcon, { round: true, size: iconSize }),
	        _react2.default.createElement(
	          LinkedinShareCount,
	          { url: url },
	          function (count) {
	            return _react2.default.createElement(
	              "div",
	              { className: "share-count" },
	              filter(count)
	            );
	          }
	        )
	      ),
	      _react2.default.createElement(
	        TelegramShareButton,
	        { url: url },
	        _react2.default.createElement(TelegramIcon, { round: true, size: iconSize })
	      )
	    );
	  };
	
	  return SocialLinks;
	}(_react.Component);
	
	exports.default = SocialLinks;
	module.exports = exports["default"];

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.shareCountGetters = exports.shareLinks = exports.ShareCounts = exports.ShareButtons = exports.generateShareIcon = undefined;
	
	var _generateIcon = __webpack_require__(367);
	
	var _shareButtons = __webpack_require__(371);
	
	var ShareButtons = _interopRequireWildcard(_shareButtons);
	
	var _shareCounts = __webpack_require__(393);
	
	var ShareCounts = _interopRequireWildcard(_shareCounts);
	
	var _socialMediaShareLinks = __webpack_require__(389);
	
	var shareLinks = _interopRequireWildcard(_socialMediaShareLinks);
	
	var _shareCountGetters = __webpack_require__(394);
	
	var shareCountGetters = _interopRequireWildcard(_shareCountGetters);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.generateShareIcon = _generateIcon.generateIcon;
	exports.ShareButtons = ShareButtons;
	exports.ShareCounts = ShareCounts;
	exports.shareLinks = shareLinks;
	exports.shareCountGetters = shareCountGetters;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(368);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.generateIcon = generateIcon;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _icons = __webpack_require__(370);
	
	var _icons2 = _interopRequireDefault(_icons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function generateIcon(network) {
	  if (!_icons2.default[network.toLowerCase()]) {
	    throw new Error('invalid network name for a social icon');
	  }
	
	  var iconConfig = _icons2.default[network.toLowerCase()];
	
	  var Icon = function Icon(props) {
	    var className = props.className,
	        iconBgStyle = props.iconBgStyle,
	        logoFillColor = props.logoFillColor,
	        round = props.round,
	        size = props.size;
	
	
	    var baseStyle = {
	      width: size,
	      height: size
	    };
	
	    var classes = 'social-icon social-icon--' + network + ' ' + className;
	
	    var finalIconBgStyle = (0, _extends3.default)({}, iconBgStyle);
	
	    return _react2.default.createElement(
	      'div',
	      { style: baseStyle },
	      _react2.default.createElement(
	        'svg',
	        {
	          viewBox: '0 0 64 64',
	          fill: logoFillColor,
	          width: size,
	          height: size,
	          className: classes },
	        _react2.default.createElement(
	          'g',
	          null,
	          !round ? _react2.default.createElement('rect', {
	            width: '64',
	            height: '64',
	            fill: iconConfig.color,
	            style: finalIconBgStyle }) : _react2.default.createElement('circle', {
	            cx: '32',
	            cy: '32',
	            r: '31',
	            fill: iconConfig.color,
	            style: finalIconBgStyle })
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('path', { d: iconConfig.icon })
	        )
	      )
	    );
	  };
	
	  Icon.propTypes = {
	    className: _propTypes2.default.string,
	    iconBgStyle: _propTypes2.default.object,
	    logoFillColor: _propTypes2.default.string,
	    round: _propTypes2.default.bool,
	    size: _propTypes2.default.number
	  };
	
	  Icon.defaultProps = {
	    className: '',
	    logoFillColor: 'white',
	    size: 64
	  };
	
	  return Icon;
	}

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(369);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),
/* 370 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable max-len */
	exports.default = {
	  facebook: {
	    icon: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
	    mask: 'M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z',
	    color: '#3b5998'
	  },
	  google: {
	    icon: 'M25.3,30.1v3.8h6.3c-0.3,1.6-1.9,4.8-6.3,4.8c-3.8,0-6.9-3.1-6.9-7s3.1-7,6.9-7c2.2,0,3.6,0.9,4.4,1.7l3-2.9c-1.9-1.8-4.4-2.9-7.4-2.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.4,0,10.7-4.5,10.7-10.9c0-0.7-0.1-1.3-0.2-1.8H25.3L25.3,30.1z M49.8,28.9h-3.2v-3.2h-3.2v3.2h-3.2v3.2h3.2v3.2h3.2v-3.2h3.2',
	    mask: 'M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z',
	    color: '#dd4b39'
	  },
	  linkedin: {
	    icon: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
	    mask: 'M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z',
	    color: '#007fb1'
	  },
	  email: {
	    icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
	    mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
	    color: '#7f7f7f'
	  },
	  twitter: {
	    icon: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
	    mask: 'M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z',
	    color: '#00aced'
	  },
	  pinterest: {
	    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
	    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
	    color: '#cb2128'
	  },
	  vk: {
	    icon: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
	    mask: 'M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
	    color: '#45668e'
	  },
	  ok: {
	    icon: 'M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ',
	    mask: 'M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z',
	    color: '#f2720c'
	  },
	  telegram: {
	    icon: 'm45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957',
	    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
	    color: '#37aee2'
	  },
	  whatsapp: {
	    icon: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915',
	    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
	    color: '#2cb742'
	  },
	  reddit: {
	    icon: 'm 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z',
	    color: '#5f99cf'
	  }
	};
	/* eslint-enable max-len */

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RedditShareButton = exports.OKShareButton = exports.VKShareButton = exports.PinterestShareButton = exports.LinkedinShareButton = exports.GooglePlusShareButton = exports.EmailShareButton = exports.WhatsappShareButton = exports.TelegramShareButton = exports.TwitterShareButton = exports.FacebookShareButton = undefined;
	
	var _extends2 = __webpack_require__(368);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(372);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(375);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(376);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(380);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(384);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _keys = __webpack_require__(387);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(388);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _socialMediaShareLinks = __webpack_require__(389);
	
	var links = _interopRequireWildcard(_socialMediaShareLinks);
	
	var _utils = __webpack_require__(391);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var supportedNetworks = (0, _keys2.default)(links); /* eslint-disable react/no-multi-comp */
	
	var ShareButton = function (_Component) {
	  (0, _inherits3.default)(ShareButton, _Component);
	
	  function ShareButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ShareButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShareButton.__proto__ || (0, _getPrototypeOf2.default)(ShareButton)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          onClick = _this$props.onClick,
	          openWindow = _this$props.openWindow;
	
	
	      if (disabled) {
	        return;
	      }
	
	      e.preventDefault();
	
	      var link = _this.link();
	
	      if (openWindow) {
	        _this.openWindow(link);
	      }
	
	      if (onClick) {
	        onClick(link);
	      }
	    }, _this.onKeyPress = function (e) {
	      if (e.key === 'Enter' || e.key === 13) {
	        _this.onClick(e);
	      }
	    }, _this.openWindow = function (link) {
	      var _this$props2 = _this.props,
	          beforeOnClick = _this$props2.beforeOnClick,
	          onShareWindowClose = _this$props2.onShareWindowClose,
	          windowWidth = _this$props2.windowWidth,
	          windowHeight = _this$props2.windowHeight;
	
	
	      var windowOptions = {
	        height: windowHeight,
	        width: windowWidth
	      };
	
	      var windowOpenBound = function windowOpenBound() {
	        return (0, _utils.windowOpen)(link, windowOptions, onShareWindowClose);
	      };
	
	      if (beforeOnClick) {
	        var returnVal = beforeOnClick();
	
	        if ((0, _utils.isPromise)(returnVal)) {
	          returnVal.then(windowOpenBound);
	        } else {
	          windowOpenBound();
	        }
	      } else {
	        windowOpenBound();
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ShareButton, [{
	    key: 'link',
	    value: function link() {
	      var _props = this.props,
	          url = _props.url,
	          opts = _props.opts,
	          network = _props.network;
	
	      return links[network](url, opts);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          children = _props2.children,
	          className = _props2.className,
	          disabled = _props2.disabled,
	          disabledStyle = _props2.disabledStyle,
	          network = _props2.network,
	          style = _props2.style;
	
	
	      var classes = (0, _classnames2.default)('SocialMediaShareButton', 'SocialMediaShareButton--' + network, {
	        'SocialMediaShareButton--disabled': !!disabled,
	        disabled: !!disabled
	      }, className);
	
	      return _react2.default.createElement(
	        'div',
	        {
	          role: 'button',
	          tabIndex: '0',
	          onClick: this.onClick,
	          onKeyPress: this.onKeyPress,
	          className: classes,
	          style: (0, _extends3.default)({}, style, disabled ? disabledStyle : {}) },
	        children
	      );
	    }
	  }]);
	  return ShareButton;
	}(_react.Component);
	
	/* HOC to ease migration from v1 to v2.
	 * To-be-removed in v2.
	 */
	
	
	ShareButton.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  disabled: _propTypes2.default.bool,
	  disabledStyle: _propTypes2.default.object,
	  network: _propTypes2.default.oneOf(supportedNetworks),
	  onClick: _propTypes2.default.func,
	  opts: _propTypes2.default.object,
	  openWindow: _propTypes2.default.bool,
	  url: _propTypes2.default.string.isRequired,
	  style: _propTypes2.default.object,
	  windowWidth: _propTypes2.default.number,
	  windowHeight: _propTypes2.default.number,
	  beforeOnClick: _propTypes2.default.func,
	  onShareWindowClose: _propTypes2.default.func
	};
	ShareButton.defaultProps = {
	  disabledStyle: {
	    opacity: 0.6
	  },
	  openWindow: true
	};
	exports.default = ShareButton;
	function createShareButton(network) {
	  var optsMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
	    return {};
	  };
	  var propTypes = arguments[2];
	  var defaultProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  var CreatedButton = function CreatedButton(props) {
	    return _react2.default.createElement(ShareButton, (0, _extends3.default)({}, props, {
	      network: network,
	      opts: optsMap(props) }));
	  };
	
	  CreatedButton.propTypes = propTypes;
	  CreatedButton.defaultProps = defaultProps;
	
	  return CreatedButton;
	}
	
	var FacebookShareButton = exports.FacebookShareButton = createShareButton('facebook', function (props) {
	  /* eslint-disable no-console */
	  if (props.picture) {
	    console.warn('FacebookShareButton warning: picture is a deprecated prop.');
	  }
	
	  if (props.title) {
	    console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
	  }
	
	  if (props.description) {
	    console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.');
	  }
	  /* eslint-enable no-console */
	
	  return {
	    quote: props.quote,
	    hashtag: props.hashtag
	  };
	}, {
	  quote: _propTypes2.default.string,
	  hashtag: _propTypes2.default.string
	}, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	var TwitterShareButton = exports.TwitterShareButton = createShareButton('twitter', function (props) {
	  return {
	    hashtags: props.hashtags,
	    title: props.title,
	    via: props.via
	  };
	}, {
	  hashtags: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  title: _propTypes2.default.string,
	  via: _propTypes2.default.string
	}, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	var TelegramShareButton = exports.TelegramShareButton = createShareButton('telegram', function (props) {
	  return {
	    title: props.title,
	    via: props.via
	  };
	}, {
	  title: _propTypes2.default.string,
	  via: _propTypes2.default.string
	}, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	var WhatsappShareButton = exports.WhatsappShareButton = createShareButton('whatsapp', function (props) {
	  return {
	    title: props.title,
	    separator: props.separator
	  };
	}, {
	  title: _propTypes2.default.string,
	  separator: _propTypes2.default.string
	}, {
	  separator: ' ',
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	var EmailShareButton = exports.EmailShareButton = createShareButton('email', function (props) {
	  return {
	    subject: props.subject,
	    body: props.body
	  };
	}, {
	  subject: _propTypes2.default.string,
	  body: _propTypes2.default.string
	}, {
	  openWindow: false,
	  onClick: function onClick(link) {
	    window.location.href = link;
	  }
	});
	
	var GooglePlusShareButton = exports.GooglePlusShareButton = createShareButton('googlePlus', undefined, undefined, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	var LinkedinShareButton = exports.LinkedinShareButton = createShareButton('linkedin', function (props) {
	  return {
	    title: props.title,
	    description: props.description
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string
	}, {
	  windowWidth: 750,
	  windowHeight: 600
	});
	
	var PinterestShareButton = exports.PinterestShareButton = createShareButton('pinterest', function (props) {
	  return {
	    media: props.media,
	    description: props.description
	  };
	}, {
	  media: _propTypes2.default.string.isRequired,
	  description: _propTypes2.default.string
	}, {
	  windowWidth: 1000,
	  windowHeight: 730
	});
	
	var VKShareButton = exports.VKShareButton = createShareButton('vk', function (props) {
	  return {
	    title: props.title,
	    description: props.description,
	    image: props.image
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string,
	  image: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	var OKShareButton = exports.OKShareButton = createShareButton('ok', function (props) {
	  return {
	    title: props.title,
	    description: props.description,
	    image: props.image
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string,
	  image: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	var RedditShareButton = exports.RedditShareButton = createShareButton('reddit', function (props) {
	  return {
	    title: props.title
	  };
	}, {
	  title: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(373), __esModule: true };

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(374);
	module.exports = __webpack_require__(194).Object.getPrototypeOf;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(225)
	  , $getPrototypeOf = __webpack_require__(257);
	
	__webpack_require__(355)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 375 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(377);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(378), __esModule: true };

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(379);
	var $Object = __webpack_require__(194).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(192);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(202), 'Object', {defineProperty: __webpack_require__(198).f});

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(381);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(382);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(383);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(385);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(386);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(381);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(279), __esModule: true };

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(353), __esModule: true };

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.email = email;
	exports.twitter = twitter;
	exports.telegram = telegram;
	exports.whatsapp = whatsapp;
	exports.facebook = facebook;
	exports.googlePlus = googlePlus;
	exports.linkedin = linkedin;
	exports.pinterest = pinterest;
	exports.vk = vk;
	exports.ok = ok;
	exports.reddit = reddit;
	
	var _assert = __webpack_require__(390);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _utils = __webpack_require__(391);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable prefer-template */
	function email(url, _ref) {
	  var subject = _ref.subject,
	      body = _ref.body;
	
	  return 'mailto:' + (0, _utils.objectToGetParams)({ subject: subject, body: body || email });
	}
	
	function twitter(url, _ref2) {
	  var title = _ref2.title,
	      via = _ref2.via,
	      _ref2$hashtags = _ref2.hashtags,
	      hashtags = _ref2$hashtags === undefined ? [] : _ref2$hashtags;
	
	  (0, _assert2.default)(url, 'twitter.url');
	  (0, _assert2.default)(Array.isArray(hashtags), 'twitter.hashtags is not an array');
	
	  return 'https://twitter.com/share' + (0, _utils.objectToGetParams)({
	    url: url,
	    text: title,
	    via: via,
	    hashtags: hashtags.join(',')
	  });
	}
	
	function telegram(url, _ref3) {
	  var title = _ref3.title;
	
	  (0, _assert2.default)(url, 'telegram.url');
	  return 'https://telegram.me/share/' + (0, _utils.objectToGetParams)({
	    url: url,
	    text: title
	  });
	}
	
	function whatsapp(url, _ref4) {
	  var title = _ref4.title,
	      separator = _ref4.separator;
	
	  (0, _assert2.default)(url, 'whatsapp.url');
	  return 'https://api.whatsapp.com/send' + (0, _utils.objectToGetParams)({
	    text: title + separator + url
	  });
	}
	
	function facebook(url, _ref5) {
	  var quote = _ref5.quote,
	      hashtag = _ref5.hashtag;
	
	  (0, _assert2.default)(url, 'facebook.url');
	
	  return 'https://www.facebook.com/sharer/sharer.php' + (0, _utils.objectToGetParams)({
	    u: url,
	    quote: quote,
	    hashtag: hashtag
	  });
	}
	
	function googlePlus(url) {
	  (0, _assert2.default)(url, 'googlePlus.url');
	
	  return 'https://plus.google.com/share' + (0, _utils.objectToGetParams)({ url: url });
	}
	
	function linkedin(url, _ref6) {
	  var title = _ref6.title,
	      description = _ref6.description;
	
	  (0, _assert2.default)(url, 'linkedin.url');
	
	  return 'https://linkedin.com/shareArticle' + (0, _utils.objectToGetParams)({
	    url: url,
	    title: title,
	    summary: description
	  });
	}
	
	function pinterest(url, _ref7) {
	  var media = _ref7.media,
	      description = _ref7.description;
	
	  (0, _assert2.default)(url, 'pinterest.url');
	  (0, _assert2.default)(media, 'pinterest.media');
	
	  return 'https://pinterest.com/pin/create/button/' + (0, _utils.objectToGetParams)({
	    url: url,
	    media: media,
	    description: description
	  });
	}
	
	function vk(url, _ref8) {
	  var title = _ref8.title,
	      description = _ref8.description,
	      image = _ref8.image;
	
	  (0, _assert2.default)(url, 'vk.url');
	
	  return 'https://vk.com/share.php' + (0, _utils.objectToGetParams)({
	    url: url,
	    title: title,
	    description: description,
	    image: image
	  });
	}
	
	function ok(url, _ref9) {
	  var title = _ref9.title,
	      description = _ref9.description,
	      image = _ref9.image;
	
	  (0, _assert2.default)(url, 'ok.url');
	
	  return 'https://connect.ok.ru/offer' + (0, _utils.objectToGetParams)({
	    url: url,
	    title: title,
	    description: description,
	    imageUrl: image
	  });
	}
	
	function reddit(url, _ref10) {
	  var title = _ref10.title;
	
	  (0, _assert2.default)(url, 'reddit.url');
	
	  return 'https://www.reddit.com/submit' + (0, _utils.objectToGetParams)({
	    url: url,
	    title: title
	  });
	}

/***/ }),
/* 390 */
/***/ (function(module, exports) {

	module.exports = require("assert");

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPromise = undefined;
	
	var _typeof2 = __webpack_require__(381);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _keys = __webpack_require__(387);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.objectToGetParams = objectToGetParams;
	exports.windowOpen = windowOpen;
	
	var _platform = __webpack_require__(392);
	
	var _platform2 = _interopRequireDefault(_platform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function objectToGetParams(object) {
	  return '?' + (0, _keys2.default)(object).filter(function (key) {
	    return !!object[key];
	  }).map(function (key) {
	    return key + '=' + encodeURIComponent(object[key]);
	  }).join('&');
	} /* eslint-disable prefer-template */
	function windowOpen(url, _ref, onShareWindowClose) {
	  var name = _ref.name,
	      _ref$height = _ref.height,
	      height = _ref$height === undefined ? 400 : _ref$height,
	      _ref$width = _ref.width,
	      width = _ref$width === undefined ? 550 : _ref$width;
	
	  var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
	  var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;
	
	  var config = {
	    height: height,
	    width: width,
	    left: left,
	    top: top,
	    location: 'no',
	    toolbar: 'no',
	    status: 'no',
	    directories: 'no',
	    menubar: 'no',
	    scrollbars: 'yes',
	    resizable: 'no',
	    centerscreen: 'yes',
	    chrome: 'yes'
	  };
	
	  var shareDialog = window.open(url, _platform2.default.name === 'IE' && parseInt(_platform2.default.version, 10) < 10 ? '' : name, (0, _keys2.default)(config).map(function (key) {
	    return key + '=' + config[key];
	  }).join(', '));
	
	  if (onShareWindowClose) {
	    (function () {
	      var interval = window.setInterval(function () {
	        try {
	          if (shareDialog === null || shareDialog.closed) {
	            window.clearInterval(interval);
	            onShareWindowClose(shareDialog);
	          }
	        } catch (e) {
	          /* eslint-disable no-console */
	          console.error(e);
	          /* eslint-enable no-console */
	        }
	      }, 1000);
	    })();
	  }
	
	  return shareDialog;
	}
	
	var isPromise = exports.isPromise = function isPromise(obj) {
	  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	};

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * Platform.js <https://mths.be/platform>
	 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
	 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
	 * Available under MIT license <https://mths.be/mit>
	 */
	;(function() {
	  'use strict';
	
	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };
	
	  /** Used as a reference to the global object. */
	  var root = (objectTypes[typeof window] && window) || this;
	
	  /** Backup possible global object. */
	  var oldRoot = root;
	
	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports;
	
	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	
	  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
	  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  /**
	   * Used as the maximum length of an array-like object.
	   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
	   * for more details.
	   */
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	
	  /** Regular expression to detect Opera. */
	  var reOpera = /\bOpera/;
	
	  /** Possible global object. */
	  var thisBinding = this;
	
	  /** Used for native method references. */
	  var objectProto = Object.prototype;
	
	  /** Used to check for own properties of an object. */
	  var hasOwnProperty = objectProto.hasOwnProperty;
	
	  /** Used to resolve the internal `[[Class]]` of values. */
	  var toString = objectProto.toString;
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Capitalizes a string value.
	   *
	   * @private
	   * @param {string} string The string to capitalize.
	   * @returns {string} The capitalized string.
	   */
	  function capitalize(string) {
	    string = String(string);
	    return string.charAt(0).toUpperCase() + string.slice(1);
	  }
	
	  /**
	   * A utility function to clean up the OS name.
	   *
	   * @private
	   * @param {string} os The OS name to clean up.
	   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
	   * @param {string} [label] A label for the OS.
	   */
	  function cleanupOS(os, pattern, label) {
	    // Platform tokens are defined at:
	    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
	    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
	    var data = {
	      '10.0': '10',
	      '6.4':  '10 Technical Preview',
	      '6.3':  '8.1',
	      '6.2':  '8',
	      '6.1':  'Server 2008 R2 / 7',
	      '6.0':  'Server 2008 / Vista',
	      '5.2':  'Server 2003 / XP 64-bit',
	      '5.1':  'XP',
	      '5.01': '2000 SP1',
	      '5.0':  '2000',
	      '4.0':  'NT',
	      '4.90': 'ME'
	    };
	    // Detect Windows version from platform tokens.
	    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
	        (data = data[/[\d.]+$/.exec(os)])) {
	      os = 'Windows ' + data;
	    }
	    // Correct character case and cleanup string.
	    os = String(os);
	
	    if (pattern && label) {
	      os = os.replace(RegExp(pattern, 'i'), label);
	    }
	
	    os = format(
	      os.replace(/ ce$/i, ' CE')
	        .replace(/\bhpw/i, 'web')
	        .replace(/\bMacintosh\b/, 'Mac OS')
	        .replace(/_PowerPC\b/i, ' OS')
	        .replace(/\b(OS X) [^ \d]+/i, '$1')
	        .replace(/\bMac (OS X)\b/, '$1')
	        .replace(/\/(\d)/, ' $1')
	        .replace(/_/g, '.')
	        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
	        .replace(/\bx86\.64\b/gi, 'x86_64')
	        .replace(/\b(Windows Phone) OS\b/, '$1')
	        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
	        .split(' on ')[0]
	    );
	
	    return os;
	  }
	
	  /**
	   * An iteration utility for arrays and objects.
	   *
	   * @private
	   * @param {Array|Object} object The object to iterate over.
	   * @param {Function} callback The function called per iteration.
	   */
	  function each(object, callback) {
	    var index = -1,
	        length = object ? object.length : 0;
	
	    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
	      while (++index < length) {
	        callback(object[index], index, object);
	      }
	    } else {
	      forOwn(object, callback);
	    }
	  }
	
	  /**
	   * Trim and conditionally capitalize string values.
	   *
	   * @private
	   * @param {string} string The string to format.
	   * @returns {string} The formatted string.
	   */
	  function format(string) {
	    string = trim(string);
	    return /^(?:webOS|i(?:OS|P))/.test(string)
	      ? string
	      : capitalize(string);
	  }
	
	  /**
	   * Iterates over an object's own properties, executing the `callback` for each.
	   *
	   * @private
	   * @param {Object} object The object to iterate over.
	   * @param {Function} callback The function executed per own property.
	   */
	  function forOwn(object, callback) {
	    for (var key in object) {
	      if (hasOwnProperty.call(object, key)) {
	        callback(object[key], key, object);
	      }
	    }
	  }
	
	  /**
	   * Gets the internal `[[Class]]` of a value.
	   *
	   * @private
	   * @param {*} value The value.
	   * @returns {string} The `[[Class]]`.
	   */
	  function getClassOf(value) {
	    return value == null
	      ? capitalize(value)
	      : toString.call(value).slice(8, -1);
	  }
	
	  /**
	   * Host objects can return type values that are different from their actual
	   * data type. The objects we are concerned with usually return non-primitive
	   * types of "object", "function", or "unknown".
	   *
	   * @private
	   * @param {*} object The owner of the property.
	   * @param {string} property The property to check.
	   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
	   */
	  function isHostType(object, property) {
	    var type = object != null ? typeof object[property] : 'number';
	    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
	      (type == 'object' ? !!object[property] : true);
	  }
	
	  /**
	   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
	   *
	   * @private
	   * @param {string} string The string to qualify.
	   * @returns {string} The qualified string.
	   */
	  function qualify(string) {
	    return String(string).replace(/([ -])(?!$)/g, '$1?');
	  }
	
	  /**
	   * A bare-bones `Array#reduce` like utility function.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} callback The function called per iteration.
	   * @returns {*} The accumulated result.
	   */
	  function reduce(array, callback) {
	    var accumulator = null;
	    each(array, function(value, index) {
	      accumulator = callback(accumulator, value, index, array);
	    });
	    return accumulator;
	  }
	
	  /**
	   * Removes leading and trailing whitespace from a string.
	   *
	   * @private
	   * @param {string} string The string to trim.
	   * @returns {string} The trimmed string.
	   */
	  function trim(string) {
	    return String(string).replace(/^ +| +$/g, '');
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Creates a new platform object.
	   *
	   * @memberOf platform
	   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
	   *  context object.
	   * @returns {Object} A platform object.
	   */
	  function parse(ua) {
	
	    /** The environment context object. */
	    var context = root;
	
	    /** Used to flag when a custom context is provided. */
	    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';
	
	    // Juggle arguments.
	    if (isCustomContext) {
	      context = ua;
	      ua = null;
	    }
	
	    /** Browser navigator object. */
	    var nav = context.navigator || {};
	
	    /** Browser user agent string. */
	    var userAgent = nav.userAgent || '';
	
	    ua || (ua = userAgent);
	
	    /** Used to flag when `thisBinding` is the [ModuleScope]. */
	    var isModuleScope = isCustomContext || thisBinding == oldRoot;
	
	    /** Used to detect if browser is like Chrome. */
	    var likeChrome = isCustomContext
	      ? !!nav.likeChrome
	      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());
	
	    /** Internal `[[Class]]` value shortcuts. */
	    var objectClass = 'Object',
	        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
	        enviroClass = isCustomContext ? objectClass : 'Environment',
	        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
	        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';
	
	    /** Detect Java environments. */
	    var java = /\bJava/.test(javaClass) && context.java;
	
	    /** Detect Rhino. */
	    var rhino = java && getClassOf(context.environment) == enviroClass;
	
	    /** A character to represent alpha. */
	    var alpha = java ? 'a' : '\u03b1';
	
	    /** A character to represent beta. */
	    var beta = java ? 'b' : '\u03b2';
	
	    /** Browser document object. */
	    var doc = context.document || {};
	
	    /**
	     * Detect Opera browser (Presto-based).
	     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
	     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
	     */
	    var opera = context.operamini || context.opera;
	
	    /** Opera `[[Class]]`. */
	    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
	      ? operaClass
	      : (opera = null);
	
	    /*------------------------------------------------------------------------*/
	
	    /** Temporary variable used over the script's lifetime. */
	    var data;
	
	    /** The CPU architecture. */
	    var arch = ua;
	
	    /** Platform description array. */
	    var description = [];
	
	    /** Platform alpha/beta indicator. */
	    var prerelease = null;
	
	    /** A flag to indicate that environment features should be used to resolve the platform. */
	    var useFeatures = ua == userAgent;
	
	    /** The browser/environment version. */
	    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();
	
	    /** A flag to indicate if the OS ends with "/ Version" */
	    var isSpecialCasedOS;
	
	    /* Detectable layout engines (order is important). */
	    var layout = getLayout([
	      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
	      'Trident',
	      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
	      'iCab',
	      'Presto',
	      'NetFront',
	      'Tasman',
	      'KHTML',
	      'Gecko'
	    ]);
	
	    /* Detectable browser names (order is important). */
	    var name = getName([
	      'Adobe AIR',
	      'Arora',
	      'Avant Browser',
	      'Breach',
	      'Camino',
	      'Electron',
	      'Epiphany',
	      'Fennec',
	      'Flock',
	      'Galeon',
	      'GreenBrowser',
	      'iCab',
	      'Iceweasel',
	      'K-Meleon',
	      'Konqueror',
	      'Lunascape',
	      'Maxthon',
	      { 'label': 'Microsoft Edge', 'pattern': 'Edge' },
	      'Midori',
	      'Nook Browser',
	      'PaleMoon',
	      'PhantomJS',
	      'Raven',
	      'Rekonq',
	      'RockMelt',
	      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
	      'SeaMonkey',
	      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
	      'Sleipnir',
	      'SlimBrowser',
	      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
	      'Sunrise',
	      'Swiftfox',
	      'Waterfox',
	      'WebPositive',
	      'Opera Mini',
	      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
	      'Opera',
	      { 'label': 'Opera', 'pattern': 'OPR' },
	      'Chrome',
	      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
	      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
	      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
	      { 'label': 'IE', 'pattern': 'IEMobile' },
	      { 'label': 'IE', 'pattern': 'MSIE' },
	      'Safari'
	    ]);
	
	    /* Detectable products (order is important). */
	    var product = getProduct([
	      { 'label': 'BlackBerry', 'pattern': 'BB10' },
	      'BlackBerry',
	      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
	      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
	      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
	      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
	      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
	      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
	      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
	      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
	      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
	      'Google TV',
	      'Lumia',
	      'iPad',
	      'iPod',
	      'iPhone',
	      'Kindle',
	      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
	      'Nexus',
	      'Nook',
	      'PlayBook',
	      'PlayStation Vita',
	      'PlayStation',
	      'TouchPad',
	      'Transformer',
	      { 'label': 'Wii U', 'pattern': 'WiiU' },
	      'Wii',
	      'Xbox One',
	      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
	      'Xoom'
	    ]);
	
	    /* Detectable manufacturers. */
	    var manufacturer = getManufacturer({
	      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
	      'Archos': {},
	      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
	      'Asus': { 'Transformer': 1 },
	      'Barnes & Noble': { 'Nook': 1 },
	      'BlackBerry': { 'PlayBook': 1 },
	      'Google': { 'Google TV': 1, 'Nexus': 1 },
	      'HP': { 'TouchPad': 1 },
	      'HTC': {},
	      'LG': {},
	      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
	      'Motorola': { 'Xoom': 1 },
	      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
	      'Nokia': { 'Lumia': 1 },
	      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
	      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 }
	    });
	
	    /* Detectable operating systems (order is important). */
	    var os = getOS([
	      'Windows Phone',
	      'Android',
	      'CentOS',
	      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
	      'Debian',
	      'Fedora',
	      'FreeBSD',
	      'Gentoo',
	      'Haiku',
	      'Kubuntu',
	      'Linux Mint',
	      'OpenBSD',
	      'Red Hat',
	      'SuSE',
	      'Ubuntu',
	      'Xubuntu',
	      'Cygwin',
	      'Symbian OS',
	      'hpwOS',
	      'webOS ',
	      'webOS',
	      'Tablet OS',
	      'Tizen',
	      'Linux',
	      'Mac OS X',
	      'Macintosh',
	      'Mac',
	      'Windows 98;',
	      'Windows '
	    ]);
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Picks the layout engine from an array of guesses.
	     *
	     * @private
	     * @param {Array} guesses An array of guesses.
	     * @returns {null|string} The detected layout engine.
	     */
	    function getLayout(guesses) {
	      return reduce(guesses, function(result, guess) {
	        return result || RegExp('\\b' + (
	          guess.pattern || qualify(guess)
	        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
	      });
	    }
	
	    /**
	     * Picks the manufacturer from an array of guesses.
	     *
	     * @private
	     * @param {Array} guesses An object of guesses.
	     * @returns {null|string} The detected manufacturer.
	     */
	    function getManufacturer(guesses) {
	      return reduce(guesses, function(result, value, key) {
	        // Lookup the manufacturer by product or scan the UA for the manufacturer.
	        return result || (
	          value[product] ||
	          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
	          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
	        ) && key;
	      });
	    }
	
	    /**
	     * Picks the browser name from an array of guesses.
	     *
	     * @private
	     * @param {Array} guesses An array of guesses.
	     * @returns {null|string} The detected browser name.
	     */
	    function getName(guesses) {
	      return reduce(guesses, function(result, guess) {
	        return result || RegExp('\\b' + (
	          guess.pattern || qualify(guess)
	        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
	      });
	    }
	
	    /**
	     * Picks the OS name from an array of guesses.
	     *
	     * @private
	     * @param {Array} guesses An array of guesses.
	     * @returns {null|string} The detected OS name.
	     */
	    function getOS(guesses) {
	      return reduce(guesses, function(result, guess) {
	        var pattern = guess.pattern || qualify(guess);
	        if (!result && (result =
	              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
	            )) {
	          result = cleanupOS(result, pattern, guess.label || guess);
	        }
	        return result;
	      });
	    }
	
	    /**
	     * Picks the product name from an array of guesses.
	     *
	     * @private
	     * @param {Array} guesses An array of guesses.
	     * @returns {null|string} The detected product name.
	     */
	    function getProduct(guesses) {
	      return reduce(guesses, function(result, guess) {
	        var pattern = guess.pattern || qualify(guess);
	        if (!result && (result =
	              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
	              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
	              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
	            )) {
	          // Split by forward slash and append product version if needed.
	          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
	            result[0] += ' ' + result[1];
	          }
	          // Correct character case and cleanup string.
	          guess = guess.label || guess;
	          result = format(result[0]
	            .replace(RegExp(pattern, 'i'), guess)
	            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
	            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
	        }
	        return result;
	      });
	    }
	
	    /**
	     * Resolves the version using an array of UA patterns.
	     *
	     * @private
	     * @param {Array} patterns An array of UA patterns.
	     * @returns {null|string} The detected version.
	     */
	    function getVersion(patterns) {
	      return reduce(patterns, function(result, pattern) {
	        return result || (RegExp(pattern +
	          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
	      });
	    }
	
	    /**
	     * Returns `platform.description` when the platform object is coerced to a string.
	     *
	     * @name toString
	     * @memberOf platform
	     * @returns {string} Returns `platform.description` if available, else an empty string.
	     */
	    function toStringPlatform() {
	      return this.description || '';
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    // Convert layout to an array so we can add extra details.
	    layout && (layout = [layout]);
	
	    // Detect product names that contain their manufacturer's name.
	    if (manufacturer && !product) {
	      product = getProduct([manufacturer]);
	    }
	    // Clean up Google TV.
	    if ((data = /\bGoogle TV\b/.exec(product))) {
	      product = data[0];
	    }
	    // Detect simulators.
	    if (/\bSimulator\b/i.test(ua)) {
	      product = (product ? product + ' ' : '') + 'Simulator';
	    }
	    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
	    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
	      description.push('running in Turbo/Uncompressed mode');
	    }
	    // Detect IE Mobile 11.
	    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
	      data = parse(ua.replace(/like iPhone OS/, ''));
	      manufacturer = data.manufacturer;
	      product = data.product;
	    }
	    // Detect iOS.
	    else if (/^iP/.test(product)) {
	      name || (name = 'Safari');
	      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
	        ? ' ' + data[1].replace(/_/g, '.')
	        : '');
	    }
	    // Detect Kubuntu.
	    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
	      os = 'Kubuntu';
	    }
	    // Detect Android browsers.
	    else if ((manufacturer && manufacturer != 'Google' &&
	        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
	        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
	      name = 'Android Browser';
	      os = /\bAndroid\b/.test(os) ? os : 'Android';
	    }
	    // Detect Silk desktop/accelerated modes.
	    else if (name == 'Silk') {
	      if (!/\bMobi/i.test(ua)) {
	        os = 'Android';
	        description.unshift('desktop mode');
	      }
	      if (/Accelerated *= *true/i.test(ua)) {
	        description.unshift('accelerated');
	      }
	    }
	    // Detect PaleMoon identifying as Firefox.
	    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
	      description.push('identifying as Firefox ' + data[1]);
	    }
	    // Detect Firefox OS and products running Firefox.
	    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
	      os || (os = 'Firefox OS');
	      product || (product = data[1]);
	    }
	    // Detect false positives for Firefox/Safari.
	    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
	      // Escape the `/` for Firefox 1.
	      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
	        // Clear name of false positives.
	        name = null;
	      }
	      // Reassign a generic name.
	      if ((data = product || manufacturer || os) &&
	          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
	        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
	      }
	    }
	    // Add Chrome version to description for Electron.
	    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
	      description.push('Chromium ' + data);
	    }
	    // Detect non-Opera (Presto-based) versions (order is important).
	    if (!version) {
	      version = getVersion([
	        '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
	        'Version',
	        qualify(name),
	        '(?:Firefox|Minefield|NetFront)'
	      ]);
	    }
	    // Detect stubborn layout engines.
	    if ((data =
	          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
	          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
	          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
	          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
	          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
	        )) {
	      layout = [data];
	    }
	    // Detect Windows Phone 7 desktop mode.
	    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
	      name += ' Mobile';
	      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
	      description.unshift('desktop mode');
	    }
	    // Detect Windows Phone 8.x desktop mode.
	    else if (/\bWPDesktop\b/i.test(ua)) {
	      name = 'IE Mobile';
	      os = 'Windows Phone 8.x';
	      description.unshift('desktop mode');
	      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
	    }
	    // Detect IE 11 identifying as other browsers.
	    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
	      if (name) {
	        description.push('identifying as ' + name + (version ? ' ' + version : ''));
	      }
	      name = 'IE';
	      version = data[1];
	    }
	    // Leverage environment features.
	    if (useFeatures) {
	      // Detect server-side environments.
	      // Rhino has a global function while others have a global object.
	      if (isHostType(context, 'global')) {
	        if (java) {
	          data = java.lang.System;
	          arch = data.getProperty('os.arch');
	          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
	        }
	        if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
	          os || (os = data[0].os || null);
	          try {
	            data[1] = context.require('ringo/engine').version;
	            version = data[1].join('.');
	            name = 'RingoJS';
	          } catch(e) {
	            if (data[0].global.system == context.system) {
	              name = 'Narwhal';
	            }
	          }
	        }
	        else if (
	          typeof context.process == 'object' && !context.process.browser &&
	          (data = context.process)
	        ) {
	          if (typeof data.versions == 'object') {
	            if (typeof data.versions.electron == 'string') {
	              description.push('Node ' + data.versions.node);
	              name = 'Electron';
	              version = data.versions.electron;
	            } else if (typeof data.versions.nw == 'string') {
	              description.push('Chromium ' + version, 'Node ' + data.versions.node);
	              name = 'NW.js';
	              version = data.versions.nw;
	            }
	          } else {
	            name = 'Node.js';
	            arch = data.arch;
	            os = data.platform;
	            version = /[\d.]+/.exec(data.version)
	            version = version ? version[0] : 'unknown';
	          }
	        }
	        else if (rhino) {
	          name = 'Rhino';
	        }
	      }
	      // Detect Adobe AIR.
	      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
	        name = 'Adobe AIR';
	        os = data.flash.system.Capabilities.os;
	      }
	      // Detect PhantomJS.
	      else if (getClassOf((data = context.phantom)) == phantomClass) {
	        name = 'PhantomJS';
	        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
	      }
	      // Detect IE compatibility modes.
	      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
	        // We're in compatibility mode when the Trident version + 4 doesn't
	        // equal the document mode.
	        version = [version, doc.documentMode];
	        if ((data = +data[1] + 4) != version[1]) {
	          description.push('IE ' + version[1] + ' mode');
	          layout && (layout[1] = '');
	          version[1] = data;
	        }
	        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
	      }
	      // Detect IE 11 masking as other browsers.
	      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
	        description.push('masking as ' + name + ' ' + version);
	        name = 'IE';
	        version = '11.0';
	        layout = ['Trident'];
	        os = 'Windows';
	      }
	      os = os && format(os);
	    }
	    // Detect prerelease phases.
	    if (version && (data =
	          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
	          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
	          /\bMinefield\b/i.test(ua) && 'a'
	        )) {
	      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
	      version = version.replace(RegExp(data + '\\+?$'), '') +
	        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
	    }
	    // Detect Firefox Mobile.
	    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
	      name = 'Firefox Mobile';
	    }
	    // Obscure Maxthon's unreliable version.
	    else if (name == 'Maxthon' && version) {
	      version = version.replace(/\.[\d.]+/, '.x');
	    }
	    // Detect Xbox 360 and Xbox One.
	    else if (/\bXbox\b/i.test(product)) {
	      if (product == 'Xbox 360') {
	        os = null;
	      }
	      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
	        description.unshift('mobile mode');
	      }
	    }
	    // Add mobile postfix.
	    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
	        (os == 'Windows CE' || /Mobi/i.test(ua))) {
	      name += ' Mobile';
	    }
	    // Detect IE platform preview.
	    else if (name == 'IE' && useFeatures) {
	      try {
	        if (context.external === null) {
	          description.unshift('platform preview');
	        }
	      } catch(e) {
	        description.unshift('embedded');
	      }
	    }
	    // Detect BlackBerry OS version.
	    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
	    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
	          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
	          version
	        )) {
	      data = [data, /BB10/.test(ua)];
	      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
	      version = null;
	    }
	    // Detect Opera identifying/masking itself as another browser.
	    // http://www.opera.com/support/kb/view/843/
	    else if (this != forOwn && product != 'Wii' && (
	          (useFeatures && opera) ||
	          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
	          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
	          (name == 'IE' && (
	            (os && !/^Win/.test(os) && version > 5.5) ||
	            /\bWindows XP\b/.test(os) && version > 8 ||
	            version == 8 && !/\bTrident\b/.test(ua)
	          ))
	        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
	      // When "identifying", the UA contains both Opera and the other browser's name.
	      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
	      if (reOpera.test(name)) {
	        if (/\bIE\b/.test(data) && os == 'Mac OS') {
	          os = null;
	        }
	        data = 'identify' + data;
	      }
	      // When "masking", the UA contains only the other browser's name.
	      else {
	        data = 'mask' + data;
	        if (operaClass) {
	          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
	        } else {
	          name = 'Opera';
	        }
	        if (/\bIE\b/.test(data)) {
	          os = null;
	        }
	        if (!useFeatures) {
	          version = null;
	        }
	      }
	      layout = ['Presto'];
	      description.push(data);
	    }
	    // Detect WebKit Nightly and approximate Chrome/Safari versions.
	    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
	      // Correct build number for numeric comparison.
	      // (e.g. "532.5" becomes "532.05")
	      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
	      // Nightly builds are postfixed with a "+".
	      if (name == 'Safari' && data[1].slice(-1) == '+') {
	        name = 'WebKit Nightly';
	        prerelease = 'alpha';
	        version = data[1].slice(0, -1);
	      }
	      // Clear incorrect browser versions.
	      else if (version == data[1] ||
	          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
	        version = null;
	      }
	      // Use the full Chrome version when available.
	      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
	      // Detect Blink layout engine.
	      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
	        layout = ['Blink'];
	      }
	      // Detect JavaScriptCore.
	      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
	      if (!useFeatures || (!likeChrome && !data[1])) {
	        layout && (layout[1] = 'like Safari');
	        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
	      } else {
	        layout && (layout[1] = 'like Chrome');
	        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
	      }
	      // Add the postfix of ".x" or "+" for approximate versions.
	      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
	      // Obscure version for some Safari 1-2 releases.
	      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
	        version = data;
	      }
	    }
	    // Detect Opera desktop modes.
	    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
	      name += ' ';
	      description.unshift('desktop mode');
	      if (data == 'zvav') {
	        name += 'Mini';
	        version = null;
	      } else {
	        name += 'Mobile';
	      }
	      os = os.replace(RegExp(' *' + data + '$'), '');
	    }
	    // Detect Chrome desktop mode.
	    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
	      description.unshift('desktop mode');
	      name = 'Chrome Mobile';
	      version = null;
	
	      if (/\bOS X\b/.test(os)) {
	        manufacturer = 'Apple';
	        os = 'iOS 4.3+';
	      } else {
	        os = null;
	      }
	    }
	    // Strip incorrect OS versions.
	    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
	        ua.indexOf('/' + data + '-') > -1) {
	      os = trim(os.replace(data, ''));
	    }
	    // Add layout engine.
	    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
	        /Browser|Lunascape|Maxthon/.test(name) ||
	        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
	        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name) && layout[1])) {
	      // Don't add layout details to description if they are falsey.
	      (data = layout[layout.length - 1]) && description.push(data);
	    }
	    // Combine contextual information.
	    if (description.length) {
	      description = ['(' + description.join('; ') + ')'];
	    }
	    // Append manufacturer to description.
	    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
	      description.push('on ' + manufacturer);
	    }
	    // Append product to description.
	    if (product) {
	      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
	    }
	    // Parse the OS into an object.
	    if (os) {
	      data = / ([\d.+]+)$/.exec(os);
	      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
	      os = {
	        'architecture': 32,
	        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
	        'version': data ? data[1] : null,
	        'toString': function() {
	          var version = this.version;
	          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
	        }
	      };
	    }
	    // Add browser/OS architecture.
	    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
	      if (os) {
	        os.architecture = 64;
	        os.family = os.family.replace(RegExp(' *' + data), '');
	      }
	      if (
	          name && (/\bWOW64\b/i.test(ua) ||
	          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
	      ) {
	        description.unshift('32-bit');
	      }
	    }
	    // Chrome 39 and above on OS X is always 64-bit.
	    else if (
	        os && /^OS X/.test(os.family) &&
	        name == 'Chrome' && parseFloat(version) >= 39
	    ) {
	      os.architecture = 64;
	    }
	
	    ua || (ua = null);
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The platform object.
	     *
	     * @name platform
	     * @type Object
	     */
	    var platform = {};
	
	    /**
	     * The platform description.
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.description = ua;
	
	    /**
	     * The name of the browser's layout engine.
	     *
	     * The list of common layout engines include:
	     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.layout = layout && layout[0];
	
	    /**
	     * The name of the product's manufacturer.
	     *
	     * The list of manufacturers include:
	     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
	     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
	     * "Nokia", "Samsung" and "Sony"
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.manufacturer = manufacturer;
	
	    /**
	     * The name of the browser/environment.
	     *
	     * The list of common browser names include:
	     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
	     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
	     * "Opera Mini" and "Opera"
	     *
	     * Mobile versions of some browsers have "Mobile" appended to their name:
	     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.name = name;
	
	    /**
	     * The alpha/beta release indicator.
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.prerelease = prerelease;
	
	    /**
	     * The name of the product hosting the browser.
	     *
	     * The list of common products include:
	     *
	     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
	     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.product = product;
	
	    /**
	     * The browser's user agent string.
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.ua = ua;
	
	    /**
	     * The browser/environment version.
	     *
	     * @memberOf platform
	     * @type string|null
	     */
	    platform.version = name && version;
	
	    /**
	     * The name of the operating system.
	     *
	     * @memberOf platform
	     * @type Object
	     */
	    platform.os = os || {
	
	      /**
	       * The CPU architecture the OS is built for.
	       *
	       * @memberOf platform.os
	       * @type number|null
	       */
	      'architecture': null,
	
	      /**
	       * The family of the OS.
	       *
	       * Common values include:
	       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
	       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
	       * "Android", "iOS" and "Windows Phone"
	       *
	       * @memberOf platform.os
	       * @type string|null
	       */
	      'family': null,
	
	      /**
	       * The version of the OS.
	       *
	       * @memberOf platform.os
	       * @type string|null
	       */
	      'version': null,
	
	      /**
	       * Returns the OS string.
	       *
	       * @memberOf platform.os
	       * @returns {string} The OS string.
	       */
	      'toString': function() { return 'null'; }
	    };
	
	    platform.parse = parse;
	    platform.toString = toStringPlatform;
	
	    if (platform.version) {
	      description.unshift(version);
	    }
	    if (platform.name) {
	      description.unshift(name);
	    }
	    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
	      description.push(product ? '(' + os + ')' : 'on ' + os);
	    }
	    if (description.length) {
	      platform.description = description.join(' ');
	    }
	    return platform;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  // Export platform.
	  var platform = parse();
	
	  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
	  if (true) {
	    // Expose platform on the global object to prevent errors when platform is
	    // loaded by a script tag in the presence of an AMD loader.
	    // See http://requirejs.org/docs/errors.html#mismatch for more details.
	    root.platform = platform;
	
	    // Define as an anonymous module so platform can be aliased through path mapping.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return platform;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for CommonJS support.
	    forOwn(platform, function(value, key) {
	      freeExports[key] = value;
	    });
	  }
	  else {
	    // Export to the global object.
	    root.platform = platform;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TwitterShareCount = exports.RedditShareCount = exports.OKShareCount = exports.VKShareCount = exports.PinterestShareCount = exports.GooglePlusShareCount = exports.LinkedinShareCount = exports.FacebookShareCount = undefined;
	
	var _extends2 = __webpack_require__(368);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(372);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(375);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(376);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(380);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(384);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(134);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(388);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _shareCountGetters = __webpack_require__(394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable react/no-multi-comp */
	var SocialMediaShareCount = function (_Component) {
	  (0, _inherits3.default)(SocialMediaShareCount, _Component);
	
	  function SocialMediaShareCount(props) {
	    (0, _classCallCheck3.default)(this, SocialMediaShareCount);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SocialMediaShareCount.__proto__ || (0, _getPrototypeOf2.default)(SocialMediaShareCount)).call(this, props));
	
	    _this._isMounted = false;
	    _this.state = { count: 0 };
	    return _this;
	  }
	
	  (0, _createClass3.default)(SocialMediaShareCount, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._isMounted = true;
	      this.updateCount(this.props.url);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.url !== this.props.url) {
	        this.updateCount(nextProps.url);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._isMounted = false;
	    }
	  }, {
	    key: 'updateCount',
	    value: function updateCount(url) {
	      var _this2 = this;
	
	      if (this.props.getCount) {
	        this.setState({
	          isLoading: true
	        });
	
	        this.props.getCount(url, function (count) {
	          if (_this2._isMounted) {
	            _this2.setState({
	              count: count,
	              isLoading: false
	            });
	          }
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          count = _state.count,
	          isLoading = _state.isLoading;
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('SocialMediaShareCount', className) },
	        !isLoading && children(count || 0)
	      );
	    }
	  }]);
	  return SocialMediaShareCount;
	}(_react.Component);
	
	SocialMediaShareCount.propTypes = {
	  children: _propTypes2.default.func,
	  className: _propTypes2.default.string,
	  getCount: _propTypes2.default.func,
	  url: _propTypes2.default.string.isRequired
	};
	
	SocialMediaShareCount.defaultProps = {
	  children: function children(shareCount) {
	    return shareCount;
	  }
	};
	
	function shareCountFactory(getCount) {
	  return function (props) {
	    return _react2.default.createElement(SocialMediaShareCount, (0, _extends3.default)({ getCount: getCount }, props));
	  };
	}
	
	var FacebookShareCount = exports.FacebookShareCount = shareCountFactory(_shareCountGetters.getFacebookShareCount);
	var LinkedinShareCount = exports.LinkedinShareCount = shareCountFactory(_shareCountGetters.getLinkedinShareCount);
	var GooglePlusShareCount = exports.GooglePlusShareCount = shareCountFactory(_shareCountGetters.getGooglePlusShareCount);
	var PinterestShareCount = exports.PinterestShareCount = shareCountFactory(_shareCountGetters.getPinterestShareCount);
	var VKShareCount = exports.VKShareCount = shareCountFactory(_shareCountGetters.getVKShareCount);
	var OKShareCount = exports.OKShareCount = shareCountFactory(_shareCountGetters.getOKShareCount);
	var RedditShareCount = exports.RedditShareCount = shareCountFactory(_shareCountGetters.getRedditShareCount);
	var TwitterShareCount = exports.TwitterShareCount = function TwitterShareCount() {
	  throw new Error('TwitterShareCount was removed in version 1.3.0 because' + 'the Twitter API was shut down and there is no replacement. Please ' + 'remove it from your code.');
	};

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getVKShareCount = undefined;
	
	var _stringify = __webpack_require__(395);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	exports.getFacebookShareCount = getFacebookShareCount;
	exports.getGooglePlusShareCount = getGooglePlusShareCount;
	exports.getLinkedinShareCount = getLinkedinShareCount;
	exports.getPinterestShareCount = getPinterestShareCount;
	exports.getOKShareCount = getOKShareCount;
	exports.getRedditShareCount = getRedditShareCount;
	
	var _jsonp = __webpack_require__(397);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _platform = __webpack_require__(392);
	
	var _platform2 = _interopRequireDefault(_platform);
	
	var _utils = __webpack_require__(391);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getFacebookShareCount(shareUrl, callback) {
	  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;
	
	  (0, _jsonp2.default)(endpoint, function (err, data) {
	    callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
	  });
	}
	
	function getGooglePlusShareCount(shareUrl, callback) {
	  if (_platform2.default.name === 'IE' && parseInt(_platform2.default.version, 10) < 11) {
	    /* eslint-disable no-console */
	    console.error('Google plus share count is not supported in <=IE10!');
	    /* eslint-enable no-console */
	    return;
	  }
	
	  var xhr = new XMLHttpRequest();
	
	  xhr.open('POST', 'https://clients6.google.com/rpc');
	  xhr.setRequestHeader('Accept', 'application/json');
	  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
	
	  xhr.send((0, _stringify2.default)({
	    method: 'pos.plusones.get',
	    id: 'p',
	    params: {
	      nolog: true,
	      id: shareUrl,
	      source: 'widget',
	      userId: '@viewer',
	      groupId: '@self'
	    },
	    jsonrpc: '2.0',
	    key: 'p',
	    apiVersion: 'v1'
	  }));
	
	  xhr.onload = function onSuccessdata() {
	    var data = JSON.parse(this.responseText);
	    callback(!!data ? data.result.metadata.globalCounts.count : undefined);
	  };
	
	  xhr.onerror = function onErrordata() {};
	}
	
	function getLinkedinShareCount(shareUrl, callback) {
	  var url = 'https://www.linkedin.com/countserv/count/share';
	
	  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
	    url: shareUrl,
	    format: 'jsonp'
	  }), function (err, data) {
	    callback(!!data ? data.count : undefined);
	  });
	}
	
	function getPinterestShareCount(shareUrl, callback) {
	  var url = 'https://api.pinterest.com/v1/urls/count.json';
	
	  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
	    url: shareUrl
	  }), function (err, data) {
	    callback(!!data ? data.count : undefined);
	  });
	}
	
	function getVKShareCount(shareUrl, callback) {
	  if (!window.VK) {
	    window.VK = {
	      Share: {
	        count: function count(index, _count2) {
	          return window.VK.callbacks[index](_count2);
	        }
	      },
	      callbacks: []
	    };
	  }
	
	  var url = 'https://vk.com/share.php';
	  var index = window.VK.callbacks.length;
	
	  window.VK.callbacks.push(callback);
	
	  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
	    act: 'count',
	    index: index,
	    url: shareUrl
	  }));
	}
	
	exports.getVKShareCount = getVKShareCount;
	function getOKShareCount(shareUrl, callback) {
	  if (!window.OK) {
	    window.OK = {
	      Share: {
	        count: function count(index, _count) {
	          return window.OK.callbacks[index](_count);
	        }
	      },
	      callbacks: []
	    };
	  }
	
	  var url = 'https://connect.ok.ru/dk';
	  var index = window.OK.callbacks.length;
	
	  window.ODKL = {
	    updateCount: function updateCount(a, b) {
	      window.OK.callbacks[index](b);
	    }
	  };
	  window.OK.callbacks.push(callback);
	
	  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
	    'st.cmd': 'extLike',
	    uid: 'odklcnt0',
	    ref: shareUrl
	  }));
	}
	
	function getRedditShareCount(shareUrl, callback) {
	  var endpoint = 'https://www.reddit.com/api/info.json?limit=1&url=' + shareUrl;
	
	  (0, _jsonp2.default)(endpoint, { param: 'jsonp' }, function (err, response) {
	    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
	  });
	}

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(396), __esModule: true };

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(194)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */
	
	var debug = __webpack_require__(398)('jsonp');
	
	/**
	 * Module exports.
	 */
	
	module.exports = jsonp;
	
	/**
	 * Callback index.
	 */
	
	var count = 0;
	
	/**
	 * Noop function.
	 */
	
	function noop(){}
	
	/**
	 * JSONP handler
	 *
	 * Options:
	 *  - param {String} qs parameter (`callback`)
	 *  - prefix {String} qs parameter (`__jp`)
	 *  - name {String} qs parameter (`prefix` + incr)
	 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
	 *
	 * @param {String} url
	 * @param {Object|Function} optional options / callback
	 * @param {Function} optional callback
	 */
	
	function jsonp(url, opts, fn){
	  if ('function' == typeof opts) {
	    fn = opts;
	    opts = {};
	  }
	  if (!opts) opts = {};
	
	  var prefix = opts.prefix || '__jp';
	
	  // use the callback name that was passed if one was provided.
	  // otherwise generate a unique name by incrementing our counter.
	  var id = opts.name || (prefix + (count++));
	
	  var param = opts.param || 'callback';
	  var timeout = null != opts.timeout ? opts.timeout : 60000;
	  var enc = encodeURIComponent;
	  var target = document.getElementsByTagName('script')[0] || document.head;
	  var script;
	  var timer;
	
	
	  if (timeout) {
	    timer = setTimeout(function(){
	      cleanup();
	      if (fn) fn(new Error('Timeout'));
	    }, timeout);
	  }
	
	  function cleanup(){
	    if (script.parentNode) script.parentNode.removeChild(script);
	    window[id] = noop;
	    if (timer) clearTimeout(timer);
	  }
	
	  function cancel(){
	    if (window[id]) {
	      cleanup();
	    }
	  }
	
	  window[id] = function(data){
	    debug('jsonp got', data);
	    cleanup();
	    if (fn) fn(null, data);
	  };
	
	  // add qs component
	  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
	  url = url.replace('?&', '?');
	
	  debug('jsonp req "%s"', url);
	
	  // create script
	  script = document.createElement('script');
	  script.src = url;
	  target.parentNode.insertBefore(script, target);
	
	  return cancel;
	}


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Detect Electron renderer process, which is node, but we should
	 * treat as a browser.
	 */
	
	if (typeof process !== 'undefined' && process.type === 'renderer') {
	  module.exports = __webpack_require__(399);
	} else {
	  module.exports = __webpack_require__(402);
	}


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(400);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }
	
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return;
	
	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = ({"NODE_ENV":"production","PUBLIC_DIR":"D:\\GithubProject\\gatsby-blog/public"}).DEBUG;
	  }
	
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(401);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor(namespace) {
	  var hash = 0, i;
	
	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }
	
	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function createDebug(namespace) {
	
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;
	
	    var self = debug;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);
	
	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	
	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	
	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }
	
	  return debug;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  exports.names = [];
	  exports.skips = [];
	
	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ }),
/* 401 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var tty = __webpack_require__(403);
	var util = __webpack_require__(404);
	
	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(400);
	exports.init = init;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	
	/**
	 * Colors.
	 */
	
	exports.colors = [6, 2, 3, 4, 5, 1];
	
	/**
	 * Build up the default `inspectOpts` object from the environment variables.
	 *
	 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
	 */
	
	exports.inspectOpts = Object.keys(({"NODE_ENV":"production","PUBLIC_DIR":"D:\\GithubProject\\gatsby-blog/public"})).filter(function (key) {
	  return /^debug_/i.test(key);
	}).reduce(function (obj, key) {
	  // camel-case
	  var prop = key
	    .substring(6)
	    .toLowerCase()
	    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });
	
	  // coerce string value into JS value
	  var val = ({"NODE_ENV":"production","PUBLIC_DIR":"D:\\GithubProject\\gatsby-blog/public"})[key];
	  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
	  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
	  else if (val === 'null') val = null;
	  else val = Number(val);
	
	  obj[prop] = val;
	  return obj;
	}, {});
	
	/**
	 * The file descriptor to write the `debug()` calls to.
	 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
	 *
	 *   $ DEBUG_FD=3 node script.js 3>debug.log
	 */
	
	var fd = parseInt(({"NODE_ENV":"production","PUBLIC_DIR":"D:\\GithubProject\\gatsby-blog/public"}).DEBUG_FD, 10) || 2;
	
	if (1 !== fd && 2 !== fd) {
	  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
	}
	
	var stream = 1 === fd ? process.stdout :
	             2 === fd ? process.stderr :
	             createWritableStdioStream(fd);
	
	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */
	
	function useColors() {
	  return 'colors' in exports.inspectOpts
	    ? Boolean(exports.inspectOpts.colors)
	    : tty.isatty(fd);
	}
	
	/**
	 * Map %o to `util.inspect()`, all on a single line.
	 */
	
	exports.formatters.o = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts)
	    .replace(/\s*\n\s*/g, ' ');
	};
	
	/**
	 * Map %o to `util.inspect()`, allowing multiple lines if needed.
	 */
	
	exports.formatters.O = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts);
	};
	
	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var name = this.namespace;
	  var useColors = this.useColors;
	
	  if (useColors) {
	    var c = this.color;
	    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';
	
	    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
	    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
	  } else {
	    args[0] = new Date().toUTCString()
	      + ' ' + name + ' ' + args[0];
	  }
	}
	
	/**
	 * Invokes `util.format()` with the specified arguments and writes to `stream`.
	 */
	
	function log() {
	  return stream.write(util.format.apply(util, arguments) + '\n');
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete ({"NODE_ENV":"production","PUBLIC_DIR":"D:\\GithubProject\\gatsby-blog/public"}).DEBUG;
	  } else {
	    ({"NODE_ENV":"production","PUBLIC_DIR":"D:\\GithubProject\\gatsby-blog/public"}).DEBUG = namespaces;
	  }
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  return ({"NODE_ENV":"production","PUBLIC_DIR":"D:\\GithubProject\\gatsby-blog/public"}).DEBUG;
	}
	
	/**
	 * Copied from `node/src/node.js`.
	 *
	 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
	 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
	 */
	
	function createWritableStdioStream (fd) {
	  var stream;
	  var tty_wrap = process.binding('tty_wrap');
	
	  // Note stream._type is used for test-module-load-list.js
	
	  switch (tty_wrap.guessHandleType(fd)) {
	    case 'TTY':
	      stream = new tty.WriteStream(fd);
	      stream._type = 'tty';
	
	      // Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    case 'FILE':
	      var fs = __webpack_require__(227);
	      stream = new fs.SyncWriteStream(fd, { autoClose: false });
	      stream._type = 'fs';
	      break;
	
	    case 'PIPE':
	    case 'TCP':
	      var net = __webpack_require__(405);
	      stream = new net.Socket({
	        fd: fd,
	        readable: false,
	        writable: true
	      });
	
	      // FIXME Should probably have an option in net.Socket to create a
	      // stream from an existing fd which is writable only. But for now
	      // we'll just add this hack and set the `readable` member to false.
	      // Test: ./node test/fixtures/echo.js < /etc/passwd
	      stream.readable = false;
	      stream.read = null;
	      stream._type = 'pipe';
	
	      // FIXME Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    default:
	      // Probably an error on in uv_guess_handle()
	      throw new Error('Implement me. Unknown stream file type!');
	  }
	
	  // For supporting legacy API we put the FD here.
	  stream.fd = fd;
	
	  stream._isStdio = true;
	
	  return stream;
	}
	
	/**
	 * Init logic for `debug` instances.
	 *
	 * Create a new `inspectOpts` object in case `useColors` is set
	 * differently for a particular `debug` instance.
	 */
	
	function init (debug) {
	  debug.inspectOpts = {};
	
	  var keys = Object.keys(exports.inspectOpts);
	  for (var i = 0; i < keys.length; i++) {
	    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	  }
	}
	
	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */
	
	exports.enable(load());


/***/ }),
/* 403 */
/***/ (function(module, exports) {

	module.exports = require("tty");

/***/ }),
/* 404 */
/***/ (function(module, exports) {

	module.exports = require("util");

/***/ }),
/* 405 */
/***/ (function(module, exports) {

	module.exports = require("net");

/***/ }),
/* 406 */
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(286);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SEO = function (_Component) {
	  _inherits(SEO, _Component);
	
	  function SEO() {
	    _classCallCheck(this, SEO);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  SEO.prototype.render = function render() {
	    var _props = this.props,
	        postNode = _props.postNode,
	        postPath = _props.postPath,
	        postSEO = _props.postSEO;
	
	    var title = void 0;
	    var description = void 0;
	    var image = void 0;
	    var postURL = void 0;
	    if (postSEO) {
	      var postMeta = postNode.frontmatter;
	      title = postMeta.title;
	      description = postMeta.description ? postMeta.description : postNode.excerpt;
	      image = postMeta.cover;
	      postURL = _SiteConfig2.default.siteUrl + _SiteConfig2.default.pathPrefix + postPath;
	    } else {
	      title = _SiteConfig2.default.siteTitle;
	      description = _SiteConfig2.default.siteDescription;
	      image = _SiteConfig2.default.siteLogo;
	    }
	    var realPrefix = _SiteConfig2.default.pathPrefix === "/" ? "" : _SiteConfig2.default.pathPrefix;
	    image = _SiteConfig2.default.siteUrl + realPrefix + image;
	    var blogURL = _SiteConfig2.default.siteUrl + _SiteConfig2.default.pathPrefix;
	    var schemaOrgJSONLD = [{
	      "@context": "http://schema.org",
	      "@type": "WebSite",
	      url: blogURL,
	      name: title,
	      alternateName: _SiteConfig2.default.siteTitleAlt ? _SiteConfig2.default.siteTitleAlt : ""
	    }];
	    if (postSEO) {
	      schemaOrgJSONLD.push([{
	        "@context": "http://schema.org",
	        "@type": "BreadcrumbList",
	        itemListElement: [{
	          "@type": "ListItem",
	          position: 1,
	          item: {
	            "@id": postURL,
	            name: title,
	            image: image
	          }
	        }]
	      }, {
	        "@context": "http://schema.org",
	        "@type": "BlogPosting",
	        url: blogURL,
	        name: title,
	        alternateName: _SiteConfig2.default.siteTitleAlt ? _SiteConfig2.default.siteTitleAlt : "",
	        headline: title,
	        image: {
	          "@type": "ImageObject",
	          url: image
	        },
	        description: description
	      }]);
	    }
	    return _react2.default.createElement(
	      _reactHelmet2.default,
	      null,
	      _react2.default.createElement("meta", { name: "description", content: description }),
	      _react2.default.createElement("meta", { name: "image", content: image }),
	      _react2.default.createElement(
	        "script",
	        { type: "application/ld+json" },
	        JSON.stringify(schemaOrgJSONLD)
	      ),
	      _react2.default.createElement("meta", { property: "og:url", content: postSEO ? postURL : blogURL }),
	      postSEO ? _react2.default.createElement("meta", { property: "og:type", content: "article" }) : null,
	      _react2.default.createElement("meta", { property: "og:title", content: title }),
	      _react2.default.createElement("meta", { property: "og:description", content: description }),
	      _react2.default.createElement("meta", { property: "og:image", content: image }),
	      _react2.default.createElement("meta", {
	        property: "fb:app_id",
	        content: _SiteConfig2.default.siteFBAppID ? _SiteConfig2.default.siteFBAppID : ""
	      }),
	      _react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
	      _react2.default.createElement("meta", {
	        name: "twitter:creator",
	        content: _SiteConfig2.default.userTwitter ? _SiteConfig2.default.userTwitter : ""
	      }),
	      _react2.default.createElement("meta", { name: "twitter:title", content: title }),
	      _react2.default.createElement("meta", { name: "twitter:description", content: description }),
	      _react2.default.createElement("meta", { name: "twitter:image", content: image })
	    );
	  };
	
	  return SEO;
	}(_react.Component);
	
	exports.default = SEO;
	module.exports = exports["default"];

/***/ }),
/* 408 */
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),
/* 409 */
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(286);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _PostListing = __webpack_require__(411);
	
	var _PostListing2 = _interopRequireDefault(_PostListing);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagTemplate = function (_React$Component) {
	  _inherits(TagTemplate, _React$Component);
	
	  function TagTemplate() {
	    _classCallCheck(this, TagTemplate);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  TagTemplate.prototype.render = function render() {
	    var tag = this.props.pathContext.tag;
	    var postEdges = this.props.data.allMarkdownRemark.edges;
	    return _react2.default.createElement(
	      "div",
	      { className: "tag-container" },
	      _react2.default.createElement(_reactHelmet2.default, { title: "Posts tagged as \"" + tag + "\" | " + _SiteConfig2.default.siteTitle }),
	      _react2.default.createElement(_PostListing2.default, { postEdges: postEdges })
	    );
	  };
	
	  return TagTemplate;
	}(_react2.default.Component);
	
	/* eslint no-undef: "off"*/
	
	
	exports.default = TagTemplate;
	var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(349);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PostListing = function (_React$Component) {
	  _inherits(PostListing, _React$Component);
	
	  function PostListing() {
	    _classCallCheck(this, PostListing);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  PostListing.prototype.getPostList = function getPostList() {
	    var postList = [];
	    this.props.postEdges.forEach(function (postEdge) {
	      postList.push({
	        path: postEdge.node.fields.slug,
	        tags: postEdge.node.frontmatter.tags,
	        cover: postEdge.node.frontmatter.cover,
	        title: postEdge.node.frontmatter.title,
	        date: postEdge.node.frontmatter.date,
	        excerpt: postEdge.node.excerpt,
	        timeToRead: postEdge.node.timeToRead
	      });
	    });
	    return postList;
	  };
	
	  PostListing.prototype.render = function render() {
	    var postList = this.getPostList();
	    return _react2.default.createElement(
	      "div",
	      null,
	      /* Your post list here. */
	      postList.map(function (post) {
	        return _react2.default.createElement(
	          _gatsbyLink2.default,
	          { to: post.path, key: post.title },
	          _react2.default.createElement(
	            "h1",
	            null,
	            post.title
	          )
	        );
	      })
	    );
	  };
	
	  return PostListing;
	}(_react2.default.Component);
	
	exports.default = PostListing;
	module.exports = exports["default"];

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(286);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _PostListing = __webpack_require__(411);
	
	var _PostListing2 = _interopRequireDefault(_PostListing);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoryTemplate = function (_React$Component) {
	  _inherits(CategoryTemplate, _React$Component);
	
	  function CategoryTemplate() {
	    _classCallCheck(this, CategoryTemplate);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  CategoryTemplate.prototype.render = function render() {
	    var category = this.props.pathContext.category;
	    var postEdges = this.props.data.allMarkdownRemark.edges;
	    return _react2.default.createElement(
	      "div",
	      { className: "category-container" },
	      _react2.default.createElement(_reactHelmet2.default, {
	        title: "Posts in category \"" + category + "\" | " + _SiteConfig2.default.siteTitle
	      }),
	      _react2.default.createElement(_PostListing2.default, { postEdges: postEdges })
	    );
	  };
	
	  return CategoryTemplate;
	}(_react2.default.Component);
	
	/* eslint no-undef: "off"*/
	
	
	exports.default = CategoryTemplate;
	var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(286);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _About = __webpack_require__(414);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AboutPage = function (_Component) {
	  _inherits(AboutPage, _Component);
	
	  function AboutPage() {
	    _classCallCheck(this, AboutPage);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  AboutPage.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "about-container" },
	      _react2.default.createElement(_reactHelmet2.default, { title: "About | " + _SiteConfig2.default.siteTitle }),
	      _react2.default.createElement(_About2.default, null)
	    );
	  };
	
	  return AboutPage;
	}(_react.Component);
	
	exports.default = AboutPage;
	module.exports = exports["default"];

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(415);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_Component) {
	  _inherits(About, _Component);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  About.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "about" },
	      _react2.default.createElement(
	        "h1",
	        null,
	        "Edit About component or pages/about.jsx to include your information."
	      )
	    );
	  };
	
	  return About;
	}(_react.Component);
	
	exports.default = About;
	module.exports = exports["default"];

/***/ }),
/* 415 */
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(286);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _PostListing = __webpack_require__(411);
	
	var _PostListing2 = _interopRequireDefault(_PostListing);
	
	var _SEO = __webpack_require__(407);
	
	var _SEO2 = _interopRequireDefault(_SEO);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = function (_React$Component) {
	  _inherits(Index, _React$Component);
	
	  function Index() {
	    _classCallCheck(this, Index);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Index.prototype.render = function render() {
	    var postEdges = this.props.data.allMarkdownRemark.edges;
	    return _react2.default.createElement(
	      "div",
	      { className: "index-container" },
	      _react2.default.createElement(_reactHelmet2.default, { title: _SiteConfig2.default.siteTitle }),
	      _react2.default.createElement(_SEO2.default, { postEdges: postEdges }),
	      _react2.default.createElement(_PostListing2.default, { postEdges: postEdges })
	    );
	  };
	
	  return Index;
	}(_react2.default.Component);
	
	exports.default = Index;
	
	/* eslint no-undef: "off"*/
	
	var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ }),
/* 417 */
/***/ (function(module, exports) {

	module.exports = {
		"layoutContext": {}
	};

/***/ }),
/* 418 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {}
	};

/***/ }),
/* 419 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/the-butterfly-of-the-edge"
		}
	};

/***/ }),
/* 420 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/the-fairys-witches"
		}
	};

/***/ }),
/* 421 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/birch-in-the-roses"
		}
	};

/***/ }),
/* 422 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/big-test"
		}
	};

/***/ }),
/* 423 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/angels-of-mist"
		}
	};

/***/ }),
/* 424 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/bold-mage"
		}
	};

/***/ }),
/* 425 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/the-fallen-time"
		}
	};

/***/ }),
/* 426 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"slug": "/random-project-4-with-super-long-title-phase-one"
		}
	};

/***/ }),
/* 427 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "programming"
		}
	};

/***/ }),
/* 428 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "more tags"
		}
	};

/***/ }),
/* 429 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "testing"
		}
	};

/***/ }),
/* 430 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "another one"
		}
	};

/***/ }),
/* 431 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "stuff"
		}
	};

/***/ }),
/* 432 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "other"
		}
	};

/***/ }),
/* 433 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "tag"
		}
	};

/***/ }),
/* 434 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "test"
		}
	};

/***/ }),
/* 435 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "huge"
		}
	};

/***/ }),
/* 436 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "cheese"
		}
	};

/***/ }),
/* 437 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "something"
		}
	};

/***/ }),
/* 438 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "tagging"
		}
	};

/***/ }),
/* 439 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"tag": "say hi"
		}
	};

/***/ }),
/* 440 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"category": "tech"
		}
	};

/***/ }),
/* 441 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"category": "something"
		}
	};

/***/ }),
/* 442 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"category": "moar"
		}
	};

/***/ }),
/* 443 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"category": "test3"
		}
	};

/***/ }),
/* 444 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"category": "another one"
		}
	};

/***/ }),
/* 445 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {
			"category": "random"
		}
	};

/***/ }),
/* 446 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {}
	};

/***/ }),
/* 447 */
/***/ (function(module, exports) {

	module.exports = {
		"pathContext": {}
	};

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(449);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__(417);
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(286);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _SiteConfig = __webpack_require__(347);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	__webpack_require__(450);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MainLayout = function (_React$Component) {
	  _inherits(MainLayout, _React$Component);
	
	  function MainLayout() {
	    _classCallCheck(this, MainLayout);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  MainLayout.prototype.getLocalTitle = function getLocalTitle() {
	    function capitalize(string) {
	      return string.charAt(0).toUpperCase() + string.slice(1);
	    }
	    var pathPrefix = _SiteConfig2.default.pathPrefix ? _SiteConfig2.default.pathPrefix : "/";
	    var currentPath = this.props.location.pathname.replace(pathPrefix, "").replace("/", "");
	    var title = "";
	    if (currentPath === "") {
	      title = "Home";
	    } else if (currentPath === "tags/") {
	      title = "Tags";
	    } else if (currentPath === "categories/") {
	      title = "Categories";
	    } else if (currentPath === "about/") {
	      title = "About";
	    } else if (currentPath.includes("posts")) {
	      title = "Article";
	    } else if (currentPath.includes("tags/")) {
	      var tag = currentPath.replace("tags/", "").replace("/", "").replace("-", " ");
	      title = "Tagged in " + capitalize(tag);
	    } else if (currentPath.includes("categories/")) {
	      var category = currentPath.replace("categories/", "").replace("/", "").replace("-", " ");
	      title = "" + capitalize(category);
	    }
	    return title;
	  };
	
	  MainLayout.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        _reactHelmet2.default,
	        null,
	        _react2.default.createElement(
	          "title",
	          null,
	          _SiteConfig2.default.siteTitle + " |  " + this.getLocalTitle()
	        ),
	        _react2.default.createElement("meta", { name: "description", content: _SiteConfig2.default.siteDescription })
	      ),
	      children()
	    );
	  };
	
	  return MainLayout;
	}(_react2.default.Component);
	
	exports.default = MainLayout;
	module.exports = exports["default"];

/***/ }),
/* 450 */
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),
/* 451 */
/***/ (function(module, exports) {

	"use strict";
	
	// This module is also copied into the .cache directory some modules copied there
	// from cache-dir can also use this module.
	
	module.exports = function (moduleName, err) {
	  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
	  var firstLine = err.toString().split("\n")[0];
	  return regex.test(firstLine);
	};
	//# sourceMappingURL=test-require-error.js.map

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _favicon = __webpack_require__(453);
	
	var _favicon2 = _interopRequireDefault(_favicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint import/no-unresolved:"off" */
	/* eslint import/extensions:"off" */
	/* eslint global-require:"off" */
	
	
	var inlinedStyles = "";
	if (true) {
	  try {
	    /* eslint import/no-webpack-loader-syntax: off */
	    inlinedStyles = __webpack_require__(454);
	  } catch (e) {
	    /* eslint no-console: "off"*/
	    console.log(e);
	  }
	}
	
	var HTML = function (_React$Component) {
	  _inherits(HTML, _React$Component);
	
	  function HTML() {
	    _classCallCheck(this, HTML);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  HTML.prototype.render = function render() {
	    var css = void 0;
	    if (true) {
	      css = _react2.default.createElement("style", {
	        id: "gatsby-inlined-css",
	        dangerouslySetInnerHTML: { __html: inlinedStyles }
	      });
	    }
	    return _react2.default.createElement(
	      "html",
	      { lang: "en" },
	      _react2.default.createElement(
	        "head",
	        null,
	        _react2.default.createElement("meta", { charSet: "utf-8" }),
	        _react2.default.createElement("meta", {
	          name: "viewport",
	          content: "width=device-width, initial-scale=1.0"
	        }),
	        this.props.headComponents,
	        _react2.default.createElement("link", { rel: "shortcut icon", href: _favicon2.default }),
	        css
	      ),
	      _react2.default.createElement(
	        "body",
	        null,
	        _react2.default.createElement("div", {
	          id: "___gatsby",
	          dangerouslySetInnerHTML: { __html: this.props.body }
	        }),
	        this.props.postBodyComponents
	      )
	    );
	  };
	
	  return HTML;
	}(_react2.default.Component);
	
	exports.default = HTML;
	module.exports = exports["default"];

/***/ }),
/* 453 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,Li4vc3RhdGljL2xvZ29zL2xvZ28tNDgucG5n"

/***/ }),
/* 454 */
/***/ (function(module, exports) {

	module.exports = ".social-links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px 0}.social-links>div{margin:5px 15px}.share-count{text-align:center}code[class*=language-],pre[class*=language-]{font-family:Consolas,Menlo,Monaco,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Courier New,Courier,monospace;font-size:14px;line-height:1.375;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;background:#1d1f21;color:#c5c8c6}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b4b7b4}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b4b7b4}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#969896}.token.punctuation{color:#c5c8c6}.token.namespace{opacity:.7}.token.boolean,.token.number,.token.operator{color:#de935f}.token.property{color:#f0c674}.token.tag{color:#81a2be}.token.string{color:#8abeb7}.token.selector{color:#b294bb}.token.attr-name{color:#de935f}.language-css .token.string,.style .token.string,.token.entity,.token.url{color:#8abeb7}.token.attr-value,.token.control,.token.directive,.token.keyword,.token.unit{color:#b5bd68}.token.atrule,.token.regex,.token.statement{color:#8abeb7}.token.placeholder,.token.variable{color:#81a2be}.token.deleted{text-decoration:line-through}.token.inserted{border-bottom:1px dotted #fff;text-decoration:none}.token.italic{font-style:italic}.token.bold,.token.important{font-weight:700}.token.important{color:#c66}.token.entity{cursor:help}pre>code.highlight{outline:.4em solid #c66;outline-offset:.4em}.post-meta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.about{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:300px}*{box-sizing:border-box}html{height:100%}body{margin:0;padding:20px}"

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(120);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stylesStr = void 0;
	if (true) {
	  try {
	    stylesStr = __webpack_require__(454);
	  } catch (e) {
	    console.log(e);
	  }
	}
	
	module.exports = function (_React$Component) {
	  _inherits(HTML, _React$Component);
	
	  function HTML() {
	    _classCallCheck(this, HTML);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  HTML.prototype.render = function render() {
	    var css = void 0;
	    if (true) {
	      css = _react2.default.createElement("style", {
	        id: "gatsby-inlined-css",
	        dangerouslySetInnerHTML: { __html: stylesStr }
	      });
	    }
	    return _react2.default.createElement(
	      "html",
	      null,
	      _react2.default.createElement(
	        "head",
	        null,
	        _react2.default.createElement("meta", { charSet: "utf-8" }),
	        _react2.default.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
	        _react2.default.createElement("meta", {
	          name: "viewport",
	          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
	        }),
	        this.props.headComponents,
	        css
	      ),
	      _react2.default.createElement(
	        "body",
	        null,
	        this.props.preBodyComponents,
	        _react2.default.createElement("div", {
	          key: "body",
	          id: "___gatsby",
	          dangerouslySetInnerHTML: { __html: this.props.body }
	        }),
	        this.props.postBodyComponents
	      )
	    );
	  };
	
	  return HTML;
	}(_react2.default.Component);

/***/ }),
/* 456 */
/***/ (function(module, exports) {

	module.exports = "{\"231608221292675\":\"app-6018523b2f087ac9e14f.js\",\"99219681209289\":\"component---node-modules-gatsby-plugin-offline-app-shell-js-f2981d21be31b3663cca.js\",\"213130420965792\":\"component---src-templates-post-jsx-cb0a318723cf5676a5f1.js\",\"183400410456155\":\"component---src-templates-tag-jsx-6d724a4bbcff12c3ea7c.js\",\"129745722219136\":\"component---src-templates-category-jsx-3a50fee79b9519c47f96.js\",\"144251824217401\":\"component---src-pages-about-jsx-16dca089dee574aef9ce.js\",\"213534597649335\":\"component---src-pages-index-jsx-cb83da5746d9129c5bb8.js\",\"60335399758886\":\"path----6611940bd40871b680a6.js\",\"210333531512890\":\"path---offline-plugin-app-shell-fallback-586c7e095e534a3909ec.js\",\"22820678339136\":\"path---the-butterfly-of-the-edge-3e898eeceaa02787fe10.js\",\"184085170519567\":\"path---the-fairys-witches-8367cc203e488b8b5555.js\",\"73939936618060\":\"path---birch-in-the-roses-3a1ffa0c4972c7d2cf17.js\",\"234139094121406\":\"path---big-test-f0ac84a19efe6eab39fd.js\",\"175519297615866\":\"path---angels-of-mist-36d4f2b748fc10b181c5.js\",\"105111072004575\":\"path---bold-mage-caede64dce90be655514.js\",\"236000940153259\":\"path---the-fallen-time-836e9011310e91952a39.js\",\"33042797743989\":\"path---random-project-4-with-super-long-title-phase-one-e74e69c4913bbd8d774a.js\",\"20956934260092\":\"path---tags-programming-4e47ac43b570cb47a9f6.js\",\"31698914519776\":\"path---tags-more-tags-6f42db8115790233d86d.js\",\"79338355588033\":\"path---tags-testing-9014d0dd74e9719f24e2.js\",\"142539347838512\":\"path---tags-another-one-4e359a77928232afc7bb.js\",\"272782859784532\":\"path---tags-stuff-367f67b8c35dfc2fe3dd.js\",\"14863978932908\":\"path---tags-other-b516fa43adb4b7be10b7.js\",\"109702764274841\":\"path---tags-tag-4b9f1698bcc67bdc2496.js\",\"267260487189813\":\"path---tags-test-0717268e7312e2cf9509.js\",\"265345286720286\":\"path---tags-huge-de50a4c005594c6d4b42.js\",\"65611441667662\":\"path---tags-cheese-8a551063c8867e48c5de.js\",\"224301460675987\":\"path---tags-something-2b06d3bdfd3cc26bc63e.js\",\"160137308973070\":\"path---tags-tagging-dc113311aa9cc3b92d05.js\",\"237822477864458\":\"path---tags-say-hi-360293307329377757f5.js\",\"86242794778721\":\"path---categories-tech-fd779905ef06eac75905.js\",\"107802946902665\":\"path---categories-something-f84b11a3205bdd563ef4.js\",\"73254467154745\":\"path---categories-moar-3a727e1f3809e808d80f.js\",\"84311424391466\":\"path---categories-test-3-01195bfc91f6221fface.js\",\"142014954856432\":\"path---categories-another-one-76189a344bb825294436.js\",\"198990956336557\":\"path---categories-random-8bc8bcdec8d86a5ee2e5.js\",\"273950069227526\":\"path---about-586c7e095e534a3909ec.js\",\"142629428675168\":\"path---index-586c7e095e534a3909ec.js\",\"79611799117203\":\"component---src-layouts-index-jsx-d29675e34142c4de4575.js\"}"

/***/ }),
/* 457 */
/***/ (function(module, exports) {

	module.exports = {
		"assetsByChunkName": {
			"path---tags-other": [
				"path---tags-other-b516fa43adb4b7be10b7.js",
				"path---tags-other-b516fa43adb4b7be10b7.js.map"
			],
			"path---tags-programming": [
				"path---tags-programming-4e47ac43b570cb47a9f6.js",
				"path---tags-programming-4e47ac43b570cb47a9f6.js.map"
			],
			"path---the-butterfly-of-the-edge": [
				"path---the-butterfly-of-the-edge-3e898eeceaa02787fe10.js",
				"path---the-butterfly-of-the-edge-3e898eeceaa02787fe10.js.map"
			],
			"path---tags-more-tags": [
				"path---tags-more-tags-6f42db8115790233d86d.js",
				"path---tags-more-tags-6f42db8115790233d86d.js.map"
			],
			"path---random-project-4-with-super-long-title-phase-one": [
				"path---random-project-4-with-super-long-title-phase-one-e74e69c4913bbd8d774a.js",
				"path---random-project-4-with-super-long-title-phase-one-e74e69c4913bbd8d774a.js.map"
			],
			"path---": [
				"path----6611940bd40871b680a6.js",
				"path----6611940bd40871b680a6.js.map"
			],
			"path---tags-cheese": [
				"path---tags-cheese-8a551063c8867e48c5de.js",
				"path---tags-cheese-8a551063c8867e48c5de.js.map"
			],
			"path---categories-moar": [
				"path---categories-moar-3a727e1f3809e808d80f.js",
				"path---categories-moar-3a727e1f3809e808d80f.js.map"
			],
			"path---birch-in-the-roses": [
				"path---birch-in-the-roses-3a1ffa0c4972c7d2cf17.js",
				"path---birch-in-the-roses-3a1ffa0c4972c7d2cf17.js.map"
			],
			"path---tags-testing": [
				"path---tags-testing-9014d0dd74e9719f24e2.js",
				"path---tags-testing-9014d0dd74e9719f24e2.js.map"
			],
			"component---src-layouts-index-jsx": [
				"component---src-layouts-index-jsx-d29675e34142c4de4575.js",
				"component---src-layouts-index-jsx-d29675e34142c4de4575.js.map"
			],
			"path---categories-test-3": [
				"path---categories-test-3-01195bfc91f6221fface.js",
				"path---categories-test-3-01195bfc91f6221fface.js.map"
			],
			"path---categories-tech": [
				"path---categories-tech-fd779905ef06eac75905.js",
				"path---categories-tech-fd779905ef06eac75905.js.map"
			],
			"component---node-modules-gatsby-plugin-offline-app-shell-js": [
				"component---node-modules-gatsby-plugin-offline-app-shell-js-f2981d21be31b3663cca.js",
				"component---node-modules-gatsby-plugin-offline-app-shell-js-f2981d21be31b3663cca.js.map"
			],
			"path---bold-mage": [
				"path---bold-mage-caede64dce90be655514.js",
				"path---bold-mage-caede64dce90be655514.js.map"
			],
			"path---categories-something": [
				"path---categories-something-f84b11a3205bdd563ef4.js",
				"path---categories-something-f84b11a3205bdd563ef4.js.map"
			],
			"path---tags-tag": [
				"path---tags-tag-4b9f1698bcc67bdc2496.js",
				"path---tags-tag-4b9f1698bcc67bdc2496.js.map"
			],
			"component---src-templates-category-jsx": [
				"component---src-templates-category-jsx-3a50fee79b9519c47f96.js",
				"component---src-templates-category-jsx-3a50fee79b9519c47f96.js.map"
			],
			"path---categories-another-one": [
				"path---categories-another-one-76189a344bb825294436.js",
				"path---categories-another-one-76189a344bb825294436.js.map"
			],
			"path---tags-another-one": [
				"path---tags-another-one-4e359a77928232afc7bb.js",
				"path---tags-another-one-4e359a77928232afc7bb.js.map"
			],
			"path---index": [
				"path---index-586c7e095e534a3909ec.js",
				"path---index-586c7e095e534a3909ec.js.map"
			],
			"component---src-pages-about-jsx": [
				"component---src-pages-about-jsx-16dca089dee574aef9ce.js",
				"component---src-pages-about-jsx-16dca089dee574aef9ce.js.map"
			],
			"path---tags-tagging": [
				"path---tags-tagging-dc113311aa9cc3b92d05.js",
				"path---tags-tagging-dc113311aa9cc3b92d05.js.map"
			],
			"commons": [
				"commons-0820d5e8324342ec1e2e.js",
				"build-js-styles.css",
				"commons-0820d5e8324342ec1e2e.js.map",
				"build-js-styles.css.map"
			],
			"path---angels-of-mist": [
				"path---angels-of-mist-36d4f2b748fc10b181c5.js",
				"path---angels-of-mist-36d4f2b748fc10b181c5.js.map"
			],
			"component---src-templates-tag-jsx": [
				"component---src-templates-tag-jsx-6d724a4bbcff12c3ea7c.js",
				"component---src-templates-tag-jsx-6d724a4bbcff12c3ea7c.js.map"
			],
			"path---the-fairys-witches": [
				"path---the-fairys-witches-8367cc203e488b8b5555.js",
				"path---the-fairys-witches-8367cc203e488b8b5555.js.map"
			],
			"path---categories-random": [
				"path---categories-random-8bc8bcdec8d86a5ee2e5.js",
				"path---categories-random-8bc8bcdec8d86a5ee2e5.js.map"
			],
			"path---offline-plugin-app-shell-fallback": [
				"path---offline-plugin-app-shell-fallback-586c7e095e534a3909ec.js",
				"path---offline-plugin-app-shell-fallback-586c7e095e534a3909ec.js.map"
			],
			"component---src-templates-post-jsx": [
				"component---src-templates-post-jsx-cb0a318723cf5676a5f1.js",
				"component---src-templates-post-jsx-cb0a318723cf5676a5f1.js.map"
			],
			"component---src-pages-index-jsx": [
				"component---src-pages-index-jsx-cb83da5746d9129c5bb8.js",
				"component---src-pages-index-jsx-cb83da5746d9129c5bb8.js.map"
			],
			"path---tags-something": [
				"path---tags-something-2b06d3bdfd3cc26bc63e.js",
				"path---tags-something-2b06d3bdfd3cc26bc63e.js.map"
			],
			"app": [
				"app-6018523b2f087ac9e14f.js",
				"build-js-styles.css",
				"app-6018523b2f087ac9e14f.js.map",
				"build-js-styles.css.map"
			],
			"path---big-test": [
				"path---big-test-f0ac84a19efe6eab39fd.js",
				"path---big-test-f0ac84a19efe6eab39fd.js.map"
			],
			"path---the-fallen-time": [
				"path---the-fallen-time-836e9011310e91952a39.js",
				"path---the-fallen-time-836e9011310e91952a39.js.map"
			],
			"path---tags-say-hi": [
				"path---tags-say-hi-360293307329377757f5.js",
				"path---tags-say-hi-360293307329377757f5.js.map"
			],
			"path---tags-huge": [
				"path---tags-huge-de50a4c005594c6d4b42.js",
				"path---tags-huge-de50a4c005594c6d4b42.js.map"
			],
			"path---tags-test": [
				"path---tags-test-0717268e7312e2cf9509.js",
				"path---tags-test-0717268e7312e2cf9509.js.map"
			],
			"path---tags-stuff": [
				"path---tags-stuff-367f67b8c35dfc2fe3dd.js",
				"path---tags-stuff-367f67b8c35dfc2fe3dd.js.map"
			],
			"path---about": [
				"path---about-586c7e095e534a3909ec.js",
				"path---about-586c7e095e534a3909ec.js.map"
			]
		}
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=render-page.js.map