(function(){
    var app = angular.module('root', ['ui.router', 'header']);
    // inject config to the app
    app.config(config);

    //Configure the routes for the app
    config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    
    // config definition
    function config($sp, $lp, $urp){
        $lp.html5Mode(true).hashPrefix('');                
        $urp.otherwise("/");

        $sp.state('home', routes.home);
        $sp.state('home.page', routes.page);
    }
})();