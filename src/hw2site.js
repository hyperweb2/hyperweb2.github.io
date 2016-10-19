var app=angular.module("Hw2Site",["ngRoute"]);

app.config(['$routeProvider','$compileProvider',function($routeProvider,$compileProvider){
    $routeProvider
    .when("/",                {templateUrl: "src/pages/home.html"})
    .when("/media.html",      {templateUrl: "src/pages/media.html"})
    .when("/partners.html",   {templateUrl: "src/pages/partners.html"})
    .when("/terms.html",      {templateUrl: "src/pages/terms.html"})
}]);
