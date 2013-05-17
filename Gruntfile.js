'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        cmdtext: {
            main: {
                cwd: 'test/src',
                expand: true,
                src: ['*.txt'],
                dest: 'test/dist/'
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', 'cmdtext');
};