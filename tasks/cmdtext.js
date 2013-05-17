'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('cmdtext', function() {
        this.files.forEach(function(fileObj) {
            fileObj.src.forEach(function(src) {
                var dest = fileObj.dest,
                    content = grunt.file.read(src);

                grunt.log.writeln('convert txt to cmd: ' + src + ' => ' + dest);
                content = 'define(function(){return ' + JSON.stringify(content) + ';});';
                grunt.file.write(dest, content);
            });
        });
    });
};