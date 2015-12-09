({
    baseUrl: ".",
    mainConfigFile: 'scripts/main.js',
    name: 'scripts/main',
    out: "scripts/main-built.js",
    //dir: 'build',
    paths: {
        'angular': 'bower_components/angular/angular',
        'domReady': 'bower_components/requirejs-domready/domReady',
        'ngResource': 'bower_components/angular-resource/angular-resource',
        'ui.router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'lodash': 'bower_components/ng-lodash/build/ng-lodash.min'
    },
    //modules: [
    //    {
    //        name: "main"
    //    }
    //]
})