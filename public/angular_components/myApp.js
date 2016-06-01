var app = angular.module('UsersApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'angular_components/home/homeTemplate.html',
        controller: 'homeCtrl'
      })
      .when('/management', {
        templateUrl: 'angular_components/crud/crudTemplate.html',
        controller: 'crudCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });