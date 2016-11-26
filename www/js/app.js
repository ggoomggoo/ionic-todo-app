// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mytodos', ['ionic', 'mytodos.todo-data'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'templates/edit.html', // edit.html 재활용
    controller: 'AddCtrl'
  });

  $stateProvider.state('edit', {
    url: '/edit/:todoId',
    templateUrl: 'templates/edit.html',
    controller: 'EditCtrl'
  });

  // 설정되지 않은 url 에 대해 설정. default url?
  $urlRouterProvider.otherwise('/list');
})

.controller('ListCtrl', function($scope, TodoData) {
  $scope.todos = TodoData.list();

  $scope.delete = function(todoId) {
    TodoData.remove(todoId);
    $state.go('list');
  }
})

.controller('AddCtrl', function($scope, $state, TodoData) {
  $scope.todo = {
    id: new Date().getTime().toString(),
    title: '',
    description: '',
    complete: false
  };

  $scope.save = function() {
    TodoData.create($scope.todo);
    $state.go('list');
  }
})

.controller('EditCtrl', function($scope, $state, TodoData) {
  // $scope.todo = getTodo($state.params.todoId); // call by reference
  $scope.todo = angular.copy(TodoData.get($state.params.todoId));

  $scope.save = function() {
    TodoData.update($scope.todo);
    $state.go('list');
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
