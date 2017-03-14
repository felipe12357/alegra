var app = angular.module('app-alegra', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/listar", {
        templateUrl : "views/listar.html",
    })
    .when("/crearContacto", {
        templateUrl : "views/crearContacto.html",
    })
    .when("/editarContacto/:idContact", {
        templateUrl : "views/editarContacto.html",
    })
    .when("/detallesContacto/:idContact", {
        templateUrl : "views/detallesContacto.html",
    })
    .otherwise('/listar');

});

