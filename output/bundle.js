/******/ (function(modules) { // webpackBootstrap
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

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(34);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {__global= typeof window === 'object' ? window : global;
	var hwc_conf=__global.hwc_conf={};
	
	/**
	 * CONFIGURE IT
	 */
	
	hwc_conf.path_core = "modules/hw-core/";
	
	/**
	 * STOP CONFIGURATION
	 */
	
	
	hwc_conf.paths={};
	hwc_conf.paths.hwc_js_kernel              = hwc_conf.path_core+"js-kernel/index";
	hwc_conf.paths.hwc_js_lib_class_index     = hwc_conf.path_core+"js-lib-class/index";
	hwc_conf.paths.hwc_js_lib_class_include   = hwc_conf.path_core+"js-lib-class/include";
	hwc_conf.paths.hwc_js_lib_class_class     = hwc_conf.path_core+"js-lib-class/Class";
	hwc_conf.paths.hwc_js_lib_class_fsyntax   = hwc_conf.path_core+"js-lib-class/fSyntax";
	hwc_conf.paths.hwc_js_lib_common_index          = hwc_conf.path_core+"js-lib-common/index";
	hwc_conf.paths.hwc_js_lib_common_include          = hwc_conf.path_core+"js-lib-common/include";
	hwc_conf.paths.hwc_js_lib_common_array          = hwc_conf.path_core+"js-lib-common/Array";
	hwc_conf.paths.hwc_js_lib_common_async          = hwc_conf.path_core+"js-lib-common/Async";
	hwc_conf.paths.hwc_js_lib_common_objutils          = hwc_conf.path_core+"js-lib-common/ObjUtils";
	hwc_conf.paths.hwc_js_lib_common_object          = hwc_conf.path_core+"js-lib-common/Object";
	hwc_conf.paths.hwc_js_lib_common_singleton          = hwc_conf.path_core+"js-lib-common/Singleton";
	hwc_conf.paths.hwc_js_lib_common_string          = hwc_conf.path_core+"js-lib-common/String";
	hwc_conf.paths.hwc_js_lib_common_var          = hwc_conf.path_core+"js-lib-common/Var";
	hwc_conf.paths.hwc_js_lib_filesystem_index          = hwc_conf.path_core+"js-lib-filesystem/index";
	hwc_conf.paths.hwc_js_lib_filesystem_include          = hwc_conf.path_core+"js-lib-filesystem/include"
	hwc_conf.paths.hwc_js_lib_filesystem_path          = hwc_conf.path_core+"js-lib-filesystem/Path"
	hwc_conf.paths.hwc_js_lib_browser_common_index  = hwc_conf.path_core+"js-lib-browser-common/index";
	hwc_conf.paths.hwc_js_lib_browser_common_browser = hwc_conf.path_core+"js-lib-browser-common/Browser";
	hwc_conf.paths.hwc_js_lib_browser_common_loader  = hwc_conf.path_core+"js-lib-browser-common/Loader";
	hwc_conf.paths.hwc_js_modules_path        = hwc_conf.path_core+"js-modules/";
	hwc_conf.paths.hwc_js_modules_weakmap     = hwc_conf.paths.hwc_js_modules_path + "weakmap/index";
	hwc_conf.paths.hwc_js_modules_rsvp        = hwc_conf.paths.hwc_js_modules_path + "rsvp/index";
	hwc_conf.paths.hwc_js_modules_jquery      = hwc_conf.paths.hwc_js_modules_path + "jquery/index";
	hwc_conf.paths.hwc_js_modules_requirenode      = hwc_conf.paths.hwc_js_modules_path + "requirejs/r/index";
	hwc_conf.paths.hwc_js_modules_requirejs      = hwc_conf.paths.hwc_js_modules_path + "requirejs/requirejs/index";
	
	if (typeof module !== 'undefined' && module.exports) {
	    // for nodejs environments
	    module.exports=hwc_conf;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(18)
	], __WEBPACK_LOCAL_MODULE_0__ = (function() {
	    return ngxt;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	
	// namespace
	var ngxt={
	    core: {},
	    router: {},
	    angular: window.angular
	};
	
	ngxt.version={
	    full: "0.0.9",
	    codeName: "first-composition"
	};
	
	// =========================
	// SHARED PRIVATE VAR
	// =========================
	
	var injector                 = angular.injector(['ng']);
	var $q                       = injector.get('$q');
	var $compiler                = injector.get('$compile');
	var $parse                   = injector.get('$parse');
	var _instances  = [];
	
	//==========================
	//
	//         XT CORE
	//
	//==========================
	
	// =========================
	// CLASSES
	// =========================
	
	var Component = ngxt.core.Component = function (opt) {
	    if (!(this instanceof ngxt.core.Component)) {
	        return new ngxt.core.Component(opt);
	    }
	
	    this.opt=opt;
	
	    return this;
	};
	
	var _cl = function(properties) {
	    var that = this;
	    var deferred = $q.defer();
	
	    !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__]; (function() {
	       var $=hwc;
	
	       var _prop=null;
	
	        if (Array.isArray(properties)) {
	            // original syntax requires an array instead of object
	            _prop=properties;
	        } else {
	            // angular 2 syntax
	            _prop = [
	               $.public(properties)
	            ];
	        }
	
	       var _Class=$.public.class(_prop);
	       deferred.resolve(new _Class);
	    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	
	    this.constructor=properties.constructor;
	    this.obj=deferred.promise;
	
	    return this;
	};
	
	Component.prototype.Class=_cl;
	
	    /**
	 * Module class constructor ( Angular 2 syntax )
	 * @param {type} parentModule
	 * @param {type} opts
	 * @returns {index_L1.ngxt.core.Module}
	 */
	var Module = ngxt.core.Module = function (opts) {
	    if (!(this instanceof ngxt.core.Module)) {
	        return new ngxt.core.Module(opts);
	    }
	
	    opts.bootstrap=opts.bootstrap || [];
	    opts.declarations = opts.declarations || [];
	    this.imports=opts.imports;
	
	    var that = this;
	
	    this.bootstrap=[];
	    this.ngModules=[];
	
	    var allModules=opts.declarations;
	
	    opts.bootstrap.forEach(function(el) {
	        if (allModules.indexOf(el)<0) {
	            allModules.push(el);
	        }
	    });
	
	    allModules.forEach(function(ngModule) {
	        var _module=null;
	
	        if (typeof ngModule === 'string') {
	            // init an angular module
	            _module = that.ngModules[ngModule]=ngxt.angular.module(ngModule,opts.imports);
	        } else if (ngModule instanceof ngxt.core.Component) {
	            var mod=ngxt.angular.module(ngModule.opt.selector,opts.imports);
	            mod.ngxt=that;
	            mod.config(ngModule.constructor)
	            .run(function() {
	                ngxt.core.component(ngModule.opt);
	            });
	
	            that.ngModules[mod.name]=_module=mod;
	        } else {
	            _module = that.ngModules[ngModule.name]=ngModule;
	        }
	
	        if (_module) {
	            _module.ngxt=this;
	
	            _instances[_module.name] = _module;
	
	            if (opts.bootstrap.indexOf(ngModule)>=0)
	                that.bootstrap[_module.name]=_module;
	        }
	    });
	
	    return this;
	};
	
	Module.prototype.Class= function(properties) {
	    _cl.call(this,properties);
	
	    // reserved module
	    var mod=ngxt.angular.module("NgxtMainModule",this.imports);
	    mod.config(this.constructor)
	    .run(function() {
	    });
	
	    return this;
	}
	
	ngxt.core.bootstrapModule = function(module) {
	    document.addEventListener('DOMContentLoaded', function() {
	        var list=module.bootstrap;
	        for (var k in list){
	            ngxt.angular.bootstrap(document.getElementsByTagName(k), [k]);
	        };
	    });
	};
	
	// =========================
	// PUBLIC STATIC
	// =========================
	
	/**
	 * Controller factory
	 * @param {type} name
	 * @param {type} def
	 * @param {type} scripts
	 * @returns {unresolved}
	 */
	ngxt.core.controller = function (name, def) {
	    if (scripts == null) {
	        scripts = [];
	    }
	
	    //require(scripts, function () {
	    return ngxt.core.$controllerProvider(name, def);
	    //});
	};
	
	/**
	 * Module factory ( angular 1 syntax )
	 * @param {type} module
	 * @param {type} opts
	 * @returns {index_L1.ngxt.core}
	 */
	ngxt.core.module = function(module,deps) {
	    if (deps == null && typeof module === 'string') {
	        return _instances[module];
	    }
	
	    var _ngxt=new ngxt.core.Module({
	        imports: deps,
	        declarations: [module],
	        bootstrap: null
	    });
	
	    return _instances[module];
	};
	
	/**
	 * Component factory for ngRouter
	 * @param {type} options
	 * @returns {unresolved}
	 */
	ngxt.core.routeComponent = function (options) {
	    console.log("Creating component for router with template: (" + options.templateUrl + ") -- (" + options.scriptUrls + ") -- (" + options.styleUrls + ")");
	
	    if (options.scriptUrls || options.styleUrls) {
	        options.resolve = {
	            template: function ($rootScope) {
	                var e=null;
	                e=$rootScope.$on( "$routeChangeStart", function(event, next, current) {
	                    _cleanComponent(options);
	                    e();
	                });
	
	                return ngxt.core.lazyLoad(options.scriptUrls, options.styleUrls);
	            }
	        };
	    }
	
	    return options;
	};
	
	/**
	* Component Factory
	* @param {type} options
	* @returns {unresolved}
	*/
	ngxt.core.component = function (options) {
	    // overloading: automatic switch to routeComponent if any selector defined
	    if (options != null && options.selector == null) {
	        return ngxt.core.routeComponent(options); // for routes
	    }
	
	    console.log("Creating component with template: (" + options.templateUrl + ") -- (" + options.scriptUrls + ") -- (" + options.styleUrls + ")");
	
	    var deferred = $q.defer();
	
	    if (!options.restrict) {
	        options.restrict = "EAC";
	    }
	
	    if (options.scriptUrls || options.styleUrls) {
	        options.link = {
	            post: function (scope, element, attrs) {
	                scope.ngxtComp = options;
	
	                element.on('$destroy', function (event) {
	                    _cleanComponent(scope.ngxtComp);
	                });
	
	                scope.locals = {};
	                scope.locals.$scope = scope;
	
	                return ngxt.core.lazyLoad(options.scriptUrls, options.styleUrls, true).then(function () {
	                    scope;
	                    deferred.resolve();
	                });
	            }
	        };
	
	        if (typeof options.controller === 'string') {
	            // Async controller
	            var ctrlName=options.controller;
	            options.controller=["$scope","$controller",function($scope,$controller) {
	                return deferred.promise.then(function() {
	                    return $controller(ctrlName,$scope.locals);
	                });
	            }];
	        }
	    }
	
	    ngxt.core.$compileProvider.directive.call(null, options.selector, function ($compile) {
	        return options;
	    });
	
	    var _el = _searchElement(options.selector,options.restrict);
	    _el.forEach(function(e) {
	        var el = angular.element(e);
	        ngxt.core.$compile(el)({});
	    });
	};
	
	
	ngxt.core.removeComponent = function () {
	    console.log("Not implemented yet");
	};
	
	/**
	 * Alias for lazyLoad function to import scripts only
	 */
	ngxt.core.import = function (jsFiles) {
	    return ngxt.core.lazyLoad(jsFiles);
	}
	
	ngxt.core.lazyLoad = function (jsFiles, cssFiles) {
	    var deferred = $q.defer();
	
	    if (!jsFiles && !cssFiles) {
	        deferred.resolve();
	
	        return deferred.promise;
	    }
	
	    !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__]; (function () {
	        var $=hwc;
	
	        var toLoad = [];
	
	        if (jsFiles) {
	            if (typeof jsFiles === 'string') {
	                toLoad.push(jsFiles);
	            } else {
	                toLoad = toLoad.concat(jsFiles);
	            }
	        }
	
	        if (cssFiles) {
	            if (typeof cssFiles === 'string') {
	                toLoad.push(cssFiles);
	            } else {
	                toLoad = toLoad.concat(cssFiles);
	            }
	        }
	
	        $.Browser.Loader.load(toLoad, function () {
	            deferred.resolve(arguments);
	        });
	    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	
	    return deferred.promise;
	};
	
	//==========================
	//
	//          XT ROUTER
	//
	//==========================
	
	
	var _routerExists = function() {
	    try {
	        angular.module("ngRoute");
	
	        return true;
	    } catch(err) {
	        return false;
	    }
	}
	
	if (_routerExists()) {
	    ngxt.router = function() {
	
	    };
	
	    ngxt.router.config = function (routes) {
	        var provider=ngxt.router.$routeProvider;
	
	        routes.forEach(function(r) {
	            var path = r.path;
	            var component= r.component;
	            delete r.component;
	            delete r.path;
	            var opt = component.opt;
	            ngxt.angular.extend(opt, r);
	
	            var options=ngxt.core.routeComponent(opt);
	
	
	            provider.when(path,options);
	        });
	    };
	}
	
	//==========================
	//
	//          ANGULAR
	//
	//==========================
	
	// =============================
	// CREATE PROVIDER FOR ANGULAR 1
	// =============================
	
	switch (angular.version.major) {
	    // SUPPORT FOR ANGULAR 1
	    case 1:
	        ngxt.core.$get = ["$compile","$controller", function ($compile,$controller) {
	                // workaround: should return value of a provider instead
	                return ngxt.core;
	            }];
	
	        ngxt.router.$get = ["$compile","$controller", function ($compile,$controller) {
	                // workaround: should return value of a provider instead
	                return ngxt.router;
	            }];
	
	        var _deps=[];
	
	        if (_routerExists()) {
	            _deps.push("ngRoute");
	        }
	
	        var ngxtModule=ngxt.angular.module("AngularXT", _deps);
	
	        ngxtModule.provider('$ngxt', [ "$compileProvider","$controllerProvider", function ($compileProvider,$controllerProvider) {
	            ngxt.core.$controllerProvider = $controllerProvider.register;
	            ngxt.core.$compileProvider    = $compileProvider;
	            // a provider is a singleton for the entire app
	            // so we can pass the static object
	            return ngxt.core;
	        }])
	        .run(["$compile",function($compile) {
	            ngxt.core.$compile=$compile;
	            return ngxt.core;
	        }]);
	
	        if (_routerExists()) {
	            ngxtModule.provider('$ngxtRouter', [ "$routeProvider", function ($routeProvider) {
	                ngxt.router.$routeProvider=$routeProvider;
	                return ngxt.router;
	            }]);
	        }
	    break;
	}
	
	// =========================
	// SHARED PRIVATE METHODS
	// =========================
	
	
	var _cleanComponent = function (component) {
	    console.log("Removing component '" + component.selector + "' and its style: (" + component.styleUrls + ")");
	
	    !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__]; (function () {
	        var $=hwc;
	        $.Browser.Loader.removeCss(component.styleUrls);
	    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	};
	
	var _hyphenToCamelCase = function (s) {
	    return s.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
	};
	
	var _camelCaseToHypen = function(s) {
	    return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	};
	
	var _searchElement = function(element,restriction) {
	    if (restriction && !/[EACM]/.test(restriction)) {
	        throw 'Restrict property '+restriction+' is invalid';
	    }
	
	    var elements=[];
	
	    if (restriction.indexOf('A')>=0) {
	        var el=_camelCaseToHypen(element);
	        var res=document.querySelectorAll("["+el+"]");
	        res.length > 0 && ( elements = elements.concat(res));
	    }
	
	    if (restriction.indexOf('C')>=0) {
	        var res=document.querySelectorAll("."+element);
	        res.length > 0  && ( elements = elements.concat(res));
	    }
	
	    if (restriction.indexOf('E')>=0) {
	        var el=_camelCaseToHypen(element);
	        var res=document.querySelectorAll(el);
	        res.length > 0  && ( elements = elements.concat(res));
	    }
	
	    // TODO: comments (M)
	
	    return elements;
	};
	
	// we can access to ngxt object everywhere
	window.ngxt = window.angularxt = ngxt;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(14),
	    __webpack_require__(15),
	    __webpack_require__(17)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, __dirname) {'use strict';
	/*
	 * VERY FIRST DEFINES AND LEGACY
	 * TODO: old code, re-organizing or remove
	 */
	
	//if (typeof __webpack_require__ === "function") {
	//    require("../js-modules/requirejs/requirejs/require.js");
	//}
	
	// ONLY FOR IE8-
	if (!Array.prototype.indexOf) {
	    Array.prototype.indexOf = function (what, i) {
	        i = i || 0;
	        var L = this.length;
	        while (i < L) {
	            if (this[i] === what)
	                return i;
	            ++i;
	        }
	        return -1;
	    };
	}
	
	if (!Function.prototype.bind) {
	    Function.prototype.bind = function (oThis) {
	        if (typeof this !== 'function') {
	            // closest thing possible to the ECMAScript 5
	            // internal IsCallable function
	            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	        }
	
	        var aArgs = Array.prototype.slice.call(arguments, 1),
	            fToBind = this,
	            fNOP = function () {
	            },
	            fBound = function () {
	                return fToBind.apply(this instanceof fNOP && oThis
	                    ? this
	                    : oThis,
	                    aArgs.concat(Array.prototype.slice.call(arguments)));
	            };
	
	        fNOP.prototype = this.prototype;
	        fBound.prototype = new fNOP();
	
	        return fBound;
	    };
	}
	
	(function() {
	/*
	 * ==============================
	 *
	 * Core class
	 * @type Obj
	 *
	 * ==============================
	 */
	
	var HWCore = ( function() {
	    var _Core = function (id) {
	        // each instance of core must define its scope
	        var scope = {};
	        scope.id    = id;
	        scope.const = pub_static.const;
	
	        scope.global = scope.const.IN_BROWSER ? window : global;
	
	        // a new instance must return
	        // the created scope, not Core class itself
	        return scope;
	    };
	
	    var pub = _Core.prototype;
	    var pub_static = _Core;
	
	    // private static
	    var _instance = [];
	
	    pub_static.const = {};
	    pub_static.I = function (id, callback) {
	        callback = typeof id === "function" && typeof callback === "undefined" ? id : callback;
	        id = typeof id !== "string" ? 0 : id;
	
	        if (typeof _instance[id] === "undefined") {
	            _instance[id] = {
	                loading: true,
	                inst: null
	            };
	
	            _instance[id].inst=new _Core(id);
	
	            if (typeof callback === "function") {
	                callback.apply(_instance[id].inst);
	            }
	        } else {
	            var wait = function () {
	                // if new instance has been commited but not loaded
	                // fully, we must wait before cast the callback
	                if (_instance[id].loading) {
	                    setTimeout(wait, 0); // maybe not the best way?
	                } else {
	                    if (typeof callback === "function") {
	                        callback.apply(_instance[id].inst);
	                    }
	                }
	            };
	
	            wait();
	        }
	
	        return _instance[id];
	    };
	
	    pub_static.delInstance = function (id) {
	        _instance.splice(id, 1);
	    };
	
	    return pub_static;
	})();
	
	/*
	 * ==============================
	 *
	 * Loader Class
	 *
	 * ==============================
	 */
	function defineLoader($,RSVP) {
	    var Loader = function () {
	    };
	
	    var pub = Loader.prototype;
	    var pub_static = Loader;
	
	    pub_static.paths = {};
	
	    /**
	     *
	     * @param {String} src -> paths of resource to load
	     * @param {Function} callback -> function to cast as callback, if omitted
	     * a promise will be returned
	     * @param {Object} options :
	     *  {Boolean} skipPlg -> skip hwc plugin
	     * @returns {Mixed}
	     */
	    pub_static.load = function (src, callback, options) {
	        options = options || {};
	        src = Array.isArray(src) ? src : [src];
	
	        function _load (resolve, reject, callback) {
	            function done() {
	                var result = arguments;
	                if (callback) {
	                    if (typeof callback !== "function")
	                        throw new Error("callback type is: " + typeof (callback));
	
	                    callback.apply($, result);
	                } else {
	                    resolve.apply(null, result);
	                }
	            }
	
	            try {
	                hwc.__requirejs(src, done, function (err) {
	                    if (callback) {
	                        throw err;
	                    } else {
	                        reject(err);
	                    }
	                });
	            } catch (e) {
	                if (callback) {
	                    throw new Exception(e);
	                } else {
	                    reject(e);
	                }
	            }
	        }
	
	        return callback && _load(null, null, callback) || new $.Promise(_load)["catch"](function (e) {
	            console.error(e); // this is needed because Async lib is not loaded yet
	        });
	    };
	
	    /**
	     *
	     * @param {String} src -> path of resource to load
	     * @returns {Mixed}
	     */
	    pub_static.loadSync = function (src) {
	        var _src = Array.isArray(src) ? src : [src];
	
	        var lSync = function (url) {
	            if ($.const.IN_BROWSER) {
	                _loadSync(url);
	            } else {
	                //require(["./"+url]);
	            }
	        };
	
	        if (_src.length > 1) {
	            var modules = [];
	            for (var i in _src) {
	                modules.push(lSync(_src[i]));
	            }
	            return modules;
	        } else {
	            return lSync(_src[0]);
	        }
	
	    };
	
	    Object.defineProperty($,"Loader",{
	        configurable: false,
	        writable: false,
	        value: Loader
	    });
	
	    /**
	     * Alternatives for loading in PHP-style
	     */
	    Object.defineProperty($, "include", {
	        configurable: false,
	        writable: false,
	        value: $.Loader.load
	    });
	
	    Object.defineProperty($, "require", {
	        configurable: false,
	        writable: false,
	        value: $.Loader.load
	    });
	
	    Object.defineProperty($, "includeSync", {
	        configurable: false,
	        writable: false,
	        value: $.Loader.loadSync
	    });
	
	    Object.defineProperty($, "requireSync", {
	        configurable: false,
	        writable: false,
	        value: $.Loader.loadSync
	    });
	
	    Object.defineProperty($,"RSVP",{
	        configurable: false,
	        writable: false,
	        value: RSVP
	    });
	
	    Object.defineProperty($,"Promise",{
	        configurable: false,
	        writable: false,
	        value: RSVP.Promise
	    });
	}
	
	/*
	 * ==============================
	 *
	 * Utils
	 *
	 * ==============================
	 */
	
	function defineUtils($) {
	       // property getter that walks in chain
	        !function (Object, getPropertyDescriptor, getPropertyNames) {
	            if (!(getPropertyDescriptor in Object)) {
	                var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	                Object[getPropertyDescriptor] = function getPropertyDescriptor (o, name) {
	                    var proto = o, descriptor;
	                    while (proto && !(
	                        descriptor = getOwnPropertyDescriptor(proto, name))
	                        )
	                        proto = proto.__proto__;
	                    return descriptor;
	                };
	            }
	            if (!(getPropertyNames in Object)) {
	                var getOwnPropertyNames = Object.getOwnPropertyNames, ObjectProto = Object.prototype, keys = Object.keys;
	                Object[getPropertyNames] = function getPropertyNames (o) {
	                    var proto = o, unique = {}, names, i;
	                    while (proto != ObjectProto) {
	                        for (names = getOwnPropertyNames(proto), i = 0; i < names.length; i++) {
	                            unique[names[i]] = true;
	                        }
	                        proto = proto.__proto__;
	                    }
	                    return keys(unique);
	                };
	            }
	        }(Object, "getPropertyDescriptor", "getPropertyNames");
	
	        $.typeOf = function (obj) {
	            return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	        };
	
	        /**
	         *
	         * @param {type} type
	         * @param {type} val
	         * @param {type} skipError, if set to true then return a boolean instead throw an error
	         * @returns {undefined}
	         */
	        $.typeCompare = function (type, val, skipError) {
	            if (val === null || val === undefined)
	                return true;
	
	            if (typeof type === "string") {
	                var t = $.typeOf(val);
	                if (t !== type) {
	                    if (skipError)
	                        return false;
	                    // else
	                    throw new TypeError("Incompatible type: " + t + " , excepted " + type);
	                }
	            } else {
	                if (!(val.constructor === type)) {
	                    if (skipError)
	                        return false;
	                    // else
	                    throw new TypeError("Incompatible type: " + typeof val + " , excepted " + type.name);
	                }
	            }
	
	            return true;
	        };
	
	        $.typeFn = function (/* arguments type, function */) {
	
	        };
	}
	
	/*
	 * ==============================
	 *
	 * HwcBootstrap
	 * @type Obj
	 *
	 * ==============================
	 */
	
	var HwcBootstrap = (function () {
	    var Obj = function _Bootstrap () {
	    };
	
	    var pub = Obj.prototype;
	    var pub_static = Obj;
	
	    var setGlobals = function (global, skipExtra) {
	//      global namespaced
	
	        global.hwc = hwc;
	        global.hwc.defTests = global.hwc.define; // special use for tests
	        hwc.__global=global;
	
	        if (!skipExtra) {
	//      in environments without module system
	            try {
	                global.module = {};
	                global.exports = global.module.exports = global.hwc.exports;
	            } catch (e) {
	                // nothing to do
	            }
	        }
	    };
	
	    pub.initBrowser = function () {
	        setGlobals(window);
	
	        if (hwc.isRequireJs()) {
	            // nothing to do for now
	        }else if (hwc.isWebPack()) {
	            var req=require;
	            var def=__webpack_require__(5);
	            __webpack_require__(6);
	            require=req;
	            define=__webpack_require__(5);
	        } else {
	            _loadSync(hwc_conf.paths.hwc_js_modules_requirejs+'.js');
	        }
	
	        hwc.__requirejs=requirejs;
	    };
	
	    pub.initNode = function () {
	        var path = __webpack_require__(9);
	        var rootPath = path.join(__dirname, this.defines.PATH_ROOT);
	        var corePath = path.join(__dirname, this.defines.PATH_CORE);
	        // convert from relative to absolute
	        rootPath = path.resolve(rootPath) + "/";
	        corePath = path.resolve(corePath) + "/";
	
	        var requirejs=__webpack_require__(11);
	        hwc.__requirejs = requirejs.config({
	            //Pass the top-level main.js/index.js require
	            //function to requirejs so that node modules
	            //are loaded relative to the top-level JS file.
	            nodeRequire: hwc.__node_require
	        });
	
	        setGlobals(global, true);
	
	        HWCore.const = global.hwc.const = this.defines;
	        module.exports=hwc;
	    };
	
	    pub.init = function (callback) {
	        this.defines = {};
	        this.defines.IN_BROWSER = hwc.isInBrowser();
	
	        this.defines.PATH_CORE      = hwc.conf.path_core || "../";
	        this.defines.PATH_ROOT      = this.defines.PATH_CORE + "../";
	        this.defines.PATH_JS_KERNEL = this.defines.PATH_CORE + "js-kernel/index.js";
	        this.defines.PATH_JS_LIB    = this.defines.PATH_CORE + "js-lib-";
	
	        if (this.defines.IN_BROWSER) {
	            this.initBrowser();
	        } else {
	            this.initNode();
	        }
	
	        hwc.Core=HWCore;
	        HWCore.const = hwc.const = this.defines;
	
	        hwc.__core=hwc.Core.I(callback);
	
	        defineUtils(hwc);
	
	        defineRequire();
	    };
	
	    return Obj;
	})();
	
	function _loadSync(url) {
	    // get some kind of XMLHttpRequest
	    var xhrObj = createXMLHTTPObject();
	    // open and send a synchronous request
	    xhrObj.open('GET', url, false);
	    xhrObj.send('');
	    // add the returned content to a newly created script tag
	    var se = document.createElement('script');
	    se.type = "text/javascript";
	    se.text = xhrObj.responseText;
	    var position = document.currentScript && document.currentScript.parentNode ? document.currentScript.parentNode : document.head;
	    position.appendChild(se);
	}
	
	function defineRequire() {
	    hwc.__requirejs.config({
	        paths: hwc_conf.paths
	    });
	}
	
	/*
	 * ==============================
	 *
	 *  hwc global static object
	 *
	 * ==============================
	 */
	
	var hwc = {
	     conf: hwc_conf,
	     __defineLoader : defineLoader,
	     __pendingFunc: [],
	     defineFn: function () {
	         if (!this.__core || !this.__core.Loader) {
	             this.__pendingFunc.push(arguments);
	         } else {
	             switch (arguments.length) {
	                 case 1:
	                     return arguments[0].call(this.__core);
	                     break;
	                 case 2:
	                     var inc = arguments[0];
	                     var def = arguments[1];
	                     var that = this;
	                     return this.__core.Loader.load(inc,function () {
	                             def.apply(that.__core, arguments);
	                         });
	                     break;
	                 default:
	                     throw new SyntaxError("Invalid number of parameters");
	             }
	         }
	     },
	     /**
	      *
	      * @param {type} id -> leave blank to retreive main instance
	      * @returns {unresolved}
	      */
	     I: function (id) {
	         return this.Core.I(id);
	     },
	     getCoreClass: function () {
	         return this.__core;
	     },
	     isInBrowser: function () {
	         return typeof window !== "undefined";
	     },
	     isWebPack: function() {
	         return typeof __webpack_require__ === "function";
	     },
	     isRequireJs: function() {
	         return typeof requirejs === 'function';
	     },
	     getGlobalObj: function() {
	         return this.__global;
	     },
	     /*
	      * Internal used
	      */
	     // will be defined next
	     __core: null,
	     __global: null,
	     __node_require: null,
	     __requirejs: null
	};
	
	
	/**
	 * INIT
	 *
	 */
	
	new HwcBootstrap().init();
	
	})();
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function(RSVP) {
	    hwc.__core.loading=false;
	    hwc.__defineLoader(hwc,RSVP);
	
	    return hwc;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), "/"))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7)(__webpack_require__(8))

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "/** vim: et:ts=4:sw=4:sts=4\n * @license RequireJS 2.3.2 Copyright jQuery Foundation and other contributors.\n * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE\n */\nvar requirejs,require,define;!function(global,setTimeout){function commentReplace(e,t){return t||\"\"}function isFunction(e){return\"[object Function]\"===ostring.call(e)}function isArray(e){return\"[object Array]\"===ostring.call(e)}function each(e,t){if(e){var i;for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}}function eachReverse(e,t){if(e){var i;for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){return t&&eachProp(t,function(t,n){!i&&hasProp(e,n)||(!r||\"object\"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),mixin(e[n],t,i,r)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName(\"script\")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split(\".\"),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+\"\\nhttp://requirejs.org/docs/errors.html#\"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}function newContext(e){function t(e){var t,i;for(t=0;t<e.length;t++)if(i=e[t],\".\"===i)e.splice(t,1),t-=1;else if(\"..\"===i){if(0===t||1===t&&\"..\"===e[2]||\"..\"===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function i(e,i,r){var n,o,a,s,u,c,d,p,f,l,h,m,g=i&&i.split(\"/\"),v=y.map,x=v&&v[\"*\"];if(e&&(e=e.split(\"/\"),d=e.length-1,y.nodeIdCompat&&jsSuffixRegExp.test(e[d])&&(e[d]=e[d].replace(jsSuffixRegExp,\"\")),\".\"===e[0].charAt(0)&&g&&(m=g.slice(0,g.length-1),e=m.concat(e)),t(e),e=e.join(\"/\")),r&&v&&(g||x)){a=e.split(\"/\");e:for(s=a.length;s>0;s-=1){if(c=a.slice(0,s).join(\"/\"),g)for(u=g.length;u>0;u-=1)if(o=getOwn(v,g.slice(0,u).join(\"/\")),o&&(o=getOwn(o,c))){p=o,f=s;break e}!l&&x&&getOwn(x,c)&&(l=getOwn(x,c),h=s)}!p&&l&&(p=l,f=h),p&&(a.splice(0,f,p),e=a.join(\"/\"))}return n=getOwn(y.pkgs,e),n?n:e}function r(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute(\"data-requiremodule\")===e&&t.getAttribute(\"data-requirecontext\")===q.contextName)return t.parentNode.removeChild(t),!0})}function n(e){var t=getOwn(y.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),q.require.undef(e),q.makeRequire(null,{skipMap:!0})([e]),!0}function o(e){var t,i=e?e.indexOf(\"!\"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function a(e,t,r,n){var a,s,u,c,d=null,p=t?t.name:null,f=e,l=!0,h=\"\";return e||(l=!1,e=\"_@r\"+(T+=1)),c=o(e),d=c[0],e=c[1],d&&(d=i(d,p,n),s=getOwn(j,d)),e&&(d?h=s&&s.normalize?s.normalize(e,function(e){return i(e,p,n)}):e.indexOf(\"!\")===-1?i(e,p,n):e:(h=i(e,p,n),c=o(h),d=c[0],h=c[1],r=!0,a=q.nameToUrl(h))),u=!d||s||r?\"\":\"_unnormalized\"+(A+=1),{prefix:d,name:h,parentMap:t,unnormalized:!!u,url:a,originalName:f,isDefine:l,id:(d?d+\"!\"+h:h)+u}}function s(e){var t=e.id,i=getOwn(S,t);return i||(i=S[t]=new q.Module(e)),i}function u(e,t,i){var r=e.id,n=getOwn(S,r);!hasProp(j,r)||n&&!n.defineEmitComplete?(n=s(e),n.error&&\"error\"===t?i(n.error):n.on(t,i)):\"defined\"===t&&i(j[r])}function c(e,t){var i=e.requireModules,r=!1;t?t(e):(each(i,function(t){var i=getOwn(S,t);i&&(i.error=e,i.events.error&&(r=!0,i.emit(\"error\",e)))}),r||req.onError(e))}function d(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];\"string\"==typeof t&&(q.defQueueMap[t]=!0),O.push(e)}),globalDefQueue=[])}function p(e){delete S[e],delete k[e]}function f(e,t,i){var r=e.map.id;e.error?e.emit(\"error\",e.error):(t[r]=!0,each(e.depMaps,function(r,n){var o=r.id,a=getOwn(S,o);!a||e.depMatched[n]||i[o]||(getOwn(t,o)?(e.defineDep(n,j[o]),e.check()):f(a,t,i))}),i[r]=!0)}function l(){var e,t,i=1e3*y.waitSeconds,o=i&&q.startTime+i<(new Date).getTime(),a=[],s=[],u=!1,d=!0;if(!x){if(x=!0,eachProp(k,function(e){var i=e.map,c=i.id;if(e.enabled&&(i.isDefine||s.push(e),!e.error))if(!e.inited&&o)n(c)?(t=!0,u=!0):(a.push(c),r(c));else if(!e.inited&&e.fetched&&i.isDefine&&(u=!0,!i.prefix))return d=!1}),o&&a.length)return e=makeError(\"timeout\",\"Load timeout for modules: \"+a,null,a),e.contextName=q.contextName,c(e);d&&each(s,function(e){f(e,{},{})}),o&&!t||!u||!isBrowser&&!isWebWorker||w||(w=setTimeout(function(){w=0,l()},50)),x=!1}}function h(e){hasProp(j,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return m(t,q.onScriptLoad,\"load\",\"onreadystatechange\"),m(t,q.onScriptError,\"error\"),{node:t,id:t&&t.getAttribute(\"data-requiremodule\")}}function v(){var e;for(d();O.length;){if(e=O.shift(),null===e[0])return c(makeError(\"mismatch\",\"Mismatched anonymous define() module: \"+e[e.length-1]));h(e)}q.defQueueMap={}}var x,b,q,E,w,y={waitSeconds:7,baseUrl:\"./\",paths:{},bundles:{},pkgs:{},shim:{},config:{}},S={},k={},M={},O=[],j={},P={},R={},T=1,A=1;return E={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?j[e.map.id]=e.exports:e.exports=j[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(y.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},b=function(e){this.events=getOwn(M,e.id)||{},this.map=e,this.shim=getOwn(y.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},b.prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on(\"error\",i):this.events.error&&(i=bind(this,function(e){this.emit(\"error\",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,q.startTime=(new Date).getTime();var e=this.map;return this.shim?void q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;P[e]||(P[e]=!0,q.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit(\"error\",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=q.execCb(i,o,r,n)}catch(t){e=t}else n=q.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&(t=this.module,t?n=t.exports:this.usingExports&&(n=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?\"define\":\"require\",c(this.error=e)}else n=o;if(this.exports=n,this.map.isDefine&&!this.ignore&&(j[i]=n,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(q,this.map,a)}p(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit(\"defined\",this.exports),this.defineEmitComplete=!0)}}else hasProp(q.defQueueMap,i)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=a(e.prefix);this.depMaps.push(r),u(r,\"defined\",bind(this,function(r){var n,o,d,f=getOwn(R,this.map.id),l=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=q.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(l=r.normalize(l,function(e){return i(e,h,!0)})||\"\"),o=a(e.prefix+\"!\"+l,this.map.parentMap),u(o,\"defined\",bind(this,function(e){this.map.normalizedMap=o,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),d=getOwn(S,o.id),void(d&&(this.depMaps.push(o),this.events.error&&d.on(\"error\",bind(this,function(e){this.emit(\"error\",e)})),d.enable()))):f?(this.map.url=q.nameToUrl(f),void this.load()):(n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),n.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(S,function(e){0===e.map.id.indexOf(t+\"_unnormalized\")&&p(e.map.id)}),c(e)}),n.fromText=bind(this,function(i,r){var o=e.name,u=a(o),d=useInteractive;r&&(i=r),d&&(useInteractive=!1),s(u),hasProp(y.config,t)&&(y.config[o]=y.config[t]);try{req.exec(i)}catch(e){return c(makeError(\"fromtexteval\",\"fromText eval for \"+t+\" failed: \"+e,e,[t]))}d&&(useInteractive=!0),this.depMaps.push(u),q.completeLoad(o),m([o],n)}),void r.load(e.name,m,n,y))})),q.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){k[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if(\"string\"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(E,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,u(e,\"defined\",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?u(e,\"error\",bind(this,this.errback)):this.events.error&&u(e,\"error\",bind(this,function(e){this.emit(\"error\",e)}))}i=e.id,r=S[i],hasProp(E,i)||!r||r.enabled||q.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(S,e.id);t&&!t.enabled&&q.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),\"error\"===e&&delete this.events[e]}},q={config:y,contextName:e,registry:S,defined:j,urlFetched:P,defQueue:O,defQueueMap:{},Module:b,makeModuleMap:a,nextTick:req.nextTick,onError:c,configure:function(e){if(e.baseUrl&&\"/\"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+=\"/\"),\"string\"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,i){return(i.indexOf(\"?\")===-1?\"?\":\"&\")+t}}var i=y.shim,r={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){r[t]?(y[t]||(y[t]={}),mixin(y[t],e,!0,!0)):y[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(R[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e)),i[t]=e}),y.shim=i),e.packages&&each(e.packages,function(e){var t,i;e=\"string\"==typeof e?{name:e}:e,i=e.name,t=e.location,t&&(y.paths[i]=e.location),y.pkgs[i]=e.name+\"/\"+(e.main||\"main\").replace(currDirRegExp,\"\").replace(jsSuffixRegExp,\"\")}),eachProp(S,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t,null,!0))}),(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function o(i,r,u){var d,p,f;return n.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0),\"string\"==typeof i?isFunction(r)?c(makeError(\"requireargs\",\"Invalid require call\"),u):t&&hasProp(E,i)?E[i](S[t.id]):req.get?req.get(q,i,t,o):(p=a(i,t,!1,!0),d=p.id,hasProp(j,d)?j[d]:c(makeError(\"notloaded\",'Module name \"'+d+'\" has not been loaded yet for context: '+e+(t?\"\":\". Use require([])\")))):(v(),q.nextTick(function(){v(),f=s(a(null,t)),f.skipMap=n.skipMap,f.init(i,r,u,{enabled:!0}),l()}),o)}return n=n||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var r,n=e.lastIndexOf(\".\"),o=e.split(\"/\")[0],a=\".\"===o||\"..\"===o;return n!==-1&&(!a||n>1)&&(r=e.substring(n,e.length),e=e.substring(0,n)),q.nameToUrl(i(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(j,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(j,e)||hasProp(S,e)}}),t||(o.undef=function(e){d();var i=a(e,t,!0),n=getOwn(S,e);n.undefed=!0,r(e),delete j[e],delete P[i.url],delete M[e],eachReverse(O,function(t,i){t[0]===e&&O.splice(i,1)}),delete q.defQueueMap[e],n&&(n.events.defined&&(M[e]=n.events),p(e))}),o},enable:function(e){var t=getOwn(S,e.id);t&&s(e).enable()},completeLoad:function(e){var t,i,r,o=getOwn(y.shim,e)||{},a=o.exports;for(d();O.length;){if(i=O.shift(),null===i[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);h(i)}if(q.defQueueMap={},r=getOwn(S,e),!t&&!hasProp(j,e)&&r&&!r.inited){if(!(!y.enforceDefine||a&&getGlobal(a)))return n(e)?void 0:c(makeError(\"nodefine\",\"No define call for \"+e,null,[e]));h([e,o.deps||[],o.exportsFn])}l()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c,d=getOwn(y.pkgs,e);if(d&&(e=d),c=getOwn(R,e))return q.nameToUrl(c,t,i);if(req.jsExtRegExp.test(e))s=e+(t||\"\");else{for(r=y.paths,n=e.split(\"/\"),o=n.length;o>0;o-=1)if(a=n.slice(0,o).join(\"/\"),u=getOwn(r,a)){isArray(u)&&(u=u[0]),n.splice(0,o,u);break}s=n.join(\"/\"),s+=t||(/^data\\:|^blob\\:|\\?/.test(s)||i?\"\":\".js\"),s=(\"/\"===s.charAt(0)||s.match(/^[\\w\\+\\.\\-]+:/)?\"\":y.baseUrl)+s}return y.urlArgs&&!/^blob\\:/.test(s)?s+y.urlArgs(e,s):s},load:function(e,t){req.load(q,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if(\"load\"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);q.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);if(!n(t.id)){var i=[];return eachProp(S,function(e,r){0!==r.indexOf(\"_@r\")&&each(e.depMaps,function(e){if(e.id===t.id)return i.push(r),!0})}),c(makeError(\"scripterror\",'Script error for \"'+t.id+(i.length?'\", needed by: '+i.join(\", \"):'\"'),e,[t.id]))}}},q.require=q.makeRequire(),q}function getInteractiveScript(){return interactiveScript&&\"interactive\"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if(\"interactive\"===e.readyState)return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version=\"2.3.2\",commentRegExp=/\\/\\*[\\s\\S]*?\\*\\/|([^:\"'=]|^)\\/\\/.*$/gm,cjsRequireRegExp=/[^.]\\s*require\\s*\\(\\s*[\"']([^'\"\\s]+)[\"']\\s*\\)/g,jsSuffixRegExp=/\\.js$/,currDirRegExp=/^\\.\\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!(\"undefined\"==typeof window||\"undefined\"==typeof navigator||!window.document),isWebWorker=!isBrowser&&\"undefined\"!=typeof importScripts,readyRegExp=isBrowser&&\"PLAYSTATION 3\"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName=\"_\",isOpera=\"undefined\"!=typeof opera&&\"[object Opera]\"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(\"undefined\"==typeof define){if(\"undefined\"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}\"undefined\"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||\"string\"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),n=getOwn(contexts,a),n||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=\"undefined\"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\\/|:|\\?|\\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each([\"toUrl\",\"undef\",\"defined\",\"specified\"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName(\"head\")[0],baseElement=document.getElementsByTagName(\"base\")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"html:script\"):document.createElement(\"script\");return r.type=e.scriptType||\"text/javascript\",r.charset=\"utf-8\",r.async=!0,r},req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser)return r=req.createNode(n,t,i),r.setAttribute(\"data-requirecontext\",e.contextName),r.setAttribute(\"data-requiremodule\",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf(\"[native code\")<0||isOpera?(r.addEventListener(\"load\",e.onScriptLoad,!1),r.addEventListener(\"error\",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent(\"onreadystatechange\",e.onScriptLoad)),r.src=i,n.onNodeCreated&&n.onNodeCreated(r,n,t,i),currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{setTimeout(function(){},0),importScripts(i),e.completeLoad(t)}catch(r){e.onError(makeError(\"importscripts\",\"importScripts failed for \"+t+\" at \"+i,r,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute(\"data-main\"))return mainScript=dataMain,cfg.baseUrl||mainScript.indexOf(\"!\")!==-1||(src=mainScript.split(\"/\"),mainScript=src.pop(),subPath=src.length?src.join(\"/\")+\"/\":\"./\",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,\"\"),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,i){var r,n;\"string\"!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?[\"require\"]:[\"require\",\"exports\",\"module\"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute(\"data-requiremodule\")),n=contexts[r.getAttribute(\"data-requirecontext\")])),n?(n.defQueue.push([e,t,i]),n.defQueueMap[e]=!0):globalDefQueue.push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this,\"undefined\"==typeof setTimeout?void 0:setTimeout);"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	
	  return parts;
	}
	
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	
	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();
	
	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	
	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)
	
	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};
	
	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	
	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');
	
	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	
	  return (isAbsolute ? '/' : '') + path;
	};
	
	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};
	
	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};
	
	
	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);
	
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	
	  return outputParts.join('/');
	};
	
	exports.sep = '/';
	exports.delimiter = ':';
	
	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	
	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }
	
	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }
	
	  return root + dir;
	};
	
	
	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};
	
	
	exports.extname = function(path) {
	  return splitPath(path)[3];
	};
	
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	
	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/** vim: et:ts=4:sw=4:sts=4
	 * @license RequireJS 2.3.2 Copyright jQuery Foundation and other contributors.
	 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
	 */
	var requirejs,require,define;!function(global,setTimeout){function commentReplace(e,t){return t||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var i;for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}}function eachReverse(e,t){if(e){var i;for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){return t&&eachProp(t,function(t,n){!i&&hasProp(e,n)||(!r||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),mixin(e[n],t,i,r)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}function newContext(e){function t(e){var t,i;for(t=0;t<e.length;t++)if(i=e[t],"."===i)e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function i(e,i,r){var n,o,a,s,u,c,d,p,f,l,h,m,g=i&&i.split("/"),v=y.map,x=v&&v["*"];if(e&&(e=e.split("/"),d=e.length-1,y.nodeIdCompat&&jsSuffixRegExp.test(e[d])&&(e[d]=e[d].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&g&&(m=g.slice(0,g.length-1),e=m.concat(e)),t(e),e=e.join("/")),r&&v&&(g||x)){a=e.split("/");e:for(s=a.length;s>0;s-=1){if(c=a.slice(0,s).join("/"),g)for(u=g.length;u>0;u-=1)if(o=getOwn(v,g.slice(0,u).join("/")),o&&(o=getOwn(o,c))){p=o,f=s;break e}!l&&x&&getOwn(x,c)&&(l=getOwn(x,c),h=s)}!p&&l&&(p=l,f=h),p&&(a.splice(0,f,p),e=a.join("/"))}return n=getOwn(y.pkgs,e),n?n:e}function r(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===q.contextName)return t.parentNode.removeChild(t),!0})}function n(e){var t=getOwn(y.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),q.require.undef(e),q.makeRequire(null,{skipMap:!0})([e]),!0}function o(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function a(e,t,r,n){var a,s,u,c,d=null,p=t?t.name:null,f=e,l=!0,h="";return e||(l=!1,e="_@r"+(T+=1)),c=o(e),d=c[0],e=c[1],d&&(d=i(d,p,n),s=getOwn(j,d)),e&&(d?h=s&&s.normalize?s.normalize(e,function(e){return i(e,p,n)}):e.indexOf("!")===-1?i(e,p,n):e:(h=i(e,p,n),c=o(h),d=c[0],h=c[1],r=!0,a=q.nameToUrl(h))),u=!d||s||r?"":"_unnormalized"+(A+=1),{prefix:d,name:h,parentMap:t,unnormalized:!!u,url:a,originalName:f,isDefine:l,id:(d?d+"!"+h:h)+u}}function s(e){var t=e.id,i=getOwn(S,t);return i||(i=S[t]=new q.Module(e)),i}function u(e,t,i){var r=e.id,n=getOwn(S,r);!hasProp(j,r)||n&&!n.defineEmitComplete?(n=s(e),n.error&&"error"===t?i(n.error):n.on(t,i)):"defined"===t&&i(j[r])}function c(e,t){var i=e.requireModules,r=!1;t?t(e):(each(i,function(t){var i=getOwn(S,t);i&&(i.error=e,i.events.error&&(r=!0,i.emit("error",e)))}),r||req.onError(e))}function d(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(q.defQueueMap[t]=!0),O.push(e)}),globalDefQueue=[])}function p(e){delete S[e],delete k[e]}function f(e,t,i){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,n){var o=r.id,a=getOwn(S,o);!a||e.depMatched[n]||i[o]||(getOwn(t,o)?(e.defineDep(n,j[o]),e.check()):f(a,t,i))}),i[r]=!0)}function l(){var e,t,i=1e3*y.waitSeconds,o=i&&q.startTime+i<(new Date).getTime(),a=[],s=[],u=!1,d=!0;if(!x){if(x=!0,eachProp(k,function(e){var i=e.map,c=i.id;if(e.enabled&&(i.isDefine||s.push(e),!e.error))if(!e.inited&&o)n(c)?(t=!0,u=!0):(a.push(c),r(c));else if(!e.inited&&e.fetched&&i.isDefine&&(u=!0,!i.prefix))return d=!1}),o&&a.length)return e=makeError("timeout","Load timeout for modules: "+a,null,a),e.contextName=q.contextName,c(e);d&&each(s,function(e){f(e,{},{})}),o&&!t||!u||!isBrowser&&!isWebWorker||w||(w=setTimeout(function(){w=0,l()},50)),x=!1}}function h(e){hasProp(j,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return m(t,q.onScriptLoad,"load","onreadystatechange"),m(t,q.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function v(){var e;for(d();O.length;){if(e=O.shift(),null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}q.defQueueMap={}}var x,b,q,E,w,y={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},S={},k={},M={},O=[],j={},P={},R={},T=1,A=1;return E={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?j[e.map.id]=e.exports:e.exports=j[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(y.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},b=function(e){this.events=getOwn(M,e.id)||{},this.map=e,this.shim=getOwn(y.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},b.prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,q.startTime=(new Date).getTime();var e=this.map;return this.shim?void q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;P[e]||(P[e]=!0,q.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=q.execCb(i,o,r,n)}catch(t){e=t}else n=q.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&(t=this.module,t?n=t.exports:this.usingExports&&(n=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else n=o;if(this.exports=n,this.map.isDefine&&!this.ignore&&(j[i]=n,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(q,this.map,a)}p(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(q.defQueueMap,i)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=a(e.prefix);this.depMaps.push(r),u(r,"defined",bind(this,function(r){var n,o,d,f=getOwn(R,this.map.id),l=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=q.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(l=r.normalize(l,function(e){return i(e,h,!0)})||""),o=a(e.prefix+"!"+l,this.map.parentMap),u(o,"defined",bind(this,function(e){this.map.normalizedMap=o,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),d=getOwn(S,o.id),void(d&&(this.depMaps.push(o),this.events.error&&d.on("error",bind(this,function(e){this.emit("error",e)})),d.enable()))):f?(this.map.url=q.nameToUrl(f),void this.load()):(n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),n.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(S,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&p(e.map.id)}),c(e)}),n.fromText=bind(this,function(i,r){var o=e.name,u=a(o),d=useInteractive;r&&(i=r),d&&(useInteractive=!1),s(u),hasProp(y.config,t)&&(y.config[o]=y.config[t]);try{req.exec(i)}catch(e){return c(makeError("fromtexteval","fromText eval for "+t+" failed: "+e,e,[t]))}d&&(useInteractive=!0),this.depMaps.push(u),q.completeLoad(o),m([o],n)}),void r.load(e.name,m,n,y))})),q.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){k[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(E,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,u(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?u(e,"error",bind(this,this.errback)):this.events.error&&u(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id,r=S[i],hasProp(E,i)||!r||r.enabled||q.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(S,e.id);t&&!t.enabled&&q.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},q={config:y,contextName:e,registry:S,defined:j,urlFetched:P,defQueue:O,defQueueMap:{},Module:b,makeModuleMap:a,nextTick:req.nextTick,onError:c,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,i){return(i.indexOf("?")===-1?"?":"&")+t}}var i=y.shim,r={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){r[t]?(y[t]||(y[t]={}),mixin(y[t],e,!0,!0)):y[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(R[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e)),i[t]=e}),y.shim=i),e.packages&&each(e.packages,function(e){var t,i;e="string"==typeof e?{name:e}:e,i=e.name,t=e.location,t&&(y.paths[i]=e.location),y.pkgs[i]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(S,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t,null,!0))}),(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function o(i,r,u){var d,p,f;return n.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0),"string"==typeof i?isFunction(r)?c(makeError("requireargs","Invalid require call"),u):t&&hasProp(E,i)?E[i](S[t.id]):req.get?req.get(q,i,t,o):(p=a(i,t,!1,!0),d=p.id,hasProp(j,d)?j[d]:c(makeError("notloaded",'Module name "'+d+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(v(),q.nextTick(function(){v(),f=s(a(null,t)),f.skipMap=n.skipMap,f.init(i,r,u,{enabled:!0}),l()}),o)}return n=n||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var r,n=e.lastIndexOf("."),o=e.split("/")[0],a="."===o||".."===o;return n!==-1&&(!a||n>1)&&(r=e.substring(n,e.length),e=e.substring(0,n)),q.nameToUrl(i(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(j,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(j,e)||hasProp(S,e)}}),t||(o.undef=function(e){d();var i=a(e,t,!0),n=getOwn(S,e);n.undefed=!0,r(e),delete j[e],delete P[i.url],delete M[e],eachReverse(O,function(t,i){t[0]===e&&O.splice(i,1)}),delete q.defQueueMap[e],n&&(n.events.defined&&(M[e]=n.events),p(e))}),o},enable:function(e){var t=getOwn(S,e.id);t&&s(e).enable()},completeLoad:function(e){var t,i,r,o=getOwn(y.shim,e)||{},a=o.exports;for(d();O.length;){if(i=O.shift(),null===i[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);h(i)}if(q.defQueueMap={},r=getOwn(S,e),!t&&!hasProp(j,e)&&r&&!r.inited){if(!(!y.enforceDefine||a&&getGlobal(a)))return n(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,o.deps||[],o.exportsFn])}l()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c,d=getOwn(y.pkgs,e);if(d&&(e=d),c=getOwn(R,e))return q.nameToUrl(c,t,i);if(req.jsExtRegExp.test(e))s=e+(t||"");else{for(r=y.paths,n=e.split("/"),o=n.length;o>0;o-=1)if(a=n.slice(0,o).join("/"),u=getOwn(r,a)){isArray(u)&&(u=u[0]),n.splice(0,o,u);break}s=n.join("/"),s+=t||(/^data\:|^blob\:|\?/.test(s)||i?"":".js"),s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":y.baseUrl)+s}return y.urlArgs&&!/^blob\:/.test(s)?s+y.urlArgs(e,s):s},load:function(e,t){req.load(q,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);q.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);if(!n(t.id)){var i=[];return eachProp(S,function(e,r){0!==r.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===t.id)return i.push(r),!0})}),c(makeError("scripterror",'Script error for "'+t.id+(i.length?'", needed by: '+i.join(", "):'"'),e,[t.id]))}}},q.require=q.makeRequire(),q}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.2",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),n=getOwn(contexts,a),n||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser)return r=req.createNode(n,t,i),r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=i,n.onNodeCreated&&n.onNodeCreated(r,n,t,i),currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{setTimeout(function(){},0),importScripts(i),e.completeLoad(t)}catch(r){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+i,r,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||mainScript.indexOf("!")!==-1||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,i){var r,n;"string"!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")])),n?(n.defQueue.push([e,t,i]),n.defQueueMap[e]=!0):globalDefQueue.push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this,"undefined"==typeof setTimeout?void 0:setTimeout);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {!function(t,r){ true?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(t.RSVP=t.RSVP||{})}(this,function(t){"use strict";function r(t,r){for(var e=0,n=t.length;e<n;e++)if(t[e]===r)return e;return-1}function e(t){var r=t._promiseCallbacks;return r||(r=t._promiseCallbacks={}),r}function n(t,r){return"onerror"===t?void bt.on("error",r):2!==arguments.length?bt[t]:void(bt[t]=r)}function o(t){return"function"==typeof t||"object"==typeof t&&null!==t}function i(t){return"function"==typeof t}function u(t){return"object"==typeof t&&null!==t}function s(){}function a(){setTimeout(function(){for(var t=0;t<St.length;t++){var r=St[t],e=r.payload;e.guid=e.key+e.id,e.childGuid=e.key+e.childId,e.error&&(e.stack=e.error.stack),bt.trigger(r.name,r.payload)}St.length=0},50)}function c(t,r,e){1===St.push({name:t,payload:{key:r._guidKey,id:r._id,eventName:t,detail:r._result,childId:e&&e._id,label:r._label,timeStamp:At(),error:bt["instrument-with-stack"]?new Error(r._label):null}})&&a()}function f(t,r){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(h,r);return m(n,t),n}function l(){return new TypeError("A promises callback cannot return that same promise.")}function h(){}function p(t){try{return t.then}catch(r){return Rt.error=r,Rt}}function v(t,r,e,n){try{t.call(r,e,n)}catch(o){return o}}function d(t,r,e){bt.async(function(t){var n=!1,o=v(e,r,function(e){n||(n=!0,r!==e?m(t,e,void 0):g(t,e))},function(r){n||(n=!0,b(t,r))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,b(t,o))},t)}function _(t,r){r._state===Ot?g(t,r._result):r._state===Ct?(r._onError=null,b(t,r._result)):E(r,void 0,function(e){r!==e?m(t,e,void 0):g(t,e)},function(r){return b(t,r)})}function y(t,r,e){r.constructor===t.constructor&&e===O&&t.constructor.resolve===f?_(t,r):e===Rt?b(t,Rt.error):void 0===e?g(t,r):i(e)?d(t,r,e):g(t,r)}function m(t,r){t===r?g(t,r):o(r)?y(t,r,p(r)):g(t,r)}function w(t){t._onError&&t._onError(t._result),j(t)}function g(t,r){t._state===kt&&(t._result=r,t._state=Ot,0===t._subscribers.length?bt.instrument&&c("fulfilled",t):bt.async(j,t))}function b(t,r){t._state===kt&&(t._state=Ct,t._result=r,bt.async(w,t))}function E(t,r,e,n){var o=t._subscribers,i=o.length;t._onError=null,o[i]=r,o[i+Ot]=e,o[i+Ct]=n,0===i&&t._state&&bt.async(j,t)}function j(t){var r=t._subscribers,e=t._state;if(bt.instrument&&c(e===Ot?"fulfilled":"rejected",t),0!==r.length){for(var n=void 0,o=void 0,i=t._result,u=0;u<r.length;u+=3)n=r[u],o=r[u+e],n?S(e,n,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function T(t,r){try{return t(r)}catch(e){return Mt.error=e,Mt}}function S(t,r,e,n){var o=i(e),u=void 0,s=void 0,a=void 0,c=void 0;if(o){if(u=T(e,n),u===Mt?(c=!0,s=u.error,u=null):a=!0,r===u)return void b(r,l())}else u=n,a=!0;r._state!==kt||(o&&a?m(r,u):c?b(r,s):t===Ot?g(r,u):t===Ct&&b(r,u))}function k(t,r){var e=!1;try{r(function(r){e||(e=!0,m(t,r))},function(r){e||(e=!0,b(t,r))})}catch(n){b(t,n)}}function O(t,r,e){var n=arguments,o=this,i=o._state;if(i===Ot&&!t||i===Ct&&!r)return bt.instrument&&c("chained",o,o),o;o._onError=null;var u=new o.constructor(h,e),s=o._result;return bt.instrument&&c("chained",o,u),i?!function(){var t=n[i-1];bt.async(function(){return S(i,u,t,s)})}():E(o,u,t,r),u}function C(t,r,e){return t===Ot?{state:"fulfilled",value:e}:{state:"rejected",reason:e}}function R(t,r,e,n){this._instanceConstructor=t,this.promise=new t(h,n),this._abortOnReject=e,this._validateInput(r)?(this._input=r,this.length=r.length,this._remaining=r.length,this._init(),0===this.length?g(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&g(this.promise,this._result))):b(this.promise,this._validationError())}function M(t,r){return new R(this,t,(!0),r).promise}function P(t,r){var e=this,n=new e(h,r);if(!jt(t))return b(n,new TypeError("You must pass an array to race.")),n;for(var o=0;n._state===kt&&o<t.length;o++)E(e.resolve(t[o]),void 0,function(t){return m(n,t)},function(t){return b(n,t)});return n}function I(t,r){var e=this,n=new e(h,r);return b(n,t),n}function x(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function Y(t,r){this._id=It++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],bt.instrument&&c("created",this),h!==t&&("function"!=typeof t&&x(),this instanceof Y?k(this,t):N())}function D(){this.value=void 0}function K(t){try{return t.then}catch(r){return xt.value=r,xt}}function U(t,r,e){try{t.apply(r,e)}catch(n){return xt.value=n,xt}}function q(t,r){for(var e={},n=t.length,o=new Array(n),i=0;i<n;i++)o[i]=t[i];for(var u=0;u<r.length;u++){var s=r[u];e[s]=o[u+1]}return e}function V(t){for(var r=t.length,e=new Array(r-1),n=1;n<r;n++)e[n-1]=t[n];return e}function F(t,r){return{then:function(e,n){return t.call(r,e,n)}}}function G(t,r){var e=function(){for(var e=this,n=arguments.length,o=new Array(n+1),i=!1,u=0;u<n;++u){var s=arguments[u];if(!i){if(i=$(s),i===Nt){var a=new Y(h);return b(a,Nt.value),a}i&&i!==!0&&(s=F(i,s))}o[u]=s}var c=new Y(h);return o[n]=function(t,e){t?b(c,t):void 0===r?m(c,e):r===!0?m(c,V(arguments)):jt(r)?m(c,q(arguments,r)):m(c,e)},i?W(c,o,t,e):L(c,o,t,e)};return e.__proto__=t,e}function L(t,r,e,n){var o=U(e,n,r);return o===xt&&b(t,o.value),t}function W(t,r,e,n){return Y.all(r).then(function(r){var o=U(e,n,r);return o===xt&&b(t,o.value),t})}function $(t){return!(!t||"object"!=typeof t)&&(t.constructor===Y||K(t))}function z(t,r){return Y.all(t,r)}function B(t,r,e){this._superConstructor(t,r,!1,e)}function H(t,r){return new B(Y,t,r).promise}function J(t,r){return Y.race(t,r)}function Q(t,r,e){this._superConstructor(t,r,!0,e)}function X(t,r){return new Q(Y,t,r).promise}function Z(t,r,e){this._superConstructor(t,r,!1,e)}function tt(t,r){return new Z(Y,t,r).promise}function rt(t){throw setTimeout(function(){throw t}),t}function et(t){var r={resolve:void 0,reject:void 0};return r.promise=new Y(function(t,e){r.resolve=t,r.reject=e},t),r}function nt(t,r,e){return Y.all(t,e).then(function(t){if(!i(r))throw new TypeError("You must pass a function as map's second argument.");for(var n=t.length,o=new Array(n),u=0;u<n;u++)o[u]=r(t[u]);return Y.all(o,e)})}function ot(t,r){return Y.resolve(t,r)}function it(t,r){return Y.reject(t,r)}function ut(t,r){return Y.all(t,r)}function st(t,r){return Y.resolve(t,r).then(function(t){return ut(t,r)})}function at(t,r,e){var n=jt(t)?ut(t,e):st(t,e);return n.then(function(t){if(!i(r))throw new TypeError("You must pass a function as filter's second argument.");for(var n=t.length,o=new Array(n),u=0;u<n;u++)o[u]=r(t[u]);return ut(o,e).then(function(r){for(var e=new Array(n),o=0,i=0;i<n;i++)r[i]&&(e[o]=t[i],o++);return e.length=o,e})})}function ct(t,r){Gt[Yt]=t,Gt[Yt+1]=r,Yt+=2,2===Yt&&Lt()}function ft(){var t=process.nextTick,r=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(r)&&"0"===r[1]&&"10"===r[2]&&(t=setImmediate),function(){return t(dt)}}function lt(){return"undefined"!=typeof Dt?function(){Dt(dt)}:vt()}function ht(){var t=0,r=new qt(dt),e=document.createTextNode("");return r.observe(e,{characterData:!0}),function(){return e.data=t=++t%2}}function pt(){var t=new MessageChannel;return t.port1.onmessage=dt,function(){return t.port2.postMessage(0)}}function vt(){return function(){return setTimeout(dt,1)}}function dt(){for(var t=0;t<Yt;t+=2){var r=Gt[t],e=Gt[t+1];r(e),Gt[t]=void 0,Gt[t+1]=void 0}Yt=0}function _t(){try{var t=require,r=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vertx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));return Dt=r.runOnLoop||r.runOnContext,lt()}catch(e){return vt()}}function yt(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function mt(){bt.on.apply(bt,arguments)}function wt(){bt.off.apply(bt,arguments)}var gt={mixin:function(t){return t.on=this.on,t.off=this.off,t.trigger=this.trigger,t._promiseCallbacks=void 0,t},on:function(t,n){if("function"!=typeof n)throw new TypeError("Callback must be a function");var o=e(this),i=void 0;i=o[t],i||(i=o[t]=[]),r(i,n)===-1&&i.push(n)},off:function(t,n){var o=e(this),i=void 0,u=void 0;return n?(i=o[t],u=r(i,n),void(u!==-1&&i.splice(u,1))):void(o[t]=[])},trigger:function(t,r,n){var o=e(this),i=void 0,u=void 0;if(i=o[t])for(var s=0;s<i.length;s++)(u=i[s])(r,n)}},bt={instrument:!1};gt.mixin(bt);var Et=void 0;Et=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var jt=Et,At=Date.now||function(){return(new Date).getTime()},Tt=Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return s.prototype=t,new s},St=[],kt=void 0,Ot=1,Ct=2,Rt=new A,Mt=new A;R.prototype._validateInput=function(t){return jt(t)},R.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},R.prototype._init=function(){this._result=new Array(this.length)},R.prototype._enumerate=function(){for(var t=this.length,r=this.promise,e=this._input,n=0;r._state===kt&&n<t;n++)this._eachEntry(e[n],n)},R.prototype._settleMaybeThenable=function(t,r){var e=this._instanceConstructor,n=e.resolve;if(n===f){var o=p(t);if(o===O&&t._state!==kt)t._onError=null,this._settledAt(t._state,r,t._result);else if("function"!=typeof o)this._remaining--,this._result[r]=this._makeResult(Ot,r,t);else if(e===Y){var i=new e(h);y(i,t,o),this._willSettleAt(i,r)}else this._willSettleAt(new e(function(r){return r(t)}),r)}else this._willSettleAt(n(t),r)},R.prototype._eachEntry=function(t,r){u(t)?this._settleMaybeThenable(t,r):(this._remaining--,this._result[r]=this._makeResult(Ot,r,t))},R.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===kt&&(this._remaining--,this._abortOnReject&&t===Ct?b(n,e):this._result[r]=this._makeResult(t,r,e)),0===this._remaining&&g(n,this._result)},R.prototype._makeResult=function(t,r,e){return e},R.prototype._willSettleAt=function(t,r){var e=this;E(t,void 0,function(t){return e._settledAt(Ot,r,t)},function(t){return e._settledAt(Ct,r,t)})};var Pt="rsvp_"+At()+"-",It=0;Y.cast=f,Y.all=M,Y.race=P,Y.resolve=f,Y.reject=I,Y.prototype={constructor:Y,_guidKey:Pt,_onError:function(t){var r=this;bt.after(function(){r._onError&&bt.trigger("error",t,r._label)})},then:O,"catch":function(t,r){return this.then(void 0,t,r)},"finally":function(t,r){var e=this,n=e.constructor;return e.then(function(r){return n.resolve(t()).then(function(){return r})},function(r){return n.resolve(t()).then(function(){throw r})},r)}};var xt=new D,Nt=new D;B.prototype=Tt(R.prototype),B.prototype._superConstructor=R,B.prototype._makeResult=C,B.prototype._validationError=function(){return new Error("allSettled must be called with an array")},Q.prototype=Tt(R.prototype),Q.prototype._superConstructor=R,Q.prototype._init=function(){this._result={}},Q.prototype._validateInput=function(t){return t&&"object"==typeof t},Q.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},Q.prototype._enumerate=function(){var t=this,r=t.promise,e=t._input,n=[];for(var o in e)r._state===kt&&Object.prototype.hasOwnProperty.call(e,o)&&n.push({position:o,entry:e[o]});var i=n.length;t._remaining=i;for(var u=void 0,s=0;r._state===kt&&s<i;s++)u=n[s],t._eachEntry(u.entry,u.position)},Z.prototype=Tt(Q.prototype),Z.prototype._superConstructor=R,Z.prototype._makeResult=C,Z.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};var Yt=0,Dt=void 0,Kt="undefined"!=typeof window?window:void 0,Ut=Kt||{},qt=Ut.MutationObserver||Ut.WebKitMutationObserver,Vt="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Ft="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Gt=new Array(1e3),Lt=void 0;Lt=Vt?ft():qt?ht():Ft?pt():void 0===Kt&&"function"=="function"?_t():vt();var Wt=void 0;if("object"==typeof self)Wt=self;else{if("object"!=typeof global)throw new Error("no global: `self` or `global` found");Wt=global}var $t;bt.async=ct,bt.after=function(t){return setTimeout(t,0)};var zt=ot,Bt=function(t,r){return bt.async(t,r)};if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Ht=window.__PROMISE_INSTRUMENTATION__;n("instrument",!0);for(var Jt in Ht)Ht.hasOwnProperty(Jt)&&mt(Jt,Ht[Jt])}var Qt=($t={cast:zt,Promise:Y,EventTarget:gt,all:z,allSettled:H,race:J,hash:X,hashSettled:tt,rethrow:rt,defer:et,denodeify:G,configure:n,on:mt,off:wt,resolve:ot,reject:it,map:nt},yt($t,"async",Bt),yt($t,"filter",at),$t);t["default"]=Qt,t.cast=zt,t.Promise=Y,t.EventTarget=gt,t.all=z,t.allSettled=H,t.race=J,t.hash=X,t.hashSettled=tt,t.rethrow=rt,t.defer=et,t.denodeify=G,t.configure=n,t.on=mt,t.off=wt,t.resolve=ot,t.reject=it,t.map=nt,t.async=Bt,t.filter=at,Object.defineProperty(t,"__esModule",{value:!0})});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(13).setImmediate, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(10).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).setImmediate, __webpack_require__(13).clearImmediate))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	   __webpack_require__(4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(16)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    /*
	     * 
	     * SHARED BETWEEN CLASSES
	     */
	
	    function __SharedDelegator () {
	    }
	
	
	    function __createStorage (creator) {
	        var storage = new WeakMap();
	        creator = typeof creator === 'function' ? creator : Object.create.bind(null, null, {});
	        return function store (o, v) {
	            if (v) {
	                storage.set(o, v);
	            } else {
	                v = storage.get(o);
	                if (!v) {
	                    storage.set(o, v = creator(o));
	                }
	            }
	            return v;
	        };
	    }
	
	    function __inherit (src, dest, staticOnly, __define) {
	        var extend = function (destination, source, extendsStatic) {
	            var properties = extendsStatic ? Object.getOwnPropertyNames(source) : source;
	            var isClass = source.__isClass;
	            for (var prop in properties) {
	                var p = extendsStatic ? properties[prop] : prop;
	
	                if ((!isClass || p.indexOf("__") !== 0) // exclude Class magic methods
	                    && p !== "prototype") {
	
	                    if (extendsStatic) {
	                        var d = Object.getOwnPropertyDescriptor(source, p);
	                        var dd = Object.getOwnPropertyDescriptor(destination, p);
	                        if (dd && dd.configurable == false)
	                            continue; // skip reserved properties
	
	                        Object.defineProperty(destination, p, d);
	                    } else {
	                        var d = Object.getPropertyDescriptor(source, p);
	                        var dd = Object.getPropertyDescriptor(destination, p);
	                        if (dd && dd.configurable == false)
	                            continue; // skip reserved propertiess
	
	                        var v = d.get || d.value;
	                        if (v.getInfo) {
	                            var info = v.getInfo();
	                            __define(p, source[p], info.attributes, info.retType, destination);
	                        } else {
	                            __define(p, source[p], null, null, destination);
	                        }
	                    }
	                }
	            }
	        };
	
	        extend(dest, src, true);
	        if (!staticOnly)
	            extend(dest.prototype, src.prototype, false);
	    }
	
	    var __caller = null;
	
	    // Functions within the closure can only be accessed by other functions
	    // within the closure (this is the standard way of doing private methods)
	
	    // This function checks whether the calling method belongs to a certain
	    // class (i.e. whether it is contained within the class's prototype object
	    // For protected fields, the prototype of the calling object's constructor is passed.
	    // "alt" parameter could be used to check the static properties too
	    function __checkAccess (scope, alt) {
	        // If access attempted in global context, caller may be null
	        if (!__caller) {
	            return false;
	        }
	
	        var name = __caller.getInfo().name;
	
	        var prop = (scope && name in scope && scope[name]) || (alt && name in alt && alt[name]);
	
	        // compare the prototype of caller and scope property
	        if (Object.getPrototypeOf(__caller) === Object.getPrototypeOf(prop))
	            return true;
	
	        return false;
	    }
	
	    function __assertAccess (scope, alt) {
	        if (!__checkAccess(scope, alt))
	            throw new Error("Cannot access protected property");
	    }
	
	    /**
	     *
	     * @param {Object} descriptor elements:
	     * type {Array of Strings / String} -> final / abstract modifier 
	     * class {String} -> name of class ( not implemented yet, use var best alternative )
	     * base {Object} -> the prototype of parent class
	     * use {Array} -> class or classes for code reusing
	     * members {Array of Object} -> associative array of members to add
	     * @returns {_Class}
	     */
	    $.Class = function (descriptor) {
	
	        var __membersList = [];
	
	        // static "hard" map
	        var __staticMembers = {
	            priv: {}
	        };
	
	        var __pendingInst = {};
	
	        function __Class () {
	            function __PvDelegator () {
	            }
	
	            var __Object = null;
	            var __base = null;
	
	            if (typeof descriptor == "function") {
	                // if descriptor is a function then we're wrapping an non-framework "class"
	                __Object = descriptor;
	
	                __Object.constructor = function () {
	                    return __constructor(this, arguments);
	                };
	            } else {
	
	                __Object = function () {
	                    return __constructor(this, arguments);
	                };
	
	                /**
	                 * Extends base ( prototype only, static methods are inherited below )
	                 */
	                if (descriptor) {
	                    if (descriptor.type && typeof descriptor.type === "string")
	                        descriptor.type = descriptor.type.split(" ");
	
	                    if (descriptor.type) {
	                        if (descriptor.type.indexOf("abstract") >= 0) {
	                            Object.defineProperty(__Object, "__isAbstract", {
	                                value: true,
	                                writable: false,
	                                configurable: false,
	                                enumerable: true
	                            });
	                        }
	
	                        if (descriptor.type.indexOf("static") >= 0) {
	                            Object.defineProperty(__Object, "__isStatic", {
	                                value: true,
	                                writable: false,
	                                configurable: false,
	                                enumerable: true
	                            });
	                        }
	
	                        if (descriptor.type.indexOf("final") >= 0) {
	                            Object.defineProperty(__Object, "__isFinal", {
	                                value: true,
	                                writable: false,
	                                configurable: false,
	                                enumerable: true
	                            });
	                        }
	                    }
	
	
	                    if (descriptor.base) {
	                        if (typeof descriptor.base != "function")
	                            throw new Error("Not valid class to extends!");
	
	                        // if you are extending a "native class" then wrap it before
	                        if (!descriptor.base.__isClass)
	                            descriptor.base = $.Class(descriptor.base);
	
	                        if (descriptor.base.__isFinal)
	                            throw Error("final class cannot be extended!");
	
	                        __Object.prototype = Object.create(descriptor.base.prototype);
	
	                        __base = descriptor.base;
	                    }
	                }
	            }
	
	            var __proto = __Object.prototype;
	
	            // Weak Map for instanced
	            var __instMembers = {
	                priv: __createStorage()
	            };
	
	            /**
	             * Destroy the object ( private method )
	             */
	            function __destructor () {
	                //delete this.__proto__;
	
	                // destroy the rest of chain
	                this.__parent && this.__parent.__destructor();
	
	                return this; // return this to be combined with delete: delete myObj.__destruct();
	            }
	
	            function __constructor (scope, args) {
	                var isPvCall = __caller != null;
	
	                var absInit = false;
	
	                if (__Object.__isStatic) {
	                    throw new Error('Static class may not be instantiated');
	                }
	
	
	                if (scope.__root) {
	                    var obj = scope.__root;
	                } else {
	                    var obj = Object.create(__proto);
	                    scope.__root = obj; // store the root scope
	                }
	
	                if (__Object.__isAbstract) {
	                    // if also the "root" object is abstract, then throw an error
	                    if (scope.__root.__st.__isAbstract) {
	                        throw new Error('Abstract class may not be constructed');
	                    } else {
	                        absInit = true;
	                    }
	                }
	
	                obj.__root = scope.__root;
	
	                var destructor = null;
	
	                for (var prop in __pendingInst) {
	                    var m = __pendingInst[prop];
	
	                    // check for private constructor
	                    switch (prop) {
	                        case "__construct":
	                            if (m.attributes.indexOf("private") >= 0 && !isPvCall)
	                                throw new Error('Class with private constructor may not be instantiated');
	                            break;
	                        case "__destruct":
	                            destructor = m;
	                            continue;
	                    }
	
	                    __define(prop, m.val, m.attributes, m.retType, obj);
	                }
	
	                // also base must be instantiated
	                if (__base) {
	                    __define("__parent", __base.apply({__pvFlag: true, __root: obj.__root}, args),
	                        "private final", null, obj);
	                }
	
	                /**
	                 * define destructor
	                 */
	                if (!obj["__destruct"] || destructor) {
	                    destructor || (destructor = {
	                        val: function () {
	                        },
	                        attributes: ["public"]
	                    });
	
	                    // destruct workflow must be defined during
	                    // instance building
	                    var d = destructor.val;
	                    var dt = function () {
	                        d && d.call(this);
	                        // after __destruct methods are casted
	                        // we need to call the private one
	                        __destructor.call(this);
	                    };
	                    // duck punching __destruct
	                    __define("__destruct", dt, destructor.attributes, destructor.retType, obj);
	                }
	
	                /*
	                 * Constructor
	                 */
	
	                var constructor = obj["__construct"] || (isPvCall ? __instMembers.priv(obj.__root)["__construct"] : undefined);
	                // check __pvFlag to avoid calling parent constructor
	                if (!scope.__pvFlag && constructor !== undefined) {
	                    // call constructor
	                    if (!absInit) {
	                        constructor.apply(obj, args);
	                    }
	                }
	
	                if (__Object.__isFinal) {
	                    //Object.preventExtensions(Obj);
	                    Object.seal(obj);
	                }
	
	                return obj;
	            }
	
	            /**
	             *  Magic methods and properties
	             */
	
	            // dummy method for "duck type" checking
	            Object.defineProperty(__proto, "__isClass", {value: function () {
	                    return true;
	                },
	                enumerable: true
	            });
	
	            Object.defineProperty(__Object, "__isClass", {value: function (instance) {
	                    return "__isClass" in instance;
	                },
	                enumerable: true
	            });
	
	            Object.defineProperty(__Object, "__isChildOf", {value: function (parent) {
	                    return __proto instanceof parent;
	                },
	                enumerable: true
	            });
	
	            Object.defineProperty(__Object, "__getBase", {value: function (instance) {
	                    return __base;
	                },
	                enumerable: true
	            });
	
	            // TODO: test
	            Object.defineProperty(__Object, "__createInstance", {value: function () {
	                    var Temp = function () {
	                    }, inst, ret; // other vars
	
	                    // Give the Temp constructor the Constructor's prototype
	                    Temp.prototype = __Object;
	
	                    // Create a new instance
	                    inst = new Temp;
	
	                    // Call the original Constructor with the temp
	                    // instance as its context (i.e. its 'this' value)
	                    ret = __Object.apply(inst, arguments);
	
	                    // If an object has been returned then return it otherwise
	                    // return the original instance.
	                    // (consistent with behaviour of the new operator)
	                    return Object(ret) === ret ? ret : inst;
	                },
	                enumerable: true
	            });
	
	            /**
	             * expose the static public members to call directly from an instantiated object
	             */
	            Object.defineProperty(__proto, "__st", {
	                value: __Object,
	                enumerable: true
	            });
	
	            /**
	             * Inherit methods from another class ( such as traits )
	             */
	            Object.defineProperty(__proto, "__inherit", {value: function (src) {
	                    return __inherit(src, this, false, __define);
	                },
	                enumerable: true
	            });
	
	            Object.defineProperty(__Object, "__getMembers", {value: function () {
	                    var members = [];
	                    if (__Object.__parent)
	                        members = __Object.__parent.__getMembers();
	
	                    members = members.concat(__membersList);
	                    return members;
	                },
	                enumerable: true
	            });
	
	            Object.defineProperty(__proto, "__addMembers", {value: function (elements) {
	                    __Object.__addMembers(elements, this, arguments[1]);
	                },
	                enumerable: true
	            });
	
	            /**
	             *
	             * @param {type} elements
	             * @param {type} instance (Optional) can be null if static member
	             * @returns {undefined}
	             */
	            Object.defineProperty(__Object, "__addMembers", {value: function (elements, instance) {
	                    var publicCall = true;
	                    // hidden argument for internal use
	                    if (arguments[2] !== undefined && arguments[2] instanceof __PvDelegator)
	                        publicCall = false;
	
	                    for (var i = 0; i < elements.length; ++i) {
	                        __define(elements[i]["name"] || elements[i]["n"],
	                            typeof elements[i]["val"] === "undefined" ? elements[i]["v"] : elements[i]["val"],
	                            elements[i]["attributes"] || elements[i]["a"],
	                            elements[i]["retType"] || elements[i]["r"],
	                            instance,
	                            publicCall);
	                    }
	                },
	                enumerable: true
	            });
	
	            /**
	             * Set a member to a defined Class, object or prototype
	             * @param {type} name
	             * @param {type} val
	             * @param {String} attributes
	             * public/private
	             * static If no instance provided, this parameter will be forced.
	             * final
	             * @param {String} retType 
	             * @param {type} instance -> will use instance instead of prototype with non static members
	             * @param {String} isPubCall 
	             * @returns Object
	             */
	            function __define (name, val, attributes, retType, instance, isPubCall) {
	                if (!instance) {
	                    __membersList.push({
	                        name: name,
	                        val: val,
	                        attributes: attributes,
	                        retType: retType
	                    });
	                }
	
	                if (typeof attributes === "string")
	                    attributes = attributes.split(" ");
	
	                // false if not specified, but if instance is not defined, it's forced to true
	                var isStatic = attributes ? attributes.indexOf("static") >= 0 : false;
	
	                if (__Object.__isStatic && !isStatic) {
	                    throw new SyntaxError("You cannot add non-static members to a static class!");
	                }
	
	                var access = "public";
	                if (attributes) {
	                    access = attributes.indexOf("protected") >= 0 ?
	                        "protected" :
	                        (attributes.indexOf("private") >= 0 ?
	                            "private" : access);
	                }
	
	
	                if (isPubCall && access !== "public") {
	                    throw new Error("You cannot define a private/protected member outside of Class!");
	                }
	
	                // false if not specified
	                var isFinal = attributes ? attributes.indexOf("final") >= 0 : false;
	
	                // not implemented yet
	                var isAbstract = attributes ? attributes.indexOf("abstract") >= 0 : false;
	
	                if (isAbstract) {
	                    throw new SyntaxError("abstract is not implemented yet! retry later/soon[tm]");
	                }
	
	                // with properties that need an instantiated object , we've to delegate the definition to the constructor
	                if (!isStatic && !instance && (access === "private" || name === "__destruct")) {
	                    __pendingInst[name] = {"val": val, "attributes": attributes, "retType": retType};
	                    return;
	                }
	
	                var obj;
	
	                switch (access) {
	                    case "public": // OR
	                    case "protected":
	                        if (isStatic) {
	                            obj = __Object;
	                        } else if (typeof val === "function") {
	                            obj = __proto;
	                        } else {
	                            obj = instance && instance.__root || __proto;
	                        }
	                        break;
	                    case "private":
	                        obj = isStatic && __staticMembers.priv || __instMembers.priv(instance.__root);
	                        break;
	                }
	
	                // store parent object to apply next
	                // we need to check both in public and in protected scopes
	                // private avoided because we cannot "override" it
	                // we need to check protected before 
	                var old = obj[name];
	
	                var getDescr = function (obj, name) {
	                    var proto = obj.prototype || obj.__proto__;
	                    return Object.getOwnPropertyDescriptor(obj, name)
	                        || (proto && Object.getOwnPropertyDescriptor(proto, name));
	                };
	
	                var getInfo = function () {
	                    return Object.freeze({
	                        name: name,
	                        retType: retType,
	                        attributes: attributes
	                    });
	                };
	
	                if (old) {
	                    // check for final members
	                    var descr = getDescr(obj, name);
	                    // we must check descr.set because if it's used then
	                    // it's a variable with getter/setter and the check is done internally
	                    if (descr && descr.set === undefined && descr.writable !== true) {
	                        throw new SyntaxError("Final member '" + name + "' cannot be overridden");
	                    }
	                }
	
	                var descriptors = {
	                    //__proto__: !isStatic ? obj.__proto__ : obj,
	                    configurable: !isFinal,
	                    enumerable: access !== "protected"
	                };
	
	                if (typeof val !== "function" || val.__isClass) {
	                    if (!retType && access !== "protected") {
	                        descriptors.value = val;
	                        descriptors.writable = !isFinal;
	                    } else {
	                        var checkAccess = function () {
	                            var scope, alt;
	                            if (isStatic) {
	                                scope = __proto;
	                                alt = this;
	                            } else {
	                                scope = this;
	                                alt = this.__st;
	                            }
	                            access === "protected" && __assertAccess(scope, alt);
	                        };
	
	                        var createGetter = function (val) {
	                            function getter () {
	                                checkAccess.call(this);
	                                return val;
	                            }
	
	                            getter.getInfo = getInfo;
	
	                            return getter;
	                        };
	
	                        descriptors.get = createGetter(val);
	
	                        descriptors.set = function setter (newVal) {
	                            if (isFinal)
	                                return;
	
	                            checkAccess.call(this);
	
	                            // check if you're trying to set a new value
	                            // that doesn't respect the typehinting rule
	                            retType && $.typeCompare(retType, newVal);
	
	                            // redefine only getter
	                            descriptors.get = createGetter(newVal);
	
	                            // defineProperty redefines the variable
	                            // on instance ( to avoid prototype modification )
	                            // and without "recalling" the setter
	                            Object.defineProperty(this, name, descriptors);
	                        };
	                    }
	                } else {
	                    descriptors.writable = !isFinal;
	
	                    //var scope = null;
	                    if (name === "__parent")
	                        debugger;
	
	                    var wrapper = function () {
	                        var scope = {
	                            s: (this && this.__stScope) || __Object,
	                            _s: __staticMembers.priv
	                        };
	
	                        scope.__caller = this;
	
	                        // expose private variable to internal class function
	                        if (!isStatic) {
	                            scope.i = this.__root || this.__scope.__root;
	                            scope._i = __instMembers.priv(scope.i);
	
	                            scope.__scope = scope._i.__scope = scope.i;
	                        } else {
	                            scope.__stScope = scope.s;
	                        }
	
	                        // as scope for __super we pass the base class environment
	                        var sBind = isStatic ? __base : scope;
	                        scope.__super = old ? old.bind(sBind) : null;
	
	                        Object.seal(scope); // this generates an error when we try to set something to scope object
	
	                        access === "protected" && __assertAccess(scope.i || __proto, scope.s);
	
	
	                        var prevCaller = __caller;
	                        __caller = wrapper;
	                        var r;
	                        try {
	                            r = val.apply(scope, arguments);
	                        }
	                        finally {
	                            __caller = prevCaller;
	                        }
	
	                        if (retType)
	                            $.typeCompare(retType, r);
	
	                        return r;
	                    };
	
	                    wrapper.__getWrappedMethod = function (d) {
	                        if (d instanceof __SharedDelegator) {
	                            return val;
	                        }
	                        throw "Error: only the wrapping function may access the wrapped method";
	                    };
	
	                    if (val.__getWrappedMethod) {
	                        val = val.__getWrappedMethod(new __SharedDelegator);
	                    }
	
	                    // store some static informations for wrapper
	                    wrapper.getInfo = getInfo;
	
	                    // alias for static
	                    descriptors.value = wrapper;
	                }
	
	                return Object.defineProperty(obj, name, descriptors);
	            }
	
	            if (descriptor) {
	
	                if (typeof descriptor == "function") {
	                    // for wrapped class we've just to define the constructor
	                    __define("__construct", descriptor, ["public"]);
	                } else {
	                    if (descriptor.base) {
	                        //inherit static methods 
	                        __inherit(descriptor.base, __Object, true, __define);
	                        __define("__parent", descriptor.base, "private static final", null, __Object);
	                    }
	
	                    // Traits
	                    // must be a non-empty array or function
	                    if (descriptor.use) {
	                        if (!Array.isArray(descriptor.use)) {
	                            descriptor.use = [descriptor.use];
	                        }
	
	                        if (descriptor.use.length > 0) {
	                            descriptor.use.forEach(function (t) {
	                                if (t.__getMembers) {
	                                    // if it's a "Class"
	                                    var members = t.__getMembers();
	                                    __Object.__addMembers(members, null, new __PvDelegator);
	                                } else {
	                                    // otherwise try to inherit native public members
	                                    __inherit(t, __Object, false, __define);
	                                }
	                            });
	                        }
	                    }
	
	                    // finally add members
	                    if (descriptor.members)
	                        __Object.__addMembers(descriptor.members, null, new __PvDelegator);
	
	                    __Object.constructor = __constructor;
	
	                    if (__Object.__isFinal) {
	                        //Object.preventExtensions(Obj);
	                        Object.seal(__Object);
	                    }
	
	                    /*
	                     * Create an object named by descriptor.class 
	                     * inside namespace if defined, otherwise inside "this" scope
	                     */
	                    if (typeof descriptor.class === "string") {
	                        var clScope = descriptor.namespace || this;
	                        clScope[descriptor.class] = __Object;
	                    }
	                }
	            }
	
	            return __Object;
	        }
	
	        return new __Class();
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* (The MIT License)
	 *
	 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
	 * associated documentation files (the 'Software'), to deal in the Software without restriction,
	 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
	 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included with all copies or
	 * substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
	 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
	 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	// Original WeakMap implementation by Gozala @ https://gist.github.com/1269991
	// Updated and bugfixed by Raynos @ https://gist.github.com/1638059
	// Expanded by Benvie @ https://github.com/Benvie/harmony-collections
	
	void function(global, undefined_, undefined){
	  var getProps = Object.getOwnPropertyNames,
	      defProp  = Object.defineProperty,
	      toSource = Function.prototype.toString,
	      create   = Object.create,
	      hasOwn   = Object.prototype.hasOwnProperty,
	      funcName = /^\n?function\s?(\w*)?_?\(/;
	
	
	  function define(object, key, value){
	    if (typeof key === 'function') {
	      value = key;
	      key = nameOf(value).replace(/_$/, '');
	    }
	    return defProp(object, key, { configurable: true, writable: true, value: value });
	  }
	
	  function nameOf(func){
	    return typeof func !== 'function'
	          ? '' : 'name' in func
	          ? func.name : toSource.call(func).match(funcName)[1];
	  }
	
	  // ############
	  // ### Data ###
	  // ############
	
	  var Data = (function(){
	    var dataDesc = { value: { writable: true, value: undefined } },
	        uids     = create(null),
	
	        createUID = function(){
	          var key = Math.random().toString(36).slice(2);
	          return key in uids ? createUID() : uids[key] = key;
	        },
	
	        globalID = createUID(),
	
	        storage = function(obj){
	          if (hasOwn.call(obj, globalID))
	            return obj[globalID];
	
	          if (!Object.isExtensible(obj))
	            throw new TypeError("Object must be extensible");
	
	          var store = create(null);
	          defProp(obj, globalID, { value: store });
	          return store;
	        };
	
	    // common per-object storage area made visible by patching getOwnPropertyNames'
	    define(Object, function getOwnPropertyNames(obj){
	      var props = getProps(obj);
	      if (hasOwn.call(obj, globalID))
	        props.splice(props.indexOf(globalID), 1);
	      return props;
	    });
	
	    function Data(){
	      var puid = createUID(),
	          secret = {};
	
	      this.unlock = function(obj){
	        var store = storage(obj);
	        if (hasOwn.call(store, puid))
	          return store[puid](secret);
	
	        var data = create(null, dataDesc);
	        defProp(store, puid, {
	          value: function(key){ if (key === secret) return data; }
	        });
	        return data;
	      }
	    }
	
	    define(Data.prototype, function get(o){ return this.unlock(o).value });
	    define(Data.prototype, function set(o, v){ this.unlock(o).value = v });
	
	    return Data;
	  }());
	
	
	  var WM = (function(data){
	    var validate = function(key){
	      if (key == null || typeof key !== 'object' && typeof key !== 'function')
	        throw new TypeError("Invalid WeakMap key");
	    }
	
	    var wrap = function(collection, value){
	      var store = data.unlock(collection);
	      if (store.value)
	        throw new TypeError("Object is already a WeakMap");
	      store.value = value;
	    }
	
	    var unwrap = function(collection){
	      var storage = data.unlock(collection).value;
	      if (!storage)
	        throw new TypeError("WeakMap is not generic");
	      return storage;
	    }
	
	    var initialize = function(weakmap, iterable){
	      if (iterable !== null && typeof iterable === 'object' && typeof iterable.forEach === 'function') {
	        iterable.forEach(function(item, i){
	          if (item instanceof Array && item.length === 2)
	            set.call(weakmap, iterable[i][0], iterable[i][1]);
	        });
	      }
	    }
	
	
	    function WeakMap(iterable){
	      if (this === global || this == null || this === WeakMap.prototype)
	        return new WeakMap(iterable);
	
	      wrap(this, new Data);
	      initialize(this, iterable);
	    }
	
	    function get(key){
	      validate(key);
	      var value = unwrap(this).get(key);
	      return value === undefined_ ? undefined : value;
	    }
	
	    function set(key, value){
	      validate(key);
	      // store a token for explicit undefined so that "has" works correctly
	      unwrap(this).set(key, value === undefined ? undefined_ : value);
	    }
	
	    function has(key){
	      validate(key);
	      return unwrap(this).get(key) !== undefined;
	    }
	
	    function delete_(key){
	      validate(key);
	      var data = unwrap(this),
	          had = data.get(key) !== undefined;
	      data.set(key, undefined);
	      return had;
	    }
	
	    function toString(){
	      unwrap(this);
	      return '[object WeakMap]';
	    }
	
	    var src = (''+Object).split('Object');
	    var stringifier = function toString(){
	      return src[0] + nameOf(this) + src[1];
	    };
	
	    define(stringifier, stringifier);
	
	    var prep = { __proto__: [] } instanceof Array
	      ? function(f){ f.__proto__ = stringifier }
	      : function(f){ define(f, stringifier) };
	
	    prep(WeakMap);
	
	    [toString, get, set, has, delete_].forEach(function(method){
	      define(WeakMap.prototype, method);
	      prep(method);
	    });
	
	    return WeakMap;
	  }(new Data));
	
	  var defaultCreator = Object.create
	    ? function(){ return Object.create(null) }
	    : function(){ return {} };
	
	  function createStorage(creator){
	    var weakmap = new WM;
	    creator || (creator = defaultCreator);
	
	    function storage(object, value){
	      if (value || arguments.length === 2) {
	        weakmap.set(object, value);
	      } else {
	        value = weakmap.get(object);
	        if (value === undefined) {
	          value = creator(object);
	          weakmap.set(object, value);
	        }
	      }
	      return value;
	    }
	
	    return storage;
	  }
	
	
	  if (true) {
	    module.exports = WM;
	  } else if (typeof exports !== 'undefined') {
	    exports.WeakMap = WM;
	  } else if (!('WeakMap' in global)) {
	    global.WeakMap = WM;
	  }
	
	  WM.createStorage = createStorage;
	  if (global.WeakMap)
	    global.WeakMap.createStorage = createStorage;
	}(function(){ return this }());


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(15)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    function buildMembers (members, modifiers) {
	        var m = [];
	        for (var name in members) {
	            var val, retType;
	            // if member value is type-hinted
	            // it will be processed instead of 
	            // an eventually var name type-hint syntax
	            if (members[name] instanceof $.dType) {
	                retType = members[name].type;
	                val = members[name].value;
	            } else {
	                var descr = name.split(' ');
	                val = members[name];
	                if (descr.length > 1) {
	                    // check if retType is an object
	                    // that can be found inside this scope
	                    // otherwise pass the string as is
	                    // and remove quotes if any ( you can avoid collision with
	                    // when you want check type using a string enclosing
	                    // type inside quotes )
	                    retType = $[descr[0]] || $.global[descr[0]] || descr[0].replace(/["']/g, "");
	                    // redefine member name without return type
	                    name = descr[1];
	                }
	            }
	
	            m.push({
	                attributes: modifiers || ["public"],
	                name: name,
	                val: val,
	                retType: retType
	            });
	        }
	
	        return m;
	    }
	
	    var mod = (function (modifiers) {
	        var obj = function __modifier () {
	            var members;
	
	            switch (arguments.length) {
	                case 1:
	                    // if we've 1 argument
	                    // it must be an object that contains
	                    // various members definitions
	                    members = arguments[0];
	                    break;
	                case 2:
	                    var vname = arguments[0];
	                    // build the object with single definition
	                    members = {};
	                    members[vname] = arguments[1];
	                    break;
	                case 3:
	                    // when we've 3 arguments, first must
	                    // be the return type
	                    var retType = arguments[0];
	                    var vname = arguments[1];
	                    var val = arguments[2];
	                    // build the object with single definition
	                    members = {};
	                    members[vname] = $.typeHint(retType, val);
	                    break;
	                default:
	                    throw new SyntaxError("Wrong number of parameters");
	            }
	
	            // we must return an object to make difference 
	            // between array parameter and modifier
	            var res = {
	                modifiers: obj.modifiers
	            };
	
	            if (typeof members !== undefined) {
	                // add scope to avoid exception in strict mode
	                res.members = buildMembers.call(null, members, obj.modifiers);
	            }
	
	            return res;
	        };
	
	        obj.modifiers = modifiers;
	
	        Object.defineProperty(obj, "class", {
	            // the setter cannot work in this context because it will set value
	            // to $.class property in any case
	            get: function () {
	                var descriptor = {
	                    type: obj.modifiers,
	                    base: null,
	                    use: [],
	                    members: []
	                };
	
	                /**
	                 * arguments: modifiers or a single array of modifiers
	                 * @returns Class
	                 */
	                function cl () {
	                    return cl.define.apply(null, arguments);
	                }
	
	                cl.extends = function (base) {
	                    if (base !== undefined) {
	                        if (descriptor.base) {
	                            throw new SyntaxError("Multiple use of extends");
	                        }
	
	                        descriptor.base = base;
	                    }
	
	                    return cl;
	                };
	
	                cl.use = function (traits) {
	                    if (traits !== undefined)
	                        descriptor.use = descriptor.use.length ? descriptor.use.concat(traits) : traits;
	
	                    return cl;
	                };
	
	                cl.members = function (members) {
	                    // if there's a single member and it's an array
	                    // it means that we're passing an array of modifiers
	                    // and not directly modifiers in arguments
	                    if (members.length==1 && Array.isArray(members[0])) {
	                        members=members[0];
	                    }
	
	                    if (members !== undefined && Array.isArray(members)) {
	                        members.forEach(function (m) {                         
	                            descriptor.members = descriptor.members.length > 0 ? descriptor.members.concat(m.members) : m.members;
	                        });
	
	                        return cl;
	                    }
	
	                    throw new SyntaxError("Members must be defined as an array of properties!");
	                };
	
	                cl.define = function () {
	                    var members = Array.prototype.slice.call(arguments);
	
	                    if (members.length > 0) {
	                        cl.members(members);
	                    }
	
	                    return $.Class(descriptor);
	                };
	
	                return cl;
	            }
	        });
	
	        // NOT IMPLEMENTED YET
	        /**
	         * INTERFACE
	         */
	        /*obj.interface = (function () {
	         var descriptor={
	         type: obj.modifiers.push("interface"),
	         base: null,
	         use: [],
	         members: []
	         };
	         
	         var iface=function(members) {
	         if (members!==undefined)
	         iface.members(members);
	         
	         return $.Class(descriptor);
	         };
	         
	         iface.extends=function(base) {
	         descriptor.use=descriptor.use.length ? descriptor.use.concat(traits) : traits;
	         return cl;
	         };
	         
	         iface.members=function(members) {               
	         descriptor.members=descriptor.members.length ? descriptor.use.concat(members) : members;
	         return iface;
	         };
	         
	         iface.define=function() {
	         return iface();
	         };
	         
	         return iface;
	         })();
	         */
	
	        /**
	         * TEMPLATE
	         */
	        /*
	         obj.template = (function () {
	         var descriptor={
	         type: obj.modifiers.push("template"),
	         base: null,
	         use: [],
	         members: []
	         };
	         
	         var tmpl=function(members) {
	         if (members!==undefined)
	         tmpl.members(members);
	         
	         return $.Class(descriptor);
	         };
	         
	         tmpl.extends=function(base) {
	         if (descriptor.base) {
	         throw new SyntaxError("Multiple use of extends");
	         }
	         
	         descriptor.base=base;
	         return tmpl;
	         };
	         
	         tmpl.members=function(members) {               
	         descriptor.members=descriptor.members.length ? descriptor.use.concat(members) : members;
	         return tmpl;
	         };
	         
	         tmpl.define=function() {
	         return tmpl();
	         };
	         
	         return tmpl;
	         })();
	         */
	
	        return obj;
	    });
	
	    $.public = new mod(["public"]);
	    $.private = new mod(["private"]);
	    $.protected = new mod(["protected"]);
	
	    $.static = new mod(["static"]);
	    $.final = new mod(["final"]);
	    $.abstract = new mod(["abstract"]);
	
	    //public shortcut
	    var descr = Object.getOwnPropertyDescriptor($.public, "class");
	    Object.defineProperty($, "class", {
	        get: descr.get,
	        set: descr.set
	    });
	
	    //
	    // COMBINATIONS
	    //
	    //
	
	    // PUBLIC
	    $.public.final = new mod(["public", "final"]);
	    $.public.static = new mod(["public", "static"]);
	    $.public.final.static = new mod(["public", "final", "static"]);
	    $.public.static.final = $.public.final.static;
	    $.public.abstract = new mod(["public", "abstract"]);
	
	    // PRIVATE
	    $.private.final = new mod(["private", "final"]);
	    $.private.static = new mod(["private", "static"]);
	    $.private.final.static = new mod(["private", "final", "static"]);
	    $.private.static.final = $.private.final.static;
	    $.private.abstract = new mod(["private", "abstract"]);
	
	    // PROTECTED
	    $.protected.final = new mod(["protected", "final"]);
	    $.protected.static = new mod(["protected", "static"]);
	    $.protected.final.static = new mod(["protected", "final", "static"]);
	    $.protected.static.final = $.protected.final.static;
	    $.protected.abstract = new mod(["protected", "abstract"]);
	
	    // ABSTRACT
	    $.abstract.public = new mod(["abstract", "public"]);
	    $.abstract.private = new mod(["abstract", "private"]);
	    $.abstract.protected = new mod(["abstract", "protected"]);
	
	    // STATIC
	
	    $.static.public = new mod(["static", "public"]);
	    $.static.private = new mod(["static", "private"]);
	    $.static.protected = new mod(["static", "protected"]);
	
	    // FINAL
	    $.final.public = new mod(["final", "public"]);
	    $.final.private = new mod(["final", "private"]);
	    $.final.protected = new mod(["final", "protected"]);
	
	    // STATIC/FINAL COMBINATION
	    $.final.static = $.static.final = new mod(["static", "final"]);
	    $.final.static.public = $.static.final.public = new mod(["static", "final", "public"]);
	    $.final.static.private = $.static.final.private = new mod(["static", "final", "private"]);
	    $.final.static.protected = $.static.final.protected = new mod(["static", "final", "protected"]);
	
	
	    /*
	     * 
	     * UTILS
	     * 
	     */
	
	    $.dType = function (type, value) {
	        this.type = type;
	        this.value = value;
	    };
	
	
	    $.typeHint = function (type, value) {
	        if (typeof value !== "function")
	            $.typeCompare(type, value);
	
	        return new $.dType(type, value);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(19),
	    __webpack_require__(31)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    var $=hwc;
	
	    /**
	     * Alternatives for loading in PHP-style
	     */
	    Object.defineProperty($.Browser,"include",{
	        configurable: false,
	        writable: false,
	        value: $.Browser.Loader.load
	    });
	
	    Object.defineProperty($.Browser,"require",{
	        configurable: false,
	        writable: false,
	        value: $.Browser.Loader.load
	    });
	
	    Object.defineProperty($.Browser,"includeSync",{
	        configurable: false,
	        writable: false,
	        value: $.Browser.Loader.loadSync
	    });
	
	    Object.defineProperty($.Browser,"requireSync",{
	        configurable: false,
	        writable: false,
	        value: $.Browser.Loader.loadSync
	    });
	    
	    return $;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(20),
	    __webpack_require__(22)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($,jq) {
	    $.Browser = $.Class({});
	    
	    jq = jq || jQuery;
	
	    // static initialization
	    $.Browser.JQ = jq.noConflict(true);
	
	    return $.Browser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
	},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
	},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"=="function"&&__webpack_require__(21)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23),
	    __webpack_require__(24),
	    __webpack_require__(25),
	    __webpack_require__(26),
	    __webpack_require__(27),
	    __webpack_require__(28),
	    __webpack_require__(29),
	    __webpack_require__(30)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    return $;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    return $.Array = $.Class({members: [
	            {
	                /**
	                 * Destroy all elements of array
	                 */
	                a: ["public", "static"], n: "clean", v: function (arr) {
	                    var what, a = arr, L = a.length, ax;
	                    while (L && arr.length) {
	                        what = a[--L];
	                        while ((ax = arr.indexOf(what)) !== -1) {
	                            arr.splice(ax, 1);
	                        }
	                    }
	                    return arr;
	                }
	            },
	            {
	                a: ["public", "static"], n: "remove", v: function (arr, obj) {
	                    var index = arr.indexOf(5);
	                    index > -1 && arr.splice(index, 1);
	                }
	            },
	            {
	                /**
	                 * A-B ( subtraction between sets )
	                 * [TODO] performance improvement
	                 */
	                a: ["public", "static"], n: "diff", v: function (a, b) {
	                    return a.filter(function (i) {
	                        return b.indexOf(i) < 0;
	                    });
	                }
	            },
	            {
	                /**
	                 * A ∩ B ( intersection between sets )
	                 */
	                a: ["public", "static"], n: "intersect", v: function (a, b) {
	                    var ret = [];
	                    for (var i = 0; i < a.length; i++) {
	                        for (var j = 0; j < b.length; j++) {
	                            if (a[i] === b[j]) {
	                                ret.push(a[i]);
	                                break;
	                            }
	                        }
	                    }
	
	                    return ret;
	                }
	            }
	
	
	        ]}
	    );
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    /**
	     * "duck punching" RSVP
	     * 
	     */
	
	    /*
	     * when calling .then() function from cb*() methods
	     * latest argument is be te callback result
	     * if not callback defined it's null
	     */
	    $.RSVP.defer.prototype.cbResolve = function () {
	        if (this.promise === null && this._callback) {
	            return this._callback.apply(null, arguments);
	        } else {
	            this.resolve(arguments);
	        }
	    };
	
	    $.RSVP.defer.prototype.cbReject = function () {
	        if (this.promise === null && this._callback) {
	            return this._callback.apply(null, arguments);
	        } else {
	            this.reject(arguments);
	        }
	    };
	
	    var tmp = $.Promise.prototype["catch"];
	    $.Promise.prototype["catch"] = function (err, label) {
	        // add marker to notify that exception has been caught
	        this._label = "__caught__" + (this._label || "");
	        return tmp.call(this, err, label);
	    };
	    // compatible alias for catch
	    $.Promise.prototype.fail = $.Promise.prototype["catch"];
	
	    $.RSVP.configure('instrument', true);
	    $.RSVP.configure('instrument-with-stack', true);
	    $.RSVP.on('rejected', function (e) {
	        // print error only when exception has not been caught using promise methods
	        if (!e.label || !e.label.indexOf("__caught__") === 0) {
	            console.error("Uncaught exception", e, e.detail.stack);
	        }
	    });
	
	    /*
	     * Adapter class for some Q methods
	     */
	    return $.Async = $.Class({members: [
	            {
	                a: ["public", "static"], n: "all", v: function (promises) {
	                    return $.Promise.all(promises);
	                }
	            },
	            {
	                /**
	                 * array of promising-function that should be called sequentially 
	                 */
	                a: ["public", "static"], n: "sequence", v: function (fnArray) {
	                    return fnArray.slice(1).reduce(function (prev, curr) {
	                        return prev.then(curr);
	                    }, fnArray[0]());
	                }
	            },
	            /*{
	             a: ["public", "static"], n: "call", v: function (fn) {
	             return this.s.apply(fn, Array.prototype.slice.call(arguments, 1));
	             }
	             },
	             {
	             a: ["public", "static"], n: "apply", v: function (fn, args) {
	             return $.Q.nfapply(fn, args);
	             }
	             },*/
	            {
	                /**
	                 * fn: accepts resolve and reject methods as parameter
	                 */
	                a: ["public", "static"], n: "promise", v: function (fn) {
	                    return new $.Promise(fn);
	                }
	            },
	            {
	                /**
	                 * if callback is defined then promise will not be set 
	                 */
	                a: ["public", "static"], n: "defer", v: function (callback) {
	                    var deferred = $.RSVP.defer();
	                    if (callback) {
	                        if (typeof callback !== "function")
	                            throw new Error("callback type is: " + typeof (callback));
	                        deferred._callback = callback;
	                        deferred.promise = null;
	                    }
	
	                    return deferred;
	                }
	            }
	        ]}
	    );
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    $.ObjUtils = $.Class({members: [
	            {
	                a: ["public", "static"], n: "merge", v: function (obj1, obj2) {
	                    var obj3 = {};
	                    for (var attrname in obj1) {
	                        obj3[attrname] = obj1[attrname];
	                    }
	                    for (var attrname in obj2) {
	                        obj3[attrname] = obj2[attrname];
	                    }
	                    return obj3;
	                }
	            },
	            {
	                a: ["public","static"], n: "instanceFactory", v: function(cl,args) {
	                    function dummy() {}
	                    
	                    dummy.prototype = cl.prototype;
	                    var obj = new dummy();
	                    cl.apply(obj, args);
	                    return obj;
	                }
	            }
	
	        ]}
	    );
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) { 
	    $.Object = $.Class({members: [
	            {
	                a: "public", n: "__destruct", v: function () {
	                }
	            },
	            {
	                a: ["public","static"], n: "clone", v: function (obj) {
	                    return JSON.parse(JSON.stringify(obj));
	                }
	            }
	        ]
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    // it can be used as trait
	    $.Singleton = $.final.class([
	        $.protected.static({
	            instance: null
	        }),
	        $.public.static({
	            /**
	             * helper method to create a singleton for a class
	             */
	            I: function () {
	                var self=this.__caller;
	                if (!self.instance) {
	                    self.instance = $.ObjUtils.instanceFactory(self, arguments);
	                }
	
	                return self.instance;
	            }
	        })
	    ]);
	    
	    return $.Singleton;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	
	


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    $.String = $.Class({members: [
	            {
	                /**
	                 * convert any string to hashcode
	                 */
	                attributes: ["public", "static"],
	                name: "hashCode",
	                val: function (string) {
	                    var hash = 0;
	                    if (string.length === 0)
	                        return hash;
	                    for (var i = 0; i < string.length; i++) {
	                        var char = string.charCodeAt(i);
	                        hash = ((hash << 5) - hash) + char;
	                        hash = hash & hash; // Convert to 32bit integer
	                    }
	                    return hash;
	                }
	            },
	            {
	                a: "public static", n: "utf8Encode", v: function (argString) {
	                    //  discuss at: http://phpjs.org/functions/utf8_encode/
	                    // original by: Webtoolkit.info (http://www.webtoolkit.info/)
	                    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	                    // improved by: sowberry
	                    // improved by: Jack
	                    // improved by: Yves Sucaet
	                    // improved by: kirilloid
	                    // bugfixed by: Onno Marsman
	                    // bugfixed by: Onno Marsman
	                    // bugfixed by: Ulrich
	                    // bugfixed by: Rafal Kukawski
	                    // bugfixed by: kirilloid
	                    //   example 1: utf8_encode('Kevin van Zonneveld');
	                    //   returns 1: 'Kevin van Zonneveld'
	
	                    if (argString === null || typeof argString === 'undefined') {
	                        return '';
	                    }
	
	                    var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	                    var utftext = '',
	                        start, end, stringl = 0;
	
	                    start = end = 0;
	                    stringl = string.length;
	                    for (var n = 0; n < stringl; n++) {
	                        var c1 = string.charCodeAt(n);
	                        var enc = null;
	
	                        if (c1 < 128) {
	                            end++;
	                        } else if (c1 > 127 && c1 < 2048) {
	                            enc = String.fromCharCode(
	                                (c1 >> 6) | 192, (c1 & 63) | 128
	                                );
	                        } else if ((c1 & 0xF800) != 0xD800) {
	                            enc = String.fromCharCode(
	                                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
	                                );
	                        } else { // surrogate pairs
	                            if ((c1 & 0xFC00) != 0xD800) {
	                                throw new RangeError('Unmatched trail surrogate at ' + n);
	                            }
	                            var c2 = string.charCodeAt(++n);
	                            if ((c2 & 0xFC00) != 0xDC00) {
	                                throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
	                            }
	                            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
	                            enc = String.fromCharCode(
	                                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
	                                );
	                        }
	                        if (enc !== null) {
	                            if (end > start) {
	                                utftext += string.slice(start, end);
	                            }
	                            utftext += enc;
	                            start = end = n + 1;
	                        }
	                    }
	
	                    if (end > start) {
	                        utftext += string.slice(start, stringl);
	                    }
	
	                    return utftext;
	                }
	            },
	            {
	                a: "public static", n: "utf8Decode", v: function (str_data) {
	                    //  discuss at: http://phpjs.org/functions/utf8_decode/
	                    // original by: Webtoolkit.info (http://www.webtoolkit.info/)
	                    //    input by: Aman Gupta
	                    //    input by: Brett Zamir (http://brett-zamir.me)
	                    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	                    // improved by: Norman "zEh" Fuchs
	                    // bugfixed by: hitwork
	                    // bugfixed by: Onno Marsman
	                    // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	                    // bugfixed by: kirilloid
	                    //   example 1: utf8_decode('Kevin van Zonneveld');
	                    //   returns 1: 'Kevin van Zonneveld'
	
	                    var tmp_arr = [],
	                        i = 0,
	                        ac = 0,
	                        c1 = 0,
	                        c2 = 0,
	                        c3 = 0,
	                        c4 = 0;
	
	                    str_data += '';
	
	                    while (i < str_data.length) {
	                        c1 = str_data.charCodeAt(i);
	                        if (c1 <= 191) {
	                            tmp_arr[ac++] = String.fromCharCode(c1);
	                            i++;
	                        } else if (c1 <= 223) {
	                            c2 = str_data.charCodeAt(i + 1);
	                            tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
	                            i += 2;
	                        } else if (c1 <= 239) {
	                            // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
	                            c2 = str_data.charCodeAt(i + 1);
	                            c3 = str_data.charCodeAt(i + 2);
	                            tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	                            i += 3;
	                        } else {
	                            c2 = str_data.charCodeAt(i + 1);
	                            c3 = str_data.charCodeAt(i + 2);
	                            c4 = str_data.charCodeAt(i + 3);
	                            c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
	                            c1 -= 0x10000;
	                            tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
	                            tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
	                            i += 4;
	                        }
	                    }
	
	                    return tmp_arr.join('');
	                }
	            },
	        ]}
	    );
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(23)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    $.Var = $.Class({members: [
	            {
	                /**
	                 * You should pass an anonymous function that returns var to check:
	                 * Var.isset(function () { return a.b.c; })
	                 * Not optimized for single var check, use a !== undefined instead
	                 * 
	                 * NOTE: there is no performance penalty for using try..catch block if the property is set. 
	                 * There is a performance impact if the property is unset.
	                 */
	                a: ["public", "static"], n: "isset", v: function (fn) {
	                    var value;
	                    try {
	                        value = fn();
	                    } catch (e) {
	                        value = undefined;
	                    } finally {
	                        return value !== undefined;
	                    }
	                }
	            },
	            {
	                a: ["public", "static"], n: "isNumeric", v: function (n) {
	                    return !isNaN(parseFloat(n)) && isFinite(n);
	                }
	            }
	        ]}
	    );
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(19),
	    //"hwc!{PATH_JS_LIB}browser/gui/DOMTools.js",
	    __webpack_require__(29),
	    __webpack_require__(32)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    $.Browser.Loader = $.Class({base: $.Loader, members: [
	            {
	                /**
	                 * overwrite Loader.load
	                 * @returns {Promise}
	                 */
	                attributes: ["public", "static"],
	                name: "load",
	                val: function (src, callback, options) {
	                    options = options || {};
	                    options.sync = false;
	                    return this._s.load(src, callback, options);
	                }
	            },
	            {
	                /**
	                 * overwrite Loader.loadSync
	                 */
	                attributes: ["public", "static"],
	                name: "loadSync",
	                val: function (src, options) {
	                    options = options || {};
	                    options.sync = true;
	                    return this._s.load(src, null, options);
	                }
	            },
	            {
	                /**
	                 * NOTE: For html files the content will be passed as string to callback function
	                 * 
	                 * src {String} -> path of resource to load
	                 * callback {Function} -> function to cast as callback, if not defined then will be returned a promise
	                 * options {Object}:
	                 * selector {String} -> select the element[s] 
	                 * where the retrieved data must be printed ( only for html )
	                 * sync {Boolen} -> load in async/sync mode
	                 * force {Boolen} -> force reload of css if already exists
	                 * filetype { String } -> you can define file type manually if needed ( html/js etc)
	                 */
	                attributes: ["private", "static"],
	                name: "load",
	                val: function (srcList, callback, options) {
	                    srcList = Array.isArray(srcList) ? srcList : [srcList];
	
	                    var promises = [];
	                    var that = this;
	                    srcList.forEach(function (src) {
	                        var ftype = options.filetype !== undefined ? options.filetype : $.Path.extension(src);
	
	                        switch (ftype) {
	                            case "css":
	                                promises.push(that._s.loadCss(src, null, options.sync, options.force));
	                                break;
	                            case "js":
	                                promises.push(
	                                    options.sync ?
	                                    that._s.__parent.loadSync(src, options) :
	                                    that._s.__parent.load(src, null, options)
	                                    );
	                                break;
	                            case "html" || "htm":
	                                var deferred = $.Async.defer();
	                                var cb = null;
	
	                                if ($.Var.isset(function () {
	                                    return options.selector;
	                                })) {
	                                    var el = $.Browser.JQ(options.selector);
	                                    var size = el.size();
	
	                                    cb = function (responseText, textStatus, jqXHR) {
	                                        size--;
	                                        // resolve only when all elements
	                                        // has been loaded
	                                        if (size === 0) {
	                                            var insType = options.insType || 'html';
	
	                                            if (['prepend', 'append', 'replaceWith', 'html'].indexOf(insType) < 0)
	                                                console.error(insType + " is not a valid inserting function");
	
	                                            el[insType](responseText);
	
	                                            deferred.resolve(arguments);
	                                        }
	                                    };
	                                } else {
	                                    cb = function () {
	                                        deferred.resolve(arguments);
	                                    };
	                                }
	
	                                $.Browser.JQ.ajaxSetup({async: !options.sync});
	
	                                $.Browser.JQ.ajax(src).done(cb);
	
	                                $.Browser.JQ.ajaxSetup({async: true});
	
	                                promises.push(deferred.promise);
	                                break;
	                            default:
	                                console.error("filetype: " + ftype + " for file " + src + " not supported!");
	                                promises.push(false);
	                        }
	
	                    });
	
	                    var res = $.Async.all(promises);
	
	                    if (callback) {
	                        res.then(function () {
	                            callback.apply(null, arguments[0]);
	                        });
	                    } else {
	                        return $.Async.promise(function (resolve) {
	                            res.then(function () {
	                                resolve.apply(null, arguments[0]);
	                            });
	                        });
	                    }
	                }
	            },
	            {
	                attributes: ["private", "static"],
	                name: "loadCss",
	                val: function (path, fn, sync, force, scope) {
	                    var deferred = $.Async.defer();
	                    var timeOut = 15000;
	                    var timeout_id, interval_id;
	
	                    var head = document.getElementsByTagName('head')[0], // reference to document.head for appending/ removing link nodes
	                        link = document.createElement('link');           // create the link node
	                    link.setAttribute('href', path);
	                    link.setAttribute('rel', 'stylesheet');
	                    link.setAttribute('type', 'text/css');
	
	                    var hash = $.String.hashCode(path);
	
	                    // if css already exits, avoid to reload it
	                    var old = $.Browser.JQ("#" + hash);
	                    if (old.size() > 0) {
	                        if (!force) {
	                            deferred.resolve(true);
	                            return deferred.promise;
	                        }
	                    }
	
	                    // set id as hashcode of path to easy recover it
	                    link.setAttribute('id', hash);
	
	                    var sheet, cssRules;
	                    // get the correct properties to check for depending on the browser
	                    if ('sheet' in link) {
	                        sheet = 'sheet';
	                        cssRules = 'cssRules';
	                    }
	                    else {
	                        sheet = 'styleSheet';
	                        cssRules = 'rules';
	                    }
	
	                    old.size() > 0 ? old.replaceWith(link) : head.appendChild(link);
	
	                    function checkLoad () {
	                        try {
	                            if (link[sheet]) { // SUCCESS! our style sheet has loaded
	                                if (timeout_id && interval_id) {
	                                    clearInterval(interval_id);                     // clear the counters
	                                    clearTimeout(timeout_id);
	                                }
	                                // insert the link node into the DOM and start loading the style sheet
	
	                                fn && fn.call(scope, link);           // fire the callback with link
	                                deferred.resolve(link); // set promise as resolved
	                                return true;
	                            } else {
	                                return false;
	                            }
	                        } catch (e) {
	                            console.log(e);
	                            return false;
	                        }
	                    }
	
	                    function onFailure () {
	                        clearInterval(interval_id);            // clear the counters
	                        clearTimeout(timeout_id);
	                        head.removeChild(link);                // since the style sheet didn't load, remove the link node from the DOM
	
	                        fn && fn.call(scope, false) // fire the callback with success == false
	
	                        deferred.reject(false); // set promise as rejected
	
	                        link = false;
	                    }
	
	                    if (sync) {
	                        console.warn("Synchronized load of css files is not supported yet, forced to use async.");
	                        /*var start = new Date().getTime();
	                         while (true) {
	                         if (checkLoad()) {
	                         return true;
	                         }
	                         
	                         if ((new Date().getTime() - start) > timeOut) {
	                         onFailure();
	                         return false;
	                         }
	                         }*/
	                    } //else {
	
	                    timeout_id = setTimeout(function () {       // start counting down till fail
	                        onFailure();
	                    }, timeOut);                                 // how long to wait before failing
	
	                    interval_id = setInterval(function () {                    // start checking whether the style sheet has successfully loaded
	                        checkLoad();
	                    }, 10); // how often to check if the stylesheet is loaded
	
	                    return deferred.promise;
	                    //}
	                }
	            },
	            {
	                attributes: ["public", "static"],
	                name: "removeCss",
	                val: function (filenames) {
	                    var fileList = Array.isArray(filenames) ? filenames : [filenames];
	
	                    fileList.forEach(function (filename) {
	                        if (filename)
	                            $.Browser.JQ("#" + $.String.hashCode(filename)).remove();
	                    });    
	                }
	            }
	        ]
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(33)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	
	    $.Path = $.Class({members: [
	            {
	                attributes: "static",
	                name: "basename",
	                val: function (path) {
	                    return path.replace(/\\/g, '/').replace(/.*\//, '');
	                }
	            },
	            {
	                attributes: "static",
	                name: "dirname",
	                val: function (path) {
	                    return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
	                }
	            },
	            {
	                attributes: "static",
	                name: "extension",
	                val: function (path) {
	                    return (/(?:\.([^.]+))?$/).exec(path)[1];
	                }
	            }
	        ]}
	    );
	    
	    return $.Path;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
	 * GNU General Public License version 3; see www.hyperweb2.com/terms/
	 */
	
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    return $;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(35),
	      __webpack_require__(36),
	      __webpack_require__(37),
	      __webpack_require__(38)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    /*if (window["angular"] == null) {
	        var url = window.location.protocol + '//' + window.location.host + '/#' + window.location.pathname + window.location.hash;
	        window.location.replace(url);
	        throw new Error("Abort!");
	    }*/
	
	    var deps=[
	      "src/assets/jarallax/jarallax.js",
	      "src/assets/social-likes/social-likes.js",  
	    ];
	
	    var app=angular.module("Hw2Site",["ngRoute",'angular-loading-bar','angularVideoBg',"AngularXT"]);
	
	    app.config(['$routeProvider','$locationProvider','$ngxtProvider',function($routeProvider,$locationProvider,$ngxtProvider){
	        var ngxt=$ngxtProvider;
	
	        $routeProvider
	        .when("/site/it/home.html",       ngxt.routeComponent({templateUrl: "site/it/home.html", scriptUrls: deps, reloadOnSearch: false}) )
	        .when("/site/it/media.html",      ngxt.routeComponent({templateUrl: "site/it/media.html", reloadOnSearch: false}) )
	        .when("/site/it/partners.html",   ngxt.routeComponent({templateUrl: "site/it/partners.html", reloadOnSearch: false}) )
	        .when("/site/it/prodotti.html",   ngxt.routeComponent({templateUrl: "site/it/prodotti.html", reloadOnSearch: false}) )
	        .when("/site/en/terms.html",      ngxt.routeComponent({templateUrl: "site/en/terms.html", reloadOnSearch: false}) )
	        .when("/terms/",          {redirectTo: 'site/en/terms.html'})
	        .otherwise(               {redirectTo: '/site/it/home.html'});
	
	        $locationProvider.html5Mode(true);
	    }]);
	
	    app.run(function($rootScope) {
	        /*$rootScope.$on("$routeChangeStart", function($event,$next, $previousRoute) {
	            if ($previousRoute != null && $next.$$route.templateUrl != $previousRoute.loadedTemplateUrl 
	                    && $next.$$route.templateUrl == "site/it/home.html") {
	                window.location.reload(true);
	            }
	        });*/
	    });
	
	    function registerComponent(name, withShadow) {
	        // native : polyfill
	        var mainDoc = document._currentScript ? document._currentScript.ownerDocument : document.currentScript.ownerDocument;
	
	        var proto = Object.create(HTMLElement.prototype);
	
	        proto.createdCallback = function () {
	            var element = withShadow === true ? this.createShadowRoot() : this;
	            // Grab DOM from doc.html's document.
	            var text = mainDoc.querySelector("#" + name);
	            element.innerHTML = text.cloneNode(true).innerHTML;
	        };
	
	        document.registerElement(name, {prototype: proto});
	    }
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;//
	// SmoothScroll for websites v1.4.0 (Balazs Galambosi)
	// http://www.smoothscroll.net/
	//
	// Licensed under the terms of the MIT license.
	//
	// You may use it in your theme if you credit me. 
	// It is also free to use on any individual website.
	//
	// Exception:
	// The only restriction is to not publish any  
	// extension for browsers or native application
	// without getting a written permission first.
	//
	
	(function () {
	  
	// Scroll Variables (tweakable)
	var defaultOptions = {
	
	    // Scrolling Core
	    frameRate        : 150, // [Hz]
	    animationTime    : 400, // [ms]
	    stepSize         : 100, // [px]
	
	    // Pulse (less tweakable)
	    // ratio of "tail" to "acceleration"
	    pulseAlgorithm   : true,
	    pulseScale       : 4,
	    pulseNormalize   : 1,
	
	    // Acceleration
	    accelerationDelta : 50,  // 50
	    accelerationMax   : 3,   // 3
	
	    // Keyboard Settings
	    keyboardSupport   : true,  // option
	    arrowScroll       : 50,    // [px]
	
	    // Other
	    touchpadSupport   : false, // ignore touchpad by default
	    fixedBackground   : true, 
	    excluded          : ''    
	};
	
	var options = defaultOptions;
	
	
	// Other Variables
	var isExcluded = false;
	var isFrame = false;
	var direction = { x: 0, y: 0 };
	var initDone  = false;
	var root = document.documentElement;
	var activeElement;
	var observer;
	var refreshSize;
	var deltaBuffer = [];
	var isMac = /^Mac/.test(navigator.platform);
	
	var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
	            pageup: 33, pagedown: 34, end: 35, home: 36 };
	
	
	/***********************************************
	 * INITIALIZE
	 ***********************************************/
	
	/**
	 * Tests if smooth scrolling is allowed. Shuts down everything if not.
	 */
	function initTest() {
	    if (options.keyboardSupport) {
	        addEvent('keydown', keydown);
	    }
	}
	
	/**
	 * Sets up scrolls array, determines if frames are involved.
	 */
	function init() {
	  
	    if (initDone || !document.body) return;
	
	    initDone = true;
	
	    var body = document.body;
	    var html = document.documentElement;
	    var windowHeight = window.innerHeight; 
	    var scrollHeight = body.scrollHeight;
	    
	    // check compat mode for root element
	    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
	    activeElement = body;
	    
	    initTest();
	
	    // Checks if this script is running in a frame
	    if (top != self) {
	        isFrame = true;
	    }
	
	    /**
	     * Please duplicate this radar for a Safari fix! 
	     * rdar://22376037
	     * https://openradar.appspot.com/radar?id=4965070979203072
	     * 
	     * Only applies to Safari now, Chrome fixed it in v45:
	     * This fixes a bug where the areas left and right to 
	     * the content does not trigger the onmousewheel event
	     * on some pages. e.g.: html, body { height: 100% }
	     */
	    else if (scrollHeight > windowHeight &&
	            (body.offsetHeight <= windowHeight || 
	             html.offsetHeight <= windowHeight)) {
	
	        var fullPageElem = document.createElement('div');
	        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
	                                     'top:0; left:0; right:0; height:' + 
	                                      root.scrollHeight + 'px';
	        document.body.appendChild(fullPageElem);
	        
	        // DOM changed (throttled) to fix height
	        var pendingRefresh;
	        refreshSize = function () {
	            if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
	            pendingRefresh = setTimeout(function () {
	                if (isExcluded) return; // could be running after cleanup
	                fullPageElem.style.height = '0';
	                fullPageElem.style.height = root.scrollHeight + 'px';
	                pendingRefresh = null;
	            }, 500); // act rarely to stay fast
	        };
	  
	        setTimeout(refreshSize, 10);
	
	        addEvent('resize', refreshSize);
	
	        // TODO: attributeFilter?
	        var config = {
	            attributes: true, 
	            childList: true, 
	            characterData: false 
	            // subtree: true
	        };
	
	        observer = new MutationObserver(refreshSize);
	        observer.observe(body, config);
	
	        if (root.offsetHeight <= windowHeight) {
	            var clearfix = document.createElement('div');   
	            clearfix.style.clear = 'both';
	            body.appendChild(clearfix);
	        }
	    }
	
	    // disable fixed background
	    if (!options.fixedBackground && !isExcluded) {
	        body.style.backgroundAttachment = 'scroll';
	        html.style.backgroundAttachment = 'scroll';
	    }
	}
	
	/**
	 * Removes event listeners and other traces left on the page.
	 */
	function cleanup() {
	    observer && observer.disconnect();
	    removeEvent(wheelEvent, wheel);
	    removeEvent('mousedown', mousedown);
	    removeEvent('keydown', keydown);
	    removeEvent('resize', refreshSize);
	    removeEvent('load', init);
	}
	
	
	/************************************************
	 * SCROLLING 
	 ************************************************/
	 
	var que = [];
	var pending = false;
	var lastScroll = Date.now();
	
	/**
	 * Pushes scroll actions to the scrolling queue.
	 */
	function scrollArray(elem, left, top) {
	    
	    directionCheck(left, top);
	
	    if (options.accelerationMax != 1) {
	        var now = Date.now();
	        var elapsed = now - lastScroll;
	        if (elapsed < options.accelerationDelta) {
	            var factor = (1 + (50 / elapsed)) / 2;
	            if (factor > 1) {
	                factor = Math.min(factor, options.accelerationMax);
	                left *= factor;
	                top  *= factor;
	            }
	        }
	        lastScroll = Date.now();
	    }          
	    
	    // push a scroll command
	    que.push({
	        x: left, 
	        y: top, 
	        lastX: (left < 0) ? 0.99 : -0.99,
	        lastY: (top  < 0) ? 0.99 : -0.99, 
	        start: Date.now()
	    });
	        
	    // don't act if there's a pending queue
	    if (pending) {
	        return;
	    }  
	
	    var scrollWindow = (elem === document.body);
	    
	    var step = function (time) {
	        
	        var now = Date.now();
	        var scrollX = 0;
	        var scrollY = 0; 
	    
	        for (var i = 0; i < que.length; i++) {
	            
	            var item = que[i];
	            var elapsed  = now - item.start;
	            var finished = (elapsed >= options.animationTime);
	            
	            // scroll position: [0, 1]
	            var position = (finished) ? 1 : elapsed / options.animationTime;
	            
	            // easing [optional]
	            if (options.pulseAlgorithm) {
	                position = pulse(position);
	            }
	            
	            // only need the difference
	            var x = (item.x * position - item.lastX) >> 0;
	            var y = (item.y * position - item.lastY) >> 0;
	            
	            // add this to the total scrolling
	            scrollX += x;
	            scrollY += y;            
	            
	            // update last values
	            item.lastX += x;
	            item.lastY += y;
	        
	            // delete and step back if it's over
	            if (finished) {
	                que.splice(i, 1); i--;
	            }           
	        }
	
	        // scroll left and top
	        if (scrollWindow) {
	            window.scrollBy(scrollX, scrollY);
	        } 
	        else {
	            if (scrollX) elem.scrollLeft += scrollX;
	            if (scrollY) elem.scrollTop  += scrollY;                    
	        }
	        
	        // clean up if there's nothing left to do
	        if (!left && !top) {
	            que = [];
	        }
	        
	        if (que.length) { 
	            requestFrame(step, elem, (1000 / options.frameRate + 1)); 
	        } else { 
	            pending = false;
	        }
	    };
	    
	    // start a new queue of actions
	    requestFrame(step, elem, 0);
	    pending = true;
	}
	
	
	/***********************************************
	 * EVENTS
	 ***********************************************/
	
	/**
	 * Mouse wheel handler.
	 * @param {Object} event
	 */
	function wheel(event) {
	
	    if (!initDone) {
	        init();
	    }
	    
	    var target = event.target;
	    var overflowing = overflowingAncestor(target);
	
	    // use default if there's no overflowing
	    // element or default action is prevented   
	    // or it's a zooming event with CTRL 
	    if (!overflowing || event.defaultPrevented || event.ctrlKey) {
	        return true;
	    }
	    
	    // leave embedded content alone (flash & pdf)
	    if (isNodeName(activeElement, 'embed') || 
	       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
	       isNodeName(activeElement, 'object')) {
	        return true;
	    }
	
	    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
	    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
	    
	    if (isMac) {
	        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
	            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
	        }
	        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
	            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
	        }
	    }
	    
	    // use wheelDelta if deltaX/Y is not available
	    if (!deltaX && !deltaY) {
	        deltaY = -event.wheelDelta || 0;
	    }
	
	    // line based scrolling (Firefox mostly)
	    if (event.deltaMode === 1) {
	        deltaX *= 40;
	        deltaY *= 40;
	    }
	    
	    // check if it's a touchpad scroll that should be ignored
	    if (!options.touchpadSupport && isTouchpad(deltaY)) {
	        return true;
	    }
	
	    // scale by step size
	    // delta is 120 most of the time
	    // synaptics seems to send 1 sometimes
	    if (Math.abs(deltaX) > 1.2) {
	        deltaX *= options.stepSize / 120;
	    }
	    if (Math.abs(deltaY) > 1.2) {
	        deltaY *= options.stepSize / 120;
	    }
	    
	    scrollArray(overflowing, deltaX, deltaY);
	    event.preventDefault();
	    scheduleClearCache();
	}
	
	/**
	 * Keydown event handler.
	 * @param {Object} event
	 */
	function keydown(event) {
	
	    var target   = event.target;
	    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
	                  (event.shiftKey && event.keyCode !== key.spacebar);
	    
	    // our own tracked active element could've been removed from the DOM
	    if (!document.contains(activeElement)) {
	        activeElement = document.activeElement;
	    }
	
	    // do nothing if user is editing text
	    // or using a modifier key (except shift)
	    // or in a dropdown
	    // or inside interactive elements
	    var inputNodeNames = /^(textarea|select|embed|object)$/i;
	    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
	    if ( inputNodeNames.test(target.nodeName) ||
	         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
	         isNodeName(activeElement, 'video') ||
	         isInsideYoutubeVideo(event) ||
	         target.isContentEditable || 
	         event.defaultPrevented   ||
	         modifier ) {
	      return true;
	    }
	    
	    // spacebar should trigger button press
	    if ((isNodeName(target, 'button') ||
	         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
	        event.keyCode === key.spacebar) {
	      return true;
	    }
	    
	    var shift, x = 0, y = 0;
	    var elem = overflowingAncestor(activeElement);
	    var clientHeight = elem.clientHeight;
	
	    if (elem == document.body) {
	        clientHeight = window.innerHeight;
	    }
	
	    switch (event.keyCode) {
	        case key.up:
	            y = -options.arrowScroll;
	            break;
	        case key.down:
	            y = options.arrowScroll;
	            break;         
	        case key.spacebar: // (+ shift)
	            shift = event.shiftKey ? 1 : -1;
	            y = -shift * clientHeight * 0.9;
	            break;
	        case key.pageup:
	            y = -clientHeight * 0.9;
	            break;
	        case key.pagedown:
	            y = clientHeight * 0.9;
	            break;
	        case key.home:
	            y = -elem.scrollTop;
	            break;
	        case key.end:
	            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
	            y = (damt > 0) ? damt+10 : 0;
	            break;
	        case key.left:
	            x = -options.arrowScroll;
	            break;
	        case key.right:
	            x = options.arrowScroll;
	            break;            
	        default:
	            return true; // a key we don't care about
	    }
	
	    scrollArray(elem, x, y);
	    event.preventDefault();
	    scheduleClearCache();
	}
	
	/**
	 * Mousedown event only for updating activeElement
	 */
	function mousedown(event) {
	    activeElement = event.target;
	}
	
	
	/***********************************************
	 * OVERFLOW
	 ***********************************************/
	
	var uniqueID = (function () {
	    var i = 0;
	    return function (el) {
	        return el.uniqueID || (el.uniqueID = i++);
	    };
	})();
	
	var cache = {}; // cleared out after a scrolling session
	var clearCacheTimer;
	
	//setInterval(function () { cache = {}; }, 10 * 1000);
	
	function scheduleClearCache() {
	    clearTimeout(clearCacheTimer);
	    clearCacheTimer = setInterval(function () { cache = {}; }, 1*1000);
	}
	
	function setCache(elems, overflowing) {
	    for (var i = elems.length; i--;)
	        cache[uniqueID(elems[i])] = overflowing;
	    return overflowing;
	}
	
	//  (body)                (root)
	//         | hidden | visible | scroll |  auto  |
	// hidden  |   no   |    no   |   YES  |   YES  |
	// visible |   no   |   YES   |   YES  |   YES  |
	// scroll  |   no   |   YES   |   YES  |   YES  |
	// auto    |   no   |   YES   |   YES  |   YES  |
	
	function overflowingAncestor(el) {
	    var elems = [];
	    var body = document.body;
	    var rootScrollHeight = root.scrollHeight;
	    do {
	        var cached = cache[uniqueID(el)];
	        if (cached) {
	            return setCache(elems, cached);
	        }
	        elems.push(el);
	        if (rootScrollHeight === el.scrollHeight) {
	            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
	            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
	            if (isFrame && isContentOverflowing(root) || 
	               !isFrame && isOverflowCSS) {
	                return setCache(elems, getScrollRoot()); 
	            }
	        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
	            return setCache(elems, el);
	        }
	    } while (el = el.parentElement);
	}
	
	function isContentOverflowing(el) {
	    return (el.clientHeight + 10 < el.scrollHeight);
	}
	
	// typically for <body> and <html>
	function overflowNotHidden(el) {
	    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
	    return (overflow !== 'hidden');
	}
	
	// for all other elements
	function overflowAutoOrScroll(el) {
	    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
	    return (overflow === 'scroll' || overflow === 'auto');
	}
	
	
	/***********************************************
	 * HELPERS
	 ***********************************************/
	
	function addEvent(type, fn) {
	    window.addEventListener(type, fn, false);
	}
	
	function removeEvent(type, fn) {
	    window.removeEventListener(type, fn, false);  
	}
	
	function isNodeName(el, tag) {
	    return (el.nodeName||'').toLowerCase() === tag.toLowerCase();
	}
	
	function directionCheck(x, y) {
	    x = (x > 0) ? 1 : -1;
	    y = (y > 0) ? 1 : -1;
	    if (direction.x !== x || direction.y !== y) {
	        direction.x = x;
	        direction.y = y;
	        que = [];
	        lastScroll = 0;
	    }
	}
	
	var deltaBufferTimer;
	
	if (window.localStorage && localStorage.SS_deltaBuffer) {
	    deltaBuffer = localStorage.SS_deltaBuffer.split(',');
	}
	
	function isTouchpad(deltaY) {
	    if (!deltaY) return;
	    if (!deltaBuffer.length) {
	        deltaBuffer = [deltaY, deltaY, deltaY];
	    }
	    deltaY = Math.abs(deltaY)
	    deltaBuffer.push(deltaY);
	    deltaBuffer.shift();
	    clearTimeout(deltaBufferTimer);
	    deltaBufferTimer = setTimeout(function () {
	        if (window.localStorage) {
	            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
	        }
	    }, 1000);
	    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
	} 
	
	function isDivisible(n, divisor) {
	    return (Math.floor(n / divisor) == n / divisor);
	}
	
	function allDeltasDivisableBy(divisor) {
	    return (isDivisible(deltaBuffer[0], divisor) &&
	            isDivisible(deltaBuffer[1], divisor) &&
	            isDivisible(deltaBuffer[2], divisor));
	}
	
	function isInsideYoutubeVideo(event) {
	    var elem = event.target;
	    var isControl = false;
	    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
	        do {
	            isControl = (elem.classList && 
	                         elem.classList.contains('html5-video-controls'));
	            if (isControl) break;
	        } while (elem = elem.parentNode);
	    }
	    return isControl;
	}
	
	var requestFrame = (function () {
	      return (window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    ||
	              function (callback, element, delay) {
	                 window.setTimeout(callback, delay || (1000/60));
	             });
	})();
	
	var MutationObserver = (window.MutationObserver || 
	                        window.WebKitMutationObserver ||
	                        window.MozMutationObserver);  
	
	var getScrollRoot = (function() {
	  var SCROLL_ROOT;
	  return function() {
	    if (!SCROLL_ROOT) {
	      var dummy = document.createElement('div');
	      dummy.style.cssText = 'height:10000px;width:1px;';
	      document.body.appendChild(dummy);
	      var bodyScrollTop  = document.body.scrollTop;
	      var docElScrollTop = document.documentElement.scrollTop;
	      window.scrollBy(0, 3);
	      if (document.body.scrollTop != bodyScrollTop)
	        (SCROLL_ROOT = document.body);
	      else 
	        (SCROLL_ROOT = document.documentElement);
	      window.scrollBy(0, -3);
	      document.body.removeChild(dummy);
	    }
	    return SCROLL_ROOT;
	  };
	})();
	
	
	/***********************************************
	 * PULSE (by Michael Herf)
	 ***********************************************/
	 
	/**
	 * Viscous fluid with a pulse for part and decay for the rest.
	 * - Applies a fixed force over an interval (a damped acceleration), and
	 * - Lets the exponential bleed away the velocity over a longer interval
	 * - Michael Herf, http://stereopsis.com/stopping/
	 */
	function pulse_(x) {
	    var val, start, expx;
	    // test
	    x = x * options.pulseScale;
	    if (x < 1) { // acceleartion
	        val = x - (1 - Math.exp(-x));
	    } else {     // tail
	        // the previous animation ended here:
	        start = Math.exp(-1);
	        // simple viscous drag
	        x -= 1;
	        expx = 1 - Math.exp(-x);
	        val = start + (expx * (1 - start));
	    }
	    return val * options.pulseNormalize;
	}
	
	function pulse(x) {
	    if (x >= 1) return 1;
	    if (x <= 0) return 0;
	
	    if (options.pulseNormalize == 1) {
	        options.pulseNormalize /= pulse_(1);
	    }
	    return pulse_(x);
	}
	
	
	/***********************************************
	 * FIRST RUN
	 ***********************************************/
	
	var userAgent = window.navigator.userAgent;
	var isEdge    = /Edge/.test(userAgent); // thank you MS
	var isChrome  = /chrome/i.test(userAgent) && !isEdge; 
	var isSafari  = /safari/i.test(userAgent) && !isEdge; 
	var isMobile  = /mobile/i.test(userAgent);
	var isEnabledForBrowser = (isChrome || isSafari) && !isMobile;
	
	var wheelEvent;
	if ('onwheel' in document.createElement('div'))
	    wheelEvent = 'wheel';
	else if ('onmousewheel' in document.createElement('div'))
	    wheelEvent = 'mousewheel';
	
	if (wheelEvent && isEnabledForBrowser) {
	    addEvent(wheelEvent, wheel);
	    addEvent('mousedown', mousedown);
	    addEvent('load', init);
	}
	
	
	/***********************************************
	 * PUBLIC INTERFACE
	 ***********************************************/
	
	function SmoothScroll(optionsToSet) {
	    for (var key in optionsToSet)
	        if (defaultOptions.hasOwnProperty(key)) 
	            options[key] = optionsToSet[key];
	}
	SmoothScroll.destroy = cleanup;
	
	if (window.SmoothScrollOptions) // async API
	    SmoothScroll(window.SmoothScrollOptions)
	
	if (true)
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return SmoothScroll;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	else if ('object' == typeof exports)
	    module.exports = SmoothScroll;
	else
	    window.SmoothScroll = SmoothScroll;
	
	})();

/***/ },
/* 36 */
/***/ function(module, exports) {

	/*
	    The MIT License (MIT)
	
	    Copyright (c) 2014 Dirk Groenen
	
	    Permission is hereby granted, free of charge, to any person obtaining a copy of
	    this software and associated documentation files (the "Software"), to deal in
	    the Software without restriction, including without limitation the rights to
	    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	    the Software, and to permit persons to whom the Software is furnished to do so,
	    subject to the following conditions:
	
	    The above copyright notice and this permission notice shall be included in all
	    copies or substantial portions of the Software.
	*/
	
	(function($){
	    $.fn.viewportChecker = function(useroptions){
	        // Define options and extend with user
	        var options = {
	            classToAdd: 'visible',
	            classToRemove : 'invisible',
	            classToAddForFullView : 'full-visible',
	            removeClassAfterAnimation: false,
	            offset: 100,
	            repeat: false,
	            invertBottomOffset: true,
	            callbackFunction: function(elem, action){},
	            scrollHorizontal: false,
	            scrollBox: window
	        };
	        $.extend(options, useroptions);
	
	        // Cache the given element and height of the browser
	        var $elem = this,
	            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()},
	            scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('windows phone') != -1) ? 'body' : 'html');
	
	        /*
	         * Main method that checks the elements and adds or removes the class(es)
	         */
	        this.checkElements = function(){
	            var viewportStart, viewportEnd;
	
	            // Set some vars to check with
	            if (!options.scrollHorizontal){
	                viewportStart = $(scrollElem).scrollTop();
	                viewportEnd = (viewportStart + boxSize.height);
	            }
	            else{
	                viewportStart = $(scrollElem).scrollLeft();
	                viewportEnd = (viewportStart + boxSize.width);
	            }
	
	            // Loop through all given dom elements
	            $elem.each(function(){
	                var $obj = $(this),
	                    objOptions = {},
	                    attrOptions = {};
	
	                //  Get any individual attribution data
	                if ($obj.data('vp-add-class'))
	                    attrOptions.classToAdd = $obj.data('vp-add-class');
	                if ($obj.data('vp-remove-class'))
	                    attrOptions.classToRemove = $obj.data('vp-remove-class');
	                if ($obj.data('vp-add-class-full-view'))
	                    attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
	                if ($obj.data('vp-keep-add-class'))
	                    attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
	                if ($obj.data('vp-offset'))
	                    attrOptions.offset = $obj.data('vp-offset');
	                if ($obj.data('vp-repeat'))
	                    attrOptions.repeat = $obj.data('vp-repeat');
	                if ($obj.data('vp-scrollHorizontal'))
	                    attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
	                if ($obj.data('vp-invertBottomOffset'))
	                    attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');
	
	                // Extend objOptions with data attributes and default options
	                $.extend(objOptions, options);
	                $.extend(objOptions, attrOptions);
	
	                // If class already exists; quit
	                if ($obj.data('vp-animated') && !objOptions.repeat){
	                    return;
	                }
	
	                // Check if the offset is percentage based
	                if (String(objOptions.offset).indexOf("%") > 0)
	                    objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;
	
	                // Get the raw start and end positions
	                var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
	                    rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();
	
	                // Add the defined offset
	                var elemStart = Math.round( rawStart ) + objOptions.offset,
	                    elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();
	
	                if (objOptions.invertBottomOffset)
	                    elemEnd -= (objOptions.offset * 2);
	
	                // Add class if in viewport
	                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){
	
	                    // Remove class
	                    $obj.removeClass(objOptions.classToRemove);
	                    $obj.addClass(objOptions.classToAdd);
	
	                    // Do the callback function. Callback wil send the jQuery object as parameter
	                    objOptions.callbackFunction($obj, "add");
	
	                    // Check if full element is in view
	                    if (rawEnd <= viewportEnd && rawStart >= viewportStart)
	                        $obj.addClass(objOptions.classToAddForFullView);
	                    else
	                        $obj.removeClass(objOptions.classToAddForFullView);
	
	                    // Set element as already animated
	                    $obj.data('vp-animated', true);
	
	                    if (objOptions.removeClassAfterAnimation) {
	                        $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	                            $obj.removeClass(objOptions.classToAdd);
	                        });
	                    }
	
	                // Remove class if not in viewport and repeat is true
	                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
	                    $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);
	
	                    // Do the callback function.
	                    objOptions.callbackFunction($obj, "remove");
	
	                    // Remove already-animated-flag
	                    $obj.data('vp-animated', false);
	                }
	            });
	
	        };
	
	        /**
	         * Binding the correct event listener is still a tricky thing.
	         * People have expierenced sloppy scrolling when both scroll and touch
	         * events are added, but to make sure devices with both scroll and touch
	         * are handles too we always have to add the window.scroll event
	         *
	         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
	         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
	         */
	
	        // Select the correct events
	        if( 'ontouchstart' in window || 'onmsgesturechange' in window ){
	            // Device with touchscreen
	            $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
	        }
	
	        // Always load on window load
	        $(options.scrollBox).bind("load scroll", this.checkElements);
	
	        // On resize change the height var
	        $(window).resize(function(e){
	            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
	            $elem.checkElements();
	        });
	
	        // trigger inital check if elements already visible
	        this.checkElements();
	
	        // Default jquery plugin behaviour
	        return this;
	    };
	})(jQuery);


/***/ },
/* 37 */
/***/ function(module, exports) {

	jQuery(function(t){function e(e){"resize"===e.type&&(t(h.BODY).removeClass(a.DROPDOWN_OPEN),t(h.BASE).removeClass(a.OPENED).find(h.TOGGLER).each(function(){t(t(this).attr("data-target")).removeClass(a.IN).add(this).attr("aria-expanded","false")}))
	var r=t(this).scrollTop()
	t(h.BASE).each(function(){t(this).is(h.FIXED_TOP)&&(t(this).is(h.TRANSPARENT)&&!t(this).hasClass(a.OPENED)&&(r>0?t(this).removeClass(a.BG_COLOR):t(this).addClass(a.BG_COLOR)),r>0?t(this).addClass(a.SHORT):t(this).removeClass(a.SHORT))})}var r,n="bs.navbar-dropdown",s="."+n,i=".data-api",o={COLLAPSE:"collapse"+s,CLICK_DATA_API:"click"+s+i,SCROLL_DATA_API:"scroll"+s+i,RESIZE_DATA_API:"resize"+s+i,COLLAPSE_SHOW:"show.bs.collapse",COLLAPSE_HIDE:"hide.bs.collapse",DROPDOWN_COLLAPSE:"collapse.bs.nav-dropdown"},a={IN:"in",OPENED:"opened",BG_COLOR:"bg-color",DROPDOWN_OPEN:"navbar-dropdown-open",SHORT:"navbar-short"},h={BODY:"body",BASE:".navbar-dropdown",TOGGLER:'.navbar-toggler[aria-expanded="true"]',TRANSPARENT:".transparent",FIXED_TOP:".navbar-fixed-top"}
	t(window).on(o.SCROLL_DATA_API+" "+o.RESIZE_DATA_API,function(t){clearTimeout(r),r=setTimeout(function(){e(t)},10)}).trigger(o.SCROLL_DATA_API),t(document).on(o.CLICK_DATA_API,h.BASE,function(t){t.targetWrapper=this}).on(o.COLLAPSE_SHOW+" "+o.COLLAPSE_HIDE,function(e){t(e.target).closest(h.BASE).each(function(){"show"==e.type?(t(h.BODY).addClass(a.DROPDOWN_OPEN),t(this).addClass(a.OPENED)):(t(h.BODY).removeClass(a.DROPDOWN_OPEN),t(this).removeClass(a.OPENED),t(window).trigger(o.SCROLL_DATA_API),t(this).trigger(o.COLLAPSE))})}).on(o.DROPDOWN_COLLAPSE,function(e){t(e.relatedTarget).closest(h.BASE).find(h.TOGGLER).trigger("click")})}),function(t){var e="navDropdown",r="bs.nav-dropdown",n="."+r,s=".data-api",i=t.fn[e],o={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK:"click"+n,READY:"ready"+n,COLLAPSE:"collapse"+n,LOAD_DATA_API:"load"+n+s,CLICK_DATA_API:"click"+n+s,RESIZE_DATA_API:"resize"+n+s,KEYDOWN_DATA_API:"keydown"+n+s,NAVBAR_COLLAPSE:"collapse.bs.navbar-dropdown"},a={ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40},h={XS:544,SM:768,MD:992,LG:1200,XL:1/0},p={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open",SM:"nav-dropdown-sm"},l={BASE:".nav-dropdown",DROPDOWN:".dropdown",DROPDOWN_MENU:".dropdown-menu",BACKDROP:"."+p.BACKDROP,DATA_BUTTON:"[data-button]",DATA_TOGGLE:'[data-toggle="dropdown-submenu"]',FORM_CHILD:".dropdown form"},c=function(){function e(e,r){"length"in e||(e=[e]),this.props={},this.length=e.length,r&&(this.prevItem=r,t.extend(this.props,r.props))
	for(var n=0;n<e.length;n++)this[n]=e[n]}return e.prototype.eq=function(t){return new e(this[t]?this[t]:[],this)},e.prototype.parent=function(){return new e(t(this).map(function(){var r=new e(this)
	return r.is(":upper")?null:t(r.is(":toggle")?this.parentNode.parentNode:this).closest(l.DROPDOWN).find(">"+l.DATA_TOGGLE)[0]}),this)},e.prototype.parents=function(r){var n=t(this).map(function(){return new e(this).is(":toggle")?this.parentNode:this}).parentsUntil(l.BASE,l.DROPDOWN)
	return":upper"===r&&(n=n.last()),n=n.find(">"+l.DATA_TOGGLE),new e(n,this)},e.prototype.children=function(r){var n=[]
	return t(this).each(function(){var s,i,o=new e(this)
	if(o.is(":root"))s=t(this)
	else{if(!o.is(":toggle"))return
	s=t(this).parent().find(">"+l.DROPDOWN_MENU)}i=r?s.find("a"):o.is(":root")?s.find(">li>a"):s.find(">a, >"+l.DROPDOWN+">a"),i.each(function(){r&&!this.offsetWidth&&!this.offsetHeight||this.disabled||t(this).is(l.DATA_BUTTON)||t(this).hasClass(p.DISABLED)||~t.inArray(this,n)||n.push(this)})}),new e(n,this)},e.prototype.root=function(){return new e(t(this).closest(l.BASE),this)},e.prototype.jump=function(r){if(r=r||"next",!this.length)return new e([],this)
	var n,s=this.eq(0)
	n=this.is(":flat")||s.is(":upper")?s.root().children(this.is(":flat")):s.parent().children()
	var i=t.inArray(this[0],n)
	if(!n.length||!~i)return new e([],this)
	if("next"==r){if(i+=1,i<n.length)return new e(n[i],this)
	r="first"}else if("prev"==r){if(i-=1,i>=0)return new e(n[i],this)
	r="last"}return"first"==r?new e(n[0],this):"last"==r?new e(n[n.length-1],this):new e([],this)},e.prototype.next=function(){return this.jump("next")},e.prototype.prev=function(){return this.jump("prev")},e.prototype.first=function(){return this.jump("first")},e.prototype.last=function(){return this.jump("last")},e.prototype.prop=function(e,r){return arguments.length?arguments.length>1?(this.props[e]=r,this):"object"==typeof arguments[0]?(t.extend(this.props,arguments[0]),this):e in this.props?this.props[e]:null:t.extend({},this.props)},e.prototype.removeProp=function(t){return delete this.props[t],this},e.prototype.is=function(e){for(var r=t(this),n=(e||"").split(/(?=[*#.\[:\s])/);e=n.pop();)switch(e){case":root":if(!r.is(l.BASE))return!1
	break
	case":upper":if(!r.parent().parent().is(l.BASE))return!1
	break
	case":opened":case":closed":if(":opened"==e!=r.parent().hasClass(p.OPEN))return!1
	case":toggle":if(!r.is(l.DATA_TOGGLE))return!1
	break
	default:if(!this.props[e])return!1}return!0},e.prototype.open=function(){return this.is(":closed")&&this.click(),this},e.prototype.close=function(){return this.is(":opened")&&this.click(),this},e.prototype.focus=function(){return this.length&&this[0].focus(),this},e.prototype.click=function(){return this.length&&t(this[0]).trigger("click"),this},function(t){return new e(t)}}(),d=function(e){this._element=e,t(this._element).on(o.CLICK,this.toggle)}
	d.prototype.toggle=function(e){if(this.disabled||t(this).hasClass(p.DISABLED))return!1
	var r=t(this.parentNode),n=r.hasClass(p.OPEN),s=d._isCollapsed(t(this).closest(l.BASE))
	if(d._clearMenus(t.Event("click",{target:this,data:{toggles:s?[this]:null}})),n)return!1
	if("ontouchstart"in document.documentElement&&!r.closest(l.DROPDOWN+"."+p.OPEN).length){var i=document.createElement("div")
	i.className=p.BACKDROP,t(i).insertBefore(t(this).closest(l.BASE)),t(i).on("click",d._clearMenus)}var a={relatedTarget:this},h=t.Event(o.SHOW,a)
	return r.trigger(h),h.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),r.toggleClass(p.OPEN),r.trigger(t.Event(o.SHOWN,a)),!1)},d.prototype.dispose=function(){t.removeData(this._element,r),t(this._element).off(n),this._element=null},d._clearMenus=function(e){if(e=e||{},3!==e.which){var r,n=function(){return!1}
	if(e.target){if(this===document)if(t(e.target).is("a:not([disabled], ."+p.DISABLED+")"))r=t.Event(o.COLLAPSE,{relatedTarget:e.target})
	else{var s=e.targetWrapper&&t(e.targetWrapper).find(l.BASE)||t(e.target).closest(l.BASE)
	if(d._isCollapsed(s))return}else if(t(e.target).hasClass(p.BACKDROP)){var i=t(e.target).next()
	if(i.is(l.BASE)&&d._isCollapsed(i))return}t(e.target).is(l.DATA_TOGGLE)?n=t(e.target.parentNode).parents(l.DROPDOWN).find(">"+l.DATA_TOGGLE):t(l.BACKDROP).remove()}for(var a=e.data&&e.data.toggles&&t(e.data.toggles).parent().find(l.DATA_TOGGLE)||t.makeArray(t(l.DATA_TOGGLE).not(n)),h=0;h<a.length;h++){var c=a[h].parentNode,u={relatedTarget:a[h]}
	if(t(c).hasClass(p.OPEN)&&("click"!==e.type||!/input|textarea/i.test(e.target.tagName)||!t.contains(c,e.target))){var f=t.Event(o.HIDE,u)
	t(c).trigger(f),f.isDefaultPrevented()||(a[h].setAttribute("aria-expanded","false"),t(c).removeClass(p.OPEN).trigger(t.Event(o.HIDDEN,u)))}}r&&t(document).trigger(r)}},d._dataApiKeydownHandler=function(e){if(!/input|textarea/i.test(e.target.tagName)){var r
	for(var n in a)if(r=a[n]===e.which)break
	if(r){if(e.preventDefault(),e.stopPropagation(),e.which==a.ESC){if(d._isCollapsed(this))return
	var s=t(e.target).parents(l.DROPDOWN+"."+p.OPEN).last().find(">"+l.DATA_TOGGLE)
	return d._clearMenus(),void s.trigger("focus")}if("A"==e.target.tagName){var i=c(e.target)
	if(i.prop(":flat",d._isCollapsed(i.root())),i.is(":flat"))e.which===a.DOWN||e.which===a.UP?i[e.which===a.UP?"prev":"next"]().focus():e.which===a.LEFT?i.is(":opened")?i.close():i.parent().close().focus():e.which===a.RIGHT&&i.is(":toggle")&&i.open()
	else if(i.is(":upper"))e.which===a.LEFT||e.which===a.RIGHT?(i[e.which===a.LEFT?"prev":"next"]().focus().open(),i.is(":toggle")&&i.close()):e.which!==a.DOWN&&e.which!==a.UP||!i.is(":toggle")||i.children()[e.which===a.DOWN?"first":"last"]().focus()
	else if(e.which===a.LEFT){var o=i.parent()
	o.is(":upper")?o.close().prev().focus().open():o.focus().close()}else if(e.which===a.RIGHT){var h=i.children()
	h.length?(i.open(),h.first().focus()):i.parents(":upper").close().next().focus().open()}else(e.which===a.DOWN||e.which===a.UP)&&i[e.which===a.UP?"prev":"next"]().focus()}}}},d._isCollapsed=function(t){var e
	return t.length&&(t=t[0]),t&&(e=/navbar-toggleable-(xs|sm|md|lg|xl)/.exec(t.className))&&window.innerWidth<h[e[1].toUpperCase()]},d._dataApiResizeHandler=function(){t(l.BASE).each(function(){var e=d._isCollapsed(this)
	t(this).find(l.DROPDOWN).removeClass(p.OPEN),t(this).find('[aria-expanded="true"]').attr("aria-expanded","false")
	var r=t(l.BACKDROP)[0]
	r&&r.parentNode.removeChild(r),e!=t(this).hasClass(p.SM)&&(e?t(this).addClass(p.SM):t(this).removeClass(p.SM))})},t.fn[e]=function(e){return this.each(function(){var n=t(this).data(r)
	if(n||t(this).data(r,n=new d(this)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"')
	n[e].call(this)}})},t.fn[e].noConflict=function(){return t.fn[e]=i,this},t.fn[e].Constructor=d,t.fn[e].$$=c,t(window).on(o.RESIZE_DATA_API+" "+o.LOAD_DATA_API,d._dataApiResizeHandler),t(document).on(o.KEYDOWN_DATA_API,l.BASE,d._dataApiKeydownHandler).on(o.NAVBAR_COLLAPSE,d._clearMenus).on(o.CLICK_DATA_API,d._clearMenus).on(o.CLICK_DATA_API,l.DATA_TOGGLE,d.prototype.toggle).on(o.CLICK_DATA_API,l.FORM_CHILD,function(t){t.stopPropagation()}),t(window).trigger(o.READY)}(jQuery)


/***/ },
/* 38 */
/***/ function(module, exports) {

	(function($){
	
	    $.extend($.easing, {
	        easeInOutCubic : function(x, t, b, c, d){
	            if ((t/=d/2) < 1) return c/2*t*t*t + b;
	            return c/2*((t-=2)*t*t + 2) + b;
	        }
	    });
	
	    $.fn.outerFind = function(selector){
	        return this.find(selector).addBack(selector);
	    };
	
	    (function($,sr){
	        // debouncing function from John Hann
	        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	        var debounce = function (func, threshold, execAsap) {
	            var timeout;
	
	            return function debounced () {
	                var obj = this, args = arguments;
	                function delayed () {
	                    if (!execAsap) func.apply(obj, args);
	                    timeout = null;
	                };
	
	                if (timeout) clearTimeout(timeout);
	                else if (execAsap) func.apply(obj, args);
	
	                timeout = setTimeout(delayed, threshold || 100);
	            };
	        }
	        // smartresize
	        jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	
	    })(jQuery,'smartresize');
	
	    (function(){
	
	        var scrollbarWidth = 0, originalMargin, touchHandler = function(event){
	            event.preventDefault();
	        };
	
	        function getScrollbarWidth(){
	            if (scrollbarWidth) return scrollbarWidth;
	            var scrollDiv = document.createElement('div');
	            $.each({
	                top : '-9999px',
	                width  : '50px',
	                height : '50px',
	                overflow : 'scroll',
	                position : 'absolute'
	            }, function(property, value){
	                scrollDiv.style[property] = value;
	            });
	            $('body').append(scrollDiv);
	            scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	            $('body')[0].removeChild(scrollDiv);
	            return scrollbarWidth;
	        }
	
	    })();
	
	    $.isMobile = function(type){
	        var reg = [];
	        var any = {
	            blackberry : 'BlackBerry',
	            android : 'Android',
	            windows : 'IEMobile',
	            opera : 'Opera Mini',
	            ios : 'iPhone|iPad|iPod'
	        };
	        type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
	        if ('*' == type) reg = $.map(any, function(v){ return v; });
	        else if (type in any) reg.push(any[type]);
	        return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
	    };
	
	    var isSupportViewportUnits = (function(){
	        // modernizr implementation
	        var $elem = $('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo('body');
	        var elem = $elem[0];
	        var height = parseInt(window.innerHeight / 2, 10);
	        var compStyle = parseInt((window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle)['height'], 10);
	        $elem.remove();
	        return compStyle == height;
	    }());
	
	    $(function(){
	
	        $('html').addClass($.isMobile() ? 'mobile' : 'desktop');
	
	        // .mbr-navbar--sticky
	        $(window).scroll(function(){
	            $('.mbr-navbar--sticky').each(function(){
	                var method = $(window).scrollTop() > 10 ? 'addClass' : 'removeClass';
	                $(this)[method]('mbr-navbar--stuck')
	                    .not('.mbr-navbar--open')[method]('mbr-navbar--short');
	            });
	        });
	
	        if ($.isMobile() && navigator.userAgent.match(/Chrome/i)){ // simple fix for Chrome's scrolling
	            (function(width, height){
	                var deviceSize = [width, width];
	                deviceSize[height > width ? 0 : 1] = height;
	                $(window).smartresize(function(){
	                    var windowHeight = $(window).height();
	                    if ($.inArray(windowHeight, deviceSize) < 0)
	                        windowHeight = deviceSize[ $(window).width() > windowHeight ? 1 : 0 ];
	                    $('.mbr-section--full-height').css('height', windowHeight + 'px');
	                });
	            })($(window).width(), $(window).height());
	        } else if (!isSupportViewportUnits){ // fallback for .mbr-section--full-height
	            $(window).smartresize(function(){
	                $('.mbr-section--full-height').css('height', $(window).height() + 'px');
	            });
	            $(document).on('add.cards', function(event){
	                if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('.mbr-section--full-height').length)
	                    $(window).resize();
	            });
	        }
	
	        // .mbr-section--16by9 (16 by 9 blocks autoheight)
	        function calculate16by9(){
	            $(this).css('height', $(this).parent().width() * 9 / 16);
	        }
	        $(window).smartresize(function(){
	            $('.mbr-section--16by9').each(calculate16by9);
	        });
	        $(document).on('add.cards change.cards', function(event){
	            var enabled = $(event.target).outerFind('.mbr-section--16by9');
	            if (enabled.length){
	                enabled
	                    .attr('data-16by9', 'true')
	                    .each(calculate16by9);
	            } else {
	                $(event.target).outerFind('[data-16by9]')
	                    .css('height', '')
	                    .removeAttr('data-16by9');
	            }
	        });
	
	
	        // .mbr-parallax-background
	        if ($.fn.jarallax && !$.isMobile()){
	            $(document).on('destroy.parallax', function(event){
	                $(event.target).outerFind('.mbr-parallax-background')
	                    .jarallax('destroy')
	                    .css('position', '');
	            });
	            $(document).on('add.cards change.cards', function(event){
	                $(event.target).outerFind('.mbr-parallax-background')
	                    .jarallax({
	                        speed: 0.6
	                    })
	                    .css('position', 'relative');
	            });
	        }
	
	        // .mbr-social-likes
	        if ($.fn.socialLikes){
	            $(document).on('add.cards', function(event){
	                $(event.target).outerFind('.mbr-social-likes:not(.mbr-added)').on('counter.social-likes', function(event, service, counter){
	                    if (counter > 999) $('.social-likes__counter', event.target).html(Math.floor(counter / 1000) + 'k');
	                }).socialLikes({initHtml : false});
	            });
	        }
	
	        // .mbr-fixed-top
	        var fixedTopTimeout, scrollTimeout, prevScrollTop = 0, fixedTop = null, isDesktop = !$.isMobile();
	        $(window).scroll(function(){
	            if (scrollTimeout) clearTimeout(scrollTimeout);
	            var scrollTop = $(window).scrollTop();
	            var scrollUp  = scrollTop <= prevScrollTop || isDesktop;
	            prevScrollTop = scrollTop;
	            if (fixedTop){
	                var fixed = scrollTop > fixedTop.breakPoint;
	                if (scrollUp){
	                    if (fixed != fixedTop.fixed){
	                        if (isDesktop){
	                            fixedTop.fixed = fixed;
	                            $(fixedTop.elm).toggleClass('is-fixed');
	                        } else {
	                            scrollTimeout = setTimeout(function(){
	                                fixedTop.fixed = fixed;
	                                $(fixedTop.elm).toggleClass('is-fixed');
	                            }, 40);
	                        }
	                    }
	                } else {
	                    fixedTop.fixed = false;
	                    $(fixedTop.elm).removeClass('is-fixed');
	                }
	            }
	        });
	        $(document).on('add.cards delete.cards', function(event){
	            if (fixedTopTimeout) clearTimeout(fixedTopTimeout);
	            fixedTopTimeout = setTimeout(function(){
	                if (fixedTop){
	                    fixedTop.fixed = false;
	                    $(fixedTop.elm).removeClass('is-fixed');
	                }
	                $('.mbr-fixed-top:first').each(function(){
	                    fixedTop = {
	                        breakPoint : $(this).offset().top + $(this).height() * 3,
	                        fixed : false,
	                        elm : this
	                    };
	                    $(window).scroll();
	                });
	            }, 650);
	        });
	
	        // embedded videos
	        $(window).smartresize(function(){
	            $('.mbr-embedded-video').each(function(){
	                $(this).height(
	                    $(this).width() *
	                    parseInt($(this).attr('height') || 315) /
	                    parseInt($(this).attr('width') || 560)
	                );
	            });
	        });
	        $(document).on('add.cards', function(event){
	            if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('iframe').length)
	                $(window).resize();
	        });
	
	        // init
	        $('body > *:not(style, script)').trigger('add.cards');
	        $('html').addClass('mbr-site-loaded');
	        $(window).resize().scroll();
	
	        // smooth scroll
	        if (!$('html').hasClass('is-builder')){
	            $(document).click(function(e){
	                try {
	                    var target = e.target;
	
	                    if ($(target).parents().hasClass('extTestimonials1')) {
	                        return;
	                    }
	                    do {
	                        if (target.hash){
	                                var useBody = /#bottom|#top/g.test(target.hash);
	                            $(useBody ? 'body' : target.hash).each(function(){
	                                e.preventDefault();
	                                // in css sticky navbar has height 64px
	                                var stickyMenuHeight = $('.mbr-navbar--sticky').length ? 64 : 0;
	                                var goTo = target.hash == '#bottom'
	                                        ? ($(this).height() - $(window).height())
	                                        : ($(this).offset().top - stickyMenuHeight);
	                                //Disable Accordion's and Tab's scroll
	                                if($(this).hasClass('panel-collapse') || $(this).hasClass('tab-pane')){return};
	                                $('html, body').stop().animate({
	                                    scrollTop: goTo
	                                }, 800, 'easeInOutCubic');
	                            });
	                            break;
	                        }
	                    } while (target = target.parentNode);
	                } catch (e) {
	                   // throw e;
	                }
	            });
	        }
	
	        // init the same height columns
	        $('.cols-same-height .mbr-figure').each(function() {
	            var $imageCont = $(this)
	            var $img = $imageCont.children('img')
	            var $cont = $imageCont.parent()
	            var imgW = $img[0].width
	            var imgH = $img[0].height
	
	            function setNewSize() {
	                $img.css({
	                    width: '',
	                    maxWidth: '',
	                    marginLeft: ''
	                })
	
	                if(imgH && imgW) {
	                    var aspectRatio = imgH / imgW
	
	                    $imageCont.addClass({
	                        position: 'absolute',
	                        top: 0,
	                        left: 0,
	                        right: 0,
	                        bottom: 0
	                    })
	
	                    // change image size
	                    var contAspectRatio = $cont.height() / $cont.width()
	                    if(contAspectRatio > aspectRatio) {
	                        var percent = 100 * (contAspectRatio - aspectRatio) / aspectRatio;
	                        $img.css({
	                            width: percent + 100 + '%',
	                            maxWidth: percent + 100 + '%',
	                            marginLeft: (- percent / 2) + '%'
	                        })
	                    }
	                }
	            }
	
	            $img.one('load', function() {
	                imgW = $img[0].width
	                imgH = $img[0].height
	                setNewSize()
	            })
	
	            $(window).on('resize', setNewSize)
	            setNewSize()
	        })
	
	    });
	
	
	    if (!$('html').hasClass('is-builder')) {
	        $(document).ready(function() {
	            //disable animation on scroll on mobiles
	            if ($.isMobile()) {
	                return;
	              //enable animation on scroll
	            } else if ($('input[name=animation]').length) {
	                $('input[name=animation]').remove();
	
	                var $animatedElements = $('p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-gallery, .mbr-slider, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure').not(function() {
	                    return $(this).parents().is('.navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine');
	                }).addClass('hidden animated');
	
	                function getElementOffset(element) {
	                    var top = 0
	                    do {
	                        top += element.offsetTop  || 0;
	                        element = element.offsetParent;
	                    } while(element);
	
	                    return top;
	                };
	
	                function checkIfInView() {
	                    var window_height = window.innerHeight;
	                    var window_top_position = document.documentElement.scrollTop || document.body.scrollTop;
	                    var window_bottom_position = window_top_position + window_height - 50;
	
	                    $.each($animatedElements, function() {
	                        var $element = $(this);
	                        var element = $element[0];
	                        var element_height = element.offsetHeight;
	                        var element_top_position = getElementOffset(element);
	                        var element_bottom_position = (element_top_position + element_height);
	
	                        // check to see if this current element is within viewport
	                        if ((element_bottom_position >= window_top_position) &&
	                            (element_top_position <= window_bottom_position) &&
	                            ($element.hasClass('hidden'))) {
	                            $element.removeClass('hidden').addClass('fadeInUp')
	                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	                                $element.removeClass('animated fadeInUp');
	                            });
	                        }
	                    });
	                }
	
	                var $window = $(window);
	
	                $window.on('scroll resize', checkIfInView);
	                $window.trigger('scroll');
	            }
	        });
	
	        if ($('.navbar').length) {
	            $(".nav-dropdown").swipe({
	                swipeLeft:function(event, direction, distance, duration, fingerCount) {
	                    $('.navbar-close').click();
	                }
	            });
	        }
	    }
	
	    // Scroll to Top Button
	    $(document).ready(function() {
	    if ($('.mbr-arrow-up').length) {
	        var $scroller = $('#scrollToTop'),
	            $main = $('body,html'),
	            $window = $(window);
	        $scroller.css('display', 'none');    
	        $window.scroll(function () {
	        if ($(this).scrollTop() > 0) {
	            $scroller.fadeIn();
	        } else {
	            $scroller.fadeOut();
	        }
	        });
	        $scroller.click(function() {
	            $main.animate({
	                scrollTop: 0
	            }, 400);
	            return false;
	        });        
	    }
	    });
	
	    //Fix menu for the Opera Mini
	    var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
	    if(isOperaMini){
	        $('.hamburger-icon').css({'width':'30px', 'height':'3px', 'background-color':'#ffffff', 'box-shadow':'none', 'position':'relative'}).addClass('hamburger-om');
	    }
	
	})(jQuery);
	!function() {
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map