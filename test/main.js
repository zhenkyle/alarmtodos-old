require.config({
  baseUrl: '../js',
  urlArgs: 'now=' + Date.now()
});

require(['require-config'],function(){
  
    // Resolve all testModules and then start the Test Runner.
	require(['models/TodoTests.js'], function(){
     QUnit.load();
     QUnit.start();
	});
	
});
