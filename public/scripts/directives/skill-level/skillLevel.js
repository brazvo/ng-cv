define(['./../_module'], function(module){
    module.directive('skillLevelProgress', function () {

        var remap = function(key) {
            var map = {
                basic: '30%',
                intermediate: '55%',
                advanced: '80%',
                expert: '100%'
            };

            return map[key];
        };

        return {
            restrict: 'E',
            scope: {
                level: '='
            },
            replace: false, // Replace with the template below
            link: function (scope, element, attrs) {
                console.log(scope.level);
                scope.percentage = remap( scope.level.toLowerCase() );
            },
            templateUrl: 'scripts/directives/skill-level/progress.html'
        };
    });
});
