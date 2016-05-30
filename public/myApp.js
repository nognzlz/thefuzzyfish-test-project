var app = angular.module('UsersApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(function($routeProvider){
    $routeProvider
      .when('/management', {
        templateUrl: 'crud/crudTemplate.html',
        controller: 'crudCtrl'
      })
      .otherwise({
        redirectTo: '/management'
      });
  });