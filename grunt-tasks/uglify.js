var uglify = {
    options:{
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
    },
    production: {
        files: [{ 
                    src: 'build/common.min.js',  
                    dest: 'build/common.min.js'
                },
                {
                    src: 'build/main.min.js',  
                    dest: 'build/main.min.js'        
                }]
    }
};

module.exports = uglify;