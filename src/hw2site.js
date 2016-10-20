var app=angular.module("Hw2Site",["ngRoute","ngAnimate","angular-loading-bar"]);

app.config(['$routeProvider','$locationProvider','cfpLoadingBarProvider',function($routeProvider,$locationProvider,cfpLoadingBarProvider){
    cfpLoadingBarProvider.includeSpinner = true;
 
    $routeProvider
    .when("/home.html",      {templateUrl: "src/pages/home.html", reloadOnSearch: false})
    .when("/media.html",      {templateUrl: "src/pages/media.html"})
    .when("/partners.html",   {templateUrl: "src/pages/partners.html"})
    .when("/prodotti.html",   {templateUrl: "src/pages/prodotti.html"})
    .when("/terms.html",      {templateUrl: "src/pages/terms.html"})
    .otherwise( {redirectTo: '/home.html'});
    
    $locationProvider.html5Mode(true);
}]);
