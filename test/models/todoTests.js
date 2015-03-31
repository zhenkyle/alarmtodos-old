"use strict";
define(['models/Todo','collections/Todolist'],function (Todo,TodoList) {

	QUnit.test( "new ToDoList", function( assert ) {
      window.Todos = new TodoList;
      var todo = new Todo;
	  assert.equal( todo.get("title") , "empty todo...", "title should be set correct" );
	  assert.equal( todo.get("done") , false, "done should be false");

	  var another_todo = new Todo({
	  	title: "I'm a Todo",
	  	done: true
	  });
	  assert.equal( another_todo.get("title") , "I'm a Todo", "title should be set this time");
	  assert.equal( another_todo.get("done") , true, "done should be true by this time");
	});

});