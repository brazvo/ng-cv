define(['./_module'], function(module){
    module.controller('CurriculumCtrl',['$scope', '$http', function($scope, $http){

        $http.get('data/cv.json').success(function(data){
            angular.extend($scope, data);
        });

    }]);
});