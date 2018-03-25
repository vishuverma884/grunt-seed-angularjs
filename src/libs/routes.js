var routes = {
    'home':{
        url: '',
        abstract: true,
        templateUrl: 'views/template.home.html'        
    },
    'page':{
        url: '/',
        views:{
            'header':{
                templateUrl: 'views/common.header.html',
                controller: 'headerController'
            }
        }
    }
};