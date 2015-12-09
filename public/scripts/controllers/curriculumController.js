define(['./_module'], function(module){
    module.controller('CurriculumCtrl',['$scope', 'DateFormat', 'cv', function($scope, DateFormat, cv){

        angular.extend($scope, cv);
        $scope.date_of_birth = DateFormat.convert( new Date($scope.date_of_birth), 'DD.mm.YYYY h:mm');

    }]);
});