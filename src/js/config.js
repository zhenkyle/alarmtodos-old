// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    paths: {
        backbone: '../bower_components/backbone/backbone',
        'font-awesome': '../bower_components/font-awesome/fonts/*',
        jquery: '../bower_components/jquery/dist/jquery',
        requirejs: '../bower_components/requirejs/require',
        underscore: '../bower_components/underscore/underscore',
        'backbone.localStorage': '../bower_components/backbone.localStorage/backbone.localStorage',
        qunit: '../bower_components/qunit/qunit/qunit'
    },
    packages: [

    ]
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);