var jshint = {
    production: {
        options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            globals: {
                jQuery: true,
                $: true,
                window: true,
                angular: true,
                localString: true,
                locale: true,
                console: true
            }
        },
        src: ['src/**/*.js', '!build/', '!Gruntfile.js', '!node_modules/', '!grunt-tasks/']
    }
};

module.exports = jshint;