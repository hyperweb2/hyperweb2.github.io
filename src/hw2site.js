var app=angular.module("Hw2Site",["ngRoute","ngAnimate","angular-loading-bar"]);

app.config(['$routeProvider','$locationProvider','cfpLoadingBarProvider','$anchorScrollProvider',function($routeProvider,$locationProvider,cfpLoadingBarProvider,$anchorScrollProvider){
    cfpLoadingBarProvider.includeSpinner = true;
    $anchorScrollProvider.disableAutoScrolling();
 
    $routeProvider
    .when("/home.html",       {templateUrl: "src/pages/home.html", reloadOnSearch: false})
    .when("/media.html",      {templateUrl: "src/pages/media.html", reloadOnSearch: false})
    .when("/partners.html",   {templateUrl: "src/pages/partners.html", reloadOnSearch: false})
    .when("/prodotti.html",   {templateUrl: "src/pages/prodotti.html", reloadOnSearch: false})
    .when("/terms.html",      {templateUrl: "src/pages/terms.html", reloadOnSearch: false})
    .otherwise( {redirectTo: '/home.html'});
    
    $locationProvider.html5Mode(true);
}]);

