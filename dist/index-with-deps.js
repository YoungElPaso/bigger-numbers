(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["biggerNumbers"] = factory();
	else
		root["biggerNumbers"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _skatejs = __webpack_require__(1);
	
	var _rendererPreact = __webpack_require__(2);
	
	var _rendererPreact2 = _interopRequireDefault(_rendererPreact);
	
	var _preact = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx h */
	// Main file for bigger-numbers component.
	
	// Import Skate.js for component building.
	
	
	// Import withPreact as the renderer.
	
	
	// Import Preact.
	
	
	var BigNumber = function (_withComponent) {
	  _inherits(BigNumber, _withComponent);
	
	  function BigNumber() {
	    _classCallCheck(this, BigNumber);
	
	    return _possibleConstructorReturn(this, (BigNumber.__proto__ || Object.getPrototypeOf(BigNumber)).apply(this, arguments));
	  }
	
	  _createClass(BigNumber, [{
	    key: "render",
	    value: function render(_ref) {
	      var name = _ref.name;
	
	      return (0, _preact.h)(
	        "div",
	        null,
	        name
	      );
	    }
	  }]);
	
	  return BigNumber;
	}((0, _skatejs.withComponent)((0, _rendererPreact2.default)()));
	
	BigNumber.props = {
	  name: _skatejs.props.string
	};
	
	
	customElements.define("big-number", BigNumber);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.skate = {})));
	}(this, (function (exports) { 'use strict';
	
	function define(Ctor) {
	  var registry = customElements;
	  var is = Ctor.is;
	  if (!registry.get(is)) {
	    registry.define(is, Ctor);
	  }
	  return Ctor;
	}
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var defs = {
	  bubbles: true,
	  cancelable: true,
	  composed: false
	};
	
	function emit(elem, name, opts) {
	  opts = _extends({}, defs, opts);
	  var e = void 0;
	  if ('composed' in CustomEvent.prototype) {
	    e = new CustomEvent(name, opts);
	  } else {
	    e = document.createEvent('CustomEvent');
	    e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
	    Object.defineProperty(e, 'composed', { value: opts.composed });
	  }
	  return elem.dispatchEvent(e);
	}
	
	function getValue(elem) {
	  var checked = elem.checked,
	      type = elem.type,
	      value = elem.value;
	
	  if (type === 'checkbox' || type === 'radio') {
	    return checked ? value || true : false;
	  }
	  return value;
	}
	
	function link(elem, target) {
	  return function (e) {
	    // TODO revisit once all browsers have native support.
	    //
	    // We fallback to checking the composed path. Unfortunately this behaviour
	    // is difficult to impossible to reproduce as it seems to be a possible
	    // quirk in the shadydom polyfill that incorrectly returns null for the
	    var localTarget = e.target || e.composedPath && e.composedPath()[0];
	    var value = getValue(localTarget);
	    var localTargetName = target || localTarget.name || 'value';
	
	    if (localTargetName.indexOf('.') > -1) {
	      var parts = localTargetName.split('.');
	      var firstPart = parts[0];
	      var propName = parts.pop();
	      var obj = parts.reduce(function (prev, curr) {
	        return prev[curr];
	      }, elem);
	
	      obj[propName || localTarget.name] = value;
	      elem[firstPart] = elem[firstPart];
	    } else {
	      elem[localTargetName] = value;
	    }
	  };
	}
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var withChildren = function withChildren() {
	  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    function _class() {
	      _classCallCheck(this, _class);
	
	      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	      key: "connectedCallback",
	      value: function connectedCallback() {
	        var _this2 = this;
	
	        if (_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "connectedCallback", this)) {
	          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "connectedCallback", this).call(this);
	        }
	        if (this.childrenChangedCallback) {
	          var mo = new MutationObserver(function () {
	            return _this2.childrenChangedCallback();
	          });
	          mo.observe(this, { childList: true });
	          this.childrenChangedCallback();
	        }
	      }
	    }]);
	
	    return _class;
	  }(Base);
	};
	
	var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Mo = typeof MutationObserver === 'function' ? MutationObserver : function () {
	  function _class2(func) {
	    _classCallCheck$2(this, _class2);
	
	    this.func = func;
	  }
	
	  _createClass$2(_class2, [{
	    key: 'observe',
	    value: function observe(node) {
	      var func = this.func;
	
	      var prop = {
	        set: function set() {
	          if (typeof Promise === 'undefined') {
	            setTimeout(func);
	          } else {
	            new Promise(function (resolve) {
	              return resolve();
	            }).then(func);
	          }
	        }
	      };
	      Object.defineProperty(node, 'textContent', prop);
	    }
	  }]);
	
	  return _class2;
	}();
	
	function dashCase(str) {
	  return str.split(/([_A-Z])/).reduce(function (one, two, idx) {
	    var dash = !one || idx % 2 === 0 ? '' : '-';
	    two = two === '_' ? '' : two;
	    return '' + one + dash + two.toLowerCase();
	  });
	}
	
	function debounce(cbFunc) {
	  var scheduled = false;
	  var i = 0;
	  var elem = document.createElement('span');
	  var observer = new Mo(function () {
	    cbFunc();
	    scheduled = false;
	  });
	
	  observer.observe(elem, { childList: true });
	
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      elem.textContent = '' + i;
	      i += 1;
	    }
	  };
	}
	
	var empty = function empty(val) {
	  return val == null;
	};
	
	function keys(obj) {
	  obj = obj || {};
	  var names = Object.getOwnPropertyNames(obj);
	  return Object.getOwnPropertySymbols ? names.concat(Object.getOwnPropertySymbols(obj)) : names;
	}
	
	function sym(description) {
	  return typeof Symbol === 'function' ? Symbol(description ? String(description) : undefined) : uniqueId(description);
	}
	
	function uniqueId(description) {
	  return (description ? String(description) : '') + 'xxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0;
	    var v = c === 'x' ? r : r & 0x3 | 0x8;
	    return v.toString(16);
	  });
	}
	
	var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function normaliseAttributeDefinition(name, prop) {
	  var attribute = prop.attribute;
	
	  var obj = (typeof attribute === "undefined" ? "undefined" : _typeof(attribute)) === "object" ? _extends$1({}, attribute) : {
	    source: attribute,
	    target: attribute
	  };
	  if (obj.source === true) {
	    obj.source = dashCase(name);
	  }
	  if (obj.target === true) {
	    obj.target = dashCase(name);
	  }
	  return obj;
	}
	
	function normalisePropertyDefinition(name, prop) {
	  var coerce = prop.coerce,
	      def = prop.default,
	      deserialize = prop.deserialize,
	      serialize = prop.serialize;
	
	  return {
	    attribute: normaliseAttributeDefinition(name, prop),
	    coerce: coerce || function (v) {
	      return v;
	    },
	    default: def,
	    deserialize: deserialize || function (v) {
	      return v;
	    },
	    serialize: serialize || function (v) {
	      return v;
	    }
	  };
	}
	
	function syncAttributeToProperty(elem, name, value) {
	  if (elem._syncingPropertyToAttribute) {
	    return;
	  }
	  var propDefs = elem.constructor.props;
	  for (var propName in propDefs) {
	    var _propDefs$propName = propDefs[propName],
	        source = _propDefs$propName.attribute.source,
	        deserialize = _propDefs$propName.deserialize;
	
	    if (source === name) {
	      elem._syncingAttributeToProperty = propName;
	      elem[propName] = value == null ? value : deserialize(value);
	      elem._syncingAttributeToProperty = null;
	    }
	  }
	}
	
	function syncPropertyToAttribute(elem, target, serialize, val) {
	  if (target && elem._syncingAttributeToProperty !== target) {
	    var serialized = serialize(val);
	    elem._syncingPropertyToAttribute = true;
	    if (serialized == null) {
	      elem.removeAttribute(target);
	    } else {
	      elem.setAttribute(target, serialized);
	    }
	    elem._syncingPropertyToAttribute = false;
	  }
	}
	
	var _get$1 = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function prop(definition) {
	  var propertyDefinition = definition || {};
	
	  // Allows decorators, or imperative definitions.
	  var func = function func(_ref, name) {
	    var constructor = _ref.constructor;
	
	    var normalised = normalisePropertyDefinition(name, propertyDefinition);
	    var _value = sym(name);
	
	    // Ensure that we can cache properties. We have to do this so the _props object literal doesn't modify parent
	    // classes or share the instance anywhere where it's not intended to be shared explicitly in userland code.
	    if (!constructor.hasOwnProperty('_props')) {
	      constructor._props = {};
	    }
	
	    // Cache the value so we can reference when syncing the attribute to the property.
	    constructor._props[name] = normalised;
	
	    if (normalised.attribute.source) {
	      constructor.observedAttributes = normalised.attribute.source;
	    }
	
	    Object.defineProperty(constructor.prototype, name, {
	      configurable: true,
	      get: function get() {
	        var val = this[_value];
	        return val == null ? normalised.default : val;
	      },
	      set: function set(val) {
	        this[_value] = normalised.coerce(val);
	        syncPropertyToAttribute(this, normalised.attribute.target, normalised.serialize, val);
	        this._updateDebounced();
	      }
	    });
	  };
	
	  // Allows easy extension of pre-defined props { ...prop(), ...{} }.
	  Object.keys(propertyDefinition).forEach(function (key) {
	    return func[key] = propertyDefinition[key];
	  });
	
	  return func;
	}
	
	var withProps = function withProps() {
	  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
	  return function (_Base) {
	    _inherits$1(_class2, _Base);
	
	    _createClass$1(_class2, [{
	      key: 'props',
	      get: function get() {
	        var _this2 = this;
	
	        return keys(this.constructor.props).reduce(function (prev, curr) {
	          prev[curr] = _this2[curr];
	          return prev;
	        }, {});
	      },
	      set: function set(props) {
	        var _this3 = this;
	
	        var ctorProps = this.constructor.props;
	        keys(props).forEach(function (k) {
	          return k in ctorProps && (_this3[k] = props[k]);
	        });
	      }
	    }], [{
	      key: 'observedAttributes',
	      get: function get() {
	        return this._observedAttributes || [];
	      },
	      set: function set(attrs) {
	        if (!this.hasOwnProperty('_observedAttributes')) {
	          this._observedAttributes = [];
	        }
	        this._observedAttributes = this.observedAttributes.concat(attrs);
	      }
	    }, {
	      key: 'props',
	      get: function get() {
	        return this._props || {};
	      },
	      set: function set(props) {
	        var _this4 = this;
	
	        keys(props).forEach(function (name) {
	          var func = props[name];
	          if (typeof func !== 'function') func = prop(func);
	          func({ constructor: _this4 }, name);
	        });
	      }
	    }]);
	
	    function _class2() {
	      _classCallCheck$1(this, _class2);
	
	      var _this = _possibleConstructorReturn$1(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));
	
	      _this._updateCallback = function () {
	        if (_this._updating || !_this._connected) {
	          return;
	        }
	
	        // Flag as rendering. This prevents anything from trying to render - or
	        // queueing a render - while there is a pending render.
	        _this._updating = true;
	
	        // Prev / next props for prop lifecycle callbacks.
	        var prev = _this._prevProps;
	        var next = _this._prevProps = _this.props;
	
	        // Always call set, but only call changed if the props updated.
	        if (_this.propsSetCallback) {
	          _this.propsSetCallback(next, prev);
	        }
	
	        // We only need to check if props have updated if we need to call the
	        // changed callback.
	        if (_this.propsChangedCallback && _this.propsUpdatedCallback(next, prev)) {
	          _this.propsChangedCallback(next, prev);
	        }
	
	        _this._updating = false;
	      };
	
	      if (_this._constructed) return _possibleConstructorReturn$1(_this);
	      _this._constructed = true;
	      _this._updateDebounced = debounce(_this._updateCallback);
	      return _this;
	    }
	
	    _createClass$1(_class2, [{
	      key: 'connectedCallback',
	      value: function connectedCallback() {
	        if (this._connected) return;
	        this._connected = true;
	        // $FlowFixMe - HTMLElement doesn't implement connectedCallback.
	        if (_get$1(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'connectedCallback', this)) _get$1(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'connectedCallback', this).call(this);
	        this._updateDebounced();
	      }
	    }, {
	      key: 'disconnectedCallback',
	      value: function disconnectedCallback() {
	        if (!this._connected) return;
	        this._connected = false;
	        // $FlowFixMe - HTMLElement doesn't implement disconnectedCallback.
	        if (_get$1(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'disconnectedCallback', this)) _get$1(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'disconnectedCallback', this).call(this);
	      }
	
	      // Called to see if the props changed.
	
	    }, {
	      key: 'propsUpdatedCallback',
	      value: function propsUpdatedCallback(next, prev) {
	        return !prev || keys(prev).some(function (k) {
	          return prev[k] !== next[k];
	        });
	      }
	    }, {
	      key: 'attributeChangedCallback',
	      value: function attributeChangedCallback(name, oldValue, newValue) {
	        if (_get$1(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'attributeChangedCallback', this))
	          // $FlowFixMe - HTMLElement doesn't implement attributeChangedCallback.
	          _get$1(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'attributeChangedCallback', this).call(this, name, oldValue, newValue);
	        syncAttributeToProperty(this, name, newValue);
	      }
	
	      // Invokes the complete render lifecycle.
	
	    }]);
	
	    return _class2;
	  }(Base);
	};
	
	var parse = JSON.parse;
	var stringify = JSON.stringify;
	
	var attribute = Object.freeze({ source: true });
	var zeroOrNumber = function zeroOrNumber(val) {
	  return empty(val) ? 0 : Number(val);
	};
	
	var any = prop({
	  attribute: attribute
	});
	
	var array = prop({
	  attribute: attribute,
	  coerce: function coerce(val) {
	    return Array.isArray(val) ? val : empty(val) ? null : [val];
	  },
	  default: Object.freeze([]),
	  deserialize: parse,
	  serialize: stringify
	});
	
	var boolean = prop({
	  attribute: attribute,
	  coerce: Boolean,
	  default: false,
	  deserialize: function deserialize(val) {
	    return !empty(val);
	  },
	  serialize: function serialize(val) {
	    return val ? '' : null;
	  }
	});
	
	var number = prop({
	  attribute: attribute,
	  default: 0,
	  coerce: zeroOrNumber,
	  deserialize: zeroOrNumber,
	  serialize: function serialize(val) {
	    return empty(val) ? null : String(Number(val));
	  }
	});
	
	var object = prop({
	  attribute: attribute,
	  default: Object.freeze({}),
	  deserialize: parse,
	  serialize: stringify
	});
	
	var string = prop({
	  attribute: attribute,
	  default: '',
	  coerce: String,
	  serialize: function serialize(val) {
	    return empty(val) ? null : String(val);
	  }
	});
	
	var props = {
	  any: any,
	  array: array,
	  boolean: boolean,
	  number: number,
	  object: object,
	  string: string
	};
	
	var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var attachShadowOptions = { mode: 'open' };
	
	function attachShadow(elem) {
	  return elem.attachShadow ? elem.attachShadow(attachShadowOptions) : elem;
	}
	
	var withRenderer = function withRenderer() {
	  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
	  return function (_Base) {
	    _inherits$2(_class2, _Base);
	
	    function _class2() {
	      _classCallCheck$3(this, _class2);
	
	      return _possibleConstructorReturn$2(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
	    }
	
	    _createClass$3(_class2, [{
	      key: 'propsChangedCallback',
	      value: function propsChangedCallback() {
	        var _this2 = this;
	
	        if (this.rendererCallback) {
	          this.rendererCallback(this.renderRoot, function () {
	            return _this2.renderCallback && _this2.renderCallback(_this2);
	          });
	        }
	
	        if (this.renderedCallback) {
	          this.renderedCallback();
	        }
	      }
	    }, {
	      key: 'renderRoot',
	      get: function get() {
	        return this._shadowRoot || (this._shadowRoot = this.shadowRoot || attachShadow(this));
	      }
	    }]);
	
	    return _class2;
	  }(Base);
	};
	
	var suffix = 0;
	
	function formatName(prefix, suffix) {
	  prefix = prefix || "element";
	  return (prefix.indexOf("-") === -1 ? "x-" + prefix : prefix) + (suffix ? "-" + suffix : "");
	}
	
	function generateName(Ctor) {
	  var registry = customElements;
	  var prefix = dashCase(Ctor.name);
	  while (registry.get(formatName(prefix, suffix))) {
	    suffix++;
	  }
	  return formatName(prefix, suffix++);
	}
	
	var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var withUnique = function withUnique() {
	  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
	  return function (_Base) {
	    _inherits$3(_class2, _Base);
	
	    function _class2() {
	      _classCallCheck$4(this, _class2);
	
	      return _possibleConstructorReturn$3(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
	    }
	
	    _createClass$4(_class2, null, [{
	      key: 'is',
	      get: function get() {
	        return this._is || (this._is = generateName(this));
	      },
	      set: function set(is) {
	        this._is = is;
	      }
	    }]);
	
	    return _class2;
	  }(Base);
	};
	
	var withComponent = function withComponent(Base) {
	  return withChildren(withProps(withRenderer(withUnique(Base || HTMLElement))));
	};
	
	exports.define = define;
	exports.emit = emit;
	exports.link = link;
	exports.withChildren = withChildren;
	exports.withComponent = withComponent;
	exports.prop = prop;
	exports.withProps = withProps;
	exports.props = props;
	exports.withRenderer = withRenderer;
	exports.withUnique = withUnique;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=index.js.map


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(3)) :
		typeof define === 'function' && define.amd ? define(['preact'], factory) :
		(global.skateRendererPreact = factory(global.Preact));
	}(this, (function (preact) { 'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/** @jsx h */
	
	var index = (function () {
	  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
	  return function (_Base) {
	    _inherits(_class, _Base);
	
	    function _class() {
	      _classCallCheck(this, _class);
	
	      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	      key: 'rendererCallback',
	      value: function rendererCallback(renderRoot, renderCallback) {
	        this._preactDom = preact.render(renderCallback(), renderRoot, this._preactDom || renderRoot.children[0]);
	      }
	    }, {
	      key: 'props',
	      get: function get() {
	        // We override props so that we can satisfy most use
	        // cases for children by using a slot.
	        return _extends({}, _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'props', this), { children: preact.h('slot', null) });
	      }
	    }]);
	
	    return _class;
	  }(Base);
	});
	
	return index;
	
	})));
	//# sourceMappingURL=index.js.map


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	!function() {
	    'use strict';
	    function VNode() {}
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && null != attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
	            if ('boolean' == typeof child) child = null;
	            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
	            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
	            lastSimple = simple;
	        }
	        var p = new VNode();
	        p.nodeName = nodeName;
	        p.children = children;
	        p.attributes = null == attributes ? void 0 : attributes;
	        p.key = null == attributes ? void 0 : attributes.key;
	        if (void 0 !== options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function enqueueRender(component) {
	        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p.__d) renderComponent(p);
	    }
	    function isSameNodeType(node, vnode, hydrating) {
	        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
	        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	    }
	    function getNodeProps(vnode) {
	        var props = extend({}, vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function createNode(nodeName, isSvg) {
	        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	        node.__n = nodeName;
	        return node;
	    }
	    function removeNode(node) {
	        var parentNode = node.parentNode;
	        if (parentNode) parentNode.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('key' === name) ; else if ('ref' === name) {
	            if (old) old(null);
	            if (value) value(node);
	        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html || '';
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var useCapture = name !== (name = name.replace(/Capture$/, ''));
	            name = name.toLowerCase().substring(2);
	            if (value) {
	                if (!old) node.addEventListener(name, eventProxy, useCapture);
	            } else node.removeEventListener(name, eventProxy, useCapture);
	            (node.__l || (node.__l = {}))[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || !1 === value) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
	            if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this.__l[e.type](options.event && options.event(e) || e);
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
	            hydrating = null != dom && !('__preactattr_' in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll, componentRoot) {
	        var out = dom, prevSvgMode = isSvgMode;
	        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
	        if ('string' == typeof vnode || 'number' == typeof vnode) {
	            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                out = document.createTextNode(vnode);
	                if (dom) {
	                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                    recollectNodeTree(dom, !0);
	                }
	            }
	            out.__preactattr_ = !0;
	            return out;
	        }
	        var vnodeName = vnode.nodeName;
	        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
	        vnodeName = String(vnodeName);
	        if (!dom || !isNamedNode(dom, vnodeName)) {
	            out = createNode(vnodeName, isSvgMode);
	            if (dom) {
	                while (dom.firstChild) out.appendChild(dom.firstChild);
	                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                recollectNodeTree(dom, !0);
	            }
	        }
	        var fc = out.firstChild, props = out.__preactattr_, vchildren = vnode.children;
	        if (null == props) {
	            props = out.__preactattr_ = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
	        diffAttributes(out, vnode.attributes, props);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
	        if (0 !== len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
	        }
	        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && void 0 !== keyed[key]) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
	                child = c;
	                children[j] = void 0;
	                if (j === childrenLen - 1) childrenLen--;
	                if (j === min) min++;
	                break;
	            }
	            child = idiff(child, vchild, context, mountAll);
	            f = originalChildren[i];
	            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
	        }
	        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
	        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component); else {
	            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
	            if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
	            removeChildren(node);
	        }
	    }
	    function removeChildren(node) {
	        node = node.lastChild;
	        while (node) {
	            var next = node.previousSibling;
	            recollectNodeTree(node, !0);
	            node = next;
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        var name;
	        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
	        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name;
	        (components[name] || (components[name] = [])).push(component);
	    }
	    function createComponent(Ctor, props, context) {
	        var inst, list = components[Ctor.name];
	        if (Ctor.prototype && Ctor.prototype.render) {
	            inst = new Ctor(props, context);
	            Component.call(inst, props, context);
	        } else {
	            inst = new Component(props, context);
	            inst.constructor = Ctor;
	            inst.render = doRender;
	        }
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.__b = list[i].__b;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function doRender(props, state, context) {
	        return this.constructor(props, context);
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component.__x) {
	            component.__x = !0;
	            if (component.__r = props.ref) delete props.ref;
	            if (component.__k = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.__c) component.__c = component.context;
	                component.context = context;
	            }
	            if (!component.__p) component.__p = component.props;
	            component.props = props;
	            component.__x = !1;
	            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__r) component.__r(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component.__x) {
	            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.__p = component.__s = component.__c = component.__b = null;
	            component.__d = !1;
	            if (!skip) {
	                rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if ('function' == typeof childComponent) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
	                        toUnmount = inst;
	                        component._component = inst = createComponent(childComponent, childProps, context);
	                        inst.__b = inst.__b || nextBase;
	                        inst.__u = component;
	                        setComponentProps(inst, childProps, 0, context, !1);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase, !1);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t.__u) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (originalComponent && !isDirectOwner) {
	                unmountComponent(originalComponent);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.__b) {
	                c.__b = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom, !1);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component.__x = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner); else if (base) {
	            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
	            component.__b = base;
	            removeNode(base);
	            collectComponent(component);
	            removeChildren(base);
	        }
	        if (component.__r) component.__r(null);
	    }
	    function Component(props, context) {
	        this.__d = !0;
	        this.context = context;
	        this.props = props;
	        this.state = this.state || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent, !1);
	    }
	    var options = {};
	    var stack = [];
	    var EMPTY_CHILDREN = [];
	    var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
	    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
	    var items = [];
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.__s) this.__s = extend({}, s);
	            extend(s, 'function' == typeof state ? state(s, this.props) : state);
	            if (callback) (this.__h = this.__h || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function(callback) {
	            if (callback) (this.__h = this.__h || []).push(callback);
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    var preact = {
	        h: h,
	        createElement: h,
	        cloneElement: cloneElement,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options
	    };
	    if (true) module.exports = preact; else self.preact = preact;
	}();
	//# sourceMappingURL=preact.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index-with-deps.js.map