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

    hwc.defineFn(["hwc!{PATH_JS_LIB}browser-common/index.js"],function() {
        var $ = this;
        this.Browser.Loader.load(jsFile).then(function(result) {
            if (cssFile) {
                $.Browser.Loader.load(cssFile, function() {
                    deferred.resolve(result);
                });
            } else {
                deferred.resolve(result);
            }
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

Ngxt.prototype.component=function(name,htmlFile,jsFile,cssFile,compile) {
    console.log("Creating component '"+name+"' that includes:  ("+htmlFile+") -- ("+jsFile+") -- ("+cssFile+")");

    var that=this;
    var deferred=this.q.defer();

    this.directive.call(null, name,function($compile) {
        return {
            restrict: 'C',
            templateUrl: htmlFile,
            link: {
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

                        return that.lazyLoad(jsFile,cssFile,true).then(function() {
                            deferred.resolve();
                        });
                }
            }
        }
    });

    if (ngxt.scopedCompiler) {
        var _el=document.querySelector("."+name);
        var el=angular.element(_el);
        ngxt.scopedCompiler(el);
    }
}

Ngxt.prototype.routeComponent=function(htmlFile,jsFile,cssFile,ctrlName) {
    console.log("Creating component for router with template: ("+htmlFile+") -- ("+jsFile+") -- ("+cssFile+")");

    var that=this;
    return {
        templateUrl: htmlFile,
        resolve: { template: function() {
            return that.lazyLoad(jsFile,cssFile);
        } }
    }
}

var ngxt=new Ngxt();
