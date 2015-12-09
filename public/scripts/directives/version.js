define(['./_module'], function(module){
    module.directive('appVersion', [function () {
        return function (scope, elm, attrs) {
            elm.text('v1.0.0');
        };
    }]);
});
