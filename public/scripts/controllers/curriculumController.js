define(['./_module'], function(module){
    module.controller('CurriculumCtrl',['$scope', '$http', 'cv', function($scope, $http, cv){

        angular.extend($scope, cv);

    }]);
});