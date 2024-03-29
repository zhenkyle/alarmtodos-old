// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    paths: {
        backbone: '../vendor/backbone/backbone',
        'font-awesome': '../vendor/font-awesome/fonts/*',
        jquery: '../vendor/jquery/dist/jquery',
        requirejs: '../vendor/requirejs/require',
        underscore: '../vendor/underscore/underscore',
        'backbone.localStorage': '../vendor/backbone.localStorage/backbone.localStorage',
        qunit: '../vendor/qunit/qunit/qunit'
    },
    packages: [

    ]
});