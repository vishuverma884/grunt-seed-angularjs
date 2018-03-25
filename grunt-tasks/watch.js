var watch = {
    default:{
        files: ['src/**/*.js', 'src/**/*.html', './index.html', 'src/**/*.css'],
        tasks: ['copyTask'],
        options: {
            event: ['all'],
            spawn: false,
            livereload: true
        }
    },
    scripts: {
            files: 'src/**/*.js',
            tasks: ['scripttasks'],
            options: {
                event: ['all'],
                spawn: false,
                livereload: true
            }
    },
    html: {
        files: ['src/**/*.html', './index.html'],
        tasks: ['copyhtml'],
        options: {
            event: ['all'],
            spawn: false,
            livereload: true
        }
    },
    css:{
        files: 'src/**/*.css',
        tasks: ['csstasks'],
        options: {
            event: ['all'],
            spawn: false,
            livereload: true
        }
    }
};

module.exports = watch;