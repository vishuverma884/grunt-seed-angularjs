var history = require('connect-history-api-fallback');
var connect = {
    options: {
        hostname: '127.0.0.1'
    },
    server: {
        options: {
            open: true,
            base: 'build',
            port: 8080,
            livereload: true,
            middleware: function(connect, options, middlewares) {
                middlewares.unshift(history());
                return middlewares;
            }
        }
    }
};

module.exports = connect;