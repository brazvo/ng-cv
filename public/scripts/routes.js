
define(['app'], function (app) {

    // app is the angular application object
    return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/curriculum/personal-info');

        $stateProvider.state(
            'curriculum',
            {
                url: '/curriculum',
                views: {
                    header: {
                        templateUrl: 'views/header.html'
                    },
                    navigation: {
                        templateUrl: 'views/nav.html'
                    },
                    content: {
                        templateUrl: 'views/curriculum/index.html',
                        controller: 'CurriculumCtrl'
                    }
                },
                resolve: {
                    cv: ['$resource', function($resource){
                        return $resource('data/cv.json').get().$promise;
                    }]
                }
            }
        );

        $stateProvider.state(
            'curriculum.personal',
            {
                url: '/personal-info',
                views: {
                    content: {
                        templateUrl: 'views/curriculum/index.html',
                        controller: 'CurriculumCtrl'
                    }
                }
            }
        );

        $stateProvider.state(
            'curriculum.education',
            {
                url: '/education',
                views: {
                    'content@': {
                        templateUrl: 'views/curriculum/edu.html',
                        controller: 'CurriculumCtrl'
                    }
                }
            }
        );

        $stateProvider.state(
            'curriculum.jobs',
            {
                url: '/jobs',
                views: {
                    'content@': {
                        templateUrl: 'views/curriculum/jobs.html',
                        controller: 'CurriculumCtrl'
                    }
                }
            }
        );

        $stateProvider.state(
            'curriculum.skills',
            {
                url: '/skills',
                views: {
                    'content@': {
                        templateUrl: 'views/curriculum/skills.html',
                        controller: 'CurriculumCtrl'
                    }
                }
            }
        );

        $stateProvider.state(
            'curriculum.about',
            {
                url: '/about',
                views: {
                    'content@': {
                        templateUrl: 'views/curriculum/about.html'
                    }
                }
            }
        );
    }]);
});