module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> - Copyright (c) <%= grunt.template.today("yyyy") %> by Joe Larson (http://joewlarson.com), MIT License - minified <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/charFunk-1.1.1.js',
                dest: 'charFunk-1.1.1.min.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/charFunk-1.1.1.js']
        },
        qunit: {
            files: ['tests/index.html']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-lib-phantomjs');

    /*See https://github.com/joelarson4/CharFunk/issues/2

        If I can't sort that out soon or get a fix, I can probably get it to run in grunt some other way...
        ...in the meantime, run tests manually by opening tests/index.html in a browser!
    */

    // Default task(s).
    grunt.registerTask('default', ['jshint','uglify','qunit']);

};