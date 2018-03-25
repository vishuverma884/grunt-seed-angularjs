var copy = {
    development:{
        files: [
            {
                expand: true, 
                flatten: true, 
                src: ['./index.html'],
                dest: 'build/' 
            },{
                expand: true,
                flatten: true,
                src: ['src/**/*.html'], 
                dest: 'build/views/', 
                filter: 'isFile'
            },{
                expand: true, 
                flatten: true,
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'node_modules/jquery/dist/jquery.js'
                ],
                dest: 'build/vendor/js'
            },{
                expand: true,
                src: ['src/**/*.js'],
                dest: 'build/' 
            },{
                expand: true, 
                flatten: true,
                src: ['node_modules/bootstrap/dist/css/bootstrap.css'],
                dest: 'build/vendor/css/'
            },{
                expand: true,
                src: ['src/**/*.css'],
                dest: 'build/'
            }
        ]
    },
    production: {
        files: [
            {
                expand: true, 
                flatten: true, 
                src: ['./index.html'],
                dest: 'build/' 
            },
            {
                expand: true, 
                flatten: true, 
                src: ['src/**/*.html'], 
                dest: 'build/views/', 
                filter: 'isFile'
            }
        ]
    }
};

module.exports = copy;