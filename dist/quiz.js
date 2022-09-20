(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export MultiDrag [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Sortable [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Swap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "MultiDrag": () => /* binding */ MultiDragPlugin,
/* harmony export */   "Sortable": () => /* binding */ Sortable,
/* harmony export */   "Swap": () => /* binding */ SwapPlugin
/* harmony export */ });
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.14.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        folding = false; // Do not "unfold" after around dragEl if reverted

        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "./ts/adapters/choiceAdapter.ts":
/*!**************************************!*\
  !*** ./ts/adapters/choiceAdapter.ts ***!
  \**************************************/
/*! flagged exports */
/*! export ChoiceAdapter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoiceAdapter = void 0;
var choice_1 = __webpack_require__(/*! ../models/choice */ "./ts/models/choice.ts");
var choicesList_1 = __webpack_require__(/*! ../models/choicesList */ "./ts/models/choicesList.ts");
var quizModel_1 = __webpack_require__(/*! ../models/quizModel */ "./ts/models/quizModel.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var ChoiceAdapter = /** @class */ (function () {
    function ChoiceAdapter(mode, quizModel, element) {
        this._quizModel = quizModel;
        this._mode = mode;
        this._quizBodyDiv = element;
    }
    ChoiceAdapter.prototype.appendDragDiv = function (element, cssText) {
        if (cssText === void 0) { cssText = ""; }
        var dragDiv = utils_1.createElement("div", {}, ["col-1",]);
        var dragSign_ = utils_1.createElement("span", {}, ["fa", "fa-grip-vertical",]);
        dragSign_.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%); font-size:25px" + ";" + cssText;
        dragDiv.appendChild(dragSign_);
        element.appendChild(dragDiv);
    };
    ChoiceAdapter.prototype.appendSelectDiv = function (element, type, isChecked, isDisabled) {
        if (isChecked === void 0) { isChecked = false; }
        if (isDisabled === void 0) { isDisabled = false; }
        var selectDiv = utils_1.createElement("div", {}, ["col-1"]);
        var attrs = { "type": type, "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl" };
        if (isDisabled) {
            attrs["disabled"] = "true";
        }
        var radio = utils_1.createElement("input", attrs, []);
        radio.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height: 1.5rem;";
        if (isChecked) {
            radio.setAttribute("checked", "true");
        }
        selectDiv.appendChild(radio);
        element.appendChild(selectDiv);
        return selectDiv;
    };
    ChoiceAdapter.prototype.appendTextEditorDiv = function (index, row, text) {
        var textSpan = utils_1.createFormGroup(this._quizModel.id + "_choice_" + index, "Choice", "textarea", { "dir": "auto", }, "Choice " + index);
        textSpan.classList.add("col-9");
        if (text) {
            textSpan.querySelector(".form-control").value = text;
        }
        row.appendChild(textSpan);
    };
    ChoiceAdapter.prototype.appendTextViewerDiv = function (index, row, text, attrs, classes, style) {
        var _a;
        if (attrs === void 0) { attrs = {}; }
        if (classes === void 0) { classes = []; }
        if (style === void 0) { style = ""; }
        var textSpan = utils_1.createElement("div", {
            "id": this._quizModel.id + "_choice_" + index
        }, [], "");
        for (var key in attrs) {
            textSpan.setAttribute(key, attrs[key]);
        }
        (_a = textSpan.classList).add.apply(_a, classes);
        textSpan.style.cssText = textSpan.style.cssText + ";" + style;
        textSpan.innerText = text;
        row.appendChild(textSpan);
    };
    ChoiceAdapter.prototype.appendDelDiv = function (row, choiceEle) {
        var _this = this;
        var delDiv = utils_1.createElement("span", {}, ["col-1"]);
        var del = utils_1.createElement("button", { "type": "button" }, ["btn", "btn-danger",]);
        del.innerHTML = "<span><i class='fa fa-close ' ></i></span> ";
        del.style.cssText = "margin: 0; position: relative; top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);";
        del.onclick = function () {
            _this._quizBodyDiv.removeChild(choiceEle);
            _this.updateModel(_this._quizModel);
        };
        delDiv.appendChild(del);
        row.append(delDiv);
    };
    ChoiceAdapter.prototype.appendCorrectDiv = function (row, isChecked, isCorrect) {
        var correctDiv = utils_1.createElement("div", {}, ["col-1"]);
        if (isCorrect) {
            correctDiv.innerHTML = "<i class='fa fa-check' style=' font-size:1.5rem; color: aqua'></i>";
        }
        else if (isChecked) {
            correctDiv.innerHTML = "<i class='fa fa-close'  style=' font-size:1.5rem; color: red'></i>";
        }
        row.appendChild(correctDiv);
    };
    ChoiceAdapter.prototype.collectChoices = function () {
        var choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        var choicesList = new choicesList_1.ChoicesList(null);
        if (this._quizModel.type === quizModel_1.QUIZ_TYPES.SC || this._quizModel.type === quizModel_1.QUIZ_TYPES.MC || this._quizModel.type === quizModel_1.QUIZ_TYPES.SORT) {
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var text = c.getElementsByTagName("textarea")[0].value;
                var choice = new choice_1.Choice(x, text, null);
                choicesList.addChoice(choice);
            }
        }
        else if (this._quizModel.type === quizModel_1.QUIZ_TYPES.TF) {
            // empty choice list
        }
        return choicesList;
    };
    ChoiceAdapter.prototype.get_correct = function () {
        var choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        var correct = [];
        for (var x = 0; x < choices.length; x++) {
            var c = choices[x];
            var inputs = c.getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                if (input.getAttribute("role") === "choice-ctrl") {
                    if (input.checked) {
                        correct.push(x);
                    }
                }
            }
        }
        return correct;
    };
    ChoiceAdapter.prototype.appendEmptyChoice = function (text) {
        if (text === void 0) { text = ""; }
        throw "Not implemented Yet";
    };
    ChoiceAdapter.prototype.updateView = function () {
        throw new Error('Method not implemented.');
    };
    ChoiceAdapter.prototype.updateModel = function (_quizModel) {
        throw new Error('Method not implemented.');
    };
    return ChoiceAdapter;
}());
exports.ChoiceAdapter = ChoiceAdapter;


/***/ }),

/***/ "./ts/adapters/headerAdapter.ts":
/*!**************************************!*\
  !*** ./ts/adapters/headerAdapter.ts ***!
  \**************************************/
/*! flagged exports */
/*! export HeaderAdapter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderAdapter = void 0;
var quizHTML_1 = __webpack_require__(/*! ../quizHTML */ "./ts/quizHTML.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var HeaderAdapter = /** @class */ (function () {
    function HeaderAdapter(mode, model, element) {
        this._mode = mode;
        this._quizModel = model;
        this._headerDiv = element;
    }
    HeaderAdapter.prototype.updateView = function () {
        if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            this.updateAsEditor();
        }
        else {
            this.updateAsViewer();
        }
    };
    HeaderAdapter.prototype.updateAsEditor = function () {
        var ele = utils_1.createFormGroup(this._quizModel.id + "_title", "Quiz Title", "textarea", { "placeholder": "Quiz Title", "required": "true", "dir": "auto", }, "Write the Quiz Title here ...");
        this._quizTitleTextarea = ele.querySelector('.form-control');
        this._quizTitleTextarea.style.cssText = "width:100%";
        this._headerDiv.appendChild(ele);
        var ele = utils_1.createFormGroup(this._quizModel.id + "_hint", "Quiz Hint", "textarea", { "placeholder": "Quiz Hint", "dir": "auto", }, "Optional: Write the Quiz Hint here ( Text to help the student ) ...");
        this._quizHintArea = ele.querySelector(".form-control");
        this._quizHintArea.classList.add("text-muted");
        this._quizHintArea.style.cssText = "width:100%";
        this._headerDiv.appendChild(ele);
        if (this._quizModel.title) {
            this._quizTitleTextarea.value = this._quizModel.title;
        }
        if (this._quizModel.hint) {
            this._quizHintArea.value = this._quizModel.hint;
        }
    };
    HeaderAdapter.prototype.updateAsViewer = function () {
        var ele = utils_1.createElement("div", {}, ["text-primary", "h2"]);
        ele.innerText = this._quizModel.title;
        this._headerDiv.appendChild(ele);
        var ele = utils_1.createElement("div", {}, ["card-subtitle", "text-muted", "m3"]);
        ele.innerText = this._quizModel.hint;
        this._headerDiv.appendChild(ele);
    };
    HeaderAdapter.prototype.updateModel = function () {
        this._quizModel.title = this._quizTitleTextarea.value;
        this._quizModel.hint = this._quizHintArea.value;
        console.log(this._quizModel);
        return this._quizModel;
    };
    return HeaderAdapter;
}());
exports.HeaderAdapter = HeaderAdapter;


/***/ }),

/***/ "./ts/adapters/learningNotesAdapter.ts":
/*!*********************************************!*\
  !*** ./ts/adapters/learningNotesAdapter.ts ***!
  \*********************************************/
/*! flagged exports */
/*! export LearningNotesAdapter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LearningNotesAdapter = void 0;
var quizHTML_1 = __webpack_require__(/*! ../quizHTML */ "./ts/quizHTML.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var LearningNotesAdapter = /** @class */ (function () {
    function LearningNotesAdapter(mode, model, learningNotesBar) {
        this._mode = mode;
        this._quizModel = model;
        this._learningNotesBar = learningNotesBar;
    }
    LearningNotesAdapter.prototype.updateView = function () {
        if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            this._lpTextarea = utils_1.createElement("textarea", { "rows": 3, "placeholder": "learning notes", "dir": "auto", }, [], "width:100%");
            this._lpTextarea.value = this._quizModel.learningNotes;
            this._learningNotesBar.appendChild(this._lpTextarea);
        }
        else if (this._mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
            var ele = utils_1.createElement("div", {}, ["alert", "alert-info"], "width:100%");
            ele.innerText = this._quizModel.learningNotes;
            this._learningNotesBar.appendChild(ele);
        }
    };
    LearningNotesAdapter.prototype.updateModel = function () {
        var ln = this._lpTextarea.value;
        this._quizModel.learningNotes = ln;
        return this._quizModel;
    };
    return LearningNotesAdapter;
}());
exports.LearningNotesAdapter = LearningNotesAdapter;


/***/ }),

/***/ "./ts/adapters/mc_adapter.ts":
/*!***********************************!*\
  !*** ./ts/adapters/mc_adapter.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MCAdapter = void 0;
var quizHTML_1 = __webpack_require__(/*! ../quizHTML */ "./ts/quizHTML.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var choiceAdapter_1 = __webpack_require__(/*! ./choiceAdapter */ "./ts/adapters/choiceAdapter.ts");
var MCAdapter = /** @class */ (function (_super) {
    __extends(MCAdapter, _super);
    function MCAdapter(mode, quizModel, element) {
        return _super.call(this, mode, quizModel, element) || this;
    }
    MCAdapter.prototype.createEditorElement = function (text, isChecked) {
        if (text === void 0) { text = ""; }
        if (isChecked === void 0) { isChecked = false; }
        var index = this._quizBodyDiv.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choiceEle = utils_1.createElement("div", { "id": id, "data-id": id, "draggable": true, }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.appendDragDiv(row);
        this.appendSelectDiv(row, "checkbox", isChecked);
        this.appendTextEditorDiv(index, row, text);
        this.appendDelDiv(row, choiceEle);
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    };
    MCAdapter.prototype.appendEmptyChoice = function () {
        this.createEditorElement();
    };
    MCAdapter.prototype.createViewerElement = function (text, isChecked, isCorrect, isDisabled, showCorrectAnswer) {
        if (text === void 0) { text = ""; }
        if (isChecked === void 0) { isChecked = false; }
        if (isCorrect === void 0) { isCorrect = false; }
        if (isDisabled === void 0) { isDisabled = false; }
        if (showCorrectAnswer === void 0) { showCorrectAnswer = false; }
        var index = this._quizBodyDiv.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choiceEle = utils_1.createElement("div", {
            "id": id, "data-id": id, "draggable": true,
        }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.appendSelectDiv(row, "checkbox", isChecked, isDisabled);
        var classes = ["col-11"];
        if (showCorrectAnswer) {
            classes = ["col-10"];
        }
        this.appendTextViewerDiv(index, row, text, {}, classes, "");
        if (showCorrectAnswer) {
            this.appendCorrectDiv(row, isChecked, isCorrect);
        }
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    };
    MCAdapter.prototype.updateView = function () {
        for (var x = 0; x < this._quizModel.choicesList.length; x++) {
            var text = this._quizModel.choicesList.getChoice(x).text;
            var isCorrect = this._quizModel.correct.indexOf(x) != -1;
            var isChecked = this._quizModel.answer.indexOf(x) != -1;
            if (this._mode === quizHTML_1.HTML_MODE.ANSWER) {
                this.createViewerElement(text, false, false, false, false);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
                this.createViewerElement(text, isChecked);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
                this.createEditorElement(text, isChecked);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
                this.createViewerElement(text, isChecked, isCorrect, true, true);
            }
        }
    };
    MCAdapter.prototype.updateModel = function (quizModel) {
        this._quizModel = quizModel;
        var choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        if (this._mode === quizHTML_1.HTML_MODE.ANSWER || this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var answer = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        if (input.checked) {
                            answer.push(x);
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        }
        else if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            var choices_list = this.collectChoices();
            var correct = this.get_correct();
            this._quizModel.choicesList = choices_list;
            this._quizModel.correct = correct;
            return this._quizModel;
        }
    };
    return MCAdapter;
}(choiceAdapter_1.ChoiceAdapter));
exports.MCAdapter = MCAdapter;


/***/ }),

/***/ "./ts/adapters/media_adapter.ts":
/*!**************************************!*\
  !*** ./ts/adapters/media_adapter.ts ***!
  \**************************************/
/*! flagged exports */
/*! export MediaAdapter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaAdapter = void 0;
var mediaItem_1 = __webpack_require__(/*! ../models/mediaItem */ "./ts/models/mediaItem.ts");
var quizHTML_1 = __webpack_require__(/*! ../quizHTML */ "./ts/quizHTML.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var MediaAdapter = /** @class */ (function () {
    function MediaAdapter(mode, quizModel, mediaDiv, callbacks) {
        var _this = this;
        this._mode = mode;
        this._media_div = mediaDiv;
        this._quizModel = quizModel;
        this._onAddImageToQuizClicked = callbacks.onAddImageToQuizClicked;
        this._onImageClicked = callbacks.onImageClicked;
        var container = utils_1.createElement("div", { "data-id": "container" }, []);
        this._media_div.appendChild(container);
        this._quizMediaDiv = utils_1.createElement("div", {
            "id": this._quizModel.id + "_media",
            "data-ride": "carousel"
        }, ["quiz-media", "carousel", "slide"]);
        container.appendChild(this._quizMediaDiv);
        if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            this.addCtrlBar(container);
        }
        var inner = utils_1.createElement("div", {}, ["carousel-inner", "col-10"]);
        this._quizMediaDiv.appendChild(inner);
        var prev = utils_1.createElement("a", { "role": "button", "data-slide": "prev" }, ["carousel-control-prev", "col-1"], "background: black; z-index: 2");
        var prev_icon = utils_1.createElement("span", { "aria-hidden": "true" }, ["carousel-control-prev-icon",]);
        var prev_txt = utils_1.createElement("span", {}, ["sr-only"]);
        prev_txt.innerText = "Previous";
        prev.appendChild(prev_icon);
        prev.appendChild(prev_txt);
        prev.onclick = function () {
            var children = _this._quizMediaDiv.firstElementChild.children;
            var l = children.length;
            var current_active = 0;
            for (var x = 0; x < l; x++) {
                var ele = children[x];
                if (ele.classList.contains("active")) {
                    current_active = x;
                    ele.classList.toggle("active");
                    break;
                }
            }
            var to = 0;
            if (current_active === 0) {
                to = l - 1;
            }
            else {
                to = current_active - 1;
            }
            children[to].classList.add("active");
        };
        this._quizMediaDiv.appendChild(prev);
        var next = utils_1.createElement("a", { "role": "button", "data-slide": "next", }, ["carousel-control-next", "col-1"], "background: black; z-index: 2");
        var next_icon = utils_1.createElement("span", { "aria-hidden": "true" }, ["carousel-control-next-icon"]);
        var next_txt = utils_1.createElement("span", {}, ["sr-only"]);
        next_txt.innerText = "Next";
        next.appendChild(next_icon);
        next.appendChild(next_txt);
        next.onclick = function () {
            var children = _this._quizMediaDiv.firstElementChild.children;
            var l = children.length;
            var current_active = 0;
            for (var x = 0; x < l; x++) {
                var ele = children[x];
                if (ele.classList.contains("active")) {
                    current_active = x;
                    ele.classList.toggle("active");
                    break;
                }
            }
            var to = 0;
            if (current_active === l - 1) {
                to = 0;
            }
            else {
                to = current_active + 1;
            }
            children[to].classList.add("active");
        };
        this._quizMediaDiv.appendChild(next);
    }
    MediaAdapter.prototype.addCtrlBar = function (container) {
        var _this = this;
        var ctrl_bar = utils_1.createElement("div", {}, ["btn-group", "container", "row"]);
        container.appendChild(ctrl_bar);
        var add_image_btn = utils_1.createElement("button", {}, ["btn", "btn-lg"]);
        add_image_btn.innerHTML = "<span><i class='fa fa-image'></i></span>";
        add_image_btn.onclick = function (event) {
            event.preventDefault();
            try {
                _this._onAddImageToQuizClicked();
            }
            catch (err) {
                console.error(err);
            }
        };
        ctrl_bar.appendChild(add_image_btn);
    };
    MediaAdapter.prototype.updateView = function () {
        var l = this._quizModel.mediaList.length;
        if (l > 0) {
            for (var x = 0; x < l; x++) {
                var m = this._quizModel.mediaList.getMediaItem(x);
                this.addMediaItem(m.type, m.url);
            }
        }
    };
    MediaAdapter.prototype.updateModel = function () {
        var container = this._quizMediaDiv.firstElementChild;
        var children = container.children;
        var l = children.length;
        for (var x = 0; x < l; x++) {
            var node = children[x];
            if (node.classList.contains("carousel-item")) {
                //let mediaItem = new MediaItem()
                var type = null;
                var url = null;
                if (node.getElementsByTagName("img").length > 0) {
                    type = mediaItem_1.MEDIA_TYPE.IMAGE;
                    url = (node.getElementsByTagName("img")[0]).getAttribute("src");
                    var item = new mediaItem_1.MediaItem(type, url);
                    this._quizModel.mediaList.addMediaItem(item);
                }
            }
        }
        return this._quizModel;
    };
    MediaAdapter.prototype.addMediaItem = function (type, url) {
        var _this = this;
        if (!mediaItem_1.MEDIA_TYPE.hasOwnProperty(type)) {
            throw "Invalid media type: " + type;
        }
        if (!url) {
            throw "Invalid media url";
        }
        var item = utils_1.createElement("div", {}, ["carousel-item"], "height: auto; width: auto; min-width:100px; max-width: 500px; max-height: 500px; margin: 0; top: 50%; left: 50%;");
        item.onclick = function (ev) {
            _this._onImageClicked(url);
        };
        if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            var del = utils_1.createElement("button", {}, ["btn", "btn-danger"], "position: relative; right: 0; z-index: 5;");
            del.innerHTML = "<span class='fa fa-close' ></span>";
            del.onclick = function (event) {
                event.preventDefault();
                var nodes = _this._quizMediaDiv.firstElementChild.children;
                var l = nodes.length;
                var active_index = 0;
                for (var x = 0; x < l; x++) {
                    var node = nodes[x];
                    if (node === item) {
                        active_index = x;
                    }
                }
                item.parentElement.removeChild(item);
                var nodes = _this._quizMediaDiv.firstElementChild.children;
                var l = nodes.length;
                if (active_index !== 0) {
                    active_index = active_index - 1;
                }
                for (var x = 0; x < l; x++) {
                    var node = nodes[x];
                    //node.classList.remove("active")
                    if (x === active_index) {
                        node.classList.add("active");
                    }
                }
            };
            item.appendChild(del);
        }
        if (type == mediaItem_1.MEDIA_TYPE.IMAGE) {
            var img = utils_1.createElement("img", { "src": url, }, ["d-block", "w-100"]);
            item.appendChild(img);
            var nodes = this._quizMediaDiv.firstElementChild.children;
            var l = nodes.length;
            for (var x = 0; x < l; x++) {
                var node = nodes[x];
                node.classList.remove("active");
            }
            this._quizMediaDiv.firstElementChild.appendChild(item);
            item.classList.add("active");
        }
        else {
            throw "Not implemented yet";
        }
    };
    return MediaAdapter;
}());
exports.MediaAdapter = MediaAdapter;


/***/ }),

/***/ "./ts/adapters/sc_adapter.ts":
/*!***********************************!*\
  !*** ./ts/adapters/sc_adapter.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SCAdapter = void 0;
var quizHTML_1 = __webpack_require__(/*! ../quizHTML */ "./ts/quizHTML.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var choiceAdapter_1 = __webpack_require__(/*! ./choiceAdapter */ "./ts/adapters/choiceAdapter.ts");
var SCAdapter = /** @class */ (function (_super) {
    __extends(SCAdapter, _super);
    function SCAdapter(mode, quizModel, element) {
        return _super.call(this, mode, quizModel, element) || this;
    }
    SCAdapter.prototype.createEditorElement = function (text, is_checked) {
        if (text === void 0) { text = ""; }
        if (is_checked === void 0) { is_checked = false; }
        var index = this._quizBodyDiv.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choiceEle = utils_1.createElement("div", { "id": id, "data-id": id, "draggable": true, }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.appendDragDiv(row);
        this.appendSelectDiv(row, "radio", is_checked);
        this.appendTextEditorDiv(index, row, text);
        this.appendDelDiv(row, choiceEle);
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    };
    SCAdapter.prototype.appendEmptyChoice = function () {
        this.createEditorElement();
    };
    SCAdapter.prototype.createViewerElement = function (text, is_checked, is_correct, is_disabled, showCorrectAnswer) {
        if (text === void 0) { text = ""; }
        if (is_checked === void 0) { is_checked = false; }
        if (is_correct === void 0) { is_correct = false; }
        if (is_disabled === void 0) { is_disabled = false; }
        if (showCorrectAnswer === void 0) { showCorrectAnswer = false; }
        var index = this._quizBodyDiv.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choice_ele = utils_1.createElement("div", {
            "id": id, "data-id": id, "draggable": true,
        }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.appendSelectDiv(row, "radio", is_checked, is_disabled);
        var classes = ["col-11"];
        if (showCorrectAnswer) {
            classes = ["col-10"];
        }
        this.appendTextViewerDiv(index, row, text, {}, classes, "");
        if (showCorrectAnswer) {
            this.appendCorrectDiv(row, is_checked, is_correct);
        }
        choice_ele.appendChild(row);
        this._quizBodyDiv.appendChild(choice_ele);
    };
    SCAdapter.prototype.updateView = function () {
        for (var x = 0; x < this._quizModel.choicesList.length; x++) {
            var text = this._quizModel.choicesList.getChoice(x).text;
            var is_correct = this._quizModel.correct.indexOf(x) != -1;
            var is_checked = this._quizModel.answer.indexOf(x) != -1;
            if (this._mode === quizHTML_1.HTML_MODE.ANSWER) {
                this.createViewerElement(text, false, false, false, false);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
                this.createViewerElement(text, is_checked);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
                this.createEditorElement(text, is_correct);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
                this.createViewerElement(text, is_checked, is_correct, true, true);
            }
        }
    };
    SCAdapter.prototype.updateModel = function (quizModel) {
        this._quizModel = quizModel;
        var choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        if (this._mode === quizHTML_1.HTML_MODE.ANSWER || this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var answer = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        if (input.checked) {
                            answer.push(x);
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        }
        else if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            var choices_list = this.collectChoices();
            var correct = this.get_correct();
            this._quizModel.choicesList = choices_list;
            this._quizModel.correct = correct;
            return this._quizModel;
        }
    };
    return SCAdapter;
}(choiceAdapter_1.ChoiceAdapter));
exports.SCAdapter = SCAdapter;


/***/ }),

/***/ "./ts/adapters/sort_adapter.ts":
/*!*************************************!*\
  !*** ./ts/adapters/sort_adapter.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SORTAdapter = void 0;
var quizHTML_1 = __webpack_require__(/*! ../quizHTML */ "./ts/quizHTML.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var choiceAdapter_1 = __webpack_require__(/*! ./choiceAdapter */ "./ts/adapters/choiceAdapter.ts");
var SORTAdapter = /** @class */ (function (_super) {
    __extends(SORTAdapter, _super);
    function SORTAdapter(mode, quizModel, element) {
        var _this = _super.call(this, mode, quizModel, element) || this;
        _this._uglifyId = {};
        return _this;
    }
    SORTAdapter.prototype.createEditorElement = function (text) {
        if (text === void 0) { text = ""; }
        var index = this._quizBodyDiv.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choiceEle = utils_1.createElement("div", {
            "id": id,
            "data-id": id,
            "draggable": true,
        }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.appendDragDiv(row);
        this.appendTextEditorDiv(0, row, text);
        this.appendDelDiv(row, choiceEle);
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    };
    SORTAdapter.prototype.createViewerElement = function (i, id, text, isDisabled, showCorrectAnswer) {
        if (text === void 0) { text = ""; }
        if (isDisabled === void 0) { isDisabled = false; }
        if (showCorrectAnswer === void 0) { showCorrectAnswer = false; }
        var choiceEle = utils_1.createElement("div", {
            "id": id,
            "data-id": id,
            "draggable": !showCorrectAnswer,
        }, ["quiz-choice", "m-4"], "cursor: grab");
        var row = utils_1.createElement("div", {}, ["row"]);
        if (showCorrectAnswer) {
            this.appendDragDiv(row, ";color: gray");
        }
        else {
            this.appendDragDiv(row);
        }
        var classes = ["col-11"];
        if (showCorrectAnswer) {
            classes = ["col-10"];
        }
        if (isDisabled) {
            classes.push("text-muted");
        }
        this.appendTextViewerDiv(i, row, text, {}, classes, "");
        if (showCorrectAnswer) {
            var correct = [];
            for (var x = 0; x < this._quizModel.choicesList.length; x++) {
                correct.push(x);
            }
            this.appendCorrectDiv(row, true, correct[i] === this._quizModel.answer[i]);
        }
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    };
    SORTAdapter.prototype.appendEmptyChoice = function () {
        this.createEditorElement("");
    };
    SORTAdapter.prototype.updateView = function () {
        if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            for (var x = 0; x < this._quizModel.choicesList.length; x++) {
                this.createEditorElement(this._quizModel.choicesList.getChoice(x).text);
            }
            //this.create_sort_choice("");
        }
        else if (this._mode === quizHTML_1.HTML_MODE.ANSWER) {
            var sorted = this._quizModel.choicesList.choicesList.slice();
            // [c1,c2,c3 ]
            for (var x = 0; x < sorted.length; x++) {
                var id = utils_1.getRandomStr();
                this._uglifyId[id] = x;
            }
            var choices = utils_1.shuffle(utils_1.shuffle(utils_1.shuffle(this._quizModel.choicesList.choicesList.slice())));
            for (var i = 0; i < choices.length; i++) {
                var id = null;
                var text = choices[i]["text"];
                for (var z = 0; z < sorted.length; z++) {
                    var s = sorted[z];
                    if (s["text"] === text) {
                        id = Object.keys(this._uglifyId)[z];
                    }
                }
                this.createViewerElement(i, id, text);
            }
        }
        else if (this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var sorted = this._quizModel.choicesList.choicesList.slice();
            if (!this._quizModel.answer) {
                this._quizModel.answer = [];
            }
            for (var x = 0; x < sorted.length; x++) {
                var id = utils_1.getRandomStr();
                this._uglifyId[id] = x;
            }
            // { rand:0, rand:1, rand: 2 }    
            var unsorted = utils_1.shuffle(utils_1.shuffle(utils_1.shuffle(this._quizModel.choicesList.choicesList.slice())));
            for (var i = 0; i < unsorted.length; i++) {
                var id = null;
                var text = null;
                if (this._quizModel.answer.length == 0) {
                    text = unsorted[i]["text"];
                }
                else {
                    text = sorted[this._quizModel.answer[i]]["text"];
                }
                for (var z = 0; z < sorted.length; z++) {
                    var s = sorted[z];
                    if (s["text"] === text) {
                        id = Object.keys(this._uglifyId)[z];
                    }
                }
                this.createViewerElement(i, id, text);
            }
        }
        else if (this._mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
            var sorted = this._quizModel.choicesList.choicesList.slice();
            var unsorted = utils_1.shuffle(utils_1.shuffle(utils_1.shuffle(this._quizModel.choicesList.choicesList.slice())));
            var answer = this._quizModel.answer;
            if (!answer) {
                this._quizModel.answer = [];
            }
            for (var x = 0; x < sorted.length; x++) {
                if (answer.indexOf(x) === -1) {
                    answer.push(x);
                }
            }
            for (var x = 0; x < sorted.length; x++) {
                var id = utils_1.getRandomStr();
                this._uglifyId[id] = x;
            }
            var choices = sorted;
            if (this._quizModel.answer.length === 0) {
                choices = unsorted;
            }
            for (var i = 0; i < answer.length; i++) {
                var id = null;
                var text = choices[i]["text"];
                for (var z = 0; z < sorted.length; z++) {
                    var s = sorted[z];
                    if (s["text"] === text) {
                        id = Object.keys(this._uglifyId)[z];
                    }
                }
                this.createViewerElement(i, id, text, true, true);
            }
            /* for (var i = 0; i < sorted.length; i++) {
                let id = null;
                let text = null;
                if (this._quizModel.answer.length == 0) {
                    text = unsorted[i]["text"]
                } else {
                    text = sorted[this._quizModel.answer[i]]["text"]
                }
                for (var z = 0; z < sorted.length; z++) {
                    let s = sorted[z]
                    if (s["text"] === text) {
                        id = Object.keys(this.uglify_id)[z]
                    }
                }
                this.create_sort_choice(id, text);
            } */
        }
    };
    SORTAdapter.prototype.updateModel = function (quizModel) {
        this._quizModel = quizModel;
        var choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        if (this._mode === quizHTML_1.HTML_MODE.ANSWER || this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var answer = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                for (var x = 0; x < choices.length; x++) {
                    var id = choices[x].getAttribute("id");
                    answer.push(this._uglifyId[id]);
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        }
        else if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            var choicesList = this.collectChoices();
            //let correct = []//this.get_correct()
            this._quizModel.choicesList = choicesList;
            this._quizModel.correct = []; //correct;
            return this._quizModel;
        }
    };
    return SORTAdapter;
}(choiceAdapter_1.ChoiceAdapter));
exports.SORTAdapter = SORTAdapter;


/***/ }),

/***/ "./ts/adapters/tf_adapter.ts":
/*!***********************************!*\
  !*** ./ts/adapters/tf_adapter.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TFAdapter = void 0;
var quizHTML_1 = __webpack_require__(/*! ../quizHTML */ "./ts/quizHTML.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var choiceAdapter_1 = __webpack_require__(/*! ./choiceAdapter */ "./ts/adapters/choiceAdapter.ts");
var TFAdapter = /** @class */ (function (_super) {
    __extends(TFAdapter, _super);
    function TFAdapter(mode, quizModel, element) {
        return _super.call(this, mode, quizModel, element) || this;
    }
    TFAdapter.prototype.createEditorElement = function (text, value, isChecked, is_disabled) {
        if (text === void 0) { text = ""; }
        if (isChecked === void 0) { isChecked = false; }
        if (is_disabled === void 0) { is_disabled = false; }
        var index = this._quizBodyDiv.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choiceEle = utils_1.createElement("div", { "id": id, "data-id": id, "draggable": true, }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        var selectDiv = utils_1.createElement("div", {}, ["col-1", "input-group", "mb-3"]);
        var radio = utils_1.createElement("input", { "type": "radio", "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl", "data-value": value }, []);
        if (isChecked) {
            radio.setAttribute("checked", "true");
        }
        radio.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height:1.5rem";
        selectDiv.appendChild(radio);
        row.appendChild(selectDiv);
        this.appendTextViewerDiv(index, row, text, {}, ["col-11"]);
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    };
    TFAdapter.prototype.createViewerElement = function (text, val, isChecked, isCorrect, isDisabled, showCorrectAnswer) {
        if (text === void 0) { text = ""; }
        if (isChecked === void 0) { isChecked = false; }
        if (isCorrect === void 0) { isCorrect = false; }
        if (isDisabled === void 0) { isDisabled = false; }
        if (showCorrectAnswer === void 0) { showCorrectAnswer = false; }
        var index = this._quizBodyDiv.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choiceEle = utils_1.createElement("div", {
            "id": id, "data-id": id, "draggable": true,
        }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        var selDiv = this.appendSelectDiv(row, "radio", isChecked, isDisabled);
        selDiv.firstElementChild.setAttribute("data-value", val);
        var classes = ["col-11"];
        if (showCorrectAnswer) {
            classes = ["col-10"];
        }
        this.appendTextViewerDiv(index, row, text, {}, classes, "");
        if (showCorrectAnswer) {
            this.appendCorrectDiv(row, isChecked, isCorrect);
        }
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    };
    TFAdapter.prototype.updateView = function () {
        for (var x = 1; x > -1; x--) {
            var id = this._quizModel.id + "_choice_" + x;
            var val = "true";
            var text = "True";
            if (x === 0) {
                val = "false";
            }
            if (x === 0) {
                text = "False";
            }
            var isCorrect = this._quizModel.correct.indexOf(x) != -1;
            var isChecked = this._quizModel.answer.indexOf(x) != -1;
            if (this._mode === quizHTML_1.HTML_MODE.ANSWER) {
                this.createViewerElement(text, val, false, false, false, false);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
                this.createViewerElement(text, val, isChecked);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
                this.createEditorElement(text, val, isCorrect);
            }
            else if (this._mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
                this.createViewerElement(text, val, isChecked, isCorrect, true, true);
            }
        }
    };
    TFAdapter.prototype.updateModel = function (quizModel) {
        this._quizModel = quizModel;
        var choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        if (this._mode === quizHTML_1.HTML_MODE.ANSWER || this._mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var answer = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        var val = input.getAttribute("data-value");
                        if (input.checked && val === "true") {
                            answer = [1];
                        }
                        else if (input.checked && val === "false") {
                            answer = [0];
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        }
        else if (this._mode === quizHTML_1.HTML_MODE.CREATE) {
            var correct = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        var val = input.getAttribute("data-value");
                        if (input.checked && val === "true") {
                            correct = [1];
                        }
                        else if (input.checked && val === "false") {
                            correct = [0];
                        }
                    }
                }
            }
            this._quizModel.correct = correct;
            return this._quizModel;
        }
    };
    return TFAdapter;
}(choiceAdapter_1.ChoiceAdapter));
exports.TFAdapter = TFAdapter;


/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! flagged exports */
/*! export Choice [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export ChoicesList [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export HTML_MODE [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export MEDIA_TYPE [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export MediaItem [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export MediaList [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export QUIZ_TYPES [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export QuizHTML [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export QuizModel [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export Version [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Version = exports.QUIZ_TYPES = exports.QuizModel = exports.MediaList = exports.MEDIA_TYPE = exports.MediaItem = exports.HTML_MODE = exports.QuizHTML = exports.ChoicesList = exports.Choice = void 0;
var choice_1 = __webpack_require__(/*! ./models/choice */ "./ts/models/choice.ts");
var choicesList_1 = __webpack_require__(/*! ./models/choicesList */ "./ts/models/choicesList.ts");
var mediaItem_1 = __webpack_require__(/*! ./models/mediaItem */ "./ts/models/mediaItem.ts");
var mediaList_1 = __webpack_require__(/*! ./models/mediaList */ "./ts/models/mediaList.ts");
var quizModel_1 = __webpack_require__(/*! ./models/quizModel */ "./ts/models/quizModel.ts");
var version_1 = __webpack_require__(/*! ./models/version */ "./ts/models/version.ts");
var quizHTML_1 = __webpack_require__(/*! ./quizHTML */ "./ts/quizHTML.ts");
exports.Choice = choice_1.Choice;
exports.ChoicesList = choicesList_1.ChoicesList;
exports.QuizHTML = quizHTML_1.QuizHTML;
exports.HTML_MODE = quizHTML_1.HTML_MODE;
exports.MediaItem = mediaItem_1.MediaItem;
exports.MEDIA_TYPE = mediaItem_1.MEDIA_TYPE;
exports.MediaList = mediaList_1.MediaList;
exports.QuizModel = quizModel_1.QuizModel;
exports.QUIZ_TYPES = quizModel_1.QUIZ_TYPES;
exports.Version = version_1.Version;


/***/ }),

/***/ "./ts/models/choice.ts":
/*!*****************************!*\
  !*** ./ts/models/choice.ts ***!
  \*****************************/
/*! flagged exports */
/*! export Choice [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Choice = void 0;
var mediaList_1 = __webpack_require__(/*! ./mediaList */ "./ts/models/mediaList.ts");
var Choice = /** @class */ (function () {
    function Choice(id, text, mediaList) {
        var valid = Choice.validateEmpty(id, text, mediaList);
        if (!valid.valid) {
            throw valid.error;
        }
        this._id = id;
        this._text = text || "";
        this._mediaList = mediaList || new mediaList_1.MediaList(null);
    }
    Object.defineProperty(Choice.prototype, "id", {
        // id
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "text", {
        get: function () {
            return this._text;
        },
        // no setter for id
        // text
        set: function (text) {
            if (typeof (text) !== "string") {
                throw "Invalid text type " + typeof (text);
            }
            this._text = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "mediaList", {
        get: function () {
            return this._mediaList;
        },
        // media
        set: function (mediaList) {
            if (mediaList_1.MediaList.isValid(mediaList).valid) {
                this._mediaList = mediaList;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "isChoice", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Choice.toDict = function (choice) {
        return {
            "id": choice.id,
            "text": choice.text,
            "mediaList": choice.mediaList.toList()
        };
    };
    Choice.toJson = function (choice) {
        return JSON.stringify(Choice.toDict(choice));
    };
    Choice.fromDict = function (d) {
        return new Choice(d["id"], d["text"], new mediaList_1.MediaList(d["mediaList"]));
    };
    Choice.fromJson = function (json) {
        return Choice.fromDict(JSON.parse(json));
    };
    Choice.validateEmpty = function (id, text, mediaList) {
        if (id === null || id === undefined || id === NaN || !Number.isInteger(id)) {
            return { valid: false, error: "ID Error: " + id };
        }
        if (typeof (text) !== "string") {
            return { valid: false, error: "Invalid text type " + typeof (text) };
        }
        if (mediaList) {
            var v = mediaList_1.MediaList.isValid(mediaList);
            if (!v.valid) {
                return { valid: false, error: "Invalid media list: " + v.error };
            }
        }
        return { valid: true };
    };
    Choice.prototype.validateFull = function () {
        var valid = Choice.validateEmpty(this.id, this.text, this.mediaList);
        if (!valid.valid) {
            return valid;
        }
        if (!this.text || this.text === "") {
            return { valid: false, error: "Invalid text" };
        }
        if (this.mediaList) {
            var v = mediaList_1.MediaList.isValid(this.mediaList);
            if (!v.valid) {
                return { valid: false, error: "Invalid media list: " + v.error };
            }
        }
        return { valid: true };
    };
    return Choice;
}());
exports.Choice = Choice;


/***/ }),

/***/ "./ts/models/choicesList.ts":
/*!**********************************!*\
  !*** ./ts/models/choicesList.ts ***!
  \**********************************/
/*! flagged exports */
/*! export ChoicesList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChoicesList = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var choice_1 = __webpack_require__(/*! ./choice */ "./ts/models/choice.ts");
var ChoicesList = /** @class */ (function () {
    function ChoicesList(input) {
        this._choicesList = [];
        if (input) {
            if (input.constructor === Array) {
                this.fromList(input);
            }
            else {
                try {
                    JSON.parse(input);
                    this.fromJson(input);
                }
                catch (err) {
                    throw "Invalid input " + typeof (input);
                }
            }
        }
        else {
            this._choicesList = [];
        }
    }
    ChoicesList.prototype.addChoice = function (choice) {
        if (!choice.isChoice) {
            throw "Invalid choice" + choice;
        }
        this._choicesList.push(choice);
        this._choicesList = this.choicesList.filter(utils_1.onlyUnique);
    };
    ChoicesList.prototype.removeChoice = function (index) {
        this._choicesList.splice(index, 1);
    };
    ChoicesList.prototype.getChoiceIndex = function (choice) {
        return this._choicesList.indexOf(choice);
    };
    ChoicesList.prototype.getChoice = function (index) {
        return this._choicesList[index];
    };
    ChoicesList.prototype.clear = function () {
        this._choicesList = [];
    };
    Object.defineProperty(ChoicesList.prototype, "choicesList", {
        get: function () {
            return this._choicesList;
        },
        enumerable: false,
        configurable: true
    });
    ChoicesList.prototype.fromList = function (list) {
        for (var x = 0; x < list.length; x++) {
            var choice = choice_1.Choice.fromDict(list[x]);
            this.addChoice(choice);
        }
        return this.choicesList;
    };
    ChoicesList.prototype.fromJson = function (j) {
        var list = JSON.parse(j);
        return this.fromList(list);
    };
    ChoicesList.prototype.toList = function () {
        var res = [];
        var choices = this.choicesList;
        for (var x = 0; x < choices.length; x++) {
            res.push(choice_1.Choice.toDict(choices[x]));
        }
        return res;
    };
    ChoicesList.prototype.toJson = function () {
        return JSON.stringify(this.toList());
    };
    ChoicesList.prototype.isChoiceList = function () {
        return true;
    };
    Object.defineProperty(ChoicesList.prototype, "length", {
        get: function () {
            return this._choicesList.length;
        },
        enumerable: false,
        configurable: true
    });
    ChoicesList.isValid = function (choicesList) {
        if (!choicesList.isChoiceList()) {
            return { valid: false, error: "Invalid Choices List" };
        }
        var choices = choicesList.choicesList;
        for (var x = 0; x < choices.length; x++) {
            var m = choices[x];
            if (!m.isChoice) {
                return { valid: false, error: "Invalid Choice" + m };
            }
            var v = choice_1.Choice.validateEmpty(m.id, m.text, m.mediaList);
            if (!v.valid) {
                return v;
            }
        }
        return { valid: true };
    };
    return ChoicesList;
}());
exports.ChoicesList = ChoicesList;


/***/ }),

/***/ "./ts/models/mediaItem.ts":
/*!********************************!*\
  !*** ./ts/models/mediaItem.ts ***!
  \********************************/
/*! flagged exports */
/*! export MEDIA_TYPE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MediaItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaItem = exports.MEDIA_TYPE = void 0;
exports.MEDIA_TYPE = Object.freeze({
    IMAGE: "IMAGE",
    AUDIO: "AUDIO",
    YOUTUBE: "YOUTUBE",
});
var MediaItem = /** @class */ (function () {
    function MediaItem(type, url) {
        var valid = MediaItem.validateEmpty(type, url);
        if (!valid.valid) {
            throw valid.error;
        }
        this._type = type;
        this._url = url;
    }
    Object.defineProperty(MediaItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (!exports.MEDIA_TYPE.hasOwnProperty(type)) {
                throw "Invalid type";
            }
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaItem.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (typeof (url) !== "string") {
                throw "Invalid url type " + typeof (url);
            }
            this._url = url;
        },
        enumerable: false,
        configurable: true
    });
    MediaItem.prototype.isMediaItem = function () {
        return true;
    };
    MediaItem.validateEmpty = function (type, url) {
        if (typeof (type) !== "string") {
            return {
                valid: false, error: "Invalid type" + typeof (type)
                    + " url: " + url
            };
        }
        return { valid: true };
    };
    MediaItem.prototype.validateFull = function () {
        var valid = MediaItem.validateEmpty(this.type, this.url);
        if (!valid.valid) {
            return valid;
        }
        if (!this.type) {
            return { valid: false, error: "Invalid type" };
        }
        if (!this.url) {
            return { valid: false, error: "Invalid url" };
        }
        return { valid: true };
    };
    MediaItem.isMedia = function (m) {
        return m instanceof (MediaItem);
    };
    MediaItem.fromDict = function (d) {
        return new MediaItem(d["type"], d["url"]);
    };
    MediaItem.fromJson = function (j) {
        var d = JSON.parse(j);
        return MediaItem.fromDict(d);
    };
    MediaItem.from = function (input) {
        try {
            var j = JSON.stringify(input);
            return MediaItem.fromJson(j);
        }
        catch (e) {
            return MediaItem.fromDict(input);
        }
    };
    MediaItem.toDict = function (mediaItem) {
        return { "type": mediaItem.type, "url": mediaItem.url };
    };
    MediaItem.toJson = function (json) {
        return JSON.stringify(MediaItem.toDict(json));
    };
    return MediaItem;
}());
exports.MediaItem = MediaItem;


/***/ }),

/***/ "./ts/models/mediaList.ts":
/*!********************************!*\
  !*** ./ts/models/mediaList.ts ***!
  \********************************/
/*! flagged exports */
/*! export MediaList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaList = void 0;
var mediaItem_1 = __webpack_require__(/*! ./mediaItem */ "./ts/models/mediaItem.ts");
var MediaList = /** @class */ (function () {
    function MediaList(input) {
        this._mediaList = [];
        if (input) {
            if (input.constructor === Array) {
                this.fromList(input);
            }
            else {
                try {
                    JSON.parse(input);
                    this.fromJson(input);
                }
                catch (err) {
                    throw "Invalid input " + typeof (input);
                }
            }
            //throw "Invalid input " + typeof (input)
        }
        else {
            this._mediaList = [];
        }
    }
    MediaList.prototype.addMediaItem = function (item) {
        if (!mediaItem_1.MediaItem.isMedia(item) || !mediaItem_1.MediaItem.validateEmpty(item.type, item.url)) {
            throw "Invalid item" + item;
        }
        this._mediaList.push(item);
    };
    MediaList.prototype.removeMediaItem = function (index) {
        this._mediaList.splice(index, 1);
    };
    MediaList.prototype.getItemIndex = function (item) {
        return this._mediaList.indexOf(item);
    };
    MediaList.prototype.getMediaItem = function (index) {
        return this._mediaList[index];
    };
    Object.defineProperty(MediaList.prototype, "mediaList", {
        get: function () {
            return this._mediaList;
        },
        enumerable: false,
        configurable: true
    });
    MediaList.prototype.fromList = function (list) {
        for (var x = 0; x < list.length; x++) {
            var media_item = mediaItem_1.MediaItem.from(list[x]);
            this.addMediaItem(media_item);
        }
        return this.mediaList;
    };
    MediaList.prototype.fromJson = function (j) {
        var list = JSON.parse(j);
        this.fromList(list);
        return this.mediaList;
    };
    MediaList.prototype.toList = function () {
        var res = [];
        var medias = this.mediaList;
        for (var x = 0; x < medias.length; x++) {
            res.push(mediaItem_1.MediaItem.toDict(medias[x]));
        }
        return res;
    };
    MediaList.prototype.toJson = function () {
        return JSON.stringify(this.toList());
    };
    MediaList.prototype.isMediaList = function () {
        return true;
    };
    Object.defineProperty(MediaList.prototype, "length", {
        get: function () {
            return this._mediaList.length;
        },
        enumerable: false,
        configurable: true
    });
    MediaList.isValid = function (mediaList) {
        if (!mediaList.isMediaList()) {
            return { valid: false, error: "Invalid Media List. Not media list" };
        }
        var medias = mediaList.mediaList;
        for (var x = 0; x < medias.length; x++) {
            var m = medias[x];
            console.log(m);
            console.log(m.isMediaItem());
            if (!m.isMediaItem()) {
                return { valid: false, error: "Invalid Media Item:" + m };
            }
            var v = mediaItem_1.MediaItem.validateEmpty(m.type, m.url);
            console.log(v);
            if (!v.valid) {
                return v;
            }
        }
        return { valid: true };
    };
    return MediaList;
}());
exports.MediaList = MediaList;


/***/ }),

/***/ "./ts/models/quizModel.ts":
/*!********************************!*\
  !*** ./ts/models/quizModel.ts ***!
  \********************************/
/*! flagged exports */
/*! export QUIZ_TYPES [provided] [no usage info] [missing usage info prevents renaming] */
/*! export QuizModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizModel = exports.QUIZ_TYPES = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils.ts");
var choice_1 = __webpack_require__(/*! ./choice */ "./ts/models/choice.ts");
var choicesList_1 = __webpack_require__(/*! ./choicesList */ "./ts/models/choicesList.ts");
var mediaList_1 = __webpack_require__(/*! ./mediaList */ "./ts/models/mediaList.ts");
exports.QUIZ_TYPES = Object.freeze({
    SC: "SC",
    MC: "MC",
    TF: "TF",
    SORT: "SORT"
});
/**
 *
 */
var QuizModel = /** @class */ (function () {
    function QuizModel(id, type, title, mediaList, hint, choicesList, correct, answer, extra, learningNotes) {
        type = type.toUpperCase();
        var valid = QuizModel.validateEmpty(id, type, mediaList, choicesList);
        if (!valid.valid) {
            throw valid;
        }
        this._id = id;
        this._type = type;
        this._title = title || "";
        this._mediaList = mediaList || new mediaList_1.MediaList(null);
        this._hint = hint;
        this._choicesList = choicesList || new choicesList_1.ChoicesList(null);
        this._correct = correct || [];
        this._answer = answer || [];
        this._extra = extra || {};
        this._learningNotes = learningNotes || "";
    }
    Object.defineProperty(QuizModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "type", {
        // no setter for id
        /*  */
        //_type
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (!exports.QUIZ_TYPES.hasOwnProperty(type)) {
                throw "Invalid Type: " + type + "not in: " + exports.QUIZ_TYPES;
            }
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "title", {
        // title
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "mediaList", {
        get: function () {
            return this._mediaList;
        },
        // mediaList
        set: function (mediaList) {
            if (!mediaList_1.MediaList.isValid(mediaList)) {
                throw "Invalid media List " + typeof (mediaList) + mediaList;
            }
            this._mediaList = mediaList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "hint", {
        get: function () {
            return this._hint;
        },
        // hint
        set: function (hint) {
            if (typeof (hint) !== "string") {
                throw "Invalid Hint type";
            }
            this._hint = hint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "choicesList", {
        get: function () {
            return this._choicesList;
        },
        // choices_list
        set: function (choicesList) {
            if (!choicesList.isChoiceList()) {
                throw "Invalid Choices List";
            }
            var old = this.choicesList;
            for (var i; i < choicesList.length; i++) {
                var choice = choicesList[i];
                if (!choice.isChoice()) {
                    throw "Invalid Type" + typeof (choice);
                }
                if (!choice_1.Choice.validateEmpty(choice.id, choice.text, choice.mediaList)) {
                    throw "Invalid: " + choice;
                    this._choicesList = old;
                }
            }
            this._choicesList = choicesList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "correct", {
        get: function () {
            return this._correct;
        },
        // correct
        set: function (correct) {
            if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
                if (correct === []) {
                    this._correct = [];
                    return;
                }
                if (correct.constructor !== Array) {
                    throw "Inavalid " + correct.constructor;
                }
                for (var x = 0; x < correct.length; x++) {
                    var c = correct[x];
                    if (typeof (c) !== "number") {
                        throw "Invalid choice type " + c + " " + typeof (c);
                    }
                }
                if (correct.length > this.choicesList.length) {
                    throw "Invalid correct length: " + correct.length
                        + "choicesList length: "
                        + this.choicesList.length;
                }
            }
            else if (this.type === exports.QUIZ_TYPES.TF) {
                if (correct === []) {
                    this._correct = [];
                    return;
                }
                if (correct.constructor !== Array) {
                    throw "Inavalid " + correct.constructor;
                }
                for (var x = 0; x < correct.length; x++) {
                    var c = correct[x];
                    if (typeof (c) !== "number") {
                        throw "Invalid choice type " + c + " " + typeof (c);
                    }
                }
                if (correct.length > 1) {
                    throw "Invalid correct length: " + correct.length;
                }
            }
            this._correct = correct;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "learningNotes", {
        get: function () {
            return this._learningNotes;
        },
        set: function (value) {
            this._learningNotes = value;
        },
        enumerable: false,
        configurable: true
    });
    QuizModel.prototype.removeFromCorrect = function (choiceId) {
        if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
            this.correct.splice(this.correct.indexOf(choiceId), 1);
            this.correct = this.correct.filter(utils_1.onlyUnique);
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            this.correct = [0];
        }
    };
    QuizModel.prototype.addToCorrect = function (choiceId) {
        if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
            if (!Number.isInteger(choiceId)) {
                throw "Invalid correct id type";
            }
            if (choiceId >= this.choicesList.length) {
                throw "Invalid correct value >" + this.choicesList.length;
            }
            this.correct.push(choiceId);
            this.correct = this.correct.filter(utils_1.onlyUnique);
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            this.correct = [1];
        }
    };
    Object.defineProperty(QuizModel.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        // answer
        set: function (answer) {
            if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
                if (answer === []) {
                    this._answer = [];
                    return;
                }
                if (answer.constructor !== Array) {
                    throw "Inavalid " + answer.constructor;
                }
                for (var x = 0; x < answer.length; x++) {
                    var a = answer[x];
                    if (typeof (a) !== "number") {
                        throw "Invalid Answer type " + a + " " + typeof (a);
                    }
                }
                if (answer.length > this.choicesList.length) {
                    throw "Invalid answer " + answer + " choicesList: " + this.choicesList;
                }
            }
            else if (this.type === exports.QUIZ_TYPES.TF) {
                if (answer === []) {
                    this._answer = [];
                    return;
                }
                if (answer.constructor !== Array) {
                    throw "Inavalid " + answer.constructor;
                }
                for (var x = 0; x < answer.length; x++) {
                    var a = answer[x];
                    if (typeof (a) !== "number") {
                        throw "Invalid Answer type " + a + " " + typeof (a);
                    }
                }
                if (answer.length > 1) {
                    throw "Invalid answer " + answer + " length";
                }
            }
            this._answer = answer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "extra", {
        get: function () {
            return this._extra;
        },
        // extra
        set: function (extra) {
            this._extra = extra;
        },
        enumerable: false,
        configurable: true
    });
    QuizModel.validateEmpty = function (id, type, mediaList, choicesList) {
        if (!id) {
            return { valid: false, error: "Invalid ID" };
        }
        if (!type) {
            return { valid: false, error: "Invalid Type: " + type };
        }
        if (!exports.QUIZ_TYPES.hasOwnProperty(type)) {
            return { valid: false, error: "Invalid Type: " + type };
        }
        if (mediaList) {
            var v = mediaList_1.MediaList.isValid(mediaList);
            if (!v.valid) {
                return { valid: false, error: "Invalid Media List>" + v.error };
            }
        }
        if (choicesList) {
            var v = choicesList_1.ChoicesList.isValid(choicesList);
            if (!v.valid) {
                return { valid: false, error: "Invalid Choices List> " + v.error };
            }
        }
        return { valid: true };
    };
    QuizModel.prototype.validateFull = function () {
        var v = QuizModel.validateEmpty(this.id, this.type, this.mediaList, this.choicesList);
        if (!v.valid) {
            return v;
        }
        if (!this.title || typeof (this.title) !== "string") {
            return { valid: false, error: "Invalid Quiz Title" };
        }
        if ((!this.hint && this.hint != "") || typeof (this.hint) !== "string") {
            return { valid: false, error: "Invalid Quiz Hint" };
        }
        if (this.type === exports.QUIZ_TYPES.SC ||
            this.type === exports.QUIZ_TYPES.MC ||
            this.type === exports.QUIZ_TYPES.SORT) {
            if (!this.choicesList || this.choicesList.length == 0) {
                return { valid: false, error: "No Choices" };
            }
            if (this.choicesList.length === 1) {
                return { valid: false, error: "Only one choice" };
            }
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            if (this.choicesList && this.choicesList.length > 0) {
                return { valid: false, error: " Invalid choices length for T/F question. " };
            }
        }
        for (var x = 0; x < this.choicesList.length; x++) {
            var v_1 = this.choicesList.getChoice(x).validateFull();
            if (!v_1.valid) {
                return { valid: false, error: "Invalid choice: " + x + "error: " + v_1.error };
            }
        }
        if (this.type === exports.QUIZ_TYPES.SC) {
            if (!this.correct || this.correct.length < 1) {
                return { valid: false, error: "You should set the correct answer" };
            }
            if (this.correct.length > 1) {
                return { valid: false, error: "Single choice question can't accept more than one correct answer" };
            }
        }
        else if (this.type === exports.QUIZ_TYPES.MC) {
            if (!this.correct) {
                this.correct = [];
            }
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            if (!this.correct || this.correct.length === 0) {
                return { valid: false, error: "You should set the correct answer" };
            }
            if (this.correct.length > 1) {
                return { valid: false, error: "True/False questions can't accept more than ONE correct answer" };
            }
            if (this.correct[0] != 0 && this.correct[0] != 1) {
                return { valid: false, error: "True/False questions can accept only T/F as correct answer" };
            }
        }
        return { valid: true };
    };
    QuizModel.toDict = function (quiz) {
        return {
            'id': quiz.id,
            'type': quiz.type,
            'title': quiz.title,
            'hint': quiz.hint,
            'choices': quiz.choicesList.toList(),
            'mediaList': quiz.mediaList.toList(),
            'correct': quiz.correct,
            'answer': quiz.answer,
            'extra': quiz.extra,
            "learningNotes": quiz.learningNotes
        };
    };
    QuizModel.toJson = function (quiz) {
        return JSON.stringify(QuizModel.toDict(quiz));
    };
    QuizModel.fromDict = function (d) {
        var mediaList = new mediaList_1.MediaList(d.mediaList);
        var choicesList = new choicesList_1.ChoicesList(d.choices);
        return new QuizModel(d.id, d.type, d.title, mediaList, d.hint, choicesList, d.correct, d.answer, d.extra, d.learningNotes);
    };
    QuizModel.fromJson = function (json) {
        return QuizModel.fromDict(JSON.parse(json));
    };
    return QuizModel;
}());
exports.QuizModel = QuizModel;


/***/ }),

/***/ "./ts/models/version.ts":
/*!******************************!*\
  !*** ./ts/models/version.ts ***!
  \******************************/
/*! flagged exports */
/*! export Version [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Version = void 0;
var Version = /** @class */ (function () {
    function Version() {
    }
    Version.version = "3";
    Version.changes = "See CHANGES.rst";
    return Version;
}());
exports.Version = Version;


/***/ }),

/***/ "./ts/quizHTML.ts":
/*!************************!*\
  !*** ./ts/quizHTML.ts ***!
  \************************/
/*! flagged exports */
/*! export HTML_MODE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export QuizHTML [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizHTML = exports.HTML_MODE = void 0;
var sortablejs_1 = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
var headerAdapter_1 = __webpack_require__(/*! ./adapters/headerAdapter */ "./ts/adapters/headerAdapter.ts");
var learningNotesAdapter_1 = __webpack_require__(/*! ./adapters/learningNotesAdapter */ "./ts/adapters/learningNotesAdapter.ts");
var mc_adapter_1 = __webpack_require__(/*! ./adapters/mc_adapter */ "./ts/adapters/mc_adapter.ts");
var media_adapter_1 = __webpack_require__(/*! ./adapters/media_adapter */ "./ts/adapters/media_adapter.ts");
var sc_adapter_1 = __webpack_require__(/*! ./adapters/sc_adapter */ "./ts/adapters/sc_adapter.ts");
var sort_adapter_1 = __webpack_require__(/*! ./adapters/sort_adapter */ "./ts/adapters/sort_adapter.ts");
var tf_adapter_1 = __webpack_require__(/*! ./adapters/tf_adapter */ "./ts/adapters/tf_adapter.ts");
var quizModel_1 = __webpack_require__(/*! ./models/quizModel */ "./ts/models/quizModel.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./ts/utils.ts");
exports.HTML_MODE = Object.freeze({
    CREATE: "CREATE",
    ANSWER: "ANSWER",
    UPDATE_ANSWER: "UPDATE_ANSWER",
    SHOW_RESULT: "SHOW_RESULT",
});
var QuizHTML = /** @class */ (function () {
    function QuizHTML(quizModel, mode, parent, callbacks) {
        if (quizModel == null || quizModel === undefined) {
            throw ("QuizModel can't be null or undefined !");
        }
        var validation = quizModel_1.QuizModel.validateEmpty(quizModel.id, quizModel.type, quizModel.mediaList, quizModel.choicesList);
        if (!validation.valid) {
            throw ("Invalid quizModel: " + validation.error);
        }
        this._quizModel = quizModel;
        this._fixedQuizModel = quizModel;
        this._mode = mode || exports.HTML_MODE.CREATE;
        this._parent = parent;
        this._callbacks = callbacks || {
            onSubmit: undefined,
            onAddImageToQuizClicked: undefined,
            onImageClicked: undefined
        };
        this.createLayout();
        this._headerAdapter = new headerAdapter_1.HeaderAdapter(this._mode, this._quizModel, this.headerDiv);
        this._choicesAdapter = new this.ChoiceAdapterFactory(this._mode, this._quizModel, this.quizBodyDiv);
        this._learningNotesAdapter = new learningNotesAdapter_1.LearningNotesAdapter(this._mode, this._quizModel, this.learningNotesBar);
        if ((this._callbacks.onAddImageToQuizClicked !== undefined && this._callbacks.onAddImageToQuizClicked !== null) ||
            (this._callbacks.onImageClicked !== undefined && this._callbacks.onImageClicked !== null)) {
            this._mediaAdapter = new media_adapter_1.MediaAdapter(this._mode, this._quizModel, this.mediaDiv, this._callbacks);
        }
        this.updateView();
        if (parent) {
            parent.appendChild(this.element);
        }
    }
    QuizHTML.prototype.createLayout = function () {
        this._element = utils_1.createElement("form", {}, ["quiz-card", "border-primary"]);
        this._headerDiv = utils_1.createElement("div", {}, ["quiz-header", "card-header", "container", "container-fluid"]);
        this._element.appendChild(this._headerDiv);
        if ((this._callbacks.onAddImageToQuizClicked !== undefined && this._callbacks.onAddImageToQuizClicked !== null) ||
            (this._callbacks.onImageClicked !== undefined && this._callbacks.onImageClicked !== null)) {
            this._mediaDiv = utils_1.createElement("div", {}, ["quiz-media", "card"]);
            this._element.appendChild(this._mediaDiv);
        }
        this._quizBodyDiv = utils_1.createElement("div", {}, ["quiz-body"]);
        this._element.appendChild(this._quizBodyDiv);
        this._learningNotesBar = utils_1.createElement("div", {}, ["col-12", "quiz-learning-notes"], "padding:5px");
        this._element.appendChild(this._learningNotesBar);
        this._statusBar = utils_1.createElement("p", {}, ["form-text", "text-center", "text-danger"]);
        this._element.appendChild(this._statusBar);
    };
    QuizHTML.prototype.reset = function () {
        if (this._parent !== undefined && this._parent !== null) {
            this._parent.removeChild(this.element);
        }
        this.createLayout();
        this._headerAdapter = new headerAdapter_1.HeaderAdapter(this._mode, this._fixedQuizModel, this.headerDiv);
        this._choicesAdapter = new this.ChoiceAdapterFactory(this._mode, this._fixedQuizModel, this.quizBodyDiv);
        this._learningNotesAdapter = new learningNotesAdapter_1.LearningNotesAdapter(this._mode, this._fixedQuizModel, this.learningNotesBar);
        if ((this._callbacks.onAddImageToQuizClicked !== undefined && this._callbacks.onAddImageToQuizClicked !== null) ||
            (this._callbacks.onImageClicked !== undefined && this._callbacks.onImageClicked !== null)) {
            this._mediaAdapter = new media_adapter_1.MediaAdapter(this._mode, this._quizModel, this.mediaDiv, this._callbacks);
        }
        this.updateView();
        if (this._parent) {
            this._parent.appendChild(this.element);
        }
    };
    Object.defineProperty(QuizHTML.prototype, "ChoiceAdapterFactory", {
        get: function () {
            var type = this._quizModel.type;
            if (type === quizModel_1.QUIZ_TYPES.SC) {
                return sc_adapter_1.SCAdapter;
            }
            if (type === quizModel_1.QUIZ_TYPES.MC) {
                return mc_adapter_1.MCAdapter;
            }
            if (type === quizModel_1.QUIZ_TYPES.TF) {
                return tf_adapter_1.TFAdapter;
            }
            if (type === quizModel_1.QUIZ_TYPES.SORT) {
                return sort_adapter_1.SORTAdapter;
            }
        },
        enumerable: false,
        configurable: true
    });
    QuizHTML.prototype.addChoice = function () {
        if (this._quizModel.type !== quizModel_1.QUIZ_TYPES.TF) {
            this._choicesAdapter.appendEmptyChoice();
        }
    };
    QuizHTML.prototype.addMediaItem = function (type, url) {
        this._mediaAdapter.addMediaItem(type, url);
        //this._quiz_header_editor_adapter.add_media_item(type, url)
    };
    QuizHTML.prototype.updateView = function () {
        this._headerAdapter.updateView();
        if (this._mediaAdapter) {
            this._mediaAdapter.updateView();
        }
        this._choicesAdapter.updateView();
        if (this.mode === exports.HTML_MODE.CREATE) {
            this._learningNotesAdapter.updateView();
            if (this._quizModel.type === quizModel_1.QUIZ_TYPES.SC ||
                this._quizModel.type === quizModel_1.QUIZ_TYPES.MC ||
                this._quizModel.type === quizModel_1.QUIZ_TYPES.SORT) {
                var sortable = new sortablejs_1.Sortable(this.quizBodyDiv, {
                    sort: true,
                    animation: 150,
                    draggable: ".quiz-choice",
                    direction: "vertical",
                });
            }
        }
        else if (this.mode === exports.HTML_MODE.ANSWER ||
            this.mode === exports.HTML_MODE.UPDATE_ANSWER) {
            if (this._quizModel.type === quizModel_1.QUIZ_TYPES.SORT) {
                var sortable = new sortablejs_1.Sortable(this.quizBodyDiv, {
                    sort: true,
                    animation: 150,
                    draggable: ".quiz-choice",
                    direction: "vertical",
                });
            }
        }
        else if (this.mode === exports.HTML_MODE.SHOW_RESULT) {
            this._learningNotesAdapter.updateView();
        }
    };
    QuizHTML.prototype.submit = function () {
        this.statusBar.innerText = "";
        this.updateModel();
        var valid = this._quizModel.validateFull();
        if (valid.valid) {
            if (this._callbacks.onSubmit) {
                this._callbacks.onSubmit(this._quizModel);
            }
        }
        else {
            this.statusBar.innerText = valid.error;
        }
    };
    QuizHTML.prototype.updateModel = function () {
        if (this.mode === exports.HTML_MODE.CREATE) {
            this._quizModel = this._headerAdapter.updateModel();
            this._quizModel = this._choicesAdapter.updateModel(this._quizModel);
            this._quizModel = this._learningNotesAdapter.updateModel();
            if (this._mediaAdapter) {
                this._quizModel = this._mediaAdapter.updateModel();
            }
        }
        else if (this.mode === exports.HTML_MODE.ANSWER ||
            this.mode === exports.HTML_MODE.UPDATE_ANSWER) {
            this._quizModel = this._choicesAdapter.updateModel(this._quizModel); // this._choices_viewer_adapter.update_model(this._quizModel)
        }
        else if (this.mode === exports.HTML_MODE.SHOW_RESULT) {
            /* this._quizModel = this._choices_viewer_adapter.update_model(this._quizModel) */
        }
    };
    Object.defineProperty(QuizHTML.prototype, "quizModel", {
        /**
         * Getter quizModel
         * @return {QuizModel}
         */
        get: function () {
            return this._quizModel;
        },
        enumerable: false,
        configurable: true
    });
    QuizHTML.prototype.getModel = function () {
        this.updateModel();
        return this._quizModel;
    };
    Object.defineProperty(QuizHTML.prototype, "mode", {
        /**
         * Getter mode
         * @return {string}
         */
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "learningNotesBar", {
        get: function () {
            return this._learningNotesBar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "headerDiv", {
        get: function () {
            return this._headerDiv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "quizBodyDiv", {
        get: function () {
            return this._quizBodyDiv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "mediaDiv", {
        get: function () {
            return this._mediaDiv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "statusBar", {
        get: function () {
            return this._statusBar;
        },
        enumerable: false,
        configurable: true
    });
    return QuizHTML;
}());
exports.QuizHTML = QuizHTML;


/***/ }),

/***/ "./ts/utils.ts":
/*!*********************!*\
  !*** ./ts/utils.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export allowDrop [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createFormGroup [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deleteChoice [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dropChoice [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRandomStr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export handleDrag [provided] [no usage info] [missing usage info prevents renaming] */
/*! export handleDrop [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onChoiceDragStart [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onlyUnique [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shuffle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomStr = exports.shuffle = exports.handleDrop = exports.handleDrag = exports.createFormGroup = exports.createElement = exports.deleteChoice = exports.dropChoice = exports.onChoiceDragStart = exports.allowDrop = exports.onlyUnique = void 0;
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
exports.onlyUnique = onlyUnique;
function allowDrop(ev) {
    ev.preventDefault();
    if (ev.target.getAttribute("draggable") == "true")
        ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
    else
        ev.dataTransfer.dropEffect = "all"; // drop it like it's hot
}
exports.allowDrop = allowDrop;
function onChoiceDragStart(ev) {
    var target = ev.target;
    ev.dataTransfer.setData("text", ev.target.id);
}
exports.onChoiceDragStart = onChoiceDragStart;
function dropChoice(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
exports.dropChoice = dropChoice;
function deleteChoice(ev) {
    ev.target.parentElement.parentElement.parentElement.removeChild(ev.target.parentElement.parentElement);
}
exports.deleteChoice = deleteChoice;
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
function createElement(tag, attrs, classes, cssText) {
    var _a;
    if (attrs === void 0) { attrs = {}; }
    if (classes === void 0) { classes = []; }
    if (cssText === void 0) { cssText = ""; }
    var ele = document.createElement(tag);
    setAttributes(ele, attrs);
    (_a = ele.classList).add.apply(_a, classes);
    ele.style.cssText = cssText;
    return ele;
}
exports.createElement = createElement;
function createFormGroup(id, label, ctrlTag, ctrlAttrs, help) {
    var ele = createElement("div", {}, ["form-group"]);
    var labelEle = createElement("label", { "for": id + "_ctrl", "data-type": "ctrl-label" });
    labelEle.innerHTML = label;
    if (!ctrlAttrs) {
        ctrlAttrs = {};
    }
    ctrlAttrs["id"] = id + "_ctrl";
    ctrlAttrs["aria-describedby"] = id + "_help";
    ctrlAttrs["data-type"] = "ctrl";
    var controlEle = createElement(ctrlTag, ctrlAttrs, ["form-control"]);
    var helpEle = createElement("small", { "data-type": "ctrl-help" }, ["form-text", "text-muted"]);
    helpEle.innerHTML = help;
    ele.appendChild(labelEle);
    ele.appendChild(controlEle);
    ele.appendChild(helpEle);
    return ele;
}
exports.createFormGroup = createFormGroup;
function handleDrag(event) {
    var selectedItem = event.target;
    var list = selectedItem.parentNode;
    var x = event.clientX;
    var y = event.clientY;
    selectedItem.classList.add('drag-sort-active');
    var swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
    if (list === swapItem.parentNode) {
        swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
    }
}
exports.handleDrag = handleDrag;
function handleDrop(event) {
    event.target.classList.remove('drag-sort-active');
}
exports.handleDrop = handleDrop;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
exports.shuffle = shuffle;
function getRandomStr(length) {
    if (length === void 0) { length = 5; }
    return Math.random().toString(36).substring(length);
}
exports.getRandomStr = getRandomStr;
Object.values = Object.values || function (o) { return Object.keys(o).map(function (k) { return o[k]; }); };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./ts/index.ts");
/******/ })()
;
});
//# sourceMappingURL=quiz.js.map