// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mytodos', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('edit', {
    url: '/edit/:todoId',
    templateUrl: 'templates/edit.html'
  });

  // 설정되지 않은 url 에 대해 설정. default url?
  $urlRouterProvider.otherwise('/list');
})

.controller('ListCtrl', function($scope) {
  $scope.todos = [
    {
      id: 1,
      title: 'title1',
      description: 'description',
      complete: false
    },
    {
      id: 2,
      title: 'title2',
      description: 'description',
      complete: false
    },
    {
      id: 3,
      title: 'title3',
      description: 'description',
      complete: false
    }
  ];
})

.controller('EditCtrl', function($scope, $state) {
  $scope.todoId = $state.params.todoId;
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
