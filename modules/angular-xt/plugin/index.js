//if (!window["angular"])

Ngxt=function(app) {
    this.core=hwc;
    this.injector = angular.injector(['ng']);
    this.q = this.injector.get('$q');
    this.compile = this.injector.get('$compile');
    this.controller=this.injector.get('$controller').register;
    this.document = this.injector.get('$document');
    this.filter = this.injector.get('$filter').register;
    this.directive=this.compile.directive;

    if (app) {
        this.config(app);
    }
}

Ngxt.prototype.config=function(app) {
    this.app=app;

    //this.factory = this.injector.get('$provide').factory;
    //this.service = this.injector.service;
    
    this.app.compileProvider=this.compileProvider;
}

Ngxt.prototype.lazyLoad=function (jsFile,cssFile) {
    var deferred=this.q.defer();
    var that=this;

    if (!jsFile && !cssFile) {
        deferred.resolve(null);

        return deferred.promise;
    }

    hwc.defineFn(["hwc!{PATH_JS_LIB}browser-common/index.js"],function() {
        var $ = this;
        
        var toLoad=[];
        
        if (jsFile)
            toLoad.push(jsFile)
        
        if (cssFile)
            toLoad.push(cssFile)
        
        $.Browser.Loader.load(toLoad, function(jsResult) {
            deferred.resolve(jsResult);
        });
    });

    return deferred.promise;
}

Ngxt.prototype.removeComponent=function() {
    // TODO: implement
}

Ngxt.prototype._cleanComponent=function(component) {
    console.log("Removing component '"+component.name+"' and its style: ("+component.cssFile+")");

    hwc.defineFn(["hwc!{PATH_JS_LIB}browser-common/index.js"],function() {
        this.Browser.Loader.removeCss(component.cssFile);
    });
}

Ngxt.prototype.component=function(name,options) {
    console.log("Creating component for router with template: ("+options.templateUrl+") -- ("+options.scriptUrls+") -- ("+options.styleUrls+")");

    var that=this;
    var deferred=this.q.defer();
    
    if (!options.restict) {
        options.restrict="C";
    }
    
    if (!options.scriptUrls || options.styleUrls) {
        options.link = {
            post: function (scope, element, attrs) {
                scope.ngxtComp={
                    cssFile: cssFile,
                    name: name
                };

                element.on('$destroy', function() {
                    that._cleanComponent(scope.ngxtComp);
                });

                // workaround: nested components should use this
                // function to be correctly compiled
                ngxt.scopedCompiler=function(el) {
                    $compile(el)({});
                }

                return that.lazyLoad(options.scriptUrls,options.styleUrls,true).then(function() {
                    deferred.resolve();
                });
            }
        }
    }

    this.directive.call(null, name,function($compile) {
        return options;
    });

    if (ngxt.scopedCompiler) {
        var _el=document.querySelector("."+name);
        var el=angular.element(_el);
        ngxt.scopedCompiler(el);
    }
}

Ngxt.prototype.routeComponent=function(options) {
    console.log("Creating component for router with template: ("+options.templateUrl+") -- ("+options.scriptUrls+") -- ("+options.styleUrls+")");

    var that=this;

    if (options.scriptUrls || options.styleUrls) {
        options.resolve = {
            template: function() {
                return that.lazyLoad(options.scriptUrls,options.styleUrls);
            }
        }
    }

    return options;
}

var ngxt=new Ngxt();
