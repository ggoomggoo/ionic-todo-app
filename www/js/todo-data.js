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
    }
  }
});
