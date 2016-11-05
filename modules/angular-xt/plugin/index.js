'use strict';

define("angularxt-deps",[
    "hwc_js_lib_class_index",
    "hwc_js_lib_browser_common_index"
],function() {
    return ngxt;
});

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

    require(["angularxt-deps"],function() {
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
    });

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

    require(["angularxt-deps"], function () {
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
    });

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

    require(["angularxt-deps"], function () {
        var $=hwc;
        $.Browser.Loader.removeCss(component.styleUrls);
    });
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
