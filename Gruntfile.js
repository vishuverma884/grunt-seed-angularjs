var cleanConfig = require('./grunt-tasks/clean');
var concatConfig = require('./grunt-tasks/concat');
var copyConfig = require('./grunt-tasks/copy');
var uglifyConfig = require('./grunt-tasks/uglify');
var watchConfig = require('./grunt-tasks/watch');
var connectConfig = require('./grunt-tasks/connect');
var jshintConfig = require('./grunt-tasks/jshint');
function Gruntconfig(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: cleanConfig,
        uglify: uglifyConfig,
        copy: copyConfig,
        concat: concatConfig,
        watch: watchConfig,
        connect: connectConfig,
        cssmin: concatConfig,
        jshint: jshintConfig,
        preprocess: {
            options: {
                context: {
                    DEBUG: (grunt.option('NODE_ENV') == 'development')?true:false
                }
            },
            html: {
                src : 'build/index.html',
                dest : 'build/index.html'
            }
        } 
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-changed');
    //Development Configuration
        //Jshint on Scripts
        grunt.registerTask('cjshint', ['changed:jshint:production']);
        //Copy Script, CSS, HTML task
        grunt.registerTask('copyTask', ['changed:copy:development']);
        //development create build
        grunt.registerTask('debug', ['clean', 'cjshint', 'copyTask']);
        //development config task to run all above tasks
        grunt.registerTask('serve', ['debug', 'preprocess', 'connect', 'watch:default']);
    //Development Configuration
    
    //Production Configuration
        //Script concat, uglify tasks
        grunt.registerTask('scripttasks', ['cjshint', 'changed:concat:js_production', 'changed:uglify:production']);
        //CSS Concat task
        grunt.registerTask('csstasks', ['changed:cssmin:css_production']);
        //HTML copy files task
        grunt.registerTask('copyhtml', ['changed:copy:production']);
        //Trigger individual watches
        grunt.registerTask('triggerwatches', ['watch:html', 'watch:scripts', 'watch:css']);
        //production create build
        grunt.registerTask('release', ['clean', 'copyhtml', 'scripttasks', 'csstasks']);
        //production config task to run all above tasks
        grunt.registerTask('production', ['release', 'preprocess', 'connect', 'triggerwatches']);
    //Production Configuration
}
module.exports = Gruntconfig;