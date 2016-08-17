/**
 * Created by Arnab Banerji on 16-08-2016.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            dist: {
                // the files to concatenate
                src: [
                    'bower_components/jquery/dist/js/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js'
                ],
                // the location of the resulting JS file
                dest: 'libs/libs.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);

};