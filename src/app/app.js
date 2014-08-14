
angular.module('messular', [
  'ngRoute',
  'messular.todo',
  'messular-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/messular/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
