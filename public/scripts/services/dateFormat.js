define(['./_module', 'moment'], function(module, moment){
    module.factory('DateFormat', [function () {

            var service = {};

            service.convert = function(date, format) {
                return moment(date).format(format);
            };

            return service;
        }
    ]);
});