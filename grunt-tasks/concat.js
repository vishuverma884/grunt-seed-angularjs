var concat = {
    options: {
        separator: ''
    },
    js_production:{
        files:[
            {
                src: ['src/**/*.js'],
                dest: 'build/common.min.js'
            },
            {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
                    'node_modules/jquery/dist/jquery.js'
                ],
                dest: 'build/main.min.js'
            }
        ]
    },
    css_production:{
        files:[{
            src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
            dest: 'build/main.min.css'
        },{
            src:['src/**/*.css'],
            dest: 'build/common.min.css'
        }]
    }
};
module.exports = concat;