/*if (window["angular"] == null) {
    var url = window.location.protocol + '//' + window.location.host + '/#' + window.location.pathname + window.location.hash;
    window.location.replace(url);
    throw new Error("Abort!");
}*/

var app=angular.module("Hw2Site",["ngRoute",'angular-loading-bar','angularVideoBg']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    ngxt.config(app);
    
    var deps=[
      "src/assets/smooth-scroll/SmoothScroll.js",
      "src/assets/viewportChecker/jquery.viewportchecker.js",
      "src/assets/dropdown/js/script.min.js",
      "src/assets/jarallax/jarallax.js",
      "src/assets/social-likes/social-likes.js",
      "src/assets/theme/js/script.js"
    ];
        
    $routeProvider
    .when("/site/it/home.html",       ngxt.routeComponent({templateUrl: "site/it/home.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/it/media.html",      ngxt.routeComponent({templateUrl: "site/it/media.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/it/partners.html",   ngxt.routeComponent({templateUrl: "site/it/partners.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/it/prodotti.html",   ngxt.routeComponent({templateUrl: "site/it/prodotti.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/en/terms.html",      ngxt.routeComponent({templateUrl: "site/en/terms.html", scriptUrls: deps, reloadOnSearch: false}) )
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

