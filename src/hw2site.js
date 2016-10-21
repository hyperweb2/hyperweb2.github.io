if (window["angular"] == null) {
    var url = window.location.protocol + '//' + window.location.host + '/#' + window.location.pathname + window.location.hash;
    window.location.replace(url);
}

var app=angular.module("Hw2Site",["ngRoute",'angular-loading-bar']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){              
    $routeProvider
    .when("/site/it/home.html",       {templateUrl: "site/it/home.html", reloadOnSearch: false})
    .when("/site/it/media.html",      {templateUrl: "site/it/media.html", reloadOnSearch: false})
    .when("/site/it/partners.html",   {templateUrl: "site/it/partners.html", reloadOnSearch: false})
    .when("/site/it/prodotti.html",   {templateUrl: "site/it/prodotti.html", reloadOnSearch: false})
    .when("/site/en/terms.html",      {templateUrl: "site/en/terms.html", reloadOnSearch: false})
    .when("/terms/",          {redirectTo: 'site/en/terms.html'})
    .otherwise(               {redirectTo: '/site/it/home.html'});
        
    $locationProvider.html5Mode(true);
}]);

app.run(function($rootScope) {
    $rootScope.$on("$routeChangeStart", function($event,$next, $previousRoute) {
        if ($previousRoute != null && $next.$$route.templateUrl != $previousRoute.loadedTemplateUrl 
                && $next.$$route.templateUrl == "site/it/home.html") {
            window.location.reload(true);
        }
    });
});

function registerComponent(name) {
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        // Grab DOM from doc.html's document.
        var text = document.querySelector("#"+name);
        this.innerHTML = text.cloneNode(true).innerHTML;
    };

    document.registerElement(name, {prototype: proto});
}

