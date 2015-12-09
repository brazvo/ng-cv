// Configuration Options
require.config({
    baseUrl: '.',
    // paths: maps ids with paths (no extension)
    paths: {
        'domReady': 'bower_components/requirejs-domready/domReady',
        'angular': 'bower_components/angular/angular.min',
        'ngResource': 'bower_components/angular-resource/angular-resource.min',
        'ui.router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'lodash': 'bower_components/ng-lodash/build/ng-lodash.min',
        'routes': 'scripts/routes',
        'app': 'scripts/app',
        'services': 'scripts/services/_index',
        'models': 'scripts/models/_index',
        'controllers': 'scripts/controllers/_index',
        'directives': 'scripts/directives/_index'
        //'ui.bootstrap': ['bower_components/angular-bootstrap/ui-bootstrap'],
        //'ui-bootstrap-tpls': ['bower_components/angular-bootstrap/ui-bootstrap-tpls'],
    },
    // shim: makes external libraries reachable
    shim: {
        angular: {
            exports : 'angular'
        },
        ngResource: ['angular'],
        'ui.router': ['angular'],
        'lodash': ['angular']
    }
});

// Angular Bootstrap
require(['scripts/bootstrap'], function() {});