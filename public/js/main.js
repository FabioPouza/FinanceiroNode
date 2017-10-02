angular.module('financeiro', ['ngAnimate', 'ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/cadastrar.html',
            controller: 'CadastrarController'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    });