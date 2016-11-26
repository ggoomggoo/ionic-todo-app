angular.module('mytodos.todo-data', [])
.factory('TodoData', function() {

  var todos = angular.fromJson(window.localStorage['todo'] || '[]');

  // private method ?
  function saveToStorage() {
    window.localStorage['todo'] = angular.toJson(todos);
  }

  // functions
  return {
    list: function() {
      return todos;
    },
    get: function(todoId) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === todoId) {
          return todos[i];
        }
      }
      return undefined;
    },
    update: function(todo) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === todo.id) {
          todos[i] = todo;
          saveToStorage();
          return;
        }
      }
    },
    create: function(todo) {
      todos.push(todo);
      saveToStorage();
    },
    remove: function(todoId) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === todoId) {
          todos.splice(i, 1); // params; 0: 시작 인덱스, 1: 삭제 개수, 3: 추가 배열
          saveToStorage();
          return;
        }
      }
    },
    move: function(todo, fromIndex, toIndex) {
      todos.splice(fromIndex, 1);
      todos.splice(toIndex, 0, todo);
      saveToStorage();
      return;
    }
  }
});
