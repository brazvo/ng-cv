define(['./_module'], function(module){
    module.factory('Rest', ['$resource',
        function ($resource) {
            var service = {};

            service.resource = function(path, params) {
                params = params || {};
                return $resource(path, {}, {
                    query: {method: 'GET', params: params, isArray: true},
                    queryOne: {method: 'GET', params: params, isArray: false},
                    create: { method: 'POST', params: params },
                    update: { method: 'PUT', params: params }
                });
            };

            return service;
        }
    ]);
});