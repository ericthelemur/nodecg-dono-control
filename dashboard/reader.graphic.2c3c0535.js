// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fFLzK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultSettings", ()=>defaultSettings);
parcelHelpers.export(exports, "Reader", ()=>Reader);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _uwcsBootstrapCss = require("../uwcs-bootstrap.css");
var _readerGraphicCss = require("./reader.graphic.css");
var _react = require("react");
var _container = require("react-bootstrap/Container");
var _containerDefault = parcelHelpers.interopDefault(_container);
var _client = require("react-dom/client");
var _donolists = require("./components/donolists");
var _icons = require("./components/icons");
var _incentives = require("./components/incentives");
var _settings = require("./components/settings");
const defaultSettings = {
    list: "live",
    sort: "time",
    dir: "dsc",
    show: [
        "unread",
        "approved",
        "undecided"
    ]
};
function fetchFromParams() {
    const url = new URL(window.location.href);
    var params = url.searchParams;
    var settings = {
        ...defaultSettings
    };
    for (var [k, v] of params){
        if (k === "list" || k === "sort" || k === "dir") settings[k] = v;
        else if (k === "show") settings[k] = v.split(",");
    }
    return settings;
}
function copyToParams(settings) {
    const url = new URL(window.location.href);
    var params = url.searchParams;
    Object.entries(settings).forEach(([k, v])=>params.set(k, v.toString()));
    history.replaceState(null, "", url.href);
}
function Reader() {
    const [sortSettings, setSortSettings] = (0, _react.useState)(fetchFromParams());
    copyToParams(sortSettings);
    console.log(sortSettings);
    var donos = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {}, void 0, false);
    const args = {
        sortSettings: sortSettings,
        setSortSettings: setSortSettings
    };
    // Pick page to render
    if (sortSettings.list === "all") donos = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _donolists.AllDonations), {
        ...args
    }, void 0, false, {
        fileName: "src/dashboard/reader/reader.graphic.tsx",
        lineNumber: 43,
        columnNumber: 43
    }, this);
    else if (sortSettings.list === "donors") donos = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _donolists.Donors), {
        ...args
    }, void 0, false, {
        fileName: "src/dashboard/reader/reader.graphic.tsx",
        lineNumber: 44,
        columnNumber: 51
    }, this);
    else if (sortSettings.list === "incentives") donos = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _incentives.Incentives), {}, void 0, false, {
        fileName: "src/dashboard/reader/reader.graphic.tsx",
        lineNumber: 45,
        columnNumber: 55
    }, this);
    else donos = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _donolists.LiveDonations), {
        ...args
    }, void 0, false, {
        fileName: "src/dashboard/reader/reader.graphic.tsx",
        lineNumber: 46,
        columnNumber: 15
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _containerDefault.default), {
        fluid: "xxl",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _settings.Settings), {
                settings: sortSettings,
                setSettings: setSortSettings
            }, void 0, false, {
                fileName: "src/dashboard/reader/reader.graphic.tsx",
                lineNumber: 50,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "mt-3",
                children: "Tiltify Donation Reader"
            }, void 0, false, {
                fileName: "src/dashboard/reader/reader.graphic.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _settings.TabSetting), {
                name: "list",
                labels: true,
                current: sortSettings.list,
                options: [
                    _icons.live,
                    _icons.all,
                    _icons.donors,
                    _icons.incentives
                ],
                onclick: (v)=>setSortSettings({
                        ...sortSettings,
                        list: v
                    })
            }, void 0, false, {
                fileName: "src/dashboard/reader/reader.graphic.tsx",
                lineNumber: 52,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                fileName: "src/dashboard/reader/reader.graphic.tsx",
                lineNumber: 56,
                columnNumber: 4
            }, this),
            donos
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/reader.graphic.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
}
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Reader, {}, void 0, false, {
    fileName: "src/dashboard/reader/reader.graphic.tsx",
    lineNumber: 63,
    columnNumber: 13
}, undefined));

},{"react/jsx-dev-runtime":"bXAd8","../uwcs-bootstrap.css":"16rP4","./reader.graphic.css":"hGXNJ","react":"bH1AQ","react-bootstrap/Container":"7pPp7","react-dom/client":"i5cPj","./components/donolists":"azBYT","./components/icons":"ehfLh","./components/incentives":"hVM0K","./components/settings":"5ySfJ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"16rP4":[function() {},{}],"hGXNJ":[function() {},{}],"7pPp7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Container = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", className, ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "container");
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, _classnamesDefault.default)(className, fluid ? `${prefix}${suffix}` : prefix)
    });
});
Container.displayName = "Container";
exports.default = Container;

},{"classnames":"cqZ6k","react":"bH1AQ","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"cqZ6k":[function(require,module,exports) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    var nativeCodeString = "[native code]";
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === "object") {
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                    classes.push(arg.toString());
                    continue;
                }
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(" ");
    }
    if (0, module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"22w39":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_BREAKPOINTS", ()=>DEFAULT_BREAKPOINTS);
parcelHelpers.export(exports, "DEFAULT_MIN_BREAKPOINT", ()=>DEFAULT_MIN_BREAKPOINT);
parcelHelpers.export(exports, "useBootstrapPrefix", ()=>useBootstrapPrefix);
parcelHelpers.export(exports, "useBootstrapBreakpoints", ()=>useBootstrapBreakpoints);
parcelHelpers.export(exports, "useBootstrapMinBreakpoint", ()=>useBootstrapMinBreakpoint);
parcelHelpers.export(exports, "useIsRTL", ()=>useIsRTL);
parcelHelpers.export(exports, "createBootstrapComponent", ()=>createBootstrapComponent);
parcelHelpers.export(exports, "ThemeConsumer", ()=>Consumer);
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const DEFAULT_BREAKPOINTS = [
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
];
const DEFAULT_MIN_BREAKPOINT = "xs";
const ThemeContext = /*#__PURE__*/ _react.createContext({
    prefixes: {},
    breakpoints: DEFAULT_BREAKPOINTS,
    minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const { Consumer, Provider } = ThemeContext;
function ThemeProvider({ prefixes = {}, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = DEFAULT_MIN_BREAKPOINT, dir, children }) {
    const contextValue = (0, _react.useMemo)(()=>({
            prefixes: {
                ...prefixes
            },
            breakpoints,
            minBreakpoint,
            dir
        }), [
        prefixes,
        breakpoints,
        minBreakpoint,
        dir
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Provider, {
        value: contextValue,
        children: children
    });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
    const { prefixes } = (0, _react.useContext)(ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
    const { breakpoints } = (0, _react.useContext)(ThemeContext);
    return breakpoints;
}
function useBootstrapMinBreakpoint() {
    const { minBreakpoint } = (0, _react.useContext)(ThemeContext);
    return minBreakpoint;
}
function useIsRTL() {
    const { dir } = (0, _react.useContext)(ThemeContext);
    return dir === "rtl";
}
function createBootstrapComponent(Component, opts) {
    if (typeof opts === "string") opts = {
        prefix: opts
    };
    const isClassy = Component.prototype && Component.prototype.isReactComponent;
    // If it's a functional component make sure we don't break it with a ref
    const { prefix, forwardRefAs = isClassy ? "ref" : "innerRef" } = opts;
    const Wrapped = /*#__PURE__*/ _react.forwardRef(({ ...props }, ref)=>{
        props[forwardRefAs] = ref;
        const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
            ...props,
            bsPrefix: bsPrefix
        });
    });
    Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
    return Wrapped;
}
exports.default = ThemeProvider;

},{"react":"bH1AQ","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"7zOiV":[function(require,module,exports) {
"use strict";
module.exports = require("c4c10cbba9862d5f");

},{"c4c10cbba9862d5f":"jCuwr"}],"jCuwr":[function(require,module,exports) {
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    var React = require("593632ccebda0d3a");
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning("error", format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== "") {
            format += "%s";
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || "Context";
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === "function") return type.displayName || type.name || null;
        if (typeof type === "string") return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var assign = Object.assign;
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return "\n" + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at "); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
                            if (typeof fn === "function") componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return "";
        if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === "string") return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return "";
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== "function") {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) {
            checkKeyStringCoercion(maybeKey);
            key = "" + maybeKey;
        }
        if (hasValidKey(config)) {
            checkKeyStringCoercion(config.key);
            key = "" + config.key;
        }
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) return "\n\nCheck the render method of `" + name + "`.";
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== "object") return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === "string") return;
        var propTypes;
        if (typeof type === "function") propTypes = type.propTypes;
        else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
        }
    }
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = "null";
            else if (isArray(type)) typeString = "array";
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.
    function jsxWithValidationStatic(type, props, key) {
        return jsxWithValidation(type, props, key, true);
    }
    function jsxWithValidationDynamic(type, props, key) {
        return jsxWithValidation(type, props, key, false);
    }
    var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions
    var jsxs = jsxWithValidationStatic;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsx;
    exports.jsxs = jsxs;
})();

},{"593632ccebda0d3a":"bH1AQ"}],"azBYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SortedDonations", ()=>SortedDonations);
parcelHelpers.export(exports, "LiveDonations", ()=>LiveDonations);
parcelHelpers.export(exports, "AllDonations", ()=>AllDonations);
parcelHelpers.export(exports, "Donors", ()=>Donors);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _mod = require("nodecg-tiltify/src/extension/utils/mod");
var _useNodecg = require("use-nodecg");
var _utils = require("../utils");
var _donation = require("./donation");
function SortedDonations({ donos, sortSettings, setSortSettings }) {
    if (!donos || !donos[0]) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h5", {
        children: "Loading or No Donations Yet!"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/donolists.tsx",
        lineNumber: 21,
        columnNumber: 34
    }, this);
    if ("read" in donos[0]) {
        donos = donos.filter((d)=>{
            return (sortSettings.show.includes("read") && d.read || sortSettings.show.includes("unread") && !d.read) && (sortSettings.show.includes("approved") && d.modStatus === (0, _mod.APPROVED) || sortSettings.show.includes("undecided") && d.modStatus === (0, _mod.UNDECIDED) || sortSettings.show.includes("censored") && d.modStatus === (0, _mod.CENSORED));
        });
        if (donos.length === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h5", {
            children: "All Donations Filtered Out!"
        }, void 0, false, {
            fileName: "src/dashboard/reader/components/donolists.tsx",
            lineNumber: 30,
            columnNumber: 34
        }, this);
    } else donos = [
        ...donos
    ];
    const sortedDonos = donos.sort((a, b)=>{
        const va = sortSettings.sort === "money" ? a.amount.value : b.completed_at;
        const vb = sortSettings.sort === "money" ? b.amount.value : a.completed_at;
        var result = va < vb ? -1 : va > vb ? 1 : 0;
        return result * (sortSettings.dir === "asc" ? 1 : -1);
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "donations",
        children: sortedDonos.map((d)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _donation.Donation), {
                dono: d
            }, d.id, false, {
                fileName: "src/dashboard/reader/components/donolists.tsx",
                lineNumber: 43,
                columnNumber: 28
            }, this))
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/donolists.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this);
}
function LiveDonations(props) {
    const [d, setDonos] = (0, _useNodecg.useReplicant)("donations", [], {
        namespace: "nodecg-tiltify"
    });
    const donos = d === undefined ? [] : d;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SortedDonations, {
        donos: donos,
        ...props
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/donolists.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
function AllDonations(props) {
    const [d, setDonos] = (0, _useNodecg.useReplicant)("alldonations", [], {
        namespace: "nodecg-tiltify"
    });
    const donos = d === undefined ? [] : d;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SortedDonations, {
        donos: donos,
        ...props
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/donolists.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
// https://upmostly.com/typescript/implementing-groupby-in-typescript
function groupBy(arr, fn) {
    return arr.reduce((prev, curr)=>{
        const groupKey = fn(curr);
        const group = prev[groupKey] || [];
        group.push(curr);
        return {
            ...prev,
            [groupKey]: group
        };
    }, {});
}
function Donors(props) {
    const [d, setDonos] = (0, _useNodecg.useReplicant)("donations", [], {
        namespace: "nodecg-tiltify"
    });
    const donos = d === undefined ? [] : d;
    const [dr, setDonors] = (0, _useNodecg.useReplicant)("donors", [], {
        namespace: "nodecg-tiltify"
    });
    const donors = dr === undefined ? {} : Object.fromEntries(dr.map((d)=>[
            d.name,
            d
        ]));
    // Construct donor summary
    const donors_donos = Object.entries(groupBy(donos, (d)=>d.donor_name));
    const details = donors_donos.map(([n, ds])=>{
        return {
            name: n,
            donations: ds,
            donor: donors[n],
            total: ds.reduce((t, d)=>t += d.displayAmount ? Number(d.displayAmount.value) : 0, 0),
            latest: ds.reduce((t, d)=>d.completed_at > t ? d.completed_at : t, ""),
            ...props
        };
    });
    // Sort by time or money
    details.sort((a, b)=>{
        const va = props.sortSettings.sort === "money" ? a.total : b.latest;
        const vb = props.sortSettings.sort === "money" ? b.total : a.latest;
        var result = va < vb ? -1 : va > vb ? 1 : 0;
        return result * (props.sortSettings.dir === "asc" ? 1 : -1);
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "donations gap-3 d-block",
        children: details.map(Donor)
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/donolists.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
function Donor(props) {
    // Details of donor and drop down list of donations
    const { name, donor, donations, total, latest } = props;
    const dispCurr = donations[0]?.displayAmount?.currency || "GDP";
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("details", {
        className: "card m-2 card-body",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("summary", {
                className: "h5 card-title",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                    className: "h5 card-title d-inline",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "name",
                            children: name
                        }, void 0, false, {
                            fileName: "src/dashboard/reader/components/donolists.tsx",
                            lineNumber: 119,
                            columnNumber: 6
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "donated",
                            children: "donated"
                        }, void 0, false, {
                            fileName: "src/dashboard/reader/components/donolists.tsx",
                            lineNumber: 120,
                            columnNumber: 6
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "amount",
                            children: (0, _utils.formatAmounts)(donor?.amount, {
                                currency: dispCurr,
                                value: total
                            })
                        }, void 0, false, {
                            fileName: "src/dashboard/reader/components/donolists.tsx",
                            lineNumber: 121,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/dashboard/reader/components/donolists.tsx",
                    lineNumber: 118,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/donolists.tsx",
                lineNumber: 117,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "mt-2 mb-1",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SortedDonations, {
                    donos: donations,
                    ...props
                }, void 0, false, {
                    fileName: "src/dashboard/reader/components/donolists.tsx",
                    lineNumber: 125,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/donolists.tsx",
                lineNumber: 124,
                columnNumber: 4
            }, this)
        ]
    }, name, true, {
        fileName: "src/dashboard/reader/components/donolists.tsx",
        lineNumber: 116,
        columnNumber: 3
    }, this);
}

},{"react/jsx-dev-runtime":"bXAd8","nodecg-tiltify/src/extension/utils/mod":"24r1j","use-nodecg":"fsRLY","../utils":"cw5lr","./donation":"gqLTR","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"24r1j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "APPROVED", ()=>APPROVED);
parcelHelpers.export(exports, "UNDECIDED", ()=>UNDECIDED);
parcelHelpers.export(exports, "CENSORED", ()=>CENSORED);
parcelHelpers.export(exports, "tripleState", ()=>tripleState);
const APPROVED = true, UNDECIDED = null, CENSORED = false;
function tripleState(v, appVal, undecVal, cenVal) {
    // Shorthand for setting a value for each of the 3 mod states
    return v === APPROVED ? appVal : v === CENSORED ? cenVal : undecVal;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"fsRLY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _useReplicant = require("./use-replicant");
parcelHelpers.exportAll(_useReplicant, exports);
var _useReplicantOnce = require("./use-replicant-once");
parcelHelpers.exportAll(_useReplicantOnce, exports);
var _useListenFor = require("./use-listen-for");
parcelHelpers.exportAll(_useListenFor, exports);

},{"./use-replicant":"2EhOG","./use-replicant-once":"3CehK","./use-listen-for":"1jsZF","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2EhOG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useReplicant", ()=>useReplicant);
var _react = require("react");
var _json = require("klona/json");
const useReplicant = (replicantName, initialValue, options)=>{
    const [value, updateValue] = (0, _react.useState)(initialValue);
    const replicantOptions = options && {
        persistent: options.persistent,
        schemaPath: options.schemaPath
    };
    if (options && "defaultValue" in options) replicantOptions.defaultValue = options.defaultValue;
    let replicant;
    if (options?.namespace) replicant = nodecg.Replicant(replicantName, options.namespace, replicantOptions);
    else replicant = nodecg.Replicant(replicantName, replicantOptions);
    (0, _react.useEffect)(()=>{
        const changeHandler = (newValue)=>{
            updateValue((oldValue)=>{
                if (newValue !== oldValue) return newValue;
                // replicant.value has always the same reference. Cloning to cause re-rendering
                return (0, _json.klona)(newValue);
            });
        };
        replicant.on("change", changeHandler);
        return ()=>{
            replicant.removeListener("change", changeHandler);
        };
    }, [
        replicant
    ]);
    return [
        value,
        (newValue)=>{
            replicant.value = newValue;
        }
    ];
};

},{"react":"bH1AQ","klona/json":"loHAU","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"loHAU":[function(require,module,exports) {
function klona(val) {
    var k, out, tmp;
    if (Array.isArray(val)) {
        out = Array(k = val.length);
        while(k--)out[k] = (tmp = val[k]) && typeof tmp === "object" ? klona(tmp) : tmp;
        return out;
    }
    if (Object.prototype.toString.call(val) === "[object Object]") {
        out = {}; // null
        for(k in val)if (k === "__proto__") Object.defineProperty(out, k, {
            value: klona(val[k]),
            configurable: true,
            enumerable: true,
            writable: true
        });
        else out[k] = (tmp = val[k]) && typeof tmp === "object" ? klona(tmp) : tmp;
        return out;
    }
    return val;
}
exports.klona = klona;

},{}],"3CehK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useReplicantOnce", ()=>useReplicantOnce);
var _react = require("react");
const useReplicantOnce = (replicantName, initialValue, options)=>{
    const [state, setState] = (0, _react.useState)(initialValue);
    if (options?.bundle) nodecg.readReplicant(replicantName, options.bundle, (value)=>{
        setState(value);
    });
    else nodecg.readReplicant(replicantName, (value)=>{
        setState(value);
    });
    return state;
};

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"1jsZF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useListenFor", ()=>useListenFor);
var _react = require("react");
const useListenFor = (messageName, handler, options)=>{
    (0, _react.useEffect)(()=>{
        if (options?.bundle) {
            nodecg.listenFor(messageName, options.bundle, handler);
            return ()=>{
                nodecg.unlisten(messageName, options.bundle, handler);
            };
        }
        nodecg.listenFor(messageName, handler);
        return ()=>{
            nodecg.unlisten(messageName, handler);
        };
    }, [
        handler,
        messageName,
        options
    ]);
};

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"gqLTR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Donation", ()=>Donation);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _mod = require("nodecg-tiltify/src/extension/utils/mod");
var _card = require("react-bootstrap/Card");
var _cardDefault = parcelHelpers.interopDefault(_card);
var _utils = require("../utils");
var _buttons = require("./buttons");
var _donoIncentives = require("./dono_incentives");
var _icons = require("./icons");
function DonationTitle({ dono }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
        className: "h5 card-title",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "name",
                children: dono.donor_name
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/donation.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            " ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "donated",
                children: "donated"
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/donation.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            " ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "amount",
                children: (0, _utils.formatAmounts)(dono.amount, dono.displayAmount)
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/donation.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/donation.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
function DonationSubtitle({ dono }) {
    const date = new Date(dono.completed_at);
    var statuses = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {}, void 0, false);
    if (dono.read !== undefined) statuses = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
        className: "statuses",
        children: [
            dono.read ? (0, _icons.read).icon : (0, _icons.unread).icon,
            " ",
            dono.shown ? (0, _icons.shown).icon : (0, _icons.unshown).icon,
            " ",
            (0, _mod.tripleState)(dono.modStatus, (0, _icons.approved).icon, (0, _icons.undecided).icon, (0, _icons.censored).icon),
            " "
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/donation.tsx",
        lineNumber: 25,
        columnNumber: 20
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("small", {
        className: "datetime card-subtitle text-body-tertiary",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "time",
                children: (0, _utils.timeFormat).format(date)
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/donation.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            " ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "date",
                children: (0, _utils.dateFormat).format(date)
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/donation.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            " ",
            statuses
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/donation.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
function Donation({ dono }) {
    var classes = [];
    if (dono.read !== undefined) classes = [
        dono.read ? "read" : "unread",
        dono.shown ? "shown" : "unshown",
        (0, _mod.tripleState)(dono.modStatus, "approved", "undecided", "censored")
    ];
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default), {
        className: classes.join(" "),
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default).Body, {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(DonationTitle, {
                    dono: dono
                }, void 0, false, {
                    fileName: "src/dashboard/reader/components/donation.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(DonationSubtitle, {
                    dono: dono
                }, void 0, false, {
                    fileName: "src/dashboard/reader/components/donation.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    className: "message card-text",
                    children: dono.donor_comment || "No Message"
                }, void 0, false, {
                    fileName: "src/dashboard/reader/components/donation.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _donoIncentives.Incentives), {
                    ...dono
                }, void 0, false, {
                    fileName: "src/dashboard/reader/components/donation.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttons.Buttons), {
                    dono: dono
                }, void 0, false, {
                    fileName: "src/dashboard/reader/components/donation.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/dashboard/reader/components/donation.tsx",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/donation.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"bXAd8","nodecg-tiltify/src/extension/utils/mod":"24r1j","react-bootstrap/Card":"5JoRU","../utils":"cw5lr","./buttons":"jblRu","./dono_incentives":"TlsZh","./icons":"ehfLh","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"5JoRU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _cardBody = require("./CardBody");
var _cardBodyDefault = parcelHelpers.interopDefault(_cardBody);
var _cardFooter = require("./CardFooter");
var _cardFooterDefault = parcelHelpers.interopDefault(_cardFooter);
var _cardHeader = require("./CardHeader");
var _cardHeaderDefault = parcelHelpers.interopDefault(_cardHeader);
var _cardImg = require("./CardImg");
var _cardImgDefault = parcelHelpers.interopDefault(_cardImg);
var _cardImgOverlay = require("./CardImgOverlay");
var _cardImgOverlayDefault = parcelHelpers.interopDefault(_cardImgOverlay);
var _cardLink = require("./CardLink");
var _cardLinkDefault = parcelHelpers.interopDefault(_cardLink);
var _cardSubtitle = require("./CardSubtitle");
var _cardSubtitleDefault = parcelHelpers.interopDefault(_cardSubtitle);
var _cardText = require("./CardText");
var _cardTextDefault = parcelHelpers.interopDefault(_cardText);
var _cardTitle = require("./CardTitle");
var _cardTitleDefault = parcelHelpers.interopDefault(_cardTitle);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Card = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, bg, text, border, body = false, children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, _classnamesDefault.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
        children: body ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _cardBodyDefault.default), {
            children: children
        }) : children
    });
});
Card.displayName = "Card";
exports.default = Object.assign(Card, {
    Img: (0, _cardImgDefault.default),
    Title: (0, _cardTitleDefault.default),
    Subtitle: (0, _cardSubtitleDefault.default),
    Body: (0, _cardBodyDefault.default),
    Link: (0, _cardLinkDefault.default),
    Text: (0, _cardTextDefault.default),
    Header: (0, _cardHeaderDefault.default),
    Footer: (0, _cardFooterDefault.default),
    ImgOverlay: (0, _cardImgOverlayDefault.default)
});

},{"classnames":"cqZ6k","react":"bH1AQ","./ThemeProvider":"22w39","./CardBody":"4YVE9","./CardFooter":"aQV9o","./CardHeader":"bLHBu","./CardImg":"btU5f","./CardImgOverlay":"2N0Od","./CardLink":"ePqjj","./CardSubtitle":"8REHu","./CardText":"k1EYL","./CardTitle":"4QzJT","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"4YVE9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const CardBody = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-body");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
CardBody.displayName = "CardBody";
exports.default = CardBody;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"aQV9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const CardFooter = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-footer");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
CardFooter.displayName = "CardFooter";
exports.default = CardFooter;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"bLHBu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _cardHeaderContext = require("./CardHeaderContext");
var _cardHeaderContextDefault = parcelHelpers.interopDefault(_cardHeaderContext);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const CardHeader = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-header");
    const contextValue = (0, _react.useMemo)(()=>({
            cardHeaderBsPrefix: prefix
        }), [
        prefix
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _cardHeaderContextDefault.default).Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
            ref: ref,
            ...props,
            className: (0, _classnamesDefault.default)(className, prefix)
        })
    });
});
CardHeader.displayName = "CardHeader";
exports.default = CardHeader;

},{"classnames":"cqZ6k","react":"bH1AQ","./ThemeProvider":"22w39","./CardHeaderContext":"fGzwD","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"fGzwD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
"use client";
const context = /*#__PURE__*/ _react.createContext(null);
context.displayName = "CardHeaderContext";
exports.default = context;

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"btU5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const CardImg = /*#__PURE__*/ _react.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix, className, variant, as: Component = "img", ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-img");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(variant ? `${prefix}-${variant}` : prefix, className),
        ...props
    });
});
CardImg.displayName = "CardImg";
exports.default = CardImg;

},{"classnames":"cqZ6k","react":"bH1AQ","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2N0Od":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const CardImgOverlay = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-img-overlay");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
CardImgOverlay.displayName = "CardImgOverlay";
exports.default = CardImgOverlay;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"ePqjj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const CardLink = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "a", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-link");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
CardLink.displayName = "CardLink";
exports.default = CardLink;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"8REHu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _divWithClassName = require("./divWithClassName");
var _divWithClassNameDefault = parcelHelpers.interopDefault(_divWithClassName);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const DivStyledAsH6 = (0, _divWithClassNameDefault.default)("h6");
const CardSubtitle = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = DivStyledAsH6, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-subtitle");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
CardSubtitle.displayName = "CardSubtitle";
exports.default = CardSubtitle;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","./divWithClassName":"anWb4","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"anWb4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _jsxRuntime = require("react/jsx-runtime");
exports.default = (className)=>/*#__PURE__*/ _react.forwardRef((p, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...p,
            ref: ref,
            className: (0, _classnamesDefault.default)(p.className, className)
        }));

},{"react":"bH1AQ","classnames":"cqZ6k","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"k1EYL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const CardText = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "p", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-text");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
CardText.displayName = "CardText";
exports.default = CardText;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"4QzJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _divWithClassName = require("./divWithClassName");
var _divWithClassNameDefault = parcelHelpers.interopDefault(_divWithClassName);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const DivStyledAsH5 = (0, _divWithClassNameDefault.default)("h5");
const CardTitle = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "card-title");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
CardTitle.displayName = "CardTitle";
exports.default = CardTitle;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","./divWithClassName":"anWb4","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"jblRu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModButton", ()=>ModButton);
parcelHelpers.export(exports, "Buttons", ()=>Buttons);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _mod = require("nodecg-tiltify/src/extension/utils/mod");
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _useNodecg = require("use-nodecg");
var _icons = require("./icons");
function changeModStatus(dono, to, property = "modstatus") {
    return ()=>{
        console.log(`Attempting to set ${property} to ${to} for ${dono.id}`);
        dono.timeToApprove = 8.64e15;
        // Confirm uncensoring
        if (property === "modstatus" && dono.modStatus === (0, _mod.CENSORED)) {
            var confirmUncensor = confirm("Are you sure you want to uncensor this donation?" + `\nName: ${dono.donor_name}\nMessage: ${dono.donor_comment}`);
            if (confirmUncensor != true) return;
        }
        console.log("set-donation-" + property, [
            {
                id: dono.id
            },
            to
        ]);
        nodecg.sendMessageToBundle("set-donation-" + property, "nodecg-tiltify", [
            dono,
            to
        ]);
    };
}
function ModButton(props) {
    const toggle = props.dono[props.property] !== props.true.value;
    const action = toggle ? props.true : props.false;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
        variant: toggle && props.primaryTrue ? "primary" : "outline-primary",
        onClick: changeModStatus(props.dono, action.value, props.property.toLowerCase()),
        className: props.extraClasses.join(" "),
        children: [
            action.iconAction,
            props.small ? "" : " " + action.action
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/buttons.tsx",
        lineNumber: 41,
        columnNumber: 12
    }, this);
}
function Buttons({ dono }) {
    const [settings, _] = (0, _useNodecg.useReplicant)("donations", {
        autoapprove: false
    });
    const whitelist = !settings?.autoapprove || dono.timeToApprove === 8.64e15;
    var censorBtn;
    var extraClasses = [
        "flex-grow-1"
    ];
    if (whitelist) censorBtn = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ModButton, {
        dono: dono,
        true: _icons.approved,
        false: _icons.censored,
        small: false,
        property: "modStatus",
        primaryTrue: true,
        extraClasses: extraClasses
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/buttons.tsx",
        lineNumber: 56,
        columnNumber: 21
    }, this);
    else {
        if (dono.modStatus === (0, _mod.UNDECIDED)) extraClasses.push("censor-btn");
        censorBtn = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ModButton, {
            dono: dono,
            true: _icons.censored,
            false: _icons.approved,
            small: false,
            property: "modStatus",
            primaryTrue: false,
            extraClasses: extraClasses
        }, void 0, false, {
            fileName: "src/dashboard/reader/components/buttons.tsx",
            lineNumber: 59,
            columnNumber: 21
        }, this);
        if (dono.modStatus === (0, _mod.UNDECIDED)) console.log(censorBtn.props);
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "btn-toolbar gap-2",
        role: "toolbar",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ModButton, {
                dono: dono,
                true: _icons.read,
                false: _icons.unread,
                small: false,
                property: "read",
                primaryTrue: true,
                extraClasses: [
                    "w-50"
                ]
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/buttons.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "btn-group flex-grow-1",
                role: "group",
                children: [
                    censorBtn,
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ModButton, {
                        dono: dono,
                        true: _icons.undecided,
                        false: whitelist ? _icons.censored : _icons.approved,
                        small: true,
                        property: "modStatus",
                        primaryTrue: false,
                        extraClasses: [
                            "bonus-btn"
                        ]
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/buttons.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/buttons.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/buttons.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"bXAd8","nodecg-tiltify/src/extension/utils/mod":"24r1j","react-bootstrap/Button":"bjhyB","use-nodecg":"fsRLY","./icons":"ehfLh","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"bjhyB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _button = require("@restart/ui/Button");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Button = /*#__PURE__*/ _react.forwardRef(({ as, bsPrefix, variant = "primary", size, active = false, disabled = false, className, ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "btn");
    const [buttonProps, { tagName }] = (0, _button.useButtonProps)({
        tagName: as,
        disabled,
        ...props
    });
    const Component = tagName;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...buttonProps,
        ...props,
        ref: ref,
        disabled: disabled,
        className: (0, _classnamesDefault.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
    });
});
Button.displayName = "Button";
exports.default = Button;

},{"classnames":"cqZ6k","react":"bH1AQ","@restart/ui/Button":"6rXod","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"6rXod":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTrivialHref", ()=>isTrivialHref);
parcelHelpers.export(exports, "useButtonProps", ()=>useButtonProps);
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "as",
    "disabled"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function isTrivialHref(href) {
    return !href || href.trim() === "#";
}
function useButtonProps({ tagName, disabled, href, target, rel, role, onClick, tabIndex = 0, type }) {
    if (!tagName) {
        if (href != null || target != null || rel != null) tagName = "a";
        else tagName = "button";
    }
    const meta = {
        tagName
    };
    if (tagName === "button") return [
        {
            type: type || "button",
            disabled
        },
        meta
    ];
    const handleClick = (event)=>{
        if (disabled || tagName === "a" && isTrivialHref(href)) event.preventDefault();
        if (disabled) {
            event.stopPropagation();
            return;
        }
        onClick == null || onClick(event);
    };
    const handleKeyDown = (event)=>{
        if (event.key === " ") {
            event.preventDefault();
            handleClick(event);
        }
    };
    if (tagName === "a") {
        // Ensure there's a href so Enter can trigger anchor button.
        href || (href = "#");
        if (disabled) href = undefined;
    }
    return [
        {
            role: role != null ? role : "button",
            // explicitly undefined so that it overrides the props disabled in a spread
            // e.g. <Tag {...props} {...hookProps} />
            disabled: undefined,
            tabIndex: disabled ? undefined : tabIndex,
            href,
            target: tagName === "a" ? target : undefined,
            "aria-disabled": !disabled ? undefined : disabled,
            rel: tagName === "a" ? rel : undefined,
            onClick: handleClick,
            onKeyDown: handleKeyDown
        },
        meta
    ];
}
const Button = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { as: asProp, disabled } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [buttonProps, { tagName: Component }] = useButtonProps(Object.assign({
        tagName: asProp,
        disabled
    }, props));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, buttonProps, {
        ref: ref
    }));
});
Button.displayName = "Button";
exports.default = Button;

},{"react":"bH1AQ","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"ehfLh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "unread", ()=>unread);
parcelHelpers.export(exports, "shown", ()=>shown);
parcelHelpers.export(exports, "unshown", ()=>unshown);
parcelHelpers.export(exports, "approved", ()=>approved);
parcelHelpers.export(exports, "undecided", ()=>undecided);
parcelHelpers.export(exports, "censored", ()=>censored);
parcelHelpers.export(exports, "asc", ()=>asc);
parcelHelpers.export(exports, "dsc", ()=>dsc);
parcelHelpers.export(exports, "time", ()=>time);
parcelHelpers.export(exports, "money", ()=>money);
parcelHelpers.export(exports, "live", ()=>live);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "donors", ()=>donors);
parcelHelpers.export(exports, "incentives", ()=>incentives);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _bootstrapIconsMinCss = require("bootstrap-icons/font/bootstrap-icons.min.css");
var _mod = require("nodecg-tiltify/src/extension/utils/mod");
const read = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-envelope-open-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 15,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-envelope-open-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 16,
        columnNumber: 17
    }, undefined),
    action: "Read",
    category: "read",
    value: true
};
const unread = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-envelope-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 23,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-envelope-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 24,
        columnNumber: 17
    }, undefined),
    action: "Unread",
    category: "unread",
    value: false
};
const shown = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-eye-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 32,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-eye-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 33,
        columnNumber: 17
    }, undefined),
    action: "Show",
    category: "shown",
    value: true
};
const unshown = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-eye-slash-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 40,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-eye-slash-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 41,
        columnNumber: 17
    }, undefined),
    action: "Unshow",
    category: "unshown",
    value: false
};
const approved = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-check-lg"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 49,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-check-lg"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 50,
        columnNumber: 17
    }, undefined),
    action: "Approve",
    category: "approved",
    value: (0, _mod.APPROVED)
};
const undecided = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-question-lg"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 57,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-arrow-counterclockwise"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 58,
        columnNumber: 17
    }, undefined),
    action: "Reset",
    category: "undecided",
    value: (0, _mod.UNDECIDED)
};
const censored = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-ban"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 65,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-ban"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 66,
        columnNumber: 17
    }, undefined),
    action: "Censor",
    category: "censored",
    value: (0, _mod.CENSORED)
};
const asc = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-arrow-up"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 73,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-arrow-up"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 74,
        columnNumber: 17
    }, undefined),
    action: "Sort Ascending",
    category: "asc",
    value: null
};
const dsc = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-arrow-down"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 81,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-arrow-down"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 82,
        columnNumber: 17
    }, undefined),
    action: "Sort Descending",
    category: "dsc",
    value: null
};
const time = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-clock"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 89,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-clock"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 90,
        columnNumber: 17
    }, undefined),
    action: "Sort by time",
    category: "time",
    value: null
};
const money = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-currency-pound"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 97,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-currency-pound"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 98,
        columnNumber: 17
    }, undefined),
    action: "Sort by money",
    category: "money",
    value: null
};
const live = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-bell-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 105,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-bell-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 106,
        columnNumber: 17
    }, undefined),
    action: "Live",
    category: "live",
    value: null
};
const all = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-archive-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 113,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-archive-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 114,
        columnNumber: 17
    }, undefined),
    action: "All",
    category: "all",
    value: null
};
const donors = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-people-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 121,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-people-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 122,
        columnNumber: 17
    }, undefined),
    action: "Donors",
    category: "donors",
    value: null
};
const incentives = {
    icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-piggy-bank-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 129,
        columnNumber: 11
    }, undefined),
    iconAction: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
        className: "bi bi-piggy-bank-fill"
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/icons.tsx",
        lineNumber: 130,
        columnNumber: 17
    }, undefined),
    action: "Incentives",
    category: "incentives",
    value: null
};

},{"react/jsx-dev-runtime":"bXAd8","bootstrap-icons/font/bootstrap-icons.min.css":"gtpH6","nodecg-tiltify/src/extension/utils/mod":"24r1j","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"gtpH6":[function() {},{}],"TlsZh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Incentives", ()=>Incentives);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _useNodecg = require("use-nodecg");
var _index = require("../utils/index");
function Reward({ id }) {
    const [rewards, _] = (0, _useNodecg.useReplicant)("rewards", [], {
        namespace: "nodecg-tiltify"
    });
    if (rewards === undefined) return null;
    const reward = rewards.find((r)=>r.id === id);
    if (reward === undefined) return null;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
        className: "reward text-body-tertiary",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                className: "bi bi-star-fill"
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/dono_incentives.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            " ",
            reward.name
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/dono_incentives.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
function Target({ id }) {
    const [targets, _] = (0, _useNodecg.useReplicant)("targets", [], {
        namespace: "nodecg-tiltify"
    });
    if (targets === undefined) return null;
    const target = targets.find((r)=>r.id === id);
    if (target === undefined) return null;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
        className: "target",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                className: "bi bi-bullseye"
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/dono_incentives.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            " ",
            target.name
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/dono_incentives.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
function Poll({ id, option_id }) {
    console.log("args", id, option_id);
    const [polls, _] = (0, _useNodecg.useReplicant)("polls", [], {
        namespace: "nodecg-tiltify"
    });
    if (polls === undefined) return null;
    const poll = polls.find((r)=>r.id === id);
    console.log("poll", poll);
    if (poll === undefined) return null;
    const option = poll.options.find((o)=>o.id === option_id);
    console.log("option", option);
    if (option === undefined) return null;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
        className: "poll",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                className: "bi bi-bar-chart-fill"
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/dono_incentives.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            " ",
            option.name,
            " ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "text-body-tertiary",
                children: [
                    "/ ",
                    (0, _index.truncate)(poll.name, 30)
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/dono_incentives.tsx",
                lineNumber: 52,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/dono_incentives.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
function Incentives(props) {
    const { reward_id, target_id, poll_id, poll_option_id } = props;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "incentives",
        children: [
            target_id ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Target, {
                id: target_id
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/dono_incentives.tsx",
                lineNumber: 69,
                columnNumber: 26
            }, this) : "",
            poll_id && poll_option_id ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Poll, {
                id: poll_id,
                option_id: poll_option_id
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/dono_incentives.tsx",
                lineNumber: 70,
                columnNumber: 42
            }, this) : "",
            reward_id ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Reward, {
                id: reward_id
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/dono_incentives.tsx",
                lineNumber: 71,
                columnNumber: 26
            }, this) : ""
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/dono_incentives.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"bXAd8","use-nodecg":"fsRLY","../utils/index":"cw5lr","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"hVM0K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Incentives", ()=>Incentives);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _badge = require("react-bootstrap/Badge");
var _badgeDefault = parcelHelpers.interopDefault(_badge);
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _card = require("react-bootstrap/Card");
var _cardDefault = parcelHelpers.interopDefault(_card);
var _useNodecg = require("use-nodecg");
var _utils = require("../utils");
var _progress = require("./progress");
const hitBadge = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _badgeDefault.default), {
    bg: "success-subtle",
    className: "small text-success",
    children: " Hit"
}, void 0, false, {
    fileName: "src/dashboard/reader/components/incentives.tsx",
    lineNumber: 13,
    columnNumber: 18
}, undefined);
function start_date(date) {
    if (!date) return "";
    const start = new Date(date);
    const now = new Date(Date.now());
    if (now > start) return "";
    return "Starts " + (0, _utils.timeFormat).format(start) + " " + (0, _utils.dateFormat).format(start);
}
function end_date(date) {
    if (!date) return "";
    const end = new Date(date);
    const now = new Date(Date.now());
    const nextday = now.getTime() + 86400000;
    if (nextday < end.getTime()) return "";
    return (now < end ? "Ends " : "Ended ") + (0, _utils.timeFormat).format(end) + " " + (0, _utils.dateFormat).format(end);
}
function dates(start, end) {
    const start_txt = start_date(start);
    if (start_txt) return start_txt;
    const end_txt = end_date(end);
    return end_txt;
}
function RewardCard({ reward }) {
    var date_txt = dates(reward.starts_at || null, reward.ends_at || null);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default), {
        className: reward.quantity_remaining == 0 || reward.ends_at && new Date(reward.ends_at).getTime() < Date.now() ? "read" : "",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default).Body, {
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("details", {
                className: "reward",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("summary", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                className: "bi bi-star-fill"
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/incentives.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            " ",
                            reward.name,
                            " for ",
                            (0, _utils.formatAmount)(reward.amount),
                            date_txt ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-body-tertiary",
                                children: "date_txt"
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/incentives.tsx",
                                lineNumber: 49,
                                columnNumber: 38
                            }, this) : ""
                        ]
                    }, void 0, true, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this),
                    reward.quantity_remaining && reward.quantity ? `${reward.quantity_remaining}/${reward.quantity} remaining` : "",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 51,
                        columnNumber: 134
                    }, this),
                    reward.description
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/incentives.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
function TargetCards({ targets }) {
    const [showAll, setShowAll] = (0, _react.useState)(false);
    const showOption = targets.length >= 3;
    const ti = targets.length >= 3 ? targets.slice(0, 3) : targets;
    const content = (0, _utils.sortMapSingle)(showAll ? targets : ti, (t)=>Number(t.amount_raised.value), (t)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TargetCard, {
            target: t
        }, t.id, false, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 64,
            columnNumber: 100
        }, this), true);
    const btn = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
        className: "px-1 py-0",
        variant: "outline-secondary",
        onClick: ()=>setShowAll(!showAll),
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
            className: "small",
            children: [
                "Show ",
                showAll ? "Less" : "All"
            ]
        }, void 0, true, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 65,
            columnNumber: 112
        }, this)
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/incentives.tsx",
        lineNumber: 65,
        columnNumber: 17
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "mt-3",
                children: [
                    "Targets ",
                    showOption ? btn : ""
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "donations",
                children: content
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function TargetCard({ target }) {
    var date_txt = dates(null, target.ends_at || null);
    const label = `${(0, _utils.formatAmount)(target.amount_raised)} / ${(0, _utils.formatAmount)(target.amount)}`;
    const hit = Number(target.amount_raised.value) >= Number(target.amount.value);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default), {
        className: hit ? "text-success" : "",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default).Body, {
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "target",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        className: "h5",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                className: "bi bi-bullseye"
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/incentives.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this),
                            " ",
                            target.name,
                            " ",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-body-tertiary",
                                children: date_txt
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/incentives.tsx",
                                lineNumber: 86,
                                columnNumber: 39
                            }, this),
                            hit ? hitBadge : ""
                        ]
                    }, void 0, true, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _progress.ProgressBar), {
                        label: label,
                        value: Number(target.amount_raised.value),
                        maxVal: Number(target.amount.value),
                        colour2: hit ? "var(--bs-success-bg-subtle)" : "var( --bs-secondary-bg)"
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 83,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, target.id, false, {
        fileName: "src/dashboard/reader/components/incentives.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
function findMilestones(ms, total) {
    // Pick an index so it shows the last hit milestone and next two
    const milestones = ms ? [
        ...ms
    ] : [];
    if (milestones.length <= 3) return milestones;
    const threshold = Number(total.value);
    milestones.sort((a, b)=>Number(a.amount.value) - Number(b.amount.value));
    const justHit = milestones.findIndex((m)=>Number(m.amount.value) > threshold);
    if (justHit === -1) return milestones.slice(milestones.length - 3, milestones.length);
    const i = Math.min(milestones.length - 3, Math.max(0, justHit - 1));
    return milestones.slice(i, i + 3);
}
function MilestoneCards({ milestones, total }) {
    const [showAll, setShowAll] = (0, _react.useState)(false);
    const showOption = milestones.length >= 3;
    const mi = findMilestones(milestones, total);
    const content = (showAll ? milestones : mi).map((m)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(MilestoneCard, {
            milestone: m,
            total: total
        }, m.id, false, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 114,
            columnNumber: 58
        }, this));
    const btn = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
        className: "px-1 py-0",
        variant: "outline-secondary",
        onClick: ()=>setShowAll(!showAll),
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
            className: "small",
            children: [
                "Show ",
                showAll ? "Less" : "All"
            ]
        }, void 0, true, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 115,
            columnNumber: 112
        }, this)
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/incentives.tsx",
        lineNumber: 115,
        columnNumber: 17
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "mt-3",
                children: [
                    "Milestones ",
                    showOption ? btn : ""
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "donations",
                children: content
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function MilestoneCard({ milestone, total }) {
    const label = `${(0, _utils.formatAmount)(total)} / ${(0, _utils.formatAmount)(milestone.amount)}`;
    const hit = Number(total.value) >= Number(milestone.amount.value);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default), {
        className: hit ? "text-success" : "",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default).Body, {
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "milestone",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        className: "h5",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                className: "bi bi-flag-fill"
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/incentives.tsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this),
                            " ",
                            milestone.name,
                            " ",
                            hit ? hitBadge : ""
                        ]
                    }, void 0, true, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _progress.ProgressBar), {
                        label: label,
                        value: Number(total.value),
                        maxVal: Number(milestone.amount.value)
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 133,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 132,
            columnNumber: 13
        }, this)
    }, milestone.id, false, {
        fileName: "src/dashboard/reader/components/incentives.tsx",
        lineNumber: 131,
        columnNumber: 9
    }, this);
}
function PollCards({ polls }) {
    const [showAll, setShowAll] = (0, _react.useState)(false);
    if (polls === undefined) return null;
    const showOption = polls.length >= 3;
    const ti = showOption ? polls.slice(0, 3) : polls;
    const content = (0, _utils.sortMapSingle)(showAll ? polls : ti, (t)=>Number(t.amount_raised.value), (p)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(PollCard, {
            poll: p
        }, p.id, false, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 151,
            columnNumber: 98
        }, this), true);
    const btn = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
        className: "px-1 py-0",
        variant: "outline-secondary",
        onClick: ()=>setShowAll(!showAll),
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
            className: "small",
            children: [
                "Show ",
                showAll ? "Less" : "All"
            ]
        }, void 0, true, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 152,
            columnNumber: 112
        }, this)
    }, void 0, false, {
        fileName: "src/dashboard/reader/components/incentives.tsx",
        lineNumber: 152,
        columnNumber: 17
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "mt-3",
                children: [
                    "Polls ",
                    showOption ? btn : ""
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "donations",
                children: content
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function PollCard({ poll }) {
    const winningVal = Math.max(...poll.options.map((o)=>Number(o.amount_raised.value)));
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cardDefault.default).Body, {
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "poll",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        className: "h5",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                className: "bi bi-bar-chart-fill"
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/incentives.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this),
                            " ",
                            poll.name,
                            " ",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "ms-auto text-body-tertiary",
                                children: [
                                    "Total: ",
                                    (0, _utils.formatAmount)(poll.amount_raised)
                                ]
                            }, void 0, true, {
                                fileName: "src/dashboard/reader/components/incentives.tsx",
                                lineNumber: 170,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this),
                    poll.options.map((o)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _progress.ProgressBar), {
                            className: "mt-1",
                            label: `${o.name} ${(0, _utils.formatAmount)(o.amount_raised)}`,
                            value: Number(o.amount_raised.value),
                            maxVal: Number(poll.amount_raised.value),
                            complete: Number(o.amount_raised.value) >= winningVal
                        }, o.name, false, {
                            fileName: "src/dashboard/reader/components/incentives.tsx",
                            lineNumber: 172,
                            columnNumber: 44
                        }, this))
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 167,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "src/dashboard/reader/components/incentives.tsx",
            lineNumber: 166,
            columnNumber: 13
        }, this)
    }, poll.id, false, {
        fileName: "src/dashboard/reader/components/incentives.tsx",
        lineNumber: 165,
        columnNumber: 9
    }, this);
}
function Incentives() {
    const [rewards, _] = (0, _useNodecg.useReplicant)("rewards", [], {
        namespace: "nodecg-tiltify"
    });
    const [targets, _2] = (0, _useNodecg.useReplicant)("targets", [], {
        namespace: "nodecg-tiltify"
    });
    const [polls, _3] = (0, _useNodecg.useReplicant)("polls", [], {
        namespace: "nodecg-tiltify"
    });
    const [milestones, _4] = (0, _useNodecg.useReplicant)("milestones", [], {
        namespace: "nodecg-tiltify"
    });
    const [total, _5] = (0, _useNodecg.useReplicant)("total", {
        "currency": "GBP",
        "value": 0
    }, {
        namespace: "nodecg-tiltify"
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            milestones && total ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(MilestoneCards, {
                milestones: milestones,
                total: total
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 188,
                columnNumber: 36
            }, this) : "",
            targets ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TargetCards, {
                targets: targets
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 189,
                columnNumber: 24
            }, this) : "",
            polls ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(PollCards, {
                polls: polls
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 190,
                columnNumber: 22
            }, this) : "",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "mt-3",
                children: "Rewards"
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 191,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "donations",
                children: (0, _utils.sortMapSingle)(rewards, (t)=>Number(t.highlighted), (r)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RewardCard, {
                        reward: r
                    }, r.id, false, {
                        fileName: "src/dashboard/reader/components/incentives.tsx",
                        lineNumber: 193,
                        columnNumber: 74
                    }, this))
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/incentives.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"bXAd8","react":"bH1AQ","react-bootstrap/Badge":"eSlTq","react-bootstrap/Button":"bjhyB","react-bootstrap/Card":"5JoRU","use-nodecg":"fsRLY","../utils":"cw5lr","./progress":"4C6LS","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"eSlTq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Badge = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, bg = "primary", pill = false, text, className, as: Component = "span", ...props }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "badge");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, _classnamesDefault.default)(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
    });
});
Badge.displayName = "Badge";
exports.default = Badge;

},{"classnames":"cqZ6k","react":"bH1AQ","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"4C6LS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressBar", ()=>ProgressBar);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function ProgressBar(props) {
    const hit = (props.complete || props.complete === undefined && props.value >= props.maxVal) && props.maxVal > 0;
    const defaultCol = props.colour2 || "var(--bs-secondary-bg)";
    const hitCol = props.colourHit || "var(--bs-success-bg-subtle)";
    const style = {
        "--progress": `${100 * props.value / props.maxVal}%`,
        "--col2": hit ? hitCol : defaultCol,
        "--col1": props.colour1 || "transparent"
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: `progress-custom rounded text-center border ${hit && !props.colourHit ? "border-success text-success" : ""} ${props.className || ""}`,
        style: style,
        children: props.label
    }, props.label, false, {
        fileName: "src/dashboard/reader/components/progress.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"bXAd8","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"5ySfJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Settings", ()=>Settings);
parcelHelpers.export(exports, "CheckSetting", ()=>CheckSetting);
parcelHelpers.export(exports, "RadioSetting", ()=>RadioSetting);
parcelHelpers.export(exports, "TabSetting", ()=>TabSetting);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _nav = require("react-bootstrap/Nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _toggleButton = require("react-bootstrap/ToggleButton");
var _toggleButtonDefault = parcelHelpers.interopDefault(_toggleButton);
var _toggleButtonGroup = require("react-bootstrap/ToggleButtonGroup");
var _toggleButtonGroupDefault = parcelHelpers.interopDefault(_toggleButtonGroup);
var _readerGraphic = require("../reader.graphic");
var _icons = require("./icons");
function Settings(props) {
    const disabled = props.settings.list === "incentives";
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("details", {
        id: "settings",
        className: "m2",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("summary", {
                className: "btn btn-primary",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                    className: "bi bi-gear-fill"
                }, void 0, false, {
                    fileName: "src/dashboard/reader/components/settings.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                id: "dropdown",
                className: "bg-body-secondary",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("small", {
                        className: "float-end",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                                variant: "outline-primary",
                                className: "px-2 py-1 small",
                                onClick: (e)=>{
                                    const curr_light = localStorage.getItem("dark_mode") == "light";
                                    localStorage.setItem("dark_mode", !curr_light ? "light" : "dark");
                                    dark();
                                },
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    className: "bi bi-moon-fill"
                                }, void 0, false, {
                                    fileName: "src/dashboard/reader/components/settings.tsx",
                                    lineNumber: 35,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/settings.tsx",
                                lineNumber: 31,
                                columnNumber: 17
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                                variant: "outline-primary",
                                className: "px-2 py-1 small",
                                disabled: disabled,
                                onClick: (e)=>{
                                    props.setSettings((0, _readerGraphic.defaultSettings));
                                },
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    className: "bi bi-arrow-counterclockwise"
                                }, void 0, false, {
                                    fileName: "src/dashboard/reader/components/settings.tsx",
                                    lineNumber: 38,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "src/dashboard/reader/components/settings.tsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h5", {
                        children: "Local Settings"
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(CheckSetting, {
                        name: "show",
                        title: "Filters",
                        current: props.settings.show,
                        disabled: disabled,
                        options: [
                            _icons.unread,
                            _icons.read
                        ],
                        onclick: (v)=>props.setSettings({
                                ...props.settings,
                                show: v
                            })
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(CheckSetting, {
                        name: "show",
                        current: props.settings.show,
                        disabled: disabled,
                        options: [
                            _icons.approved,
                            _icons.undecided,
                            _icons.censored
                        ],
                        onclick: (v)=>props.setSettings({
                                ...props.settings,
                                show: v
                            })
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RadioSetting, {
                        name: "dir",
                        title: "Sort by",
                        current: props.settings.dir,
                        disabled: disabled,
                        options: [
                            _icons.dsc,
                            _icons.asc
                        ],
                        onclick: (v)=>props.setSettings({
                                ...props.settings,
                                dir: v
                            })
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RadioSetting, {
                        name: "sort",
                        current: props.settings.sort,
                        disabled: disabled,
                        options: [
                            _icons.time,
                            _icons.money
                        ],
                        onclick: (v)=>props.setSettings({
                                ...props.settings,
                                sort: v
                            })
                    }, void 0, false, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/dashboard/reader/components/settings.tsx",
        lineNumber: 25,
        columnNumber: 12
    }, this);
}
function CheckSetting(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            props.title ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h6", {
                children: props.title
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 74,
                columnNumber: 24
            }, this) : "",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _toggleButtonGroupDefault.default), {
                type: "checkbox",
                name: props.name,
                value: props.current,
                onChange: props.onclick,
                children: props.options.map((o)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _toggleButtonDefault.default), {
                        id: `btn-${o.category}`,
                        value: o.category,
                        variant: "outline-primary",
                        disabled: props.disabled,
                        children: [
                            o.icon,
                            " ",
                            props.labels && o.action
                        ]
                    }, o.category, true, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function RadioSetting(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            props.title ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h6", {
                children: props.title
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 87,
                columnNumber: 24
            }, this) : "",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _toggleButtonGroupDefault.default), {
                type: "radio",
                name: props.name,
                value: props.current,
                onChange: props.onclick,
                children: props.options.map((o)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _toggleButtonDefault.default), {
                        id: `btn-${o.category}`,
                        value: o.category,
                        variant: "outline-primary",
                        disabled: props.disabled,
                        children: [
                            o.icon,
                            " ",
                            props.labels && o.action
                        ]
                    }, o.category, true, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function TabSetting(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            props.title ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h6", {
                children: props.title
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 101,
                columnNumber: 24
            }, this) : "",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _navDefault.default), {
                variant: "tabs",
                defaultActiveKey: props.current,
                children: props.options.map((o)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _navDefault.default).Item, {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _navDefault.default).Link, {
                            eventKey: o.category,
                            onClick: (e)=>props.onclick(o.category),
                            children: [
                                o.icon,
                                " ",
                                props.labels && o.action
                            ]
                        }, void 0, true, {
                            fileName: "src/dashboard/reader/components/settings.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this)
                    }, o.category, false, {
                        fileName: "src/dashboard/reader/components/settings.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "src/dashboard/reader/components/settings.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"bXAd8","react-bootstrap/Button":"bjhyB","react-bootstrap/Nav":"3Y89f","react-bootstrap/ToggleButton":"kXeJN","react-bootstrap/ToggleButtonGroup":"zx93P","../reader.graphic":"fFLzK","./icons":"ehfLh","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3Y89f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _all = require("prop-types-extra/lib/all");
var _allDefault = parcelHelpers.interopDefault(_all);
var _react = require("react");
var _uncontrollable = require("uncontrollable");
var _nav = require("@restart/ui/Nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _themeProvider = require("./ThemeProvider");
var _navbarContext = require("./NavbarContext");
var _navbarContextDefault = parcelHelpers.interopDefault(_navbarContext);
var _cardHeaderContext = require("./CardHeaderContext");
var _cardHeaderContextDefault = parcelHelpers.interopDefault(_cardHeaderContext);
var _navItem = require("./NavItem");
var _navItemDefault = parcelHelpers.interopDefault(_navItem);
var _navLink = require("./NavLink");
var _navLinkDefault = parcelHelpers.interopDefault(_navLink);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Nav = /*#__PURE__*/ _react.forwardRef((uncontrolledProps, ref)=>{
    const { as = "div", bsPrefix: initialBsPrefix, variant, fill = false, justify = false, navbar, navbarScroll, className, activeKey, ...props } = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
        activeKey: "onSelect"
    });
    const bsPrefix = (0, _themeProvider.useBootstrapPrefix)(initialBsPrefix, "nav");
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, _react.useContext)((0, _navbarContextDefault.default));
    const cardHeaderContext = (0, _react.useContext)((0, _cardHeaderContextDefault.default));
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) ({ cardHeaderBsPrefix } = cardHeaderContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navDefault.default), {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, _classnamesDefault.default)(className, {
            [bsPrefix]: !isNavbar,
            [`${navbarBsPrefix}-nav`]: isNavbar,
            [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
            [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
            [`${bsPrefix}-${variant}`]: !!variant,
            [`${bsPrefix}-fill`]: fill,
            [`${bsPrefix}-justified`]: justify
        }),
        ...props
    });
});
Nav.displayName = "Nav";
exports.default = Object.assign(Nav, {
    Item: (0, _navItemDefault.default),
    Link: (0, _navLinkDefault.default)
});

},{"classnames":"cqZ6k","prop-types-extra/lib/all":"huhs3","react":"bH1AQ","uncontrollable":"79o6Q","@restart/ui/Nav":"5Bht8","./ThemeProvider":"22w39","./NavbarContext":"d6mhW","./CardHeaderContext":"fGzwD","./NavItem":"4ln3E","./NavLink":"4Y3up","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"huhs3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = all;
var _createChainableTypeChecker = require("d69c03d3e91a1136");
var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function all() {
    for(var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++)validators[_key] = arguments[_key];
    function allPropTypes() {
        for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var error = null;
        validators.forEach(function(validator) {
            if (error != null) return;
            var result = validator.apply(undefined, args);
            if (result != null) error = result;
        });
        return error;
    }
    return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports["default"];

},{"d69c03d3e91a1136":"4zaBK"}],"4zaBK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ // Mostly taken from ReactPropTypes.
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;
        if (props[propName] == null) {
            if (isRequired) return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
            return null;
        }
        for(var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++)args[_key - 6] = arguments[_key];
        return validate.apply(undefined, [
            props,
            propName,
            componentNameSafe,
            location,
            propFullNameSafe
        ].concat(args));
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
module.exports = exports["default"];

},{}],"79o6Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useUncontrolled", ()=>(0, _hookDefault.default));
parcelHelpers.export(exports, "useUncontrolledProp", ()=>(0, _hook.useUncontrolledProp));
parcelHelpers.export(exports, "uncontrollable", ()=>(0, _uncontrollableDefault.default));
var _hook = require("./hook");
var _hookDefault = parcelHelpers.interopDefault(_hook);
var _uncontrollable = require("./uncontrollable");
var _uncontrollableDefault = parcelHelpers.interopDefault(_uncontrollable);

},{"./hook":"6prDR","./uncontrollable":"7bLk6","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"6prDR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useUncontrolledProp", ()=>useUncontrolledProp);
parcelHelpers.export(exports, "default", ()=>useUncontrolled);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectWithoutPropertiesLoose = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _react = require("react");
var _utils = require("./utils");
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
    var wasPropRef = (0, _react.useRef)(propValue !== undefined);
    var _useState = (0, _react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) setState(defaultValue);
    return [
        isProp ? propValue : stateValue,
        (0, _react.useCallback)(function(value) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            if (handler) handler.apply(void 0, [
                value
            ].concat(args));
            setState(value);
        }, [
            handler
        ])
    ];
}
function useUncontrolled(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[_utils.defaultKey(fieldName)], propsValue = _ref[fieldName], rest = (0, _objectWithoutPropertiesLooseDefault.default)(_ref, [
            _utils.defaultKey(fieldName),
            fieldName
        ].map(_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, _extendsDefault.default)({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}

},{"@babel/runtime/helpers/esm/extends":"6lCQB","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"7PyQg","react":"bH1AQ","./utils":"b9AyR","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"6lCQB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_extends);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"7PyQg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_objectWithoutPropertiesLoose);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"b9AyR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uncontrolledPropTypes", ()=>uncontrolledPropTypes);
parcelHelpers.export(exports, "isProp", ()=>isProp);
parcelHelpers.export(exports, "defaultKey", ()=>defaultKey);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ parcelHelpers.export(exports, "canAcceptRef", ()=>canAcceptRef);
var _invariant = require("invariant");
var _invariantDefault = parcelHelpers.interopDefault(_invariant);
var noop = function noop() {};
function readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
        }
    };
}
function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[defaultKey(prop)] = noop;
        var handler = controlledValues[prop];
        !(typeof handler === "string" && handler.trim().length) && (0, _invariantDefault.default)(false, "Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable", displayName, prop);
        propTypes[prop] = readOnlyPropType(handler, displayName);
    });
    return propTypes;
}
function isProp(props, prop) {
    return props[prop] !== undefined;
}
function defaultKey(key) {
    return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
    return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}

},{"invariant":"3zGiX","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3zGiX":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(condition, format, a, b, c, d, e, f) {
    if (format === undefined) throw new Error("invariant requires an error message argument");
    if (!condition) {
        var error;
        if (format === undefined) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = "Invariant Violation";
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;

},{}],"7bLk6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>uncontrollable);
var _objectWithoutPropertiesLoose = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _inheritsLoose = require("@babel/runtime/helpers/esm/inheritsLoose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactLifecyclesCompat = require("react-lifecycles-compat");
var _invariant = require("invariant");
var _invariantDefault = parcelHelpers.interopDefault(_invariant);
var _utils = require("./utils");
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) methods = [];
    var displayName = Component.displayName || Component.name || "Component";
    var canAcceptRef = _utils.canAcceptRef(Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map(_utils.defaultKey);
    !(canAcceptRef || !methods.length) && (0, _invariantDefault.default)(false, "[uncontrollable] stateless function components cannot pass through methods because they have no associated instances. Check component: " + displayName + ", " + "attempting to pass through methods: " + methods.join(", "));
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, _inheritsLooseDefault.default)(UncontrolledComponent, _React$Component);
        function UncontrolledComponent() {
            var _this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _React$Component.call.apply(_React$Component, [
                this
            ].concat(args)) || this;
            _this.handlers = Object.create(null);
            controlledProps.forEach(function(propName) {
                var handlerName = controlledValues[propName];
                var handleChange = function handleChange(value) {
                    if (_this.props[handlerName]) {
                        var _this$props;
                        _this._notifying = true;
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
                        (_this$props = _this.props)[handlerName].apply(_this$props, [
                            value
                        ].concat(args));
                        _this._notifying = false;
                    }
                    if (!_this.unmounted) _this.setState(function(_ref) {
                        var _extends2;
                        var values = _ref.values;
                        return {
                            values: (0, _extendsDefault.default)(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
                        };
                    });
                };
                _this.handlers[handlerName] = handleChange;
            });
            if (methods.length) _this.attachRef = function(ref) {
                _this.inner = ref;
            };
            var values = Object.create(null);
            controlledProps.forEach(function(key) {
                values[key] = _this.props[_utils.defaultKey(key)];
            });
            _this.state = {
                values: values,
                prevProps: {}
            };
            return _this;
        }
        var _proto = UncontrolledComponent.prototype;
        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
            //let setState trigger the update
            return !this._notifying;
        };
        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values, prevProps = _ref2.prevProps;
            var nextState = {
                values: (0, _extendsDefault.default)(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!_utils.isProp(props, key) && _utils.isProp(prevProps, key)) nextState.values[key] = props[_utils.defaultKey(key)];
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, _objectWithoutPropertiesLooseDefault.default)(_this$props2, [
                "innerRef"
            ]);
            PROPS_TO_OMIT.forEach(function(prop) {
                delete props[prop];
            });
            var newProps = {};
            controlledProps.forEach(function(propName) {
                var propValue = _this2.props[propName];
                newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
            });
            return (0, _reactDefault.default).createElement(Component, (0, _extendsDefault.default)({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }((0, _reactDefault.default).Component);
    (0, _reactLifecyclesCompat.polyfill)(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, _extendsDefault.default)({
        innerRef: function innerRef() {}
    }, _utils.uncontrolledPropTypes(controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if ((0, _reactDefault.default).forwardRef) {
        WrappedComponent = (0, _reactDefault.default).forwardRef(function(props, ref) {
            return (0, _reactDefault.default).createElement(UncontrolledComponent, (0, _extendsDefault.default)({}, props, {
                innerRef: ref,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                },
                __self: this
            }));
        });
        WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }
    WrappedComponent.ControlledComponent = Component;
    /**
   * useful when wrapping a Component and you want to control
   * everything
   */ WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
        if (additions === void 0) additions = {};
        return uncontrollable(newComponent, (0, _extendsDefault.default)({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}

},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"7PyQg","@babel/runtime/helpers/esm/extends":"6lCQB","@babel/runtime/helpers/esm/inheritsLoose":"ahSY6","react":"bH1AQ","react-lifecycles-compat":"guopW","invariant":"3zGiX","./utils":"b9AyR","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"ahSY6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_inheritsLoose);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, _setPrototypeOfJsDefault.default)(subClass, superClass);
}

},{"./setPrototypeOf.js":"biOUZ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"biOUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_setPrototypeOf);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"guopW":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyfill", ()=>polyfill);
function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) this.setState(state);
}
function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) throw new Error("Can only polyfill class components");
    if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") return Component;
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === "function") foundWillMountName = "componentWillMount";
    else if (typeof prototype.UNSAFE_componentWillMount === "function") foundWillMountName = "UNSAFE_componentWillMount";
    if (typeof prototype.componentWillReceiveProps === "function") foundWillReceivePropsName = "componentWillReceiveProps";
    else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
    if (typeof prototype.componentWillUpdate === "function") foundWillUpdateName = "componentWillUpdate";
    else if (typeof prototype.UNSAFE_componentWillUpdate === "function") foundWillUpdateName = "UNSAFE_componentWillUpdate";
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\n" + "https://fb.me/react-async-component-lifecycle-hooks");
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === "function") {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
        if (typeof prototype.componentDidUpdate !== "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"5Bht8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _querySelectorAll = require("dom-helpers/querySelectorAll");
var _querySelectorAllDefault = parcelHelpers.interopDefault(_querySelectorAll);
var _react = require("react");
var _useForceUpdate = require("@restart/hooks/useForceUpdate");
var _useForceUpdateDefault = parcelHelpers.interopDefault(_useForceUpdate);
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _navContext = require("./NavContext");
var _navContextDefault = parcelHelpers.interopDefault(_navContext);
var _selectableContext = require("./SelectableContext");
var _selectableContextDefault = parcelHelpers.interopDefault(_selectableContext);
var _tabContext = require("./TabContext");
var _tabContextDefault = parcelHelpers.interopDefault(_tabContext);
var _dataKey = require("./DataKey");
var _navItem = require("./NavItem");
var _navItemDefault = parcelHelpers.interopDefault(_navItem);
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "as",
    "onSelect",
    "activeKey",
    "role",
    "onKeyDown"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = ()=>{};
const EVENT_KEY_ATTR = (0, _dataKey.dataAttr)("event-key");
const Nav = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div", onSelect, activeKey, role, onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
    // and don't want to reset the set in the effect
    const forceUpdate = (0, _useForceUpdateDefault.default)();
    const needsRefocusRef = (0, _react.useRef)(false);
    const parentOnSelect = (0, _react.useContext)((0, _selectableContextDefault.default));
    const tabContext = (0, _react.useContext)((0, _tabContextDefault.default));
    let getControlledId, getControllerId;
    if (tabContext) {
        role = role || "tablist";
        activeKey = tabContext.activeKey;
        // TODO: do we need to duplicate these?
        getControlledId = tabContext.getControlledId;
        getControllerId = tabContext.getControllerId;
    }
    const listNode = (0, _react.useRef)(null);
    const getNextActiveTab = (offset)=>{
        const currentListNode = listNode.current;
        if (!currentListNode) return null;
        const items = (0, _querySelectorAllDefault.default)(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
        const activeChild = currentListNode.querySelector("[aria-selected=true]");
        if (!activeChild || activeChild !== document.activeElement) return null;
        const index = items.indexOf(activeChild);
        if (index === -1) return null;
        let nextIndex = index + offset;
        if (nextIndex >= items.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = items.length - 1;
        return items[nextIndex];
    };
    const handleSelect = (key, event)=>{
        if (key == null) return;
        onSelect == null || onSelect(key, event);
        parentOnSelect == null || parentOnSelect(key, event);
    };
    const handleKeyDown = (event)=>{
        onKeyDown == null || onKeyDown(event);
        if (!tabContext) return;
        let nextActiveChild;
        switch(event.key){
            case "ArrowLeft":
            case "ArrowUp":
                nextActiveChild = getNextActiveTab(-1);
                break;
            case "ArrowRight":
            case "ArrowDown":
                nextActiveChild = getNextActiveTab(1);
                break;
            default:
                return;
        }
        if (!nextActiveChild) return;
        event.preventDefault();
        handleSelect(nextActiveChild.dataset[(0, _dataKey.dataProp)("EventKey")] || null, event);
        needsRefocusRef.current = true;
        forceUpdate();
    };
    (0, _react.useEffect)(()=>{
        if (listNode.current && needsRefocusRef.current) {
            const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
            activeChild == null || activeChild.focus();
        }
        needsRefocusRef.current = false;
    });
    const mergedRef = (0, _useMergedRefsDefault.default)(ref, listNode);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _selectableContextDefault.default).Provider, {
        value: handleSelect,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navContextDefault.default).Provider, {
            value: {
                role,
                // used by NavLink to determine it's role
                activeKey: (0, _selectableContext.makeEventKey)(activeKey),
                getControlledId: getControlledId || noop,
                getControllerId: getControllerId || noop
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, {
                onKeyDown: handleKeyDown,
                ref: mergedRef,
                role: role
            }))
        })
    });
});
Nav.displayName = "Nav";
exports.default = Object.assign(Nav, {
    Item: (0, _navItemDefault.default)
});

},{"dom-helpers/querySelectorAll":"hkOok","react":"bH1AQ","@restart/hooks/useForceUpdate":"aItLs","@restart/hooks/useMergedRefs":"5WjUJ","./NavContext":"9DuFh","./SelectableContext":"aH3lW","./TabContext":"cupk4","./DataKey":"6e2Et","./NavItem":"1qwQI","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"hkOok":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>qsa);
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
    return toArray(element.querySelectorAll(selector));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"aItLs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useForceUpdate);
var _react = require("react");
function useForceUpdate() {
    // The toggling state value is designed to defeat React optimizations for skipping
    // updates when they are strictly equal to the last state value
    const [, dispatch] = (0, _react.useReducer)((state)=>!state, false);
    return dispatch;
}

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"5WjUJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeRefs", ()=>mergeRefs);
var _react = require("react");
const toFnRef = (ref)=>!ref || typeof ref === "function" ? ref : (value)=>{
        ref.current = value;
    };
function mergeRefs(refA, refB) {
    const a = toFnRef(refA);
    const b = toFnRef(refB);
    return (value)=>{
        if (a) a(value);
        if (b) b(value);
    };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */ function useMergedRefs(refA, refB) {
    return (0, _react.useMemo)(()=>mergeRefs(refA, refB), [
        refA,
        refB
    ]);
}
exports.default = useMergedRefs;

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"9DuFh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
const NavContext = /*#__PURE__*/ _react.createContext(null);
NavContext.displayName = "NavContext";
exports.default = NavContext;

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"aH3lW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeEventKey", ()=>makeEventKey);
var _react = require("react");
const SelectableContext = /*#__PURE__*/ _react.createContext(null);
const makeEventKey = (eventKey, href = null)=>{
    if (eventKey != null) return String(eventKey);
    return href || null;
};
exports.default = SelectableContext;

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"cupk4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
const TabContext = /*#__PURE__*/ _react.createContext(null);
exports.default = TabContext;

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"6e2Et":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ATTRIBUTE_PREFIX", ()=>ATTRIBUTE_PREFIX);
parcelHelpers.export(exports, "PROPERTY_PREFIX", ()=>PROPERTY_PREFIX);
parcelHelpers.export(exports, "dataAttr", ()=>dataAttr);
parcelHelpers.export(exports, "dataProp", ()=>dataProp);
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
    return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
    return `${PROPERTY_PREFIX}${property}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"1qwQI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useNavItem", ()=>useNavItem);
var _react = require("react");
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _navContext = require("./NavContext");
var _navContextDefault = parcelHelpers.interopDefault(_navContext);
var _selectableContext = require("./SelectableContext");
var _selectableContextDefault = parcelHelpers.interopDefault(_selectableContext);
var _button = require("./Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _dataKey = require("./DataKey");
var _tabContext = require("./TabContext");
var _tabContextDefault = parcelHelpers.interopDefault(_tabContext);
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "as",
    "active",
    "eventKey"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function useNavItem({ key, onClick, active, id, role, disabled }) {
    const parentOnSelect = (0, _react.useContext)((0, _selectableContextDefault.default));
    const navContext = (0, _react.useContext)((0, _navContextDefault.default));
    const tabContext = (0, _react.useContext)((0, _tabContextDefault.default));
    let isActive = active;
    const props = {
        role
    };
    if (navContext) {
        if (!role && navContext.role === "tablist") props.role = "tab";
        const contextControllerId = navContext.getControllerId(key != null ? key : null);
        const contextControlledId = navContext.getControlledId(key != null ? key : null);
        // @ts-ignore
        props[(0, _dataKey.dataAttr)("event-key")] = key;
        props.id = contextControllerId || id;
        isActive = active == null && key != null ? navContext.activeKey === key : active;
        /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */ if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
    }
    if (props.role === "tab") {
        props["aria-selected"] = isActive;
        if (!isActive) props.tabIndex = -1;
        if (disabled) {
            props.tabIndex = -1;
            props["aria-disabled"] = true;
        }
    }
    props.onClick = (0, _useEventCallbackDefault.default)((e)=>{
        if (disabled) return;
        onClick == null || onClick(e);
        if (key == null) return;
        if (parentOnSelect && !e.isPropagationStopped()) parentOnSelect(key, e);
    });
    return [
        props,
        {
            isActive
        }
    ];
}
const NavItem = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { as: Component = (0, _buttonDefault.default), active, eventKey } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [props, meta] = useNavItem(Object.assign({
        key: (0, _selectableContext.makeEventKey)(eventKey, options.href),
        active
    }, options));
    // @ts-ignore
    props[(0, _dataKey.dataAttr)("active")] = meta.isActive;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, Object.assign({}, options, props, {
        ref: ref
    }));
});
NavItem.displayName = "NavItem";
exports.default = NavItem;

},{"react":"bH1AQ","@restart/hooks/useEventCallback":"iMcLU","./NavContext":"9DuFh","./SelectableContext":"aH3lW","./Button":"6rXod","./DataKey":"6e2Et","./TabContext":"cupk4","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"iMcLU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useEventCallback);
var _react = require("react");
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
function useEventCallback(fn) {
    const ref = (0, _useCommittedRefDefault.default)(fn);
    return (0, _react.useCallback)(function(...args) {
        return ref.current && ref.current(...args);
    }, [
        ref
    ]);
}

},{"react":"bH1AQ","./useCommittedRef":"hgwx9","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"hgwx9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function useCommittedRef(value) {
    const ref = (0, _react.useRef)(value);
    (0, _react.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref;
}
exports.default = useCommittedRef;

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"d6mhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
"use client";
// TODO: check
const context = /*#__PURE__*/ _react.createContext(null);
context.displayName = "NavbarContext";
exports.default = context;

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"4ln3E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavItem = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "nav-item");
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
NavItem.displayName = "NavItem";
exports.default = NavItem;

},{"react":"bH1AQ","classnames":"cqZ6k","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"4Y3up":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _anchor = require("@restart/ui/Anchor");
var _anchorDefault = parcelHelpers.interopDefault(_anchor);
var _navItem = require("@restart/ui/NavItem");
var _selectableContext = require("@restart/ui/SelectableContext");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const NavLink = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, className, as: Component = (0, _anchorDefault.default), active, eventKey, disabled = false, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "nav-link");
    const [navItemProps, meta] = (0, _navItem.useNavItem)({
        key: (0, _selectableContext.makeEventKey)(eventKey, props.href),
        active,
        disabled,
        ...props
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, _classnamesDefault.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
    });
});
NavLink.displayName = "NavLink";
exports.default = NavLink;

},{"classnames":"cqZ6k","react":"bH1AQ","@restart/ui/Anchor":"9QtZY","@restart/ui/NavItem":"1qwQI","@restart/ui/SelectableContext":"aH3lW","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"9QtZY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTrivialHref", ()=>isTrivialHref);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/anchor-has-content */ var _react = require("react");
var _hooks = require("@restart/hooks");
var _button = require("./Button");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = [
    "onKeyDown"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function isTrivialHref(href) {
    return !href || href.trim() === "#";
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */ const Anchor = /*#__PURE__*/ _react.forwardRef((_ref, ref)=>{
    let { onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [buttonProps] = (0, _button.useButtonProps)(Object.assign({
        tagName: "a"
    }, props));
    const handleKeyDown = (0, _hooks.useEventCallback)((e)=>{
        buttonProps.onKeyDown(e);
        onKeyDown == null || onKeyDown(e);
    });
    if (isTrivialHref(props.href) || props.role === "button") return /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", Object.assign({
        ref: ref
    }, props, buttonProps, {
        onKeyDown: handleKeyDown
    }));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", Object.assign({
        ref: ref
    }, props, {
        onKeyDown: onKeyDown
    }));
});
Anchor.displayName = "Anchor";
exports.default = Anchor;

},{"react":"bH1AQ","@restart/hooks":"1j9j8","./Button":"6rXod","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"1j9j8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallbackRef", ()=>(0, _useCallbackRefDefault.default));
parcelHelpers.export(exports, "useCommittedRef", ()=>(0, _useCommittedRefDefault.default));
parcelHelpers.export(exports, "useEventCallback", ()=>(0, _useEventCallbackDefault.default));
parcelHelpers.export(exports, "useEventListener", ()=>(0, _useEventListenerDefault.default));
parcelHelpers.export(exports, "useGlobalListener", ()=>(0, _useGlobalListenerDefault.default));
parcelHelpers.export(exports, "useInterval", ()=>(0, _useIntervalDefault.default));
parcelHelpers.export(exports, "useRafInterval", ()=>(0, _useRafIntervalDefault.default));
parcelHelpers.export(exports, "useMergeState", ()=>(0, _useMergeStateDefault.default));
parcelHelpers.export(exports, "useMergeStateFromProps", ()=>(0, _useMergeStateFromPropsDefault.default));
parcelHelpers.export(exports, "useMounted", ()=>(0, _useMountedDefault.default));
parcelHelpers.export(exports, "usePrevious", ()=>(0, _usePreviousDefault.default));
parcelHelpers.export(exports, "useImage", ()=>(0, _useImageDefault.default));
parcelHelpers.export(exports, "useResizeObserver", ()=>(0, _useResizeObserverDefault.default));
var _useCallbackRef = require("./useCallbackRef");
var _useCallbackRefDefault = parcelHelpers.interopDefault(_useCallbackRef);
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
var _useEventCallback = require("./useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _useEventListener = require("./useEventListener");
var _useEventListenerDefault = parcelHelpers.interopDefault(_useEventListener);
var _useGlobalListener = require("./useGlobalListener");
var _useGlobalListenerDefault = parcelHelpers.interopDefault(_useGlobalListener);
var _useInterval = require("./useInterval");
var _useIntervalDefault = parcelHelpers.interopDefault(_useInterval);
var _useRafInterval = require("./useRafInterval");
var _useRafIntervalDefault = parcelHelpers.interopDefault(_useRafInterval);
var _useMergeState = require("./useMergeState");
var _useMergeStateDefault = parcelHelpers.interopDefault(_useMergeState);
var _useMergeStateFromProps = require("./useMergeStateFromProps");
var _useMergeStateFromPropsDefault = parcelHelpers.interopDefault(_useMergeStateFromProps);
var _useMounted = require("./useMounted");
var _useMountedDefault = parcelHelpers.interopDefault(_useMounted);
var _usePrevious = require("./usePrevious");
var _usePreviousDefault = parcelHelpers.interopDefault(_usePrevious);
var _useImage = require("./useImage");
var _useImageDefault = parcelHelpers.interopDefault(_useImage);
var _useResizeObserver = require("./useResizeObserver");
var _useResizeObserverDefault = parcelHelpers.interopDefault(_useResizeObserver);

},{"./useCallbackRef":"2DH3K","./useCommittedRef":"hgwx9","./useEventCallback":"iMcLU","./useEventListener":"ezrbP","./useGlobalListener":"bu8YP","./useInterval":"bPIdD","./useRafInterval":"dGtyL","./useMergeState":"1tQnC","./useMergeStateFromProps":"lKnyW","./useMounted":"2QbMb","./usePrevious":"2gzkc","./useImage":"9RRp8","./useResizeObserver":"10Kod","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2DH3K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useCallbackRef);
var _react = require("react");
function useCallbackRef() {
    return (0, _react.useState)(null);
}

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"ezrbP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useEventListener);
var _react = require("react");
var _useEventCallback = require("./useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
function useEventListener(eventTarget, event, listener, capture = false) {
    const handler = (0, _useEventCallbackDefault.default)(listener);
    (0, _react.useEffect)(()=>{
        const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
        target.addEventListener(event, handler, capture);
        return ()=>target.removeEventListener(event, handler, capture);
    }, [
        eventTarget
    ]);
}

},{"react":"bH1AQ","./useEventCallback":"iMcLU","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"bu8YP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useGlobalListener);
var _useEventListener = require("./useEventListener");
var _useEventListenerDefault = parcelHelpers.interopDefault(_useEventListener);
var _react = require("react");
function useGlobalListener(event, handler, capture = false) {
    const documentTarget = (0, _react.useCallback)(()=>document, []);
    return (0, _useEventListenerDefault.default)(documentTarget, event, handler, capture);
}

},{"./useEventListener":"ezrbP","react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"bPIdD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */ /**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [paused, setPaused] = useState(false)
 *  const [timer, setTimer] = useState(0)
 *
 *  useInterval(() => setTimer(i => i + 1), 1000, paused)
 *
 *  return (
 *    <span>
 *      {timer} seconds past
 *
 *      <button onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause' }</button>
 *    </span>
 * )
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 */ /**
 * Creates a pausable `setInterval` that _fires_ immediately and is
 * properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [timer, setTimer] = useState(-1)
 *  useInterval(() => setTimer(i => i + 1), 1000, false, true)
 *
 *  // will update to 0 on the first effect
 *  return <span>{timer} seconds past</span>
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 * @param runImmediately Whether to run the function immediately on mount or unpause
 * rather than waiting for the first interval to elapse
 *

 */ function useInterval(fn, ms, paused = false, runImmediately = false) {
    let handle;
    const fnRef = (0, _useCommittedRefDefault.default)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, _useCommittedRefDefault.default)(paused);
    const tick = ()=>{
        if (pausedRef.current) return;
        fnRef.current();
        schedule(); // eslint-disable-line no-use-before-define
    };
    const schedule = ()=>{
        clearTimeout(handle);
        handle = setTimeout(tick, ms);
    };
    (0, _react.useEffect)(()=>{
        if (runImmediately) tick();
        else schedule();
        return ()=>clearTimeout(handle);
    }, [
        paused,
        runImmediately
    ]);
}
exports.default = useInterval;

},{"react":"bH1AQ","./useCommittedRef":"hgwx9","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"dGtyL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useCommittedRef = require("./useCommittedRef");
var _useCommittedRefDefault = parcelHelpers.interopDefault(_useCommittedRef);
function useRafInterval(fn, ms, paused = false) {
    let handle;
    let start = new Date().getTime();
    const fnRef = (0, _useCommittedRefDefault.default)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, _useCommittedRefDefault.default)(paused);
    function loop() {
        const current = new Date().getTime();
        const delta = current - start;
        if (pausedRef.current) return;
        if (delta >= ms && fnRef.current) {
            fnRef.current();
            start = new Date().getTime();
        }
        cancelAnimationFrame(handle);
        handle = requestAnimationFrame(loop);
    }
    (0, _react.useEffect)(()=>{
        handle = requestAnimationFrame(loop);
        return ()=>cancelAnimationFrame(handle);
    }, []);
}
exports.default = useRafInterval;

},{"react":"bH1AQ","./useCommittedRef":"hgwx9","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"1tQnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMergeState);
var _react = require("react");
function useMergeState(initialState) {
    const [state, setState] = (0, _react.useState)(initialState);
    const updater = (0, _react.useCallback)((update)=>{
        if (update === null) return;
        if (typeof update === "function") setState((state)=>{
            const nextState = update(state);
            return nextState == null ? state : Object.assign({}, state, nextState);
        });
        else setState((state)=>Object.assign({}, state, update));
    }, [
        setState
    ]);
    return [
        state,
        updater
    ];
}

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"lKnyW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMergeStateFromProps);
var _useMergeState = require("./useMergeState");
var _useMergeStateDefault = parcelHelpers.interopDefault(_useMergeState);
function useMergeStateFromProps(props, gDSFP, initialState) {
    const [state, setState] = (0, _useMergeStateDefault.default)(initialState);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [
        state,
        setState
    ];
}

},{"./useMergeState":"1tQnC","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2QbMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMounted);
var _react = require("react");
function useMounted() {
    const mounted = (0, _react.useRef)(true);
    const isMounted = (0, _react.useRef)(()=>mounted.current);
    (0, _react.useEffect)(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2gzkc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>usePrevious);
var _react = require("react");
function usePrevious(value) {
    const ref = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        ref.current = value;
    });
    return ref.current;
}

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"9RRp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useImage);
var _react = require("react");
function useImage(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, _react.useState)({
        image: null,
        error: null
    });
    (0, _react.useEffect)(()=>{
        if (!imageOrUrl) return undefined;
        let image;
        if (typeof imageOrUrl === "string") {
            image = new Image();
            if (crossOrigin) image.crossOrigin = crossOrigin;
            image.src = imageOrUrl;
        } else {
            image = imageOrUrl;
            if (image.complete && image.naturalHeight > 0) {
                setState({
                    image,
                    error: null
                });
                return;
            }
        }
        function onLoad() {
            setState({
                image,
                error: null
            });
        }
        function onError(error) {
            setState({
                image,
                error
            });
        }
        image.addEventListener("load", onLoad);
        image.addEventListener("error", onError);
        return ()=>{
            image.removeEventListener("load", onLoad);
            image.removeEventListener("error", onError);
        };
    }, [
        imageOrUrl,
        crossOrigin
    ]);
    return state;
}

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"10Kod":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useResizeObserver);
var _react = require("react");
var _useIsomorphicEffect = require("./useIsomorphicEffect");
var _useIsomorphicEffectDefault = parcelHelpers.interopDefault(_useIsomorphicEffect);
const targetMap = new WeakMap();
let resizeObserver;
function getResizeObserver() {
    // eslint-disable-next-line no-return-assign
    return resizeObserver = resizeObserver || new window.ResizeObserver((entries)=>{
        entries.forEach((entry)=>{
            const handler = targetMap.get(entry.target);
            if (handler) handler(entry.contentRect);
        });
    });
}
function useResizeObserver(element) {
    const [rect, setRect] = (0, _react.useState)(null);
    (0, _useIsomorphicEffectDefault.default)(()=>{
        if (!element) return;
        getResizeObserver().observe(element);
        setRect(element.getBoundingClientRect());
        targetMap.set(element, (rect)=>{
            setRect(rect);
        });
        return ()=>{
            targetMap.delete(element);
        };
    }, [
        element
    ]);
    return rect;
}

},{"react":"bH1AQ","./useIsomorphicEffect":"D1m8p","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"D1m8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var global = arguments[3];
const isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
const isDOM = typeof document !== "undefined";
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */ exports.default = isDOM || isReactNative ? (0, _react.useLayoutEffect) : (0, _react.useEffect);

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"kXeJN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _button = require("./Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const noop = ()=>undefined;
const ToggleButton = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, name, className, checked, type, onChange, value, disabled, id, inputRef, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "btn-check");
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                className: bsPrefix,
                name: name,
                type: type,
                value: value,
                ref: inputRef,
                autoComplete: "off",
                checked: !!checked,
                disabled: !!disabled,
                onChange: onChange || noop,
                id: id
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonDefault.default), {
                ...props,
                ref: ref,
                className: (0, _classnamesDefault.default)(className, disabled && "disabled"),
                type: undefined,
                role: undefined,
                as: "label",
                htmlFor: id
            })
        ]
    });
});
ToggleButton.displayName = "ToggleButton";
exports.default = ToggleButton;

},{"classnames":"cqZ6k","react":"bH1AQ","./ThemeProvider":"22w39","./Button":"bjhyB","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"zx93P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _invariant = require("invariant");
var _invariantDefault = parcelHelpers.interopDefault(_invariant);
var _uncontrollable = require("uncontrollable");
var _createChainedFunction = require("./createChainedFunction");
var _createChainedFunctionDefault = parcelHelpers.interopDefault(_createChainedFunction);
var _elementChildren = require("./ElementChildren");
var _buttonGroup = require("./ButtonGroup");
var _buttonGroupDefault = parcelHelpers.interopDefault(_buttonGroup);
var _toggleButton = require("./ToggleButton");
var _toggleButtonDefault = parcelHelpers.interopDefault(_toggleButton);
var _jsxRuntime = require("react/jsx-runtime");
const ToggleButtonGroup = /*#__PURE__*/ _react.forwardRef((props, ref)=>{
    const { children, type = "radio", name, value, onChange, vertical = false, ...controlledProps } = (0, _uncontrollable.useUncontrolled)(props, {
        value: "onChange"
    });
    const getValues = ()=>value == null ? [] : [].concat(value);
    const handleToggle = (inputVal, event)=>{
        if (!onChange) return;
        const values = getValues();
        const isActive = values.indexOf(inputVal) !== -1;
        if (type === "radio") {
            if (!isActive) onChange(inputVal, event);
            return;
        }
        if (isActive) onChange(values.filter((n)=>n !== inputVal), event);
        else onChange([
            ...values,
            inputVal
        ], event);
    };
    !(type !== "radio" || !!name) && (0, _invariantDefault.default)(false, 'A `name` is required to group the toggle buttons when the `type` is set to "radio"');
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonGroupDefault.default), {
        ...controlledProps,
        ref: ref,
        vertical: vertical,
        children: (0, _elementChildren.map)(children, (child)=>{
            const values = getValues();
            const { value: childVal, onChange: childOnChange } = child.props;
            const handler = (e)=>handleToggle(childVal, e);
            return /*#__PURE__*/ _react.cloneElement(child, {
                type,
                name: child.name || name,
                checked: values.indexOf(childVal) !== -1,
                onChange: (0, _createChainedFunctionDefault.default)(childOnChange, handler)
            });
        })
    });
});
exports.default = Object.assign(ToggleButtonGroup, {
    Button: (0, _toggleButtonDefault.default)
});

},{"react":"bH1AQ","invariant":"3zGiX","uncontrollable":"79o6Q","./createChainedFunction":"cQo9X","./ElementChildren":"ezR8x","./ButtonGroup":"eXSUu","./ToggleButton":"kXeJN","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"cQo9X":[function(require,module,exports) {
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function createChainedFunction(...funcs) {
    return funcs.filter((f)=>f != null).reduce((acc, f)=>{
        if (typeof f !== "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        if (acc === null) return f;
        return function chainedFunction(...args) {
            // @ts-ignore
            acc.apply(this, args);
            // @ts-ignore
            f.apply(this, args);
        };
    }, null);
}
exports.default = createChainedFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"ezR8x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "forEach", ()=>forEach);
parcelHelpers.export(exports, "hasChildOfType", ()=>hasChildOfType);
var _react = require("react");
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function map(children, func) {
    let index = 0;
    return _react.Children.map(children, (child)=>/*#__PURE__*/ _react.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function forEach(children, func) {
    let index = 0;
    _react.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ _react.isValidElement(child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function hasChildOfType(children, type) {
    return _react.Children.toArray(children).some((child)=>/*#__PURE__*/ _react.isValidElement(child) && child.type === type);
}

},{"react":"bH1AQ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"eXSUu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const ButtonGroup = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, size, vertical = false, className, role = "group", // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...rest }, ref)=>{
    const prefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, "btn-group");
    let baseClass = prefix;
    if (vertical) baseClass = `${prefix}-vertical`;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ...rest,
        ref: ref,
        role: role,
        className: (0, _classnamesDefault.default)(className, baseClass, size && `${prefix}-${size}`)
    });
});
ButtonGroup.displayName = "ButtonGroup";
exports.default = ButtonGroup;

},{"classnames":"cqZ6k","react":"bH1AQ","./ThemeProvider":"22w39","react/jsx-runtime":"7zOiV","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}]},["fFLzK"], "fFLzK", "parcelRequire2ba7")

//# sourceMappingURL=reader.graphic.2c3c0535.js.map
