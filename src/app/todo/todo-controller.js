angular
  .module('messular.todo')
  .controller('TodoCtrl', function ($scope, $window) {
    'use strict';
    $scope.todos = JSON.parse($window.localStorage.getItem('todos') || '[]');
    $scope.$watch('todos', function (newTodos, oldTodos) {
      if (newTodos !== oldTodos) {
        $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
      }
    }, true);

    $scope.add = function () {
      var todo = {label: $scope.label, isDone: false};
      $scope.todos.push(todo);
      $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
      $scope.label = '';
    };

    $scope.delete = function () {
      var index = $scope.todos.indexOf( this.todo );
      $scope.todos.splice( index, 1 );
    };

    $scope.check = function () {
      this.todo.isDone = !this.todo.isDone;
    };
  });
