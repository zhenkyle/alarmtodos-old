require.config({
  baseUrl: '../js'
});

require(['require-config'],function(){
  

	// A list of all QUnit test Modules.  Make sure you include the `.js` 
	// extension so RequireJS resolves them as relative paths rather than using
	// the `baseUrl` value supplied above.
	var testModules = [
		"models/TodoTests.js"
	];

    // Resolve all testModules and then start the Test Runner.
	require(testModules, function(){
     QUnit.load();
     QUnit.start();
	});
	
});
