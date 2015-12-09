define(['./_module'], function (module) {
    module.factory('Dashboard', [function(){

        var model = function(data) {

        };

        model.prototype.hello = function() {
            return 'Hello World!';
        };

        return model;
    }]);
});