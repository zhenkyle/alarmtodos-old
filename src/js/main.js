require(['collections/todolist'], function(TodoList) {

  // Create our global collection of **Todos**.
  Todos = new TodoList;

});


require(['views/app'], function(AppView) {

  // Finally, we kick things off by creating the **App**.
  var App = new AppView;
});