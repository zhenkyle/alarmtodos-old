'use strict';
var packagejson = require('./package.json');
 
module.exports = function (grunt) {
 
  // Configuration
  grunt.initConfig({
    pkg: packagejson,
    watch: {
      scripts: {
        files: ['<%= pkg.name %>.js'],
        tasks: ['default']
      }
    },
    jshint: {
      build: [
        '<%= pkg.name %>.js'
      ]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    bowerRequirejs: {
      target: {
        rjsConfig: 'src/js/config.js'
      }
    }
  });
  
  grunt.registerTask('default', [
    'bowerRequirejs',
    'jshint',
    'uglify'
  ]);
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-requirejs');
};