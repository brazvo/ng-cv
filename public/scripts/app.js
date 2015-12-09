/**
 * Created by bzvolensky on 4. 12. 2015.
 */
define([
    // Angular
    'angular',
    'ui.router',
    'ngResource',
    'lodash',

    // App
    'scripts/services/_index',
    'scripts/models/_index',
    'scripts/controllers/_index',
    'scripts/directives/_index'
], function (angular) {
    return angular.module('App', [
        'ui.router',
        'ngLodash',
        'ngResource',
        'app.services',
        'app.models',
        'app.controllers',
        'app.directives'
    ]);
});